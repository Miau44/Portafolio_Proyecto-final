(() => {
  'use strict';
  const data = window.PORTFOLIO_SHOWCASE;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const certificatePages = {
    'ai-customer-service': ['ai-customer-service/page-1.webp'],
    'credit-risk': ['credit-risk-management/page-1.webp', 'credit-risk-management/page-2.webp', 'credit-risk-management/page-3.webp'],
    'database-bi-ai': ['database-bi-ai-specialization/page-1.webp', 'database-bi-ai-specialization/page-2.webp'],
    'predictive-python': ['predictive-python-ml/page-1.webp', 'predictive-python-ml/page-2.webp'],
    'mongodb-bi': ['mongodb-bi/page-1.webp', 'mongodb-bi/page-2.webp'],
    'power-bi': ['power-bi/page-1.webp', 'power-bi/page-2.webp'],
    'huawei-data': ['huawei-data-management-analysis/page-1.webp'],
    'huawei-ai': ['huawei-hcia-ai/page-1.webp'],
    'excel-sheets-bi': ['excel-bi-decisions/page-1.webp', 'excel-bi-decisions/page-2.webp'],
    'bi-big-data': ['bi-big-data/page-1.webp', 'bi-big-data/page-2.webp'],
    'sql-mysql': ['sql-mysql/page-1.webp'],
    'oracle-database': ['oracle-database/page-1.webp', 'oracle-database/page-2.webp', 'oracle-database/page-3.webp']
  };
  const certificateAsset = path => `assets/certificates_web/${path}`;
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v6h5M10 14h6m-6 3h6"/></svg>';

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function reveal(elements) {
    if (!('IntersectionObserver' in window) || reducedMotion.matches) {
      elements.forEach(element => element.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    elements.forEach(element => observer.observe(element));
  }
  function makeList(items, className) {
    const list = node('ul', className);
    items.forEach(item => list.appendChild(node('li', '', item)));
    return list;
  }
  function preview(wrapperClass, eyebrow, title, category) {
    const wrapper = node('div', `${wrapperClass}-image-wrapper`);
    wrapper.setAttribute('aria-label', `Preview unavailable. ${title}`);
    const placeholder = node('div', `${wrapperClass}-placeholder`);
    const mark = node('span', 'preview-mark');
    mark.innerHTML = icon;
    placeholder.appendChild(mark);
    placeholder.appendChild(node('span', 'preview-eyebrow', eyebrow));
    placeholder.appendChild(node('strong', 'preview-title', title));
    placeholder.appendChild(node('span', 'preview-category', category));
    wrapper.appendChild(placeholder);
    return wrapper;
  }

  const pricingList = document.getElementById('pricing-list');
  data.pricing.forEach((plan, index) => {
    const card = node('article', `pricing-card reveal${plan.featured ? ' pricing-card-featured' : ''}`);
    card.style.setProperty('--item-index', index);
    if (plan.featured) card.appendChild(node('span', 'pricing-badge', 'Most requested'));
    card.appendChild(node('h3', '', plan.title));
    card.appendChild(node('p', 'pricing-description', plan.description));
    card.appendChild(node('p', 'pricing-quote', 'Custom quote'));
    card.appendChild(makeList(plan.features, 'pricing-features'));
    const link = node('a', plan.featured ? 'pricing-link pricing-link-featured' : 'pricing-link', "Let's talk");
    link.href = `mailto:morales.12453447@gmail.com?subject=${encodeURIComponent(`Project inquiry — ${plan.title}`)}`;
    card.appendChild(link);
    pricingList.appendChild(card);
  });
  reveal([...pricingList.querySelectorAll('.reveal')]);

  function createFilterGallery({ items, filters, filterRoot, listRoot, kind, cardFactory }) {
    const state = { activeCategory: 'ALL', revision: 0 };
    const buttons = new Map();
    filters.forEach((filter, index) => {
      const button = node('button', 'filter-button', filter);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(index === 0));
      button.addEventListener('click', () => {
        state.activeCategory = filter;
        state.revision += 1;
        const revision = state.revision;
        buttons.forEach((candidate, category) => candidate.setAttribute('aria-pressed', String(category === state.activeCategory)));
        listRoot.classList.add('is-filtering');
        window.setTimeout(() => {
          if (revision !== state.revision) return;
          const matches = state.activeCategory === 'ALL' ? items : items.filter(item => item.categories.includes(state.activeCategory));
          const cards = matches.map((item, index) => cardFactory(item, index));
          cards.forEach(card => card.classList.add('visible', 'filter-entering'));
          listRoot.replaceChildren(...cards);
          listRoot.setAttribute('aria-label', `${matches.length} ${kind}${matches.length === 1 ? '' : 's'}`);
          requestAnimationFrame(() => {
            listRoot.classList.remove('is-filtering');
          });
          window.setTimeout(() => cards.forEach(card => card.classList.remove('filter-entering')), 240);
        }, 75);
      });
      buttons.set(filter, button);
      filterRoot.appendChild(button);
    });
    const initial = items.map((item, index) => cardFactory(item, index));
    listRoot.replaceChildren(...initial);
    listRoot.setAttribute('aria-label', `${items.length} ${kind}s`);
    reveal([...filterRoot.querySelectorAll('.reveal'), ...initial]);
  }

  const certificateDialog = node('dialog', 'certificate-lightbox');
  certificateDialog.setAttribute('aria-label', 'Certificate image viewer');
  const certificatePanel = node('div', 'certificate-lightbox-panel');
  const certificateClose = node('button', 'certificate-lightbox-close', String.fromCharCode(215));
  certificateClose.type = 'button';
  certificateClose.setAttribute('aria-label', 'Close certificate');
  const certificateImage = node('img', 'certificate-lightbox-image');
  const certificateControls = node('div', 'certificate-lightbox-controls');
  const certificatePrevious = node('button', '', 'Previous');
  const certificateCounter = node('span', 'certificate-lightbox-counter');
  const certificateNext = node('button', '', 'Next');
  [certificatePrevious, certificateNext].forEach(button => { button.type = 'button'; });
  certificateControls.append(certificatePrevious, certificateCounter, certificateNext);
  certificatePanel.append(certificateClose, certificateImage, certificateControls);
  certificateDialog.appendChild(certificatePanel);
  document.body.appendChild(certificateDialog);
  let activeCertificatePages = [];
  let activeCertificateTitle = '';
  let activeCertificatePage = 0;
  function showCertificatePage() {
    certificateImage.src = certificateAsset(activeCertificatePages[activeCertificatePage]);
    certificateImage.alt = `${activeCertificateTitle}, page ${activeCertificatePage + 1}`;
    certificateCounter.textContent = `${activeCertificatePage + 1} / ${activeCertificatePages.length}`;
    const multiple = activeCertificatePages.length > 1;
    certificatePrevious.hidden = !multiple;
    certificateNext.hidden = !multiple;
    certificateCounter.hidden = !multiple;
  }
  function certificationCard(certification, index) {
    const card = node('article', 'certification-card reveal');
    card.style.setProperty('--item-index', index);
    const pages = certificatePages[certification.id] || [];
    const imageButton = node('button', 'certification-image-button');
    imageButton.type = 'button';
    imageButton.setAttribute('aria-label', `View certificate: ${certification.title}`);
    const imageWrapper = node('span', 'certification-image-wrapper');
    const thumbnail = node('img', 'certification-thumbnail');
    thumbnail.src = certificateAsset(pages[0].replace('page-', 'thumb-'));
    thumbnail.alt = `Certificate preview: ${certification.title}`;
    thumbnail.loading = 'lazy';
    imageWrapper.appendChild(thumbnail);
    imageButton.appendChild(imageWrapper);
    imageButton.addEventListener('click', () => {
      activeCertificatePages = pages;
      activeCertificateTitle = certification.title;
      activeCertificatePage = 0;
      showCertificatePage();
      certificateDialog.showModal();
    });
    card.appendChild(imageButton);
    const content = node('div', 'gallery-card-content');
    const date = node('span', 'gallery-date', certification.date);
    const title = node('h3', '', certification.title);
    const issuer = node('p', 'gallery-issuer', certification.issuer);
    const meta = node('div', 'certification-meta');
    meta.appendChild(node('span', '', certification.hours));
    if (certification.programs) meta.appendChild(node('span', '', certification.programs.join(' / ')));
    content.append(date, title, issuer, meta);
    card.appendChild(content);
    return card;
  }
  certificatePrevious.addEventListener('click', () => {
    activeCertificatePage = (activeCertificatePage - 1 + activeCertificatePages.length) % activeCertificatePages.length;
    showCertificatePage();
  });
  certificateNext.addEventListener('click', () => {
    activeCertificatePage = (activeCertificatePage + 1) % activeCertificatePages.length;
    showCertificatePage();
  });
  certificateClose.addEventListener('click', () => certificateDialog.close());
  certificateDialog.addEventListener('click', event => {
    if (event.target === certificateDialog) certificateDialog.close();
  });
  createFilterGallery({
    items: data.certifications,
    filters: ['ALL', 'CIIP LATAM', 'HUAWEI', 'ORACLE', 'MICROSOFT', 'OTHER'],
    filterRoot: document.getElementById('certification-filters'),
    listRoot: document.getElementById('certification-list'),
    kind: 'certification',
    cardFactory: certificationCard
  });

  let activeProjectOpener = null;
  let previousBodyOverflow = '';
  let previousBodyPaddingRight = '';
  const projectDialog = node('div', 'project-modal');
  projectDialog.id = 'project-modal';
  projectDialog.hidden = true;
  projectDialog.setAttribute('role', 'dialog');
  projectDialog.setAttribute('aria-modal', 'true');
  projectDialog.setAttribute('aria-labelledby', 'project-modal-title');
  projectDialog.tabIndex = -1;
  const dialogPanel = node('div', 'project-modal-panel');
  const closeDialog = node('button', 'project-modal-close', '×');
  closeDialog.type = 'button';
  closeDialog.setAttribute('aria-label', 'Close project details');
  const dialogContent = node('div', 'project-modal-content');
  dialogPanel.append(closeDialog, dialogContent);
  projectDialog.appendChild(dialogPanel);
  document.body.appendChild(projectDialog);

  function closeProjectDialog() {
    if (projectDialog.hidden) return;
    projectDialog.classList.remove('is-open');
    window.setTimeout(() => {
      projectDialog.hidden = true;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
      if (activeProjectOpener) activeProjectOpener.focus();
      activeProjectOpener = null;
    }, reducedMotion.matches ? 0 : 330);
  }
  function openProjectDialog(project, opener) {
    activeProjectOpener = opener;
    dialogContent.replaceChildren();
    dialogContent.appendChild(preview('project-modal', project.organization, project.title, project.categories.join(' · ')));
    const heading = node('h2', '', project.title);
    heading.id = 'project-modal-title';
    dialogContent.appendChild(heading);
    dialogContent.appendChild(node('p', 'project-modal-organization', project.organization));
    dialogContent.appendChild(node('p', 'project-modal-description', project.description));
    dialogContent.appendChild(node('h3', '', 'Highlights'));
    dialogContent.appendChild(makeList(project.features, 'project-modal-features'));
    if (project.technologies.length) {
      dialogContent.appendChild(node('h3', '', 'Technologies'));
      const technologies = node('ul', 'project-tags');
      project.technologies.forEach(technology => technologies.appendChild(node('li', '', technology)));
      dialogContent.appendChild(technologies);
    }
    const screenshotNote = node('p', 'preview-note', 'No project screenshot is available in the current portfolio assets.');
    dialogContent.appendChild(screenshotNote);
    previousBodyOverflow = document.body.style.overflow;
    previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    projectDialog.hidden = false;
    requestAnimationFrame(() => {
      projectDialog.classList.add('is-open');
      closeDialog.focus();
    });
  }
  closeDialog.addEventListener('click', closeProjectDialog);
  projectDialog.addEventListener('click', event => {
    if (event.target === projectDialog) closeProjectDialog();
  });
  document.addEventListener('keydown', event => {
    if (projectDialog.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeProjectDialog();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...projectDialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  function projectCard(project, index) {
    const card = node('article', 'project-card reveal');
    card.style.setProperty('--item-index', index);
    const category = project.categories[0];
    card.appendChild(preview('project', project.organization, project.title, category));
    const content = node('div', 'gallery-card-content');
    content.appendChild(node('span', 'project-category', category));
    content.appendChild(node('h3', '', project.title));
    content.appendChild(node('p', 'project-organization', project.organization));
    content.appendChild(node('p', 'project-summary', project.description));
    if (project.technologies.length) {
      const tags = node('ul', 'project-tags');
      project.technologies.forEach(technology => tags.appendChild(node('li', '', technology)));
      content.appendChild(tags);
    }
    const details = node('button', 'project-details', 'Details →');
    details.type = 'button';
    details.addEventListener('click', () => openProjectDialog(project, details));
    content.appendChild(details);
    card.appendChild(content);
    return card;
  }
  createFilterGallery({
    items: data.projects,
    filters: ['ALL', 'FULL-STACK', 'AI & CHATBOTS', 'ENTERPRISE SYSTEMS', 'DATA & ML', 'AUTOMATION'],
    filterRoot: document.getElementById('project-filters'),
    listRoot: document.getElementById('project-list'),
    kind: 'project',
    cardFactory: projectCard
  });

  const testimonialList = document.getElementById('testimonial-list');
  data.references.forEach((reference, index) => {
    const card = node('article', 'testimonial-card');
    card.style.setProperty('--item-index', index);
    const initials = reference.name.split(/\s+/).filter(word => /[A-ZÁÉÍÓÚ]/.test(word[0])).slice(-2).map(word => word[0]).join('');
    card.appendChild(node('span', 'reference-initials', initials));
    card.appendChild(node('p', 'reference-copy', 'Professional reference listed in my résumé.'));
    card.appendChild(node('h3', '', reference.name));
    card.appendChild(node('p', 'reference-role', reference.role));
    card.appendChild(node('p', 'reference-organization', reference.organization));
    testimonialList.appendChild(card);
  });
  const carouselButtons = [...document.querySelectorAll('[data-carousel]')];
  const carouselPosition = document.getElementById('carousel-position');
  function carouselStep() {
    const first = testimonialList.firstElementChild;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(testimonialList).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  }
  function updateCarousel() {
    const step = carouselStep();
    const gap = parseFloat(getComputedStyle(testimonialList).columnGap) || 0;
    const visible = step ? Math.max(1, Math.floor((testimonialList.clientWidth + gap + 1) / step)) : 1;
    const maxIndex = Math.max(0, data.references.length - visible);
    const index = step ? Math.min(maxIndex, Math.round(testimonialList.scrollLeft / step)) : 0;
    carouselPosition.textContent = `${index + 1} / ${Math.max(1, maxIndex + 1)}`;
    carouselButtons.forEach(button => {
      const previous = button.dataset.carousel === 'previous';
      button.disabled = previous ? index === 0 : index >= maxIndex;
    });
  }
  carouselButtons.forEach(button => button.addEventListener('click', () => {
    const amount = button.dataset.carousel === 'previous' ? -1 : 1;
    testimonialList.scrollBy({ left: amount * carouselStep(), behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }));
  testimonialList.addEventListener('scroll', updateCarousel, { passive: true });
  testimonialList.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    testimonialList.scrollBy({ left: (event.key === 'ArrowLeft' ? -1 : 1) * carouselStep(), behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  });
  window.addEventListener('resize', updateCarousel);
  updateCarousel();

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function setError(field, message) {
    const error = contactForm.querySelector(`[data-error-for="${field}"]`);
    const input = contactForm.elements.namedItem(field);
    error.textContent = message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }
  contactForm.querySelectorAll('input, textarea').forEach(input => input.addEventListener('input', () => {
    if (input.value.trim()) setError(input.name, '');
  }));
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();
    const validName = setError('name', name ? '' : 'Please enter your name.');
    const validEmail = setError('email', emailPattern.test(email) ? '' : 'Enter a valid email address.');
    const validMessage = setError('message', message ? '' : 'Please enter a message.');
    if (!(validName && validEmail && validMessage)) {
      formStatus.textContent = 'Please correct the highlighted fields.';
      contactForm.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    formStatus.textContent = 'Your email app should open with the message ready to send. Sending remains under your control.';
    window.location.href = `mailto:morales.12453447@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
