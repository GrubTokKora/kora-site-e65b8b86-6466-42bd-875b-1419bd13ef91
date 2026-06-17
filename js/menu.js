(function () {
  var MENU = {
    'Small Plates': [
      { name: 'Samosa (2)', price: '$10', description: 'Crisp turnovers, potato & peas.', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Onion Pakora', price: '$10', description: 'Chickpea flour, mint.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Kungfu Gobi', price: '$13', description: 'Tossed cauliflower, tangy garlic sauce.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Paneer Tikka', price: '$15', description: 'Tandoor fired cottage cheese, house marinade.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Corn Ribs', price: '$9', description: 'Grilled, lime, salt.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Sweet Potato Chat', price: '$9', description: 'Grilled, pico de gallo, chutneys.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Murgh Malai Tikka', price: '$15', description: 'Tandoor fired fennel rubbed cream chicken.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Jhinga Malai Mark', price: '$16', description: 'Tandoori cooked jumbo shrimp.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Naga Chili Pork', price: '$14', description: 'Onion, pepper, bamboo shoot.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Salmon Croquets', price: '$16', description: 'House blend spices, ginger.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Lamb Tikka', price: '$18', description: 'Tandoor fired lamb, clarified butter.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Vegan': [
      { name: 'Aloo Gobi', price: '$19', description: 'Spiced potato, cauliflower, aromatic spices.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Tadka Dal', price: '$17', description: 'Yellow lentils, tempered cumin & spices. Spinach +$2.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Vegetable Madras', price: '$19', description: 'Coconut curry, mustard, chili, curry leaves.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Aloo Baingan', price: '$19', description: 'Potato, eggplant, onion, cilantro.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Bhindi Kadai', price: '$19', description: 'Okra, onion, tomato, house spice.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Channa Masala', price: '$17', description: 'Chickpea, onion, tomato, aromatic spices.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Vegetable': [
      { name: 'Saag Peshkesh', price: '$16', description: 'Pureed fresh spinach, cream, garlic. Paneer +$4 · vegetable +$3 · potato +$2.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Paneer Tawa Masala', price: '$20', description: 'Pan fried cottage cheese, onion, pepper, cumin.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Dal Makhani', price: '$18', description: 'Simmered black lentils in cream, tempered sun-dried chili.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Vegetable Korma', price: '$20', description: 'Market vegetable, cashew cream, aromatic spices.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Vegetable Pulav', price: '$20', description: 'Aged basmati rice, market vegetable, cashew, raisin, raita.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Lamb': [
      { name: 'Lamb Chettinad', price: '$29', description: 'Black pepper corn, house spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Saag', price: '$29', description: 'Creamy spinach, ginger.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Rogan Josh', price: '$29', description: 'Highway lamb curry.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Lamb Jalfrezi', price: '$29', description: 'Onion, peppers, fennel.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Korma', price: '$29', description: 'Cashew cream, rose extract, saffron.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Lamb Vindaloo', price: '$29', description: 'Sun-dried chili, vinegar, potato.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Lamb Boti Kebab', price: '$30', description: 'Tandoor fired lamb, masala sauce.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Pork': [
      { name: 'Pork Vindaloo', price: '$22', description: 'Sun dried chili, vinegar, potato.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Pork Jalfrezi', price: '$22', description: 'Onion, pepper, fennel.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Pork Pepper Fry', price: '$22', description: 'Whole black pepper, onion, curry leaves.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Pork Curry', price: '$22', description: 'Onion, tomato, ginger, garlic, home spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Chicken': [
      { name: 'Tandoori Murgh', price: '$24', description: 'Bone-in chicken, hung yogurt, house blend spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Amul Butter Chicken', price: '$23', description: 'Tomato, cream, pepper, onion.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Chicken Tikka Masala', price: '$23', description: 'Fenugreek infused creamy tomato sauce.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Kundapur Chicken', price: '$23', description: 'Coconut curry, mustard seeds, curry leaves.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Chicken Saag', price: '$23', description: 'Creamy spinach, ginger.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Chicken Kali Mirch', price: '$23', description: 'Black pepper, garlic, herbs.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Chicken Korma', price: '$23', description: 'Cashew cream, saffron, house spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Highway Chicken Curry', price: '$23', description: 'Onion, tomato, ginger, garlic, home spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
    ],
    'Seafood': [
      { name: 'Pollicha Meen', price: '$28', description: 'Slow braised salmon, onion, house blend spices.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }, { label: 'Spicy', tone: 'chili' }] },
      { name: 'Shrimp Tikka Masala', price: '$28', description: 'Tandoori shrimp, fenugreek infused creamy tomato.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Chingri Malai Curry', price: '$28', description: 'Jumbo shrimp, coconut curry.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Salmon Curry', price: '$28', description: 'Ginger infused coconut.', badges: [{ label: 'Non-veg', tone: 'nonveg' }, { label: 'GF', tone: 'neutral' }] },
    ],
    'Biryani': [
      { name: 'Chicken Biryani', price: '$22', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Lamb Biryani', price: '$24', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
      { name: 'Shrimp Biryani', price: '$26', description: 'Aromatic aged basmati rice, whole spices, ghee, caramelized onion, raita, mint, cashew & raisin.', badges: [{ label: 'Non-veg', tone: 'nonveg' }] },
    ],
    'Breads & Sides': [
      { name: 'Naan', price: '$5', description: 'Classic tandoor bread.', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Bharvan Naan', price: '$6', description: 'Cheese · Garlic · Onion · Chili.', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Whole Wheat Roti', price: '$5', description: 'Stone-ground whole wheat flatbread.', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Lacha Paratha', price: '$5', description: 'Flaky layered paratha.', badges: [{ label: 'Veg', tone: 'veg' }] },
      { name: 'Raita', price: '$4', description: 'Yogurt dip.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Mango Chutney', price: '$4', description: 'Sweet and tangy.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
      { name: 'Coconut Rice', price: '$12', description: 'Fragrant basmati rice.', badges: [{ label: 'Veg', tone: 'veg' }, { label: 'GF', tone: 'neutral' }] },
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

  function renderMenuRegion(region) {
    var items = MENU[region] || [];
    return items.map(function (item, i) {
      var divider = i > 0 ? '<div class="menu-divider"></div>' : '';
      return divider + renderMenuItem(item);
    }).join('');
  }

  function initMenuPage() {
    var tabsEl = document.getElementById('menu-tabs');
    var listEl = document.getElementById('menu-list');
    if (!tabsEl || !listEl) return;

    var regions = Object.keys(MENU);
    var active = regions[0];

    regions.forEach(function (region) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'menu-tab' + (region === active ? ' is-active' : '');
      btn.textContent = region;
      btn.dataset.region = region;
      btn.addEventListener('click', function () {
        active = region;
        tabsEl.querySelectorAll('.menu-tab').forEach(function (t) {
          t.classList.toggle('is-active', t.dataset.region === active);
        });
        listEl.innerHTML = renderMenuRegion(active);
      });
      tabsEl.appendChild(btn);
    });

    listEl.innerHTML = renderMenuRegion(active);
  }

  function initSpecialties() {
    var gridEl = document.getElementById('specialties-grid');
    if (!gridEl) return;

    var picks = [
      MENU.Chicken[1],
      MENU.Biryani[0],
      MENU['Small Plates'][3],
    ];
    var labels = ['Chicken', 'Biryani', 'Small Plates'];

    gridEl.innerHTML = picks.map(function (d, i) {
      return (
        '<div class="card card-paper card-interactive">' +
          '<div class="signature-label">' + labels[i] + '</div>' +
          '<div class="signature-spacer"></div>' +
          renderMenuItem(d) +
        '</div>'
      );
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenuPage();
    initSpecialties();
  });
})();
