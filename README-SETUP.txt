==========================================================
BrandXchangeKE - Multibrand Fashion House
Luxury Boutique E-Commerce Website
README-SETUP (v1.0)
==========================================================

WHAT THIS IS
------------
A complete 4-page luxury boutique website for BrandXchangeKE,
a women-owned multibrand fashion house on the Ground Floor of
Azalea Square, General Mathenge Drive, Westlands, Nairobi.
Gold, ivory and black luxury design (Playfair Display + Jost
fonts), fashion-vibe loading screen, WhatsApp ordering,
localStorage bag, full SEO markup and dev-tools protection.

PAGES
-----
  index.html      Homepage: hero slider, marquee, category
                  tiles, featured pieces, bridal banner, the
                  house story, services, visit us + Google map
  shop.html       Full collection (35 pieces, 7 categories)
                  with category filters, live search, sorting
                  and per-item WhatsApp enquiry links
  cart.html       Bag review with quantity steppers
  checkout.html   Details + delivery + payment form, order
                  popup, receipt and WhatsApp confirmation

FILES
-----
  css/styles.css  All styling (black #0b0b0e, gold #c9a84c,
                  ivory #faf8f3 palette)
  js/script.js    All logic + CONFIG + PRODUCTS (edit here!)
  images/         logo-badge.png (BX monogram badge)
  assets/         Heroes, boutique, storefront and product
                  photos (sourced and optimized, ~5.3MB total)
  icons/          Complete favicon set built from the badge
  favicon.ico     Root favicon (all modern browsers)

==========================================================
CONTACT DETAILS - ALREADY LIVE (change here if ever needed)
==========================================================

1) PHONE / WHATSAPP (+254 742 692442)
   Phone links use tel:+254742692442. WhatsApp buttons use
   https://wa.me/254742692442 (international format, no plus).
   In js/script.js edit CONFIG.phone, CONFIG.phoneIntl and
   CONFIG.whatsapp. The visible "+254 742 692442" text sits
   in the top bar and Visit section of each HTML page.

2) INSTAGRAM
   https://www.instagram.com/brandxchangeke/ (CONFIG.instagram
   in script.js + links in the top bar, footer, Visit section).

3) GOOGLE MAPS
   Map iframe uses the shop coordinates
   (-1.2519975, 36.7944674). The "Get Directions" button uses
   https://maps.app.goo.gl/Vp55LWpjMKVwR8g76 (CONFIG.mapsLink).

4) OPENING HOURS
   "Monday to Saturday, 9:00 AM to 6:00 PM" was NOT supplied
   by the client and is a reasonable Westlands boutique
   assumption. Please confirm with the owner, then update:
   - index.html Visit section + footer (each page footer)
   - index.html JSON-LD openingHoursSpecification block

5) PRICES AND PRODUCTS
   All 35 pieces, names and KES prices live in ONE place:
   js/script.js -> the PRODUCTS array (top of the file).
   Prices are market-grounded estimates (Kenyan boutique
   retail, Nov 2026) and MUST be confirmed with the owner:
   suits KSh 4,950 to 6,950 | kurtas 2,850 to 4,450 |
   palazzos 4,950 to 6,950 | maxis 11,500 to 15,950 |
   bridal formals 21,500 to 46,500 | Indo-Western 9,950 to
   13,500 | jewelry 1,250 to 5,450. Edit freely; the shop,
   featured grid, cart, checkout and WhatsApp messages all
   update automatically.

6) DOMAIN NAME
   All absolute URLs (canonical, og:url, og:image, sitemap,
   robots) use the PLACEHOLDER domain
   https://www.brandxchangeke.co.ke
   When the real domain is known, find-and-replace across all
   4 HTML pages + sitemap.xml + robots.txt.

7) MORTAPPS CREDIT
   "Powered By MortApps Studios" appears in the loading
   screen, the footer of every page and the mobile drawer.
   Every instance is a link to https://www.mortappsstudios.com
   (CONFIG.mortapps in script.js).

==========================================================
FORMSPREE (OPTIONAL, EMAIL ORDER COPIES)
==========================================================
Checkout orders are confirmed on WhatsApp by default. To also
receive an email copy of every order:
1. Create a form at https://formspree.io and copy your endpoint
2. Open checkout.html
3. On the <form id="checkout-form"> tag add:
   data-endpoint="https://formspree.io/f/YOUR_ID"
4. Save. Orders will post there automatically (customer,
   phone, county, delivery, payment, items, total, ref).

==========================================================
HOSTING
==========================================================
This is a 100% static website - no server, no database.
Upload the entire folder contents (index.html, shop.html,
cart.html, checkout.html, css/, js/, images/, assets/,
icons/, favicon.ico, robots.txt, sitemap.xml) to any host:
GitHub Pages, Netlify Drop, Vercel, cPanel, Truehost, etc.

The bag is stored in the visitor's browser (localStorage key
bxke_cart_v1) so it survives reloads and page navigation.

NOTES
-----
- Protection: right-click and dev-tools keyboard shortcuts
  (F12, Ctrl+Shift+I/J/C/K, Ctrl+U) are blocked with a
  "Content is protected" toast. Images resist dragging.
- Performance: hero image preloaded (LCP), every product
  image lazy-loaded with fixed width/height (no layout
  shift), animations are opacity/transform only, and
  prefers-reduced-motion is respected. Tested smooth on
  mobile viewport 390x844.
- The loader runs 2.6s with a failsafe so nobody is ever
  trapped if something loads slowly.
- Product photos were sourced from public web imagery and
  screened for watermarks. They are catalog stand-ins:
  swap any file in assets/products/ (keep the same file
  name) with the boutique's own photography when available.
