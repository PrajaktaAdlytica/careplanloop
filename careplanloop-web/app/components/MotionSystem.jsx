'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function activateStoryStep(stage, steps, index) {
  if (!stage || !steps.length) return;

  const activeIndex = Math.max(0, Math.min(index, steps.length - 1));
  stage.dataset.activeStep = String(activeIndex);
  stage.querySelector('[data-story-counter]')?.replaceChildren(
    document.createTextNode(`EVENT ${String(activeIndex + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`)
  );

  const progress = stage.querySelector('[data-story-progress]');
  if (progress) progress.style.width = `${((activeIndex + 1) / steps.length) * 100}%`;

  steps.forEach((step, stepIndex) => {
    step.classList.toggle('is-current', stepIndex === activeIndex);
    step.setAttribute('aria-current', stepIndex === activeIndex ? 'step' : 'false');
  });

  stage.querySelectorAll('[data-story-event]').forEach((event) => {
    const eventIndex = Number(event.dataset.storyEvent);
    event.classList.toggle('is-current', eventIndex === activeIndex);
    event.classList.toggle('is-past', eventIndex < activeIndex);
    event.classList.toggle('is-future', eventIndex > activeIndex);
  });
}

function revealItemsFor(group) {
  const atomicSelectors = '.module-row, .module-choice, .listing-row, .detail-line, .workflow-step, .case-explorer, .story-stage';
  const sequenceSelectors = '.proof-strip, .persona-rail, .detail-lines, .workflow-steps, .listing-rows, .module-list, .hero-actions, .demo-actions, .faq-list, .pilot-gates ol';
  const expand = (element) => element.matches(sequenceSelectors)
    ? Array.from(element.children).filter((child) => !child.matches('script, style'))
    : [element];
  if (group.matches(atomicSelectors)) return [group];

  const children = Array.from(group.children).filter((element) => !element.matches('script, style'));
  if (children.length > 1) return children.flatMap(expand);
  if (children.length === 1) {
    const child = children[0];
    if (child.matches(atomicSelectors)) return [child];
    const grandchildren = Array.from(child.children).filter((element) => !element.matches('script, style'));
    if (grandchildren.length > 1 && grandchildren.length <= 12) return grandchildren.flatMap(expand);
    return expand(child);
  }
  return [group];
}

function revealEntriesForSection(section) {
  const groups = Array.from(section.querySelectorAll('[data-reveal]')).filter((element) => (
    !element.parentElement?.closest('[data-reveal]')
  ));
  const entries = [];
  const marker = section.querySelector('.chapter-index');
  if (marker) entries.push({ item: marker, cluster: marker.parentElement || section });

  groups.forEach((group) => {
    revealItemsFor(group).forEach((item) => entries.push({ item, cluster: group }));
  });

  if (section.classList.contains('story-band')) {
    const storyItems = section.querySelectorAll('.story-band-inner > *');
    storyItems.forEach((item) => entries.push({ item, cluster: item.parentElement || section }));
  }

  const seen = new Set();
  return entries.filter(({ item }) => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}

export default function MotionSystem({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progressBar = document.querySelector('.page-progress span');
    let lenis;
    let ticker;
    let scrollHandler;
    let context;
    let cinematicMedia;
    let alive = true;
    const restoreText = [];

    const updateProgress = () => {
      if (!progressBar) return;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const value = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      progressBar.style.transform = `scaleX(${value})`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    if (!reducedMotion) {
      document.documentElement.classList.add('motion-ready');
      lenis = new Lenis({ autoRaf: false, anchors: true, smoothWheel: true, lerp: 0.095 });
      scrollHandler = () => {
        ScrollTrigger.update();
        updateProgress();
      };
      lenis.on('scroll', scrollHandler);
      ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    context = gsap.context(() => {
      // Split only static editorial headings. Product records retain their React-owned text.
      if (!reducedMotion) {
        document.querySelectorAll('main h1, main h2').forEach((heading) => {
          if (heading.closest('.thread-intro, .continuity-cinema, .hero-scene, .case-explorer, .module-workbench, form')) return;
          const originalLabel = heading.getAttribute('aria-label');
          heading.setAttribute('aria-label', heading.textContent);
          const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
          const nodes = [];
          while (walker.nextNode()) nodes.push(walker.currentNode);
          const words = [];
          nodes.forEach((node) => {
            const tokens = node.textContent.split(/(\s+)/).filter(Boolean);
            const fragment = document.createDocumentFragment();
            const replacement = [];
            tokens.forEach((token) => {
              const element = /\S/.test(token) ? document.createElement('span') : document.createTextNode(token);
              if (element.nodeType === 1) {
                element.className = 'reveal-word';
                element.textContent = token;
                element.setAttribute('aria-hidden', 'true');
                words.push(element);
              }
              fragment.appendChild(element);
              replacement.push(element);
            });
            node.replaceWith(fragment);
            restoreText.push(() => {
              if (replacement[0]?.parentNode) {
                replacement[0].before(node);
                replacement.forEach(part => part.remove());
              }
            });
          });
          restoreText.push(() => originalLabel === null ? heading.removeAttribute('aria-label') : heading.setAttribute('aria-label', originalLabel));
          const inHero = heading.closest('.hero, .page-hero, .form-page-copy, .signin-story');
          gsap.fromTo(words, { opacity: 0, y: 8 }, {
            opacity: 1, y: 0, duration: 0.65, stagger: 0.045, ease: 'power3.out',
            ...(inHero ? { delay: 0.22 } : { scrollTrigger: { trigger: heading, start: 'top 91%', end: 'top 63%', scrub: 0.45 } })
          });
        });
      }
      const sections = gsap.utils.toArray('main section');
      gsap.utils.toArray('main').forEach((main) => {
        if (!main.querySelector('section')) sections.push(main);
      });
      sections.forEach((section) => {
        if (section.matches('.thread-intro, .continuity-cinema')) return;
        const entries = revealEntriesForSection(section).filter(({ item }) => !item.matches('h1,h2')); 
        if (!entries.length) return;

        if (reducedMotion) return;

        if (section.matches('.hero, .page-hero, .signin-shell > section') || section.matches('main:not(:has(section))')) {
          gsap.fromTo(entries.map(({ item }) => item), { autoAlpha: 0, y: 22 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.09,
            delay: 0.12,
            ease: 'power2.out'
          });
          return;
        }

        const naturalTops = new Map(entries.map(({ item }) => [item, item.getBoundingClientRect().top]));
        const rowCounts = new Map();
        entries.forEach(({ item, cluster }) => {
          const itemTop = naturalTops.get(item);
          const tops = rowCounts.get(cluster) || [];
          const rowIndex = tops.filter((top) => Math.abs(top - itemTop) < 22).length;
          tops.push(itemTop);
          rowCounts.set(cluster, tops);
          const stagger = Math.min(rowIndex * 2, 6);

          // Controls become fully readable as soon as they enter the viewport.
          if (item.matches('a, button, .hero-actions, .demo-actions') || item.querySelector('a.button')) {
            gsap.fromTo(item, { opacity: 0, y: 8 }, {
              opacity: 1, y: 0, duration: .35, ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 98%', toggleActions: 'play none none reverse' }
            });
            return;
          }
          gsap.fromTo(item, { opacity: 0, y: 8 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: `top ${95 - stagger}%`,
              end: `top ${73 - stagger}%`,
              scrub: 0.35,
              invalidateOnRefresh: true
            }
          });
        });
      });

      if (!reducedMotion) {
        cinematicMedia = gsap.matchMedia();
        cinematicMedia.add('(min-width: 1200px) and (min-height: 760px)', () => {
          const section = document.querySelector('.separation-chapter');
          if (!section) return;
          const lanes = section.querySelectorAll('.evidence-lane');
          const timeline = gsap.timeline({ scrollTrigger: {
            trigger: section, start: 'top 82px', end: () => '+=' + window.innerHeight,
            pin: true, pinSpacing: true, scrub: .65, invalidateOnRefresh: true
          }});
          timeline.fromTo(lanes[0], { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: .6 }, 0)
            .fromTo(lanes[1], { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: .6 }, 0)
            .fromTo(section.querySelector('.lane-separation'), { opacity: 0, scaleX: .55 }, { opacity: 1, scaleX: 1, duration: .5 }, .2)
            .fromTo(section.querySelector('.diagram-note'), { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: .2 }, .7);
        });
        gsap.utils.toArray('.gap-chapter > .wrap, .evidence-chapter > .wrap, .ecosystem-chapter > .wrap, .fit-grid, .validation-grid, .pilot-grid').forEach((panel) => {
          gsap.fromTo(panel, { clipPath: 'inset(0% 0% 38% 0%)' }, {
            clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
            scrollTrigger: { trigger: panel.parentElement, start: 'top 94%', end: 'top 28%', scrub: .6 }
          });
        });
        gsap.utils.toArray('.chapter:not(.hero), .content-section').forEach((section) => {
          gsap.fromTo(section, { '--chapter-line': 0 }, {
            '--chapter-line': 1, ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 95%', end: 'top 55%', scrub: 0.5 }
          });
        });
        gsap.utils.toArray('[data-hero-scene]').forEach((scene) => {
          const items = scene.querySelectorAll('.scene-topline, .scene-emblem, .scene-heading, .scene-stages li, .scene-ledger, .scene-footnote');
          gsap.fromTo(items, { opacity: 0, y: 16 }, {
            opacity: 1, y: 0, duration: 0.65, stagger: 0.11, ease: 'power3.out',
            scrollTrigger: { trigger: scene, start: 'top 88%', toggleActions: 'play none none reverse' }
          });
        });
        gsap.utils.toArray('.proof-strip article, .persona-rail article, .system-node, .lane-track > div').forEach((item, index) => {
          gsap.fromTo(item, { opacity: 0, y: 18 }, {
            opacity: 1, y: 0, duration: 0.65, delay: (index % 3) * 0.09, ease: 'power2.out',
            scrollTrigger: { trigger: item, start: 'top 94%', toggleActions: 'play none none reverse' }
          });
        });

        // The hero route stops at the review checkpoint. It never closes itself.
        const atlas = document.querySelector('[data-atlas]');
        if (atlas) {
          gsap.fromTo(atlas.querySelectorAll('[data-draw-path]'),
            { strokeDashoffset: 1 },
            { strokeDashoffset: 0, duration: 1.4, delay: 0.25, ease: 'power2.inOut' });
          gsap.fromTo(atlas.querySelectorAll('.atlas-source, .atlas-core, .atlas-review'),
            { opacity: 0 },
            { opacity: 1, stagger: 0.18, duration: 0.7, delay: 0.2 });
          gsap.to(atlas.querySelector('.atlas-contours'), {
            y: -18, ease: 'none',
            scrollTrigger: { trigger: atlas, start: 'top top', end: 'bottom top', scrub: true }
          });
        }

        gsap.utils.toArray('[data-draw-path]').forEach((path) => {
          if (path.closest('[data-atlas]')) return;
          gsap.fromTo(path, { strokeDashoffset: 1 }, {
            strokeDashoffset: 0, ease: 'none',
            scrollTrigger: {
              trigger: path.closest('[data-illustration], .page-hero') || path,
              start: 'top 88%', end: 'center 50%', scrub: 0.5
            }
          });
        });

        gsap.utils.toArray('.fragment-row').forEach((row, index) => {
          gsap.fromTo(row, { x: index % 2 ? 15 : -15 }, {
            x: 0, ease: 'none',
            scrollTrigger: { trigger: row, start: 'top 96%', end: 'top 73%', scrub: 0.4 }
          });
        });

        gsap.utils.toArray('[data-route-line]').forEach((element) => {
          gsap.fromTo(element, { scaleX: 0, transformOrigin: 'left center' }, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element.closest('.hero-route') || element,
              start: 'top 90%',
              end: 'top 55%',
              scrub: true
            }
          });
        });

        gsap.utils.toArray('.chapter-index i').forEach((element) => {
          gsap.fromTo(element, { scaleX: 0, transformOrigin: 'left center' }, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element.closest('.chapter-index'),
              start: 'top 95%',
              end: 'top 66%',
              scrub: true
            }
          });
        });

        const heroVisual = document.querySelector('[data-scroll-float]');
        if (heroVisual) {
          gsap.to(heroVisual, {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: heroVisual.closest('.hero'),
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        }
      }

      gsap.utils.toArray('[data-scroll-story]').forEach((story) => {
        const stage = story.querySelector('[data-story-stage]');
        const steps = gsap.utils.toArray('[data-story-step]', story);
        if (!stage || !steps.length) return;

        const syncStoryToScroll = () => {
          const compact = window.matchMedia('(max-width: 920px)').matches;
          const readingLine = window.innerHeight * (compact ? 0.66 : 0.54);
          let activeIndex = 0;
          steps.forEach((step, index) => {
            if (step.getBoundingClientRect().top <= readingLine) activeIndex = index;
          });
          activateStoryStep(stage, steps, activeIndex);
        };

        ScrollTrigger.create({
          trigger: story,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: syncStoryToScroll,
          onRefresh: syncStoryToScroll,
          invalidateOnRefresh: true
        });
        syncStoryToScroll();
      });

    });

    const refresh = () => {
      if (alive) requestAnimationFrame(() => alive && ScrollTrigger.refresh());
    };
    refresh();
    document.fonts?.ready?.then(refresh);
    window.addEventListener('load', refresh, { once: true });

    return () => {
      alive = false;
      window.removeEventListener('load', refresh);
      window.removeEventListener('scroll', updateProgress);
      cinematicMedia?.revert();
      context?.revert();
      restoreText.reverse().forEach(restore => restore());
      if (lenis) {
        lenis.off('scroll', scrollHandler);
        gsap.ticker.remove(ticker);
        lenis.destroy();
      }
      document.documentElement.classList.remove('motion-ready');
    };
  }, [pathname]);

  return <>{children}</>;
}
