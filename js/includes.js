const HEADER_HTML = `
<header class="site-header">
  <a href="index.html" class="site-header__brand">
    <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e65b8b86-6466-42bd-875b-1419bd13ef91/de8c94d8-887e-4625-825f-ec262dbc28df/1781674727_1dv5nr.png" alt="NH 44 Indian" class="site-header__logo" width="44" height="44" loading="eager" fetchpriority="high" decoding="async">
    <span class="site-header__title">
      <span class="site-header__name">NH 44</span>
      <span class="site-header__tagline">Indian · Hartsdale, NY</span>
    </span>
  </a>

  <nav class="site-header__nav" aria-label="Main navigation">
    <a href="index.html" data-nav="home" class="site-header__link">Home</a>
    <a href="menu.html" data-nav="menu" class="site-header__link">Menu</a>
    <a href="reserve.html" data-nav="catering" class="site-header__link">Catering</a>
    <a href="about.html" data-nav="about" class="site-header__link">About</a>
    <a href="gallery.html" data-nav="gallery" class="site-header__link">Gallery</a>
    <a href="contact.html" data-nav="contact" class="site-header__link">Contact</a>
    <a href="hiring.html" data-nav="hiring" class="site-header__link">Hiring</a>
    <a href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave/marketing-signup" class="site-header__link" target="_blank" rel="noopener noreferrer">Subscribe</a>
    <a href="https://order.toasttab.com/egiftcards/nh44-indian-219-e-hartsdale-ave" class="site-header__link" target="_blank" rel="noopener noreferrer">Gift Card</a>
    <a href="https://tables.toasttab.com/restaurants/f5ced673-e0ba-485f-9d40-00e45aa7f9d9/findTime" class="btn btn-primary btn-sm btn-stamp" target="_blank" rel="noopener noreferrer">Reservation</a>
  </nav>

  <button type="button" data-mobile-menu-btn class="site-header__menu-btn" aria-label="Open menu" aria-expanded="false">
    <svg width="24" height="24" data-icon-menu xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
    <svg width="24" height="24" data-icon-close class="hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
  </button>
</header>

<div data-mobile-menu class="mobile-menu" aria-hidden="true">
  <div data-mobile-backdrop class="mobile-menu__backdrop"></div>
  <div class="mobile-menu__panel">
    <button type="button" data-mobile-close class="mobile-menu__close" aria-label="Close menu">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
    </button>
    <nav class="mobile-menu__nav" aria-label="Mobile navigation">
      <a href="index.html" data-nav="home" class="mobile-menu__link">Home</a>
      <a href="menu.html" data-nav="menu" class="mobile-menu__link">Menu</a>
      <a href="reserve.html" data-nav="catering" class="mobile-menu__link">Catering</a>
      <a href="about.html" data-nav="about" class="mobile-menu__link">About</a>
      <a href="gallery.html" data-nav="gallery" class="mobile-menu__link">Gallery</a>
      <a href="contact.html" data-nav="contact" class="mobile-menu__link">Contact</a>
      <a href="hiring.html" data-nav="hiring" class="mobile-menu__link">Hiring</a>
      <a href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave/marketing-signup" class="mobile-menu__link" target="_blank" rel="noopener noreferrer">Subscribe</a>
      <a href="https://order.toasttab.com/egiftcards/nh44-indian-219-e-hartsdale-ave" class="mobile-menu__link" target="_blank" rel="noopener noreferrer">Gift Card</a>
      <a href="https://tables.toasttab.com/restaurants/f5ced673-e0ba-485f-9d40-00e45aa7f9d9/findTime" class="btn btn-primary btn-sm btn-stamp" target="_blank" rel="noopener noreferrer">Reservation</a>
    </nav>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="site-footer__grid">
    <div>
      <div class="site-footer__brand">
        <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/e65b8b86-6466-42bd-875b-1419bd13ef91/de8c94d8-887e-4625-825f-ec262dbc28df/1781674727_1dv5nr.png" alt="NH 44 Indian" class="site-footer__logo" width="52" height="52" loading="lazy" decoding="async">
        <span class="site-footer__name">NH 44</span>
      </div>
      <p class="site-footer__about">
        National Highway 44 — India's longest highway on a plate. Kebabs, curries, and street food in Westchester County.
      </p>
      <div class="footer-social">
        <a href="https://www.instagram.com/nh44indian/" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          ${iconSvg(PATH_ICON_INSTAGRAM)}
        </a>
        <a href="https://www.facebook.com/nh44indian/" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          ${iconSvg(PATH_ICON_FACEBOOK)}
        </a>
        <a href="https://www.google.com/maps/place/NH+44+Indian/@41.0116348,-73.7956567,15z/data=!4m2!3m1!1s0x0:0xf7de596ae1e68065?sa=X&amp;ved=2ahUKEwjJlefZoMD7AhUelIkEHQE3DH0Q_BJ6BAhkEAg" class="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
          ${iconSvg(PATH_ICON_GOOGLE_MAPS)}
        </a>
      </div>
    </div>
    <div>
      <div class="footer-head">Visit</div>
      <div class="footer-line">219 E. Hartsdale Ave</div>
      <div class="footer-line">Hartsdale, NY 10530</div>
      <div class="footer-line">Monday–Thursday: 11:30am – 9:30pm</div>
      <div class="footer-line">Friday–Saturday: 11:30am – 10pm</div>
      <div class="footer-line">Sunday: 11:30am – 9pm</div>
    </div>
    <div>
      <div class="footer-head">Reach us</div>
      <div class="footer-line"><a href="tel:9145745262">(914) 574-5262</a></div>
      <div class="footer-line"><a href="mailto:info@nh44indian.com">info@nh44indian.com</a></div>
    </div>
    <div>
      <div class="footer-head">Hungry?</div>
      <div class="footer-actions">
        <a href="https://tables.toasttab.com/restaurants/f5ced673-e0ba-485f-9d40-00e45aa7f9d9/findTime" class="btn btn-primary btn-sm btn-stamp" target="_blank" rel="noopener noreferrer">Reserve</a>
        <a href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave" class="btn btn-ink btn-sm btn-stamp btn-ink--gold" target="_blank" rel="noopener noreferrer">Order online</a>
        <a href="https://www.toasttab.com/nh44-indian-219-e-hartsdale-ave/giftcards" class="btn btn-outline btn-sm btn-stamp" target="_blank" rel="noopener noreferrer">Gift card</a>
      </div>
    </div>
  </div>
  <div class="site-footer__bar">
    <span>© ${new Date().getFullYear()} NH 44 Indian</span>
    <span>Kashmir → Kanyakumari</span>
  </div>
</footer>
`;

function applyActiveNav(page) {
  if (!page) return;
  document.querySelectorAll('[data-nav="' + page + '"]').forEach(function (link) {
    link.classList.add('is-active');
  });
}

function renderPartials() {
  var headerMount = document.getElementById('site-header');
  var footerMount = document.getElementById('site-footer');

  if (!headerMount && !footerMount) return;

  if (headerMount) {
    headerMount.innerHTML = HEADER_HTML;
    applyActiveNav(document.body.dataset.page || '');
  }

  if (footerMount) {
    footerMount.innerHTML = FOOTER_HTML;
  }

  document.dispatchEvent(new CustomEvent('site:partials-loaded'));
}

document.addEventListener('DOMContentLoaded', renderPartials);
