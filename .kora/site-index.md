# Site index · format 1
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
also: Both `#xpress-thali-grid` and `#specialties-grid` are empty in the markup and filled by script at page load. No thali option and no signature dish is named inside either grid, so a request to change one cannot be satisfied by editing this page.
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
purpose: The menu page — currently a shell that links out to a PDF, with no dishes on it.
sections:
- "The Menu" — the page hero, the tax note and the allergy note
- `#menu-sticky-container` — the sticky wrapper the category bar and tabs sit in
- `#menu-categories-bar` — the category bar. It is empty in the markup.
- `#menu-tabs` — the category tabs. They are empty in the markup.
- `#menu-list` — the dish list. It is empty in the markup.
- "Official dining menu" — links to the dining menu PDF and to catering
also: THIS PAGE HAS NO DISHES ON IT. The category bar, the tabs and the dish list are all empty in the markup and filled by script at page load, and the only menu a visitor can actually read is the PDF this page links to. A request to change a dish, a price or a category has nothing here to edit.

## hiring.html → /hiring
title: Hiring - NH 44 Indian | Hartsdale, NY
purpose: The careers page — currently a heading and an empty container.
sections:
- "Hiring" — the page hero
- `#hiring-content` — the container the job listings belong in. It is empty.
also: THIS PAGE IS EMPTY. It carries the words "Join the team" and "Hiring" and nothing else. No role, no description, no way to apply.

## reserve.html → /reserve
title: Catering — NH 44 Indian | Hartsdale, NY
purpose: The catering page — currently a heading and an empty container.
sections:
- "Catering" — the page hero
- `#catering-content` — the container the catering offer belongs in. It is empty.
also: THIS PAGE IS EMPTY. It carries the words "Feed the highway" and "Catering" and nothing else, yet index.html, menu.html and a guest review all point visitors here for catering.
also: The file is named reserve.html but the page is about catering, and the navigation's Reserve a table action goes elsewhere. A request about the reservation page and a request about the catering page both land on this file.

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
