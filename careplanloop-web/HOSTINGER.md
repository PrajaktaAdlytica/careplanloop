# Hostinger deployment

CarePlanLoop is exported as a static Next.js site (`output: 'export'`). The hPanel **Advanced → Git** integration deploys files but does not build this project. The `hostinger-deploy` branch therefore contains the contents of `out/` at the repository root.

## First deployment

1. In Hostinger, create a **Custom PHP/HTML website** and select the CarePlanLoop domain. This requires an available website slot on the hosting plan.
2. Open **Websites → CarePlanLoop → Dashboard → Advanced → Git**.
3. Connect GitHub and select `PrajaktaAdlytica/careplanloop`, branch `hostinger-deploy`.
4. Set the server destination / root directory to `public_html`, then deploy.
5. Verify the temporary or assigned domain before changing any DNS settings.

If Hostinger says the website limit has been reached, the Git screen cannot bypass that limit. Keep the site unassigned and check which Hostinger plan or existing website slots are available before changing the plan. A screenshot of the limit screen will help identify the exact next step.

## Publish an update

From `careplanloop-web` on the source branch after committing website changes, run:

```sh
npm ci
npm run hostinger:publish
```

This builds the static export and pushes its files to `hostinger-deploy`. Hostinger can then redeploy from that branch. Vercel remains connected to `main`.

## Hosting notes

This static export does not run a Next.js server. Server actions, request-time rendering, middleware, API routes, and other server-only features are unavailable in this hosting mode. The current inquiry and sign-in screens are concept-only UI and have no backend.
