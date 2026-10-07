(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const boot = document.getElementById('boot');
  const bootText = document.getElementById('boot-text');
  const profile = window.PORTFOLIO_PROFILE;
  const bootMessage = 'booting mauricio.portfolio';
  if (!reduced.matches) {
    bootText.textContent = '';
    let n = 0;
    const typing = setInterval(() => {
      bootText.textContent = bootMessage.slice(0, ++n);
      if (n >= bootMessage.length) clearInterval(typing);
    }, 28);
  }
  window.setTimeout(() => boot.classList.add('finished'), reduced.matches ? 350 : 1350);
  document.querySelectorAll('.line').forEach((line, i) => line.style.setProperty('--i', i));

  const particles = document.getElementById('particles');
  for (let i = 0; i < 26; i++) {
    const dot = document.createElement('i');
    dot.className = 'particle';
    const x = (i * 31.73 + 9) % 100;
    const y = (i * 17.13 + 23) % 100;
    dot.style.cssText = `--x:${x}%;--y:${y}%;--size:${3 + i % 4}px;--opacity:${.17 + (i % 5) * .06};--duration:${5 + i % 7}s;--delay:-${i * .61}s`;
    particles.appendChild(dot);
  }

  const roles = profile.roles;
  const roleText = document.getElementById('role-text');
  let roleIndex = 0, position = roles[0].length, deleting = true;
  function typeRole() {
    if (reduced.matches) { roleText.textContent = roles[0]; return; }
    const word = roles[roleIndex];
    position += deleting ? -1 : 1;
    roleText.textContent = word.slice(0, position);
    let delay = deleting ? 32 : 73;
    if (position <= 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 380; }
    else if (position >= word.length) { deleting = true; delay = 2400; }
    window.setTimeout(typeRole, delay);
  }
  window.addEventListener('portfolio-language-change', event => {
    roles = event.detail === 'en' ? profile.roles : profile.roles.map(role => localizedRoles[role] || role);
    roleIndex = 0;
    position = roles[0].length;
    deleting = true;
    roleText.textContent = roles[0];
  });
  window.setTimeout(typeRole, 4500);

  const scene = document.getElementById('scene');
  const visual = document.getElementById('visual');
  let targetX = 0, targetY = 0, x = 0, y = 0, frame = null;
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)');
  function animateTilt() {
    x += (targetX - x) * .075;
    y += (targetY - y) * .075;
    scene.style.transform = `translate3d(${x * 8}px,${y * 5}px,0) rotateX(${2 - y * 7}deg) rotateY(${-4 + x * 9}deg) rotateZ(${1 + x * .7}deg)`;
    if (Math.abs(targetX - x) + Math.abs(targetY - y) > .001) frame = requestAnimationFrame(animateTilt);
    else frame = null;
  }
  function scheduleTilt() { if (!frame) frame = requestAnimationFrame(animateTilt); }
  document.addEventListener('pointermove', event => {
    if (reduced.matches || !finePointer.matches) return;
    const rect = visual.getBoundingClientRect();
    targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width * .75)));
    targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height * .75)));
    scheduleTilt();
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { targetX = targetY = 0; scheduleTilt(); });
  reduced.addEventListener('change', () => { if (reduced.matches) { targetX = targetY = 0; scheduleTilt(); } });

  function countUp(group) {
    if (reduced.matches) return;
    const start = performance.now();
    const counters = [...group.querySelectorAll('[data-count]')];
    function tick(now) {
      const progress = Math.min((now - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counters.forEach(counter => counter.textContent = Math.round(Number(counter.dataset.count) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  window.setTimeout(() => {
    const groups = [document.getElementById('metrics'), document.getElementById('about-stats')];
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { countUp(entry.target); observer.unobserve(entry.target); }
        });
      }, { threshold: .35 });
      groups.forEach(group => observer.observe(group));
    } else groups.forEach(countUp);
  }, reduced.matches ? 400 : 1600);

  const photo = document.getElementById('portrait-image');
  if (profile.photoUrl) {
    photo.addEventListener('load', () => {
      const placeholder = document.getElementById('photo-placeholder');
      if (placeholder) placeholder.hidden = true;
      photo.hidden = false;
    });
    photo.src = profile.photoUrl;
  }
  if (profile.githubUrl) {
    const github = document.getElementById('github-link');
    github.href = profile.githubUrl;
    github.target = '_blank';
    github.rel = 'noopener noreferrer';
    github.removeAttribute('aria-disabled');
    github.setAttribute('aria-label', 'GitHub de Mauricio Morales');
    github.title = 'GitHub';
  }

  const iconSources = { github: '.badge-github svg', node: '.badge-node svg', mongo: '.badge-mongo svg' };
  function makeTechGroup(offset) {
    const group = document.createElement('div');
    group.className = 'tech-group';
    const ordered = [...profile.technologies.slice(offset), ...profile.technologies.slice(0, offset)];
    ordered.forEach(([name, icon]) => {
      const item = document.createElement('span');
      item.className = 'tech-item';
      const mark = document.createElement('span');
      mark.className = 'tech-icon';
      if (iconSources[icon]) {
        const svg = document.querySelector(iconSources[icon]).cloneNode(true);
        svg.querySelectorAll('[fill]').forEach(el => {
          if (el.getAttribute('fill') !== 'none') el.setAttribute('fill', 'currentColor');
        });
        svg.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', 'currentColor'));
        mark.appendChild(svg);
      } else mark.textContent = icon === 'react' ? '⚛' : icon;
      const label = document.createElement('span');
      label.textContent = name;
      item.append(mark, label);
      group.appendChild(item);
    });
    return group;
  }
  [['tech-row-one', 0], ['tech-row-two', 5]].forEach(([id, offset]) => {
    const track = document.getElementById(id);
    const group = makeTechGroup(offset);
    track.append(group, group.cloneNode(true));
  });

  const experienceList = document.getElementById('experience-list');
  profile.experience.forEach((experience, index) => {
    const item = document.createElement('article');
    item.className = 'experience-item reveal';
    item.style.setProperty('--item-index', index);
    const card = document.createElement('div');
    card.className = 'experience-card';
    const badge = document.createElement('span');
    badge.className = 'experience-type';
    badge.textContent = experience.type;
    const header = document.createElement('div');
    header.className = 'experience-card-header';
    const heading = document.createElement('div');
    heading.className = 'experience-role';
    const role = document.createElement('h3');
    role.textContent = experience.role;
    const company = document.createElement('p');
    company.className = 'experience-company';
    company.textContent = experience.company;
    heading.append(role, company);
    const period = document.createElement('span');
    period.className = 'experience-period';
    period.textContent = experience.period;
    header.append(heading, period);
    const meta = document.createElement('p');
    meta.className = 'experience-location';
    meta.textContent = experience.location;
    const summary = document.createElement('p');
    summary.className = 'experience-summary';
    summary.textContent = experience.summary;
    const projects = document.createElement('div');
    projects.className = 'experience-projects';
    experience.projects.forEach(project => {
      const block = document.createElement('div');
      block.className = 'experience-project';
      const title = document.createElement('h4');
      title.textContent = project.title;
      const detail = document.createElement('p');
      detail.textContent = project.detail;
      block.append(title, detail);
      projects.appendChild(block);
    });
    const tags = document.createElement('ul');
    tags.className = 'experience-tags';
    tags.setAttribute('aria-label', 'Áreas y tecnologías relacionadas');
    experience.tags.forEach(tag => {
      const chip = document.createElement('li');
      chip.textContent = tag;
      tags.appendChild(chip);
    });
    card.append(badge, header, meta, summary, projects, tags);
    item.appendChild(card);
    experienceList.appendChild(item);
  });

  const skillsList = document.getElementById('skills-list');
  profile.skills.forEach((skill, index) => {
    const card = document.createElement('article');
    card.className = 'skill-card reveal';
    card.dataset.skillCard = '';
    card.style.setProperty('--item-index', index);
    const icon = document.createElement('span');
    icon.className = 'skill-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = skill.icon;
    const title = document.createElement('h3');
    title.textContent = skill.title;
    const description = document.createElement('p');
    description.className = 'skill-description';
    description.textContent = skill.description;
    const tags = document.createElement('ul');
    tags.className = 'skill-tags';
    tags.setAttribute('aria-label', `Tecnologías de ${skill.title}`);
    skill.technologies.forEach(technology => {
      const chip = document.createElement('li');
      chip.textContent = technology;
      tags.appendChild(chip);
    });
    const progress = document.createElement('div');
    progress.className = 'skill-progress';
    progress.setAttribute('role', 'img');
    progress.setAttribute('aria-label', 'Animación de progreso visual');
    progress.setAttribute('aria-label', 'Proficiency: 100%');
    progress.innerHTML = '<div class="skill-progress-label"><span>Proficiency</span><span class="skill-value"><span class="skill-count" aria-hidden="true">0</span>%</span></div><span class="skill-track" aria-hidden="true"><i></i></span>';
    card.append(icon, title, description, tags, progress);
    skillsList.appendChild(card);
  });

  function animateSkillCounter(card) {
    if (card.dataset.counted) return;
    card.dataset.counted = 'true';
    const counter = card.querySelector('.skill-count');
    if (reduced.matches) { counter.textContent = '100'; card.classList.add('progress-complete'); return; }
    const start = performance.now();
    const duration = 3800;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = String(Math.round(100 * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = '100';
    }
    card.classList.add('progress-complete');
    requestAnimationFrame(tick);
  }

  const title = document.getElementById('about-title');
  const words = title.textContent.split(' ');
  title.textContent = '';
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'reveal-word';
    span.style.setProperty('--word-index', i);
    span.textContent = word;
    title.append(span, document.createTextNode(i < words.length - 1 ? ' ' : ''));
  });
  if ('IntersectionObserver' in window && !reduced.matches) {
    document.documentElement.classList.add('js-reveal');
    const reveals = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.matches('[data-skill-card]')) animateSkillCounter(entry.target);
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach(el => reveals.observe(el));
  } else {
    document.querySelectorAll('[data-skill-card]').forEach(animateSkillCounter);
  }

  const topLink = document.querySelector('.back-top');
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const navigableSections = navLinks
    .map(link => {
      const id = link.getAttribute('href').slice(1);
      return { id, section: document.getElementById(id), link };
    })
    .filter(item => item.section);
  let activeSection = null;
  let scrollSpyFrame = 0;
  function updateActiveSection() {
    scrollSpyFrame = 0;
    const activationLine = window.innerHeight * 0.36;
    const candidates = navigableSections.map(item => {
      const rect = item.section.getBoundingClientRect();
      const containsLine = rect.top <= activationLine && rect.bottom > activationLine;
      const distance = containsLine ? Math.abs(rect.top - activationLine) : Math.min(Math.abs(rect.top - activationLine), Math.abs(rect.bottom - activationLine));
      return { ...item, containsLine, distance };
    });
    const selected = candidates.filter(item => item.containsLine).sort((a, b) => a.distance - b.distance)[0]
      || candidates.sort((a, b) => a.distance - b.distance)[0];
    const nextActive = selected && selected.distance < window.innerHeight * 0.65 ? selected.id : null;
    if (nextActive === activeSection) return;
    activeSection = nextActive;
    navLinks.forEach(link => {
      const active = activeSection !== null && link.getAttribute('href') === `#${activeSection}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleScrollSpy() {
    if (!scrollSpyFrame) scrollSpyFrame = requestAnimationFrame(updateActiveSection);
  }
  if (navigableSections.length) {
    window.addEventListener('scroll', scheduleScrollSpy, { passive: true });
    window.addEventListener('resize', scheduleScrollSpy);
    updateActiveSection();
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      topLink.classList.toggle('shown', !entries[0].isIntersecting);
    }).observe(document.getElementById('intro'));
  }
})();
