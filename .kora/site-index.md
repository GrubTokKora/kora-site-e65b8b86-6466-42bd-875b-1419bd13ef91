# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: NH 44 Indian | Authentic Indian Cuisine, Biryani & Curry | Hartsdale, Westchester NY
purpose: The landing page — the restaurant's positioning, the Xpress Thali lunch special, a signatures strip, guest reviews and the FAQ.
sections:
- hero "One Highway. A Thousand Flavours." — the tagline with the Reserve a table and Order online actions
- `#about` "North to south on one plate" — what the restaurant is and what it serves, naming: tandoori chicken, chicken tikka masala, garlic naan, biryani, kebabs, butter chicken, lamb rogan josh, paneer tikka, samosas, onion pakora, vegetarian, vegan, gluten-friendly, catering, takeaway, delivery
- `#xpress-thali` "Xpress Thali" — the everyday lunch special, its dine-in window, and the preparations it can be ordered as: Curry, Korma, Tikka Masala, Tandoori, Biryani, Vindaloo
- `#xpress-thali-grid` — the grid the thali options are drawn into. It is empty in the markup.
- "The signatures" — the signature-dishes strip, with View Full Menu and Order online actions and the delivery partners: UberEats, DoorDash, GrubHub
- `#specialties-grid` — the grid the signature dishes are drawn into. It is empty in the markup.
- `#reviews` "What our guests say" — three named guest reviews: Priya M., James L., Anita K.
- `#faq` "Frequently asked questions" — an accordion covering the Xpress Thali, reservations and ordering
also: Both `#xpress-thali-grid` and `#specialties-grid` are empty markup, filled at load from `js/menu.js`. No thali option and no signature dish is named in this file, so a request to change one is an edit to that script.
also: The Xpress Thali's contents and its choice of preparations are written out twice on this page, once in the `#xpress-thali` section and once inside the FAQ answer. Changing one leaves the other stating the old offer.

## about.html → /about
title: About Us — NH 44 Indian | Hartsdale, NY
purpose: The restaurant's story — the highway it is named for and the chefs behind the menu.
sections:
- "Our Story" — the National Highway 44 concept, the north-to-south range of the menu, and the chefs: Jeevan Pullan, Roshan Balan
also: This page carries no ids at all, so every change here is located by its heading or its wording.

## contact.html → /contact
title: Contact — NH 44 Indian | Hartsdale, NY
purpose: The contact page — the address, phone, email, hours, social links and a message form.
sections:
- "Contact" — the page hero
- "Visit" — the address and a Google Maps link
- "Reach us" — the phone number and email address
- "Hours" — the opening hours, given as two ranges rather than one row per day
- "Follow us" and "Subscribe to updates" — the social links and the sign-up
- "Send a message" — the enquiry form, with full name, e-mail and message fields
also: This page carries no ids at all, including on the form and its fields, so every change here is located by its label text.
also: The hours are written here only. No other page on the site states them, so this is the one place they can be wrong.

## gallery.html → /gallery
title: Gallery — NH 44 Indian | Hartsdale, NY
purpose: The gallery page — photographs of the dining room and its truck-art murals.
sections:
- "Gallery" — the page hero and one line of copy about the murals
also: The page has a heading and a single sentence and nothing else. Whatever images belong here are not in the markup.

## menu.html → /menu
title: The Menu — NH 44 Indian | Hartsdale, NY
purpose: The menu page — an empty shell in the markup; every dish is drawn in from `js/menu.js` at load.
sections:
- "The Menu" — the page hero, the tax note and the allergy note
- `#menu-sticky-container` — the sticky wrapper the category bar and tabs sit in
- `#menu-categories-bar` — the category bar. It is empty in the markup.
- `#menu-tabs` — the category tabs. They are empty in the markup.
- `#menu-list` — the dish list. It is empty in the markup.
- "Official dining menu" — links to the dining menu PDF and to catering
also: THE DISHES ARE NOT IN THIS FILE. The category bar, the tabs and the dish list are all empty markup, filled at load from `js/menu.js` — which is where every dish, price and category actually lives. A request to change one is an edit to that file, not to this page. Editing this page's markup would appear to do nothing.

## hiring.html → /hiring
title: Hiring - NH 44 Indian | Hartsdale, NY
purpose: The careers page — a heading and an empty container; the application form is drawn in from `js/hiring.js` at load.
sections:
- "Hiring" — the page hero
- `#hiring-content` — the container the job listings belong in. It is empty.
also: THE FORM IS NOT IN THIS FILE. The page holds "Join the team", "Hiring" and an empty container; `js/hiring.js` renders the application form into it and carries the list of roles. No role is described anywhere — the select lists every role the restaurant has, whether or not it is hiring.

## reserve.html → /reserve
title: Catering — NH 44 Indian | Hartsdale, NY
purpose: The catering page — a heading and an empty container; the enquiry form is drawn in from `js/catering.js` at load.
sections:
- "Catering" — the page hero
- `#catering-content` — the container the catering offer belongs in. It is empty.
also: THE FORM IS NOT IN THIS FILE. The page holds "Feed the highway", "Catering" and an empty container; `js/catering.js` renders the enquiry form into it and carries the event types. No catering offer is described anywhere on the site — no packages, no dishes, no minimums — yet index.html, menu.html and a guest review all send visitors here for it.
also: The file is named reserve.html but the page is about catering, and the navigation's Reserve a table action goes elsewhere. A request about the reservation page and a request about the catering page both land on this file.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — a plain-text summary of the business for AI crawlers — derived from the site by the deploy, not written by hand
- `robots.txt` — crawler rules and the sitemap link — derived from the site by the deploy, not written by hand
- `sitemap.xml` — the list of page URLs — derived from the site by the deploy, not written by hand
- `style.css` — the site's styling, brand colours and web fonts
- `js/catering.js` — THE CATERING PAGE'S CONTENT and its enquiry form: Corporate, Birthday, Graduation, Weddings, Party  [content]
- `js/forms.js` — form submission and the captcha
- `js/hiring.js` — THE HIRING PAGE'S CONTENT and its application form: Server, Host, Bartender, Kitchen staff, Dishwasher, Manager  [content]
- `js/includes.js` — the header, navigation and footer markup for every page  [content]
- `js/main.js` — page behaviour and the site's API configuration
- `js/menu.js` — THE ENTIRE MENU as data, drawn onto the menu page at load: Xpress Thali, Vegetarian Thali  [content]

## shared (every page)
The header, navigation, mobile menu and footer are NOT in the pages. They are rendered at
load by `js/includes.js`, which is where every change to the shared chrome has to be made. Editing a
page's markup to change the header will appear to do nothing, because there is no header in
it to change.
