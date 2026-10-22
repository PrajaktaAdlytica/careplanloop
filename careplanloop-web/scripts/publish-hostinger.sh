#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(git -C "$PROJECT_ROOT" rev-parse --show-toplevel)"
OUT_DIR="$PROJECT_ROOT/out"
BRANCH="hostinger-deploy"

if [[ ! -f "$OUT_DIR/index.html" ]]; then
  echo "Static export not found at $OUT_DIR. Run npm run build first." >&2
  exit 1
fi

if ! git -C "$REPO_ROOT" remote get-url origin >/dev/null 2>&1; then
  echo "Git remote 'origin' is required to publish the Hostinger branch." >&2
  exit 1
fi

git -C "$REPO_ROOT" fetch origin "$BRANCH" 2>/dev/null || true
TEMP_PARENT="$(mktemp -d)"
WORKTREE="$TEMP_PARENT/site"
cleanup() {
  git -C "$REPO_ROOT" worktree remove --force "$WORKTREE" >/dev/null 2>&1 || true
  rm -rf "$TEMP_PARENT"
}
trap cleanup EXIT

if git -C "$REPO_ROOT" show-ref --verify --quiet "refs/remotes/origin/$BRANCH"; then
  git -C "$REPO_ROOT" worktree add --detach "$WORKTREE" "origin/$BRANCH"
else
  git -C "$REPO_ROOT" worktree add --detach "$WORKTREE" HEAD
fi

rsync -a --delete --exclude='/.git' "$OUT_DIR/" "$WORKTREE/"
git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "Hostinger static export is already up to date."
  exit 0
fi

git -C "$WORKTREE" -c user.name="$(git -C "$REPO_ROOT" config user.name || echo 'CarePlanLoop publisher')" \
  -c user.email="$(git -C "$REPO_ROOT" config user.email || echo 'careplanloop-publisher@users.noreply.github.com')" \
  commit -m "Publish static site for Hostinger"
git -C "$WORKTREE" push origin "HEAD:refs/heads/$BRANCH"
echo "Published static site to origin/$BRANCH."
