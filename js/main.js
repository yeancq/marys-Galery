(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Revelado en scroll para las obras de la galería
  --------------------------------------------------------- */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealItems.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            setTimeout(function () {
              el.classList.add('is-visible');
            }, i * 60);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach(function (el) { observer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------
     Lightbox accesible: abrir, cerrar, foco, teclado
  --------------------------------------------------------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxTechnique = document.getElementById('lightbox-technique');
  var lightboxSize = document.getElementById('lightbox-size');
  var lightboxYear = document.getElementById('lightbox-year');
  var lightboxDesc = document.getElementById('lightbox-desc');
  var galleryButtons = document.querySelectorAll('.gallery-item');
  var lastFocusedEl = null;

  function openLightbox(btn) {
    lastFocusedEl = btn;

    lightboxImg.src = btn.getAttribute('data-img');
    lightboxImg.alt = btn.getAttribute('data-title') || '';
    lightboxTitle.textContent = btn.getAttribute('data-title') || '';
    lightboxTechnique.textContent = btn.getAttribute('data-technique') || '';
    lightboxSize.textContent = btn.getAttribute('data-size') || '';
    lightboxYear.textContent = btn.getAttribute('data-year') || '';
    lightboxDesc.textContent = btn.getAttribute('data-desc') || '';

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      lightbox.classList.add('is-open');
    });

    var closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.focus();

    document.addEventListener('keydown', onKeydown);
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);

    setTimeout(function () {
      lightbox.hidden = true;
      lightboxImg.src = '';
    }, 400);

    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      return;
    }
    if (e.key === 'Tab') {
      var focusable = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  galleryButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { openLightbox(btn); });
  });

  lightbox.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeLightbox);
  });

  /* ---------------------------------------------------------
     Deterrentes de copia/captura.
     Aviso honesto: ningún sitio puede impedir una captura de
     pantalla real del sistema operativo. Esto solo desalienta
     el guardado casual (clic derecho, arrastre, atajos de
     inspección) y difumina el contenido si la ventana pierde
     foco, lo que dificulta capturas hechas con herramientas
     externas. La marca de agua en el lightbox es la única
     protección que sobrevive a cualquier captura.
  --------------------------------------------------------- */
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  document.addEventListener('selectstart', function (e) {
    if (e.target.closest('.gallery-item, .hero-figure, .about-figure, .lightbox-image-wrap')) {
      e.preventDefault();
    }
  });

  document.addEventListener('keydown', function (e) {
    var key = e.key ? e.key.toLowerCase() : '';
    var blockCombo =
      key === 'f12' ||
      (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'c' || key === 'j')) ||
      (e.metaKey && e.altKey && key === 'i') ||
      (e.ctrlKey && key === 'u') ||
      (e.ctrlKey && key === 's') ||
      (e.ctrlKey && key === 'p');
    if (blockCombo) e.preventDefault();
  });

  document.addEventListener('visibilitychange', function () {
    document.body.classList.toggle('privacy-blur', document.hidden);
  });

  window.addEventListener('blur', function () {
    document.body.classList.add('privacy-blur');
  });
  window.addEventListener('focus', function () {
    document.body.classList.remove('privacy-blur');
  });
})();
