(function () {
  var THALI_INCLUDES =
    'Appetizer, rice, naan/roti, dal of the day, saag paneer, vegetable sabji, raita, pickle & pappad, dessert';

  // The menu is drawn into menu.html by Kora (kora:data:menu), so it is real HTML for search engines.
  // The tabs, badges and home-page cards below are built from it; the home page reads menu.html.
  var MENU = {};
  var SECTION_NOTES = {};
  var BADGE_FROM_TAG = {
    vegetarian: { label: 'Veg', tone: 'veg' },
    vegan: { label: 'Vegan', tone: 'veg' },
    spicy: { label: 'Spicy', tone: 'chili' },
    gluten_free: { label: 'GF', tone: 'neutral' },
  };
  var BADGE_FROM_NOTE = {
    'Non-veg': { label: 'Non-veg', tone: 'nonveg' },
    Organic: { label: 'Organic', tone: 'gold' },
  };

  function readRenderedMenu(doc) {
    var root = doc.querySelector('.kora-menu');
    if (!root) return false;
    var text = function (el, selector) {
      var node = el.querySelector(selector);
      return node ? node.textContent.trim() : '';
    };
    MENU = {};
    SECTION_NOTES = {};
    root.querySelectorAll('.kora-menu__section').forEach(function (section) {
      var region = text(section, '.kora-menu__section-title');
      var note = text(section, '.kora-menu__section-desc');
      if (note) SECTION_NOTES[region] = note;
      MENU[region] = Array.prototype.map.call(section.querySelectorAll('.kora-menu__item'), function (li) {
        var badges = [];
        li.querySelectorAll('.kora-menu__tag').forEach(function (tag) {
          var key = (tag.className.match(/kora-menu__tag--([a-z_]+)/) || [])[1];
          if (BADGE_FROM_TAG[key]) badges.push(BADGE_FROM_TAG[key]);
        });
        text(li, '.kora-menu__item-note').split(' · ').forEach(function (label) {
          if (BADGE_FROM_NOTE[label]) badges.push(BADGE_FROM_NOTE[label]);
        });
        return {
          name: text(li, '.kora-menu__item-name'),
          price: text(li, '.kora-menu__item-price') || text(li, '.kora-menu__prices'),
          description: text(li, '.kora-menu__item-desc'),
          badges: badges,
        };
      });
    });
    return true;
  }

  // On menu.html the menu is in the page; on the home page it is read from menu.html.
  function withMenu(run) {
    if (readRenderedMenu(document)) return run();
    fetch('menu.html')
      .then(function (res) { return res.text(); })
      .then(function (html) {
        if (readRenderedMenu(new DOMParser().parseFromString(html, 'text/html'))) run();
      })
      .catch(function () {});
  }

  function badgeClass(tone) {
    var map = {
      veg: 'badge-veg badge-dot',
      nonveg: 'badge-nonveg badge-dot',
      chili: 'badge-chili',
      neutral: 'badge-neutral',
      gold: 'badge-gold',
      ink: 'badge-ink',
    };
    return 'badge badge-sm ' + (map[tone] || 'badge-neutral');
  }

  function renderMenuItem(item) {
    var badges = (item.badges || []).map(function (b) {
      return '<span class="' + badgeClass(b.tone) + '">' + b.label + '</span>';
    }).join('');

    var chef = item.chefPick ? '<span class="' + badgeClass('gold') + '">Chef\'s Pick</span>' : '';

    return (
      '<div class="menu-item">' +
        '<div class="menu-item__row">' +
          '<span class="menu-item__name">' + item.name + '</span>' +
          chef +
          '<span class="menu-item__leader"></span>' +
          '<span class="menu-item__price">' + item.price + '</span>' +
        '</div>' +
        (item.description ? '<p class="menu-item__desc">' + item.description + '</p>' : '') +
        (badges ? '<div class="menu-item__badges">' + badges + '</div>' : '') +
      '</div>'
    );
  }

  function renderXpressThaliIntro() {
    return (
      '<div class="menu-category-intro">' +
        '<div class="menu-category-intro__meta">Everyday · 12:00 PM – 4:00 PM · Dine-in only</div>' +
        '<p class="menu-category-intro__choice">' +
          '<span class="menu-category-intro__label">Choice of entrée</span>' +
          '<span class="menu-category-intro__options">Curry · Korma · Tikka Masala · Tandoori · Biryani · Vindaloo</span>' +
        '</p>' +
        '<p class="menu-category-intro__includes">' +
          '<span class="menu-category-intro__label">Every thali includes</span>' +
          '<span class="menu-category-intro__options">' + THALI_INCLUDES + '</span>' +
        '</p>' +
      '</div>'
    );
  }


  function renderMenuRegion(region) {
    var items = MENU[region] || [];
    var body = items.map(function (item, i) {
      var divider = i > 0 ? '<div class="menu-divider"></div>' : '';
      return divider + renderMenuItem(item);
    }).join('');

    var sectionNote = SECTION_NOTES[region]
      ? '<div class="menu-category-intro" style="margin-bottom:20px"><div class="menu-category-intro__meta">' + SECTION_NOTES[region] + '</div></div>'
      : '';

    if (region === 'Xpress Thali') {
      return renderXpressThaliIntro() + body;
    }
    return sectionNote + body;
  }

  function regionSlug(region) {
    return region.toLowerCase().replace(/\s+/g, '-');
  }

  function regionFromHash() {
    var hash = (window.location.hash || '').replace(/^#/, '');
    if (!hash) return null;
    var regions = Object.keys(MENU);
    for (var i = 0; i < regions.length; i++) {
      if (regionSlug(regions[i]) === hash) return regions[i];
    }
    return null;
  }

  function getHeaderHeight() {
    var header = document.getElementById('site-header');
    return header ? header.offsetHeight : 72;
  }

  function syncMenuStickyTop() {
    document.documentElement.style.setProperty(
      '--menu-sticky-top',
      getHeaderHeight() + 'px'
    );
  }

  function scrollToMenuView() {
    var container = document.getElementById('menu-sticky-container');
    if (!container) return;

    var top =
      container.getBoundingClientRect().top + window.scrollY - getHeaderHeight();
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function initMenuPage() {
    var tabsEl = document.getElementById('menu-tabs');
    var listEl = document.getElementById('menu-list');
    if (!tabsEl || !listEl) return;

    syncMenuStickyTop();
    window.addEventListener('resize', syncMenuStickyTop);
    document.addEventListener('site:partials-loaded', syncMenuStickyTop);

    var regions = Object.keys(MENU);
    var active = regionFromHash() || regions[0];

    function setActive(region, withScroll) {
      active = region;
      tabsEl.querySelectorAll('.menu-tab').forEach(function (t) {
        var isActive = t.dataset.region === active;
        t.classList.toggle('is-active', isActive);
        if (isActive && withScroll) {
          t.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      });
      listEl.innerHTML = renderMenuRegion(active);
      if (history.replaceState) {
        history.replaceState(null, '', '#' + regionSlug(active));
      } else {
        window.location.hash = regionSlug(active);
      }

      if (withScroll) {
        // Wait for list layout after re-render so scroll lands on bar + items
        requestAnimationFrame(function () {
          requestAnimationFrame(scrollToMenuView);
        });
      }
    }

    regions.forEach(function (region) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'menu-tab' + (region === active ? ' is-active' : '');
      btn.textContent = region;
      btn.dataset.region = region;
      btn.id = 'menu-tab-' + regionSlug(region);
      btn.addEventListener('click', function () {
        setActive(region, true);
      });
      tabsEl.appendChild(btn);
    });

    listEl.innerHTML = renderMenuRegion(active);

    // Render legend once below the list
    var legendEl = document.getElementById('menu-legend');
    if (!legendEl) {
      legendEl = document.createElement('div');
      legendEl.id = 'menu-legend';
      legendEl.style.cssText = 'margin-top:28px;padding:18px 22px;background:var(--cream-100);border:1.5px solid var(--border-soft);border-radius:var(--radius-sm);display:flex;flex-wrap:wrap;gap:12px 24px;align-items:center;';
      legendEl.innerHTML =
        '<span style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-muted);font-weight:600;">Legend:</span>' +
        '<span class="badge badge-sm badge-neutral">GF</span><span style="font-size:0.8125rem;color:var(--text-muted);">Gluten Free</span>' +
        '<span class="badge badge-sm badge-chili">Spicy</span><span style="font-size:0.8125rem;color:var(--text-muted);">Spicy</span>' +
        '<span class="badge badge-sm badge-veg badge-dot">Veg</span><span style="font-size:0.8125rem;color:var(--text-muted);">Vegetarian / Vegan</span>' +
        '<span class="badge badge-sm badge-nonveg badge-dot">Non-veg</span><span style="font-size:0.8125rem;color:var(--text-muted);">Non-Vegetarian</span>';
      listEl.parentNode.insertBefore(legendEl, listEl.nextSibling);
    }

    // Render policy notes once
    var notesEl = document.getElementById('menu-policy-notes');
    if (!notesEl) {
      notesEl = document.createElement('ul');
      notesEl.id = 'menu-policy-notes';
      notesEl.style.cssText = 'margin-top:14px;padding:14px 22px;background:var(--cream-50);border:1.5px solid var(--border-soft);border-radius:var(--radius-sm);list-style:none;display:flex;flex-direction:column;gap:6px;';
      MENU_NOTES.forEach(function (note) {
        var li = document.createElement('li');
        li.style.cssText = 'font-family:var(--font-body);font-size:0.8125rem;color:var(--text-muted);';
        li.textContent = note;
        notesEl.appendChild(li);
      });
      legendEl.parentNode.insertBefore(notesEl, legendEl.nextSibling);
    }

    window.addEventListener('hashchange', function () {
      var fromHash = regionFromHash();
      if (fromHash && fromHash !== active) setActive(fromHash, true);
    });
  }

  function renderSignatureCards(items, labels) {
    return items.map(function (d, i) {
      return (
        '<div class="signature-item">' +
          '<div class="signature-label">' + labels[i] + '</div>' +
          '<div class="signature-spacer"></div>' +
          renderMenuItem(d) +
        '</div>'
      );
    }).join('');
  }

  function initXpressThali() {
    var gridEl = document.getElementById('xpress-thali-grid');
    if (!gridEl) return;

    // Shared inclusions live in the section lede — cards stay unique & short.
    var extras = ['', '', '', 'Shrimp or fish'];
    var thalis = (MENU['Xpress Thali'] || []).slice(0, 4).map(function (item, i) {
      return {
        name: item.name,
        price: item.price,
        description: extras[i] || '',
        badges: item.badges,
      };
    });
    var labels = ['Vegetarian', 'Chicken', 'Lamb', 'Seafood'];
    gridEl.innerHTML = renderSignatureCards(thalis, labels);
  }

  function initSpecialties() {
    var gridEl = document.getElementById('specialties-grid');
    if (!gridEl) return;

    var picks = [
      (MENU.Chicken || [])[4], // Highway Chicken Curry
      (MENU['Gilli Biryani'] || [])[0], // Chicken
      (MENU['Small Plates'] || [])[3], // Paneer Tikka
    ];
    var labels = ['Chicken', 'Gilli Biryani', 'Small Plates'];
    var shown = picks.map(function (p, i) { return p ? { item: p, label: labels[i] } : null; }).filter(Boolean);
    gridEl.innerHTML = renderSignatureCards(shown.map(function (s) { return s.item; }), shown.map(function (s) { return s.label; }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    withMenu(function () {
      initMenuPage();
      initXpressThali();
      initSpecialties();
    });
  });
})();
