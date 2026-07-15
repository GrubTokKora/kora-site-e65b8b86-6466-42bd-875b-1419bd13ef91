window.KORA_SITE_CONFIG = {
  apiBaseUrl: 'https://kora-agent.grubtok.com',
  businessId: 'e65b8b86-6466-42bd-875b-1419bd13ef91',
  recaptchaSiteKey: '6LcsdJYsAAAAAAur-h7cYlZuGJTmijNHmOi5kFH7',
};

var PATH_ICON_INSTAGRAM =
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z';

var PATH_ICON_FACEBOOK =
  'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z';

var PATH_ICON_GOOGLE_MAPS =
  'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z';

function iconSvg(path) {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="' + path + '"/>' +
    '</svg>'
  );
}

function applyIconPaths(root) {
  (root || document).querySelectorAll('[data-icon-path]').forEach(function (el) {
    var name = el.getAttribute('data-icon-path');
    var path = '';

    if (name === 'instagram') path = PATH_ICON_INSTAGRAM;
    else if (name === 'facebook') path = PATH_ICON_FACEBOOK;
    else if (name === 'google-maps') path = PATH_ICON_GOOGLE_MAPS;

    if (path) el.setAttribute('d', path);
  });
}

(function () {
  function bindStampButtons(root) {
    (root || document).querySelectorAll('.btn-stamp').forEach(function (btn) {
      if (btn.dataset.stampBound) return;
      btn.dataset.stampBound = '1';

      btn.addEventListener('mousedown', function () {
        btn.classList.add('is-pressed');
      });

      function release() {
        btn.classList.remove('is-pressed');
      }

      btn.addEventListener('mouseup', release);
      btn.addEventListener('mouseleave', release);
    });
  }

  function setMobileOpen(open) {
    var menu = document.querySelector('[data-mobile-menu]');
    var iconOpen = document.querySelector('[data-icon-menu]');
    var iconClose = document.querySelector('[data-icon-close]');
    var btn = document.querySelector('[data-mobile-menu-btn]');

    if (!menu) return;

    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (iconOpen) iconOpen.classList.toggle('hidden', open);
    if (iconClose) iconClose.classList.toggle('hidden', !open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function bindMobileMenu() {
    var btn = document.querySelector('[data-mobile-menu-btn]');
    var closeBtn = document.querySelector('[data-mobile-close]');
    var backdrop = document.querySelector('[data-mobile-backdrop]');

    if (btn) {
      btn.addEventListener('click', function () {
        var menu = document.querySelector('[data-mobile-menu]');
        setMobileOpen(!(menu && menu.classList.contains('is-open')));
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', function () { setMobileOpen(false); });
    if (backdrop) backdrop.addEventListener('click', function () { setMobileOpen(false); });

    document.querySelectorAll('.mobile-menu__nav a').forEach(function (a) {
      a.addEventListener('click', function () { setMobileOpen(false); });
    });
  }

  document.addEventListener('site:partials-loaded', function () {
    bindMobileMenu();
    bindStampButtons(document.getElementById('site-header'));
    bindStampButtons(document.getElementById('site-footer'));
    applyIconPaths();
  });

  document.addEventListener('DOMContentLoaded', function () {
    bindStampButtons(document);
    applyIconPaths();
    initHeroVideo();
  });

  window.NH44_bindStampButtons = bindStampButtons;
})();

function initHeroVideo() {
  var heroMedia = document.querySelector('.hero__media');
  var heroVideo = document.querySelector('.hero__video');
  if (!heroMedia || !heroVideo) return;

  var source = heroVideo.querySelector('source[data-src]');
  if (!source) return;

  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.setAttribute('muted', '');
  heroVideo.setAttribute('playsinline', '');
  heroVideo.setAttribute('webkit-playsinline', '');

  var started = false;

  function startVideo() {
    if (started) return;
    started = true;
    var playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(function () {
          heroMedia.classList.add('is-video-playing');
        })
        .catch(function () {
          started = false;
        });
    } else {
      heroMedia.classList.add('is-video-playing');
    }
  }

  function loadAndPlay() {
    if (!source.getAttribute('src')) {
      source.setAttribute('src', source.getAttribute('data-src'));
      heroVideo.load();
    }
    heroVideo.addEventListener('canplaythrough', startVideo, { once: true });
    heroVideo.addEventListener(
      'loadeddata',
      function () {
        if (heroVideo.readyState >= 3) startVideo();
      },
      { once: true }
    );
    setTimeout(function () {
      if (!started && heroVideo.readyState >= 2) startVideo();
    }, 5000);
  }

  var schedule =
    window.requestIdleCallback ||
    function (cb) {
      return setTimeout(cb, 1200);
    };
  schedule(loadAndPlay, { timeout: 2500 });

  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && heroMedia.classList.contains('is-video-playing')) {
      heroVideo.play().catch(function () {});
    }
  });

  heroVideo.addEventListener(
    'error',
    function () {
      started = true;
    },
    { once: true }
  );
}