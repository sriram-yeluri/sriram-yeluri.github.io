// SVG icon paths keyed by name
const ICONS = {
  email:    'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  phone:    'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  location: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  print:    'M6 9V2h12v7H6zm0 5H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v6H6v-6zm2 4h8v-5H8v5zm8-14H8v3h8V4z',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24"><path d="${ICONS[name]}"/></svg>`;
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderHeader(data) {
  const header = document.querySelector('.resume-header');

  const left = el('div');
  left.appendChild(el('div', 'header-name', data.name));
  left.appendChild(el('div', 'header-title', data.title));
  header.appendChild(left);

  const right = el('div', 'header-contact');

  const contacts = [
    { href: `mailto:${data.email}`, iconName: 'email', text: data.email },
    { href: data.phoneHref,         iconName: 'phone',    text: data.phone },
    { href: data.linkedinHref,      iconName: 'linkedin', text: data.linkedin, target: '_blank' },
    { href: null,                   iconName: 'location', text: data.location },
  ];

  contacts.forEach(({ href, iconName, text, target }) => {
    const item = href ? el('a', 'contact-item') : el('span', 'contact-item');
    if (href) {
      item.href = href;
      if (target) { item.target = target; item.rel = 'noopener'; }
    }
    item.innerHTML = icon(iconName) + text;
    right.appendChild(item);
  });

  header.appendChild(right);
}

function renderSummary(data) {
  document.querySelector('#summary p').innerHTML = data.summary;
}

function renderExperience(data) {
  const list = document.querySelector('.exp-list');

  data.experience.forEach((job, i) => {
    const item = el('div', 'exp-item');

    item.appendChild(el('div', 'exp-company', job.company));
    item.appendChild(el('div', 'exp-dates', job.dates));
    item.appendChild(el('div', 'exp-role', job.role));
    item.appendChild(el('div', 'exp-location', job.location));

    if (job.bullets.length > 0) {
      const ul = el('ul', 'exp-bullets');
      job.bullets.forEach(b => ul.appendChild(el('li', null, b)));
      item.appendChild(ul);
    }

    if (i < data.experience.length - 1) {
      item.appendChild(el('hr', 'exp-divider'));
    }

    list.appendChild(item);
  });
}

function renderSkills(data) {
  const grid = document.querySelector('.skills-grid');

  data.skills.forEach(({ label, tags }) => {
    const row = el('div', 'skill-row');
    row.appendChild(el('span', 'skill-label', label));
    const tagWrap = el('div', 'skill-tags');
    tags.forEach(t => tagWrap.appendChild(el('span', 'tag', t)));
    row.appendChild(tagWrap);
    grid.appendChild(row);
  });
}

function renderEducation(data) {
  const list = document.querySelector('.edu-list');

  data.education.forEach(({ degree, field }) => {
    const wrap = el('div');
    wrap.appendChild(el('div', 'edu-degree', degree));
    wrap.appendChild(el('div', 'edu-field', field));
    list.appendChild(wrap);
  });
}

function renderCertifications(data) {
  const list = document.querySelector('.cert-list');

  data.certifications.forEach(({ name, verifyUrl }) => {
    const item = el('div', 'cert-item');
    item.appendChild(el('span', 'cert-name', name));
    const link = el('a', 'cert-link', 'Verify ↗');
    link.href = verifyUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    item.appendChild(link);
    list.appendChild(item);
  });
}

function renderCourses(data) {
  const list = document.querySelector('.course-list');

  data.courses.forEach(({ name, provider, verifyUrl }) => {
    const item = el('div', 'cert-item');
    const left = el('span');
    left.appendChild(el('span', 'cert-name', name));
    left.appendChild(el('span', 'course-provider', ` — ${provider}`));
    item.appendChild(left);
    const link = el('a', 'cert-link', 'Verify ↗');
    link.href = verifyUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    item.appendChild(link);
    list.appendChild(item);
  });
}

// Render everything once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderHeader(RESUME);
  renderSummary(RESUME);
  renderExperience(RESUME);
  renderSkills(RESUME);
  renderEducation(RESUME);
  renderCertifications(RESUME);
  renderCourses(RESUME);
});
