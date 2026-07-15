(function () {
  var THALI_INCLUDES =
    'Appetizer, rice, naan/roti, dal of the day, saag paneer, vegetable sabji, raita, pickle & pappad';

  var MENU = {
    'Xpress Thali': [
      {
        name: 'Vegetarian Thali',
        price: '$18',
        description: '',
        badges: [{ label: 'Veg', tone: 'veg' }],
      },
      {
        name: 'Chicken Thali',
        price: '$20',
        description: '',
        badges: [{ label: 'Non-veg', tone: 'nonveg' }],
      },
      {
        name: 'Lamb Thali',
        price: '$25',
        description: '',
        badges: [{ label: 'Non-veg', tone: 'nonveg' }],
      },
      {
        name: 'Seafood Thali',
        price: '$25',
        description: 'Shrimp or fish',
        badges: [{ label: 'Non-veg', tone: 'nonveg' }],
      },
      {
        name: 'Highway Thali',
        price: '+$3',
        description: 'Saturday & Sunday only — upgrade any Xpress Thali',
        badges: [{ label: 'Weekend', tone: 'gold' }],
      },
      {
        name: 'Weekend Drink Special',
        price: '$12',
        description: 'Unlimited mimosas or draft beer · per person · Saturday & Sunday',
        badges: [{ label: 'Weekend', tone: 'gold' }],
      },
    ],
    'Small Plates': [
      { name: 'Samosa', price: '$10', description: 'Crisp turnovers, potato & peas', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Ónion Pakora', price: '$10', description: 'Chickpea flour, mint', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Kungfu Gobi', price: '$13', description: 'Tossed cauliflower, tangy garlic sauce', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Paneer Tikka', price: '$15', description: 'Tandoor fired cottage cheese, house marinade', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Corn Ribs', price: '$9', description: 'Grilled, lime, salt', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Sweet Potato Chat', price: '$9', description: 'Grilled, Pico de gallo, chutneys', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Murgh Malai Tikka', price: '$15', description: 'Tandoor fired fennel rubbed chicken', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Jinga Malai Marke', price: '$16', description: 'Tandoori cooked jumbo shrimp', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Naga Chili Pork', price: '$14', description: 'Onion, pepper, bamboo shoot', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Salmon Croquets', price: '$16', description: 'House blend spices, ginger', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Lamb Tikka', price: '$18', description: 'Tandoor fired lamb, clarified butter', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Aloo Gobi', price: '$19', description: 'Spiced potato, cauliflower, aromatic spices', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Tadka Dal', price: '$17', description: 'Yellow lentils, tempered cumin & spices. Spinach +2', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Vegetable Madras', price: '$19', description: 'Coconut curry, mustard, chili, curry leaves', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Aloo Baingan', price: '$19', description: 'Potato, eggplant, onion, cilantro', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Bhindi Kadai', price: '$19', description: 'Okra, onion, tomato, house spice', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Channa Masala', price: '$17', description: 'Chickpea, onion, tomato, aromatic spices', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Vegetable': [
      { name: 'Saag Peshkesh', price: '$16', description: 'Pureed fresh spinach, cream, garlic', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Paneer Tawa Masala', price: '$20', description: 'Pan fried cottage cheese, onion, pepper, cumin', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Dal Makhani', price: '$18', description: 'Simmered black lentils in cream, tempered sun-dried chili', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Vegetable Korma', price: '$20', description: 'Market vegetable, cashe cream, aromatic spices', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Vegetable Pulav', price: '$20', description: 'Aged basmati rice, market vegetable, cashew, raisin, raita', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Lamb': [
      { name: 'Lamb Chettinad', price: '$29', description: 'Black pepper corn, house spices', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Saag', price: '$29', description: 'Creamy spinach, ginger', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Rogan Josh', price: '$29', description: 'Highway Lamb curry', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Lamb Jalfrezi', price: '$29', description: 'Onion, peppers, fennel', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Korma', price: '$29', description: 'Cashew cream, rose extract, saffron', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Lamb Vindaloo', price: '$29', description: 'Sun-dried chili, vinegar, potato', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Boti Kebab', price: '$30', description: 'Tandoor fired lamb, masala sauce', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Pork': [
      { name: 'Pork Vinadloo', price: '$22', description: 'Sun dried chili, vinegar, potato', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Pork Jalfrezi', price: '$22', description: 'Onion, pepper, fennel', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Pork Pepper Fry', price: '$22', description: 'Whole black pepper, onion, curry leave', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Pork Curry', price: '$22', description: 'Onion, tomato, ginger, garlic, home spices', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Chicken': [
      { name: 'Kundapur Chicken', price: '$23', description: 'Coconut curry, mustard seeds, curry leaves', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Chicken Saag', price: '$23', description: 'Creamy spinach, ginger', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Chicken Kali Mirch', price: '$23', description: 'Black pepper, garlic, herbs', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Chicken Korma', price: '$23', description: 'Cashew cream, saffron, house spices', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Highway Chicken Curry', price: '$23', description: 'Onion, tomato, ginger, garlic, home spices', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
    ],
    'Seafood': [
      { name: 'Pollicha Meen', price: '$28', description: 'Slow braised salmon, onion cream', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Shrimp Tikka Masala', price: '$28', description: 'Tandoori shrimp, Fenugreek infused creamy tomato', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Chingri Malai Curry', price: '$28', description: 'Jumbo Shrimp, coconut curry', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Salmon Curry', price: '$28', description: 'Ginger infused coconut', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Gilli Biryani': [
      { name: 'Chicken', price: '$24', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Lamb', price: '$26', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Shrimp', price: '$26', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
    ],
    'Breads': [
      { name: 'Naan', price: '$5', description: '', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Bharvan Naan', price: '$6', description: 'Cheese | Garlic | Onion | Chili', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Whole Wheat Roti', price: '$5', description: '', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Lacha Paratha', price: '$5', description: '', badges: [{ label: 'Veg', tone: 'veg' }] },
    ],
    'Sides': [
      { name: 'Raita', price: '$5', description: 'Yogurt dip', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Mango Chutney', price: '$4', description: 'Sweet and tangy', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Coconut Rice', price: '$12', description: 'Fragrant basmati rice', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Cocktails': [
      { name: 'Red Sangria', price: '$13', description: 'Red wine, fresh fruits' },
      { name: 'White Sangria', price: '$13', description: 'White winę, fresh fruits' },
      { name: 'Passion Margarita', price: '$13', description: 'Agave wine tequila, passion fruit, agave, orange, jalapeno, tajin' },
      { name: 'Ginger Martini', price: '$13', description: 'Ginger, cranberry, wine vodka' },
      { name: 'Lychee Martini', price: '$13', description: 'Wine vodka, cranberry, coconut' },
      { name: 'Silk Route', price: '$13', description: 'Pinot noir, rum, agaves, cloves' },
    ],
    'Beer': [
      { name: '1947', price: '$10', description: 'Lager, 4.7% India' },
      { name: 'Founder Porter Ale', price: '$10', description: 'American porter 6.5% USA' },
      { name: 'Dog Fish 60 IPA', price: '$10', description: 'Double IPA, 6%' },
      { name: 'UFO Wheat', price: '$10', description: 'BELGIAN WITBIER 4.8%' },
      { name: 'Kingfisher', price: '$8', description: 'European Pale Larger, 4.8% India' },
      { name: 'Taj Mahal', price: '$8', description: 'Lager, 4.5%, India' },
      { name: 'Estrella', price: '$8', description: 'Larger 5.5% Spain' },
      { name: 'Heineken OO', price: '$8', description: '0%, Netherlands' },
      { name: 'Maduro Brown Ale', price: '$8', description: '5.5% USA Engush Brown Ale' },
    ],
    'Wine': [
      { name: 'Bottega Vinaia | Pinot Grigio', price: '13/44', description: '' },
      { name: 'Yealands | Sauvingnon Blanc', price: '12/40', description: '' },
      { name: '3 Fingers | Chardonay', price: '13/44', description: '' },
      { name: 'La Luca | Processco', price: '$12', description: '' },
      { name: 'Portillo | Cabernet Sauvignon', price: '12/40', description: '' },
      { name: 'Tinto Negro | Malbec', price: '12/40', description: '' },
      { name: 'Alexander Brown | Pinot Noir', price: '13/44', description: '' },
    ],
    'Mocktails': [
      { name: 'Soda', price: '$3', description: 'Coke/ Diet/Sprite/ Ginger Ale' },
      { name: 'Saratoga Water', price: '$6', description: 'Still/ Sparkling' },
      { name: 'Coconut Lychee', price: '$7', description: 'coconut, lychee, lime, agave' },
      { name: 'Lassi', price: '$5', description: 'mango, plain sweet' },
      { name: 'Fresh Lime Soda', price: '$7', description: '' },
      { name: 'Cucumber Cooler', price: '$7', description: 'cucumber, mint' },
    ],
  };

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
        '<div class="menu-category-intro__meta">Mon–Fri · 12:00 PM – 4:00 PM · Dine-in only</div>' +
        '<p class="menu-category-intro__choice">' +
          '<span class="menu-category-intro__label">Choice of entrée</span>' +
          '<span class="menu-category-intro__options">Curry · Korma · Tikka Masala · Tandoori</span>' +
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

    if (region === 'Xpress Thali') {
      return renderXpressThaliIntro() + body;
    }
    return body;
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

  function initMenuPage() {
    var tabsEl = document.getElementById('menu-tabs');
    var listEl = document.getElementById('menu-list');
    if (!tabsEl || !listEl) return;

    var regions = Object.keys(MENU);
    var active = regionFromHash() || regions[0];

    function setActive(region) {
      active = region;
      tabsEl.querySelectorAll('.menu-tab').forEach(function (t) {
        t.classList.toggle('is-active', t.dataset.region === active);
      });
      listEl.innerHTML = renderMenuRegion(active);
      if (history.replaceState) {
        history.replaceState(null, '', '#' + regionSlug(active));
      } else {
        window.location.hash = regionSlug(active);
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
        setActive(region);
      });
      tabsEl.appendChild(btn);
    });

    listEl.innerHTML = renderMenuRegion(active);

    window.addEventListener('hashchange', function () {
      var fromHash = regionFromHash();
      if (fromHash && fromHash !== active) setActive(fromHash);
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
    var thalis = MENU['Xpress Thali'].slice(0, 4).map(function (item, i) {
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
      MENU.Chicken[4], // Highway Chicken Curry
      MENU['Gilli Biryani'][0], // Chicken
      MENU['Small Plates'][3], // Paneer Tikka
    ];
    var labels = ['Chicken', 'Gilli Biryani', 'Small Plates'];
    gridEl.innerHTML = renderSignatureCards(picks, labels);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenuPage();
    initXpressThali();
    initSpecialties();
  });
})();
