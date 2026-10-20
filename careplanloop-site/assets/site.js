(function () {
  'use strict';

  var cases = {
    clean: {
      id: 'SYN-028-A',
      title: 'Clean handoff',
      description: 'Consent, source, reviewer, and staff activity remain visible as separate events.',
      owner: 'Clinical reviewer role',
      statusLabel: 'Trace complete in example',
      statusClass: 'status-reviewed',
      statusText: 'Clinician sign-off recorded',
      staffTitle: 'Contact/time record · 14 May, 09:21',
      staffDescription: 'Shown for billing review only; not a billing determination.',
      endMessage: 'Human review is required before any clinical action.',
      events: [
        { time: '02 May · 09:10', title: 'Consent event recorded', detail: 'Enrollment record is present in this synthetic example.', source: 'Source: fictional enrollment record' },
        { time: '14 May · 08:42', title: 'Device report received', detail: 'Reported information only; value intentionally not interpreted.', source: 'Source: synthetic device report' },
        { time: '14 May · 08:43', title: 'Exception routed for review', detail: 'Queue owner: nurse role · review remains a human task.', source: 'Status: awaiting reviewer action', warm: true },
        { time: '14 May · 09:05', title: 'Clinician sign-off recorded', detail: 'Fictional clinical role and timestamp; no treatment output shown.', source: 'Source: manual reviewer event' }
      ]
    },
    ambiguous: {
      id: 'SYN-028-B',
      title: 'Ambiguous exception',
      description: 'The report lacks context needed to continue; the example abstains and keeps the reviewer in control.',
      owner: 'Nurse role · context review',
      statusLabel: 'Human review needed',
      statusClass: 'status-review',
      statusText: 'Abstained · context required',
      staffTitle: 'No staff time record shown',
      staffDescription: 'No contact or duration is inferred from the reported device event.',
      endMessage: 'Abstained. The example waits for human context; no clinical action is proposed.',
      events: [
        { time: '03 May · 11:32', title: 'Consent event recorded', detail: 'Fictional program record; shown as a separate event.', source: 'Source: synthetic enrollment record' },
        { time: '16 May · 07:58', title: 'Device report received', detail: 'Source context is incomplete in this example record.', source: 'Source: synthetic device report' },
        { time: '16 May · 08:02', title: 'Review requested', detail: 'Routed to nurse role with the missing context visible.', source: 'Status: pending · not interpreted', warm: true },
        { time: '16 May · 08:03', title: 'Abstained · human context required', detail: 'No classification or recommendation is returned.', source: 'Next step: reviewer to assess context', dashed: true }
      ]
    },
    blocked: {
      id: 'SYN-028-C',
      title: 'Blocked / abstained',
      description: 'Consent detail and device-feed rights are not confirmed, so the synthetic flow stops before ingestion or outreach.',
      owner: 'Operations role · rights check',
      statusLabel: 'Blocked · no external action',
      statusClass: 'status-blocked',
      statusText: 'Consent / rights need review',
      staffTitle: 'No staff time record shown',
      staffDescription: 'No external contact or device action is represented in this blocked case.',
      endMessage: 'Blocked before device data or outreach. An authorized owner must resolve access and consent questions.',
      events: [
        { time: '05 May · 14:16', title: 'Consent record needs review', detail: 'The synthetic record does not show a confirmed consent state.', source: 'Source: incomplete fictional enrollment record', warm: true },
        { time: '05 May · 14:17', title: 'Device-feed rights unconfirmed', detail: 'No device report is ingested in this example.', source: 'Status: access rights not confirmed' },
        { time: '05 May · 14:18', title: 'Flow blocked before processing', detail: 'No patient contact, external action, or clinical routing occurs.', source: 'Owner: operations role · manual review required', dashed: true }
      ]
    }
  };

  function addText(tag, className, value) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value;
    return node;
  }

  function renderEvents(list, events) {
    list.replaceChildren();
    events.forEach(function (event) {
      var item = document.createElement('li');
      item.className = 'case-event' + (event.warm ? ' event-warm' : '') + (event.dashed ? ' event-dashed' : '');
      item.appendChild(addText('span', 'event-time', event.time));
      var marker = document.createElement('span');
      marker.className = 'event-marker';
      var dot = document.createElement('i');
      dot.setAttribute('aria-hidden', 'true');
      marker.appendChild(dot);
      item.appendChild(marker);
      var content = document.createElement('span');
      content.className = 'event-content';
      content.appendChild(addText('b', '', event.title));
      content.appendChild(addText('p', '', event.detail));
      content.appendChild(addText('small', '', event.source));
      item.appendChild(content);
      list.appendChild(item);
    });
  }

  function setupCases() {
    document.querySelectorAll('.case-explorer').forEach(function (explorer) {
      var buttons = Array.prototype.slice.call(explorer.querySelectorAll('[data-case-id]'));
      var summary = explorer.querySelector('[data-case-summary]');
      var eventsList = explorer.querySelector('[data-case-events]');
      var staffTitle = explorer.querySelector('[data-staff-title]');
      var staffDescription = explorer.querySelector('[data-staff-desc]');
      var endState = explorer.querySelector('[data-case-end]');
      if (!buttons.length || !summary || !eventsList) return;

      function showCase(key) {
        var data = cases[key];
        if (!data) return;
        buttons.forEach(function (button) {
          var active = button.getAttribute('data-case-id') === key;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        summary.querySelector('.case-id').textContent = data.id;
        var status = summary.querySelector('.case-status');
        status.className = 'case-status ' + data.statusClass;
        status.querySelector('span').textContent = data.statusLabel;
        summary.querySelector('h4').textContent = data.title;
        summary.querySelector('p').textContent = data.description;
        summary.querySelector('dl div:nth-child(2) dd').textContent = data.owner;
        summary.querySelector('dl div:nth-child(3) dd').textContent = data.statusText;
        renderEvents(eventsList, data.events);
        if (staffTitle) staffTitle.textContent = data.staffTitle;
        if (staffDescription) staffDescription.textContent = data.staffDescription;
        if (endState) endState.lastElementChild.textContent = data.endMessage;
      }

      buttons.forEach(function (button, index) {
        button.addEventListener('click', function () { showCase(button.getAttribute('data-case-id')); });
        button.addEventListener('keydown', function (event) {
          var targetIndex = index;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') targetIndex = (index + 1) % buttons.length;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') targetIndex = (index + buttons.length - 1) % buttons.length;
          else return;
          event.preventDefault();
          buttons[targetIndex].focus();
          buttons[targetIndex].click();
        });
      });
      showCase('clean');
    });
  }

  function setupNavigation() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;
    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      var use = toggle.querySelector('use');
      if (use) use.setAttribute('href', 'assets/icons.svg#menu');
    }
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
      var use = toggle.querySelector('use');
      if (use) use.setAttribute('href', open ? 'assets/icons.svg#close' : 'assets/icons.svg#menu');
    });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });
  }

  function setupForm() {
    var form = document.querySelector('[data-demo-form]');
    var feedback = document.querySelector('[data-form-feedback]');
    if (!form || !feedback) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      feedback.textContent = 'Prototype interaction only: no information was transmitted or stored. A live success state should appear only after an approved inquiry system confirms receipt.';
    });
  }

  function setupMotion() {
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var reveals = document.querySelectorAll('.reveal');
    if (!reduced && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
      reveals.forEach(function (item) { observer.observe(item); });
    } else {
      reveals.forEach(function (item) { item.classList.add('is-visible'); });
    }
  }

  function setupProgress() {
    var bar = document.querySelector('.page-progress span');
    if (!bar) return;
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      bar.style.width = (progress * 100) + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  setupCases();
  setupNavigation();
  setupForm();
  setupMotion();
  setupProgress();
})();
