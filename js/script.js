/* ============================================================
   BRANDXCHANGEKE - Multibrand Fashion House
   script.js (v1.0)
   CONFIG + PRODUCTS + cart + shop + checkout + protection
   ============================================================ */
(function () {
  'use strict';

  /* ---------- CONFIG (edit here) ---------- */
  var CONFIG = {
    brandName: 'BrandXchangeKE',
    phone: '+254 742 692442',
    phoneIntl: '+254742692442',
    whatsapp: '254742692442',
    instagram: 'https://www.instagram.com/brandxchangeke/',
    mapsLink: 'https://maps.app.goo.gl/Vp55LWpjMKVwR8g76',
    mortapps: 'https://www.mortappsstudios.com',
    loaderMs: 2600,
    cartKey: 'bxke_cart_v1'
  };
  window.BXKE_CONFIG = CONFIG;

  /* ---------- CONSOLE SIGNATURE ---------- */
  try {
    console.log('%c BrandXchangeKE ', 'background:#0b0b0e;color:#e2cc7e;font-size:14px;padding:6px 14px;border-radius:6px;font-weight:bold;');
    console.log('%c Powered By MortApps Studios ', 'background:#c9a84c;color:#0b0b0e;font-size:11px;padding:4px 10px;border-radius:6px;font-weight:bold;');
  } catch (e) {}

  /* ---------- PRODUCTS ---------- */
  var CATEGORIES = [
    'Three-Piece Suits',
    'Kurtas',
    'Palazzo Sets',
    'Occasion Maxi Dresses',
    'Bridal & Festive Formals',
    'Indo-Western',
    'Jewelry & Bangles'
  ];

  var CLOTHES_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  var FREE_SIZE = ['One size'];

  var PRODUCTS = [
    /* Three-Piece Suits */
    { id: 'suit-gulabo', name: 'Gulabo Rose Lawn 3-Piece Suit', cat: 'Three-Piece Suits', price: 4950, img: 'assets/products/suit-gulabo.jpg', sizes: CLOTHES_SIZES, tag: 'New', featured: true, desc: 'Breathable printed lawn suit with a matching dupatta and trouser. An elegant everyday staple.' },
    { id: 'suit-sitara', name: 'Sitara Embroidered Cotton Suit', cat: 'Three-Piece Suits', price: 6450, img: 'assets/products/suit-sitara.jpg', sizes: CLOTHES_SIZES, desc: 'Hand-guided embroidery on soft cotton with a beautifully finished dupatta.' },
    { id: 'suit-mehak', name: 'Mehak Pastel 3-Piece Set', cat: 'Three-Piece Suits', price: 5450, img: 'assets/products/suit-mehak.jpg', sizes: CLOTHES_SIZES, desc: 'Soft pastel tones with delicate detailing, perfect for daytime events.' },
    { id: 'suit-fiza', name: 'Fiza Chikankari Cotton Suit', cat: 'Three-Piece Suits', price: 5950, img: 'assets/products/suit-fiza.jpg', sizes: CLOTHES_SIZES, desc: 'Classic chikankari thread work on crisp cotton, graceful and airy.' },
    { id: 'suit-noor', name: 'Noor Festive Lawn Suit', cat: 'Three-Piece Suits', price: 6950, img: 'assets/products/suit-noor.jpg', sizes: CLOTHES_SIZES, desc: 'Festive lawn ensemble with shimmer accents for evening gatherings.' },
    /* Kurtas */
    { id: 'kurta-aiza', name: 'Aiza Straight Embroidered Kurta', cat: 'Kurtas', price: 3650, img: 'assets/products/kurta-aiza.jpg', sizes: CLOTHES_SIZES, tag: 'New', featured: true, desc: 'A clean straight-cut kurta lifted by fine embroidery along the neckline.' },
    { id: 'kurta-sadaf', name: 'Sadaf Pearl-Button Kurta', cat: 'Kurtas', price: 3250, img: 'assets/products/kurta-sadaf.jpg', sizes: CLOTHES_SIZES, desc: 'Understated elegance with pearl button detailing on soft fabric.' },
    { id: 'kurta-anya', name: 'Anya Printed Cotton Kurta', cat: 'Kurtas', price: 2850, img: 'assets/products/kurta-anya.jpg', sizes: CLOTHES_SIZES, desc: 'A lively printed cotton kurta that pairs with anything in your wardrobe.' },
    { id: 'kurta-rania', name: 'Rania Schiffli Kurta', cat: 'Kurtas', price: 3950, img: 'assets/products/kurta-rania.jpg', sizes: CLOTHES_SIZES, desc: 'Schiffli embroidery with a scalloped finish, feminine and light.' },
    { id: 'kurta-lareb', name: 'Lareb Two-Tone Kurta', cat: 'Kurtas', price: 4450, img: 'assets/products/kurta-lareb.jpg', sizes: CLOTHES_SIZES, desc: 'A striking two-tone palette with contrast trim detailing.' },
    /* Palazzo Sets */
    { id: 'palazzo-misha', name: 'Misha Kurta and Palazzo Set', cat: 'Palazzo Sets', price: 5650, img: 'assets/products/palazzo-misha.jpg', sizes: CLOTHES_SIZES, featured: true, desc: 'A flowing kurta with wide-leg palazzo, comfortable all-day elegance.' },
    { id: 'palazzo-zeba', name: 'Zeba Flared Palazzo Set', cat: 'Palazzo Sets', price: 6250, img: 'assets/products/palazzo-zeba.jpg', sizes: CLOTHES_SIZES, desc: 'Beautiful flare and drape, finished with a delicate border.' },
    { id: 'palazzo-hiba', name: 'Hiba Cotton Palazzo Set', cat: 'Palazzo Sets', price: 4950, img: 'assets/products/palazzo-hiba.jpg', sizes: CLOTHES_SIZES, desc: 'Cool cotton set with a relaxed fit, ideal for Nairobi days.' },
    { id: 'palazzo-amna', name: 'Amna Embroidered Palazzo Set', cat: 'Palazzo Sets', price: 6950, img: 'assets/products/palazzo-amna.jpg', sizes: CLOTHES_SIZES, desc: 'Coordinated embroidery across the kurta and palazzo for a polished look.' },
    /* Occasion Maxi Dresses */
    { id: 'maxi-anaya', name: 'Anaya Embroidered Maxi Dress', cat: 'Occasion Maxi Dresses', price: 12500, img: 'assets/products/maxi-anaya.jpg', sizes: CLOTHES_SIZES, tag: 'New', featured: true, desc: 'Floor-sweeping elegance with intricate embroidery, made for special evenings.' },
    { id: 'maxi-zoya', name: 'Zoya Pearl-Net Maxi', cat: 'Occasion Maxi Dresses', price: 14500, img: 'assets/products/maxi-zoya.jpg', sizes: CLOTHES_SIZES, desc: 'Pearl-embellished net overlay with a flattering silhouette.' },
    { id: 'maxi-riha', name: 'Riha Chiffon Formal Maxi', cat: 'Occasion Maxi Dresses', price: 11500, img: 'assets/products/maxi-riha.jpg', sizes: CLOTHES_SIZES, desc: 'Featherlight chiffon in rich tones, effortless formal wear.' },
    { id: 'maxi-sana', name: 'Sana Sequin Occasion Maxi', cat: 'Occasion Maxi Dresses', price: 15950, img: 'assets/products/maxi-sana.jpg', sizes: CLOTHES_SIZES, desc: 'All-over sequin work that catches the light at every turn.' },
    { id: 'maxi-alishba', name: 'Alishba Velvet Formal Maxi', cat: 'Occasion Maxi Dresses', price: 13950, img: 'assets/products/maxi-alishba.jpg', sizes: CLOTHES_SIZES, desc: 'Plush velvet with tonal embroidery, a winter wedding favourite.' },
    /* Bridal & Festive Formals */
    { id: 'formal-mahnoor', name: 'Mahnoor Bridal Lehenga', cat: 'Bridal & Festive Formals', price: 46500, img: 'assets/products/formal-mahnoor.jpg', sizes: CLOTHES_SIZES, tag: 'Signature', featured: true, desc: 'A heavily hand-embellished bridal lehenga with a full dupatta. Made to be unforgettable.' },
    { id: 'formal-zarnab', name: 'Zarnab Heavily-Embroidered Formal', cat: 'Bridal & Festive Formals', price: 32500, img: 'assets/products/formal-zarnab.jpg', sizes: CLOTHES_SIZES, desc: 'Dense zardozi-style embroidery across the full ensemble.' },
    { id: 'formal-ghazal', name: 'Ghazal Wedding Formal', cat: 'Bridal & Festive Formals', price: 38500, img: 'assets/products/formal-ghazal.jpg', sizes: CLOTHES_SIZES, desc: 'Rich formal silhouette with heirloom-quality detailing.' },
    { id: 'formal-shanzay', name: 'Shanzay Festive Lehenga', cat: 'Bridal & Festive Formals', price: 24500, img: 'assets/products/formal-shanzay.jpg', sizes: CLOTHES_SIZES, featured: true, desc: 'A radiant festive lehenga for the wedding calendar season.' },
    { id: 'formal-dilnasheen', name: 'Dilnasheen Sharara Set', cat: 'Bridal & Festive Formals', price: 21500, img: 'assets/products/formal-dilnasheen.jpg', sizes: CLOTHES_SIZES, desc: 'Flared sharara with a short embellished kurti and dupatta.' },
    { id: 'formal-gulbano', name: 'Gulbano Gharara Ensemble', cat: 'Bridal & Festive Formals', price: 27500, img: 'assets/products/formal-gulbano.jpg', sizes: CLOTHES_SIZES, desc: 'Traditional gharara styling with contemporary finish.' },
    /* Indo-Western */
    { id: 'indo-suhana', name: 'Suhana Cape Gown', cat: 'Indo-Western', price: 13500, img: 'assets/products/indo-suhana.jpg', sizes: CLOTHES_SIZES, tag: 'New', featured: true, desc: 'A flowing gown with a sheer embroidered cape, red-carpet ready.' },
    { id: 'indo-ayat', name: 'Ayat Fusion Jacket Suit', cat: 'Indo-Western', price: 10950, img: 'assets/products/indo-ayat.jpg', sizes: CLOTHES_SIZES, desc: 'A structured jacket silhouette with ethnic embroidery, East meets West.' },
    { id: 'indo-arsheen', name: 'Arsheen Drape Gown', cat: 'Indo-Western', price: 12950, img: 'assets/products/indo-arsheen.jpg', sizes: CLOTHES_SIZES, desc: 'Modern draped styling with traditional hand work accents.' },
    { id: 'indo-varda', name: 'Varda Indo-Western Set', cat: 'Indo-Western', price: 9950, img: 'assets/products/indo-varda.jpg', sizes: CLOTHES_SIZES, desc: 'A versatile fusion set that moves from mehendi to dinner.' },
    /* Jewelry & Bangles */
    { id: 'jewel-kundan-set', name: 'Regal Kundan Necklace Set', cat: 'Jewelry & Bangles', price: 5450, img: 'assets/products/jewel-kundan-set.jpg', sizes: FREE_SIZE, featured: true, desc: 'A statement kundan necklace with matching earrings, bridal-ready.' },
    { id: 'jewel-zumar-set', name: 'Zumar Pearl Necklace Set', cat: 'Jewelry & Bangles', price: 4250, img: 'assets/products/jewel-zumar-set.jpg', sizes: FREE_SIZE, desc: 'Lustrous pearl strands with gold-tone accents and earrings.' },
    { id: 'jewel-lagan-set', name: 'Lagan Gold-Plated Set', cat: 'Jewelry & Bangles', price: 3750, img: 'assets/products/jewel-lagan-set.jpg', sizes: FREE_SIZE, desc: 'Gold-plated necklace and earring set with festive warmth.' },
    { id: 'jewel-chandbali', name: 'Chandbali Earrings', cat: 'Jewelry & Bangles', price: 1950, img: 'assets/products/jewel-chandbali.jpg', sizes: FREE_SIZE, desc: 'Classic crescent chandbali earrings with delicate drops.' },
    { id: 'jewel-jhumka', name: 'Jhumka Earrings with Pearls', cat: 'Jewelry & Bangles', price: 1650, img: 'assets/products/jewel-jhumka.jpg', sizes: FREE_SIZE, desc: 'Traditional jhumka styling finished with pearl fringe.' },
    { id: 'jewel-bangles', name: 'Traditional Gold-Tone Bangles', cat: 'Jewelry & Bangles', price: 1250, img: 'assets/products/jewel-bangles.jpg', sizes: FREE_SIZE, desc: 'A full set of gold-tone bangles to complete any festive look.' }
  ];

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function money(n) { return 'KSh ' + Number(n).toLocaleString('en-KE'); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function byId(id) {
    for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === id) return PRODUCTS[i]; }
    return null;
  }

  /* ---------- toast ---------- */
  var toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  /* ---------- cart ---------- */
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CONFIG.cartKey)) || {}; }
    catch (e) { return {}; }
  }
  function saveCart(c) {
    try { localStorage.setItem(CONFIG.cartKey, JSON.stringify(c)); } catch (e) {}
    updateBadge();
  }
  function cartCount(c) {
    c = c || getCart();
    var n = 0;
    Object.keys(c).forEach(function (k) { n += c[k].qty; });
    return n;
  }
  function updateBadge() {
    $$('.cart-count').forEach(function (el) {
      var n = cartCount();
      el.textContent = n > 99 ? '99+' : String(n);
      el.classList.toggle('on', n > 0);
    });
  }
  function addToCart(id, size) {
    var p = byId(id);
    if (!p) return;
    size = size || (p.sizes && p.sizes.length ? (p.sizes.indexOf('M') > -1 ? 'M' : p.sizes[0]) : 'One size');
    var cart = getCart();
    var key = id + '__' + size;
    if (cart[key]) cart[key].qty += 1;
    else cart[key] = { id: id, size: size, qty: 1 };
    saveCart(cart);
    toast(p.name + ' added to your bag');
  }
  function waProductLink(p, size) {
    var msg = 'Hello ' + CONFIG.brandName + '. I am interested in the ' + p.name +
      (size && size !== 'One size' ? ' (size ' + size + ')' : '') +
      ' listed at ' + money(p.price) + ' on your website. Is it available?';
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
  }

  /* ---------- product card ---------- */
  function cardHTML(p) {
    var sizeNote = p.sizes && p.sizes.length > 1 ? 'Sizes ' + p.sizes[0] + ' to ' + p.sizes[p.sizes.length - 1] : '';
    return '' +
      '<article class="p-card reveal visible">' +
        '<a class="p-media" href="shop.html?cat=' + encodeURIComponent(p.cat) + '" aria-label="' + esc(p.name) + '">' +
          '<img src="' + p.img + '" alt="' + esc(p.name) + '" width="600" height="750" loading="lazy">' +
          (p.tag ? '<span class="p-tag">' + esc(p.tag) + '</span>' : '') +
        '</a>' +
        '<div class="p-body">' +
          '<span class="p-cat">' + esc(p.cat) + '</span>' +
          '<h3 class="p-name">' + esc(p.name) + '</h3>' +
          (sizeNote ? '<span class="p-sizes">' + sizeNote + '</span>' : '') +
          '<div class="p-row">' +
            '<span class="p-price">' + money(p.price) + '<small>in store and online</small></span>' +
            '<div class="p-actions">' +
              '<button class="p-add" type="button" data-add="' + esc(p.id) + '">Add to Bag</button>' +
              '<a class="p-wa" href="' + waProductLink(p) + '" target="_blank" rel="noopener" aria-label="Ask about ' + esc(p.name) + ' on WhatsApp">' + ICONS.wa + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  var ICONS = {
    wa: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.03c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.27z"/></svg>'
  };

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-add]');
    if (btn) { e.preventDefault(); addToCart(btn.getAttribute('data-add')); }
  });

  /* ---------- loader ---------- */
  var loader = $('#loader');
  if (loader) {
    document.body.style.overflow = 'hidden';
    var t0 = Date.now();
    var finish = function () {
      var wait = Math.max(0, CONFIG.loaderMs - (Date.now() - t0));
      setTimeout(function () {
        loader.classList.add('done');
        document.body.style.overflow = '';
        setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 700);
      }, wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish);
    setTimeout(function () {
      if (!loader.classList.contains('done')) {
        loader.classList.add('done');
        document.body.style.overflow = '';
      }
    }, CONFIG.loaderMs + 2500);
  }

  /* ---------- header ---------- */
  var header = $('.site-header');
  var onScroll = function () {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- drawer ---------- */
  var drawer = $('#m-drawer');
  var overlay = $('#drawer-overlay');
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  var navToggle = $('#nav-toggle');
  if (navToggle) navToggle.addEventListener('click', openDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  var closeBtn = $('#m-drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  $$('.m-links a').forEach(function (a) { a.addEventListener('click', closeDrawer); });

  /* ---------- reveal on scroll ---------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- hero slider ---------- */
  var slides = $$('.hero-slide');
  var dots = $$('.hero-dot');
  if (slides.length > 1) {
    var slideIdx = 0, slideTimer = null;
    function goSlide(n) {
      slideIdx = n % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('on', i === slideIdx); });
      dots.forEach(function (d, i) { d.classList.toggle('on', i === slideIdx); });
    }
    function play() { slideTimer = setInterval(function () { goSlide(slideIdx + 1); }, 5200); }
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () {
        clearInterval(slideTimer);
        goSlide(i);
        play();
      });
    });
    play();
  }

  /* ---------- homepage ---------- */
  var featuredGrid = $('#featured-grid');
  if (featuredGrid) {
    var featured = PRODUCTS.filter(function (p) { return p.featured; }).slice(0, 8);
    featuredGrid.innerHTML = featured.map(cardHTML).join('');
  }
  var catTiles = $$('.cat-card');
  if (catTiles.length) {
    catTiles.forEach(function (tile) {
      var cat = tile.getAttribute('data-cat');
      var n = PRODUCTS.filter(function (p) { return p.cat === cat; }).length;
      var countEl = tile.querySelector('.cat-count');
      if (countEl) countEl.textContent = n + ' styles';
    });
  }

  /* ---------- shop page ---------- */
  var shopGrid = $('#shop-grid');
  if (shopGrid) {
    var state = { cat: 'All', q: '', sort: 'featured' };

    function filtered() {
      var list = PRODUCTS.slice();
      if (state.cat !== 'All') list = list.filter(function (p) { return p.cat === state.cat; });
      if (state.q) {
        var q = state.q.toLowerCase();
        list = list.filter(function (p) {
          return p.name.toLowerCase().indexOf(q) > -1 ||
                 p.cat.toLowerCase().indexOf(q) > -1 ||
                 (p.desc || '').toLowerCase().indexOf(q) > -1;
        });
      }
      if (state.sort === 'low') list.sort(function (a, b) { return a.price - b.price; });
      else if (state.sort === 'high') list.sort(function (a, b) { return b.price - a.price; });
      else if (state.sort === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      return list;
    }

    function render() {
      var list = filtered();
      var countEl = $('#shop-count');
      if (countEl) countEl.innerHTML = 'Showing <b>' + list.length + '</b> ' + (list.length === 1 ? 'style' : 'styles') +
        (state.cat !== 'All' ? ' in ' + esc(state.cat) : '');
      if (!list.length) {
        shopGrid.innerHTML = '<div class="shop-empty" style="grid-column:1/-1">' +
          '<h3>No styles found</h3><p>Try a different search or explore another category.</p>' +
          '<a class="btn btn-gold" href="shop.html">View Everything</a></div>';
      } else {
        shopGrid.innerHTML = list.map(cardHTML).join('');
      }
      $$('[data-cat-btn]').forEach(function (b) {
        b.classList.toggle('on', b.getAttribute('data-cat-btn') === state.cat);
      });
    }

    function fromURL() {
      var u = new URLSearchParams(location.search);
      state.cat = u.get('cat') && CATEGORIES.indexOf(u.get('cat')) > -1 ? u.get('cat') : 'All';
      state.q = u.get('q') || '';
      var si = $('#shop-sort');
      if (si) si.value = state.sort;
      var qi = $('#shop-search-input');
      if (qi) qi.value = state.q;
    }
    function toURL() {
      var u = new URLSearchParams();
      if (state.cat !== 'All') u.set('cat', state.cat);
      if (state.q) u.set('q', state.q);
      var qs = u.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    }

    // build category list + chips
    var catList = $('#cat-list');
    var chips = $('#chips');
    var items = [{ name: 'All', n: PRODUCTS.length }].concat(
      CATEGORIES.map(function (c) {
        return { name: c, n: PRODUCTS.filter(function (p) { return p.cat === c; }).length };
      })
    );
    var liHTML = items.map(function (it) {
      return '<li><button type="button" data-cat-btn="' + esc(it.name) + '">' + esc(it.name) + '<i>' + it.n + '</i></button></li>';
    }).join('');
    if (catList) catList.innerHTML = liHTML;
    if (chips) chips.innerHTML = items.map(function (it) {
      return '<button type="button" data-cat-btn="' + esc(it.name) + '">' + esc(it.name) + '</button>';
    }).join('');

    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat-btn]');
      if (!b) return;
      e.preventDefault();
      state.cat = b.getAttribute('data-cat-btn');
      toURL(); render();
      var grid = $('#shop-results');
      if (grid) {
        var top = grid.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });

    var searchInput = $('#shop-search-input');
    var debounce = null;
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(debounce);
        var v = searchInput.value;
        debounce = setTimeout(function () {
          state.q = v;
          if (v) { state.cat = 'All'; }  // typing a search opens the scope to everything
          toURL(); render();
        }, 160);
      });
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') e.preventDefault();
      });
    }
    var sortSel = $('#shop-sort');
    if (sortSel) sortSel.addEventListener('change', function () { state.sort = sortSel.value; render(); });

    fromURL();
    render();
  }

  /* ---------- cart page ---------- */
  var cartItemsEl = $('#cart-items');
  if (cartItemsEl) {
    function renderCart() {
      var cart = getCart();
      var keys = Object.keys(cart);
      var layout = $('#cart-layout');
      var emptyEl = $('#cart-empty');
      if (!keys.length) {
        if (layout) layout.style.display = 'none';
        if (emptyEl) emptyEl.style.display = '';
        return;
      }
      if (layout) layout.style.display = '';
      if (emptyEl) emptyEl.style.display = 'none';
      cartItemsEl.innerHTML = keys.map(function (k) {
        var it = cart[k];
        var p = byId(it.id);
        if (!p) return '';
        return '<div class="cart-row" data-key="' + esc(k) + '">' +
          '<img src="' + p.img + '" alt="' + esc(p.name) + '" width="96" height="118" loading="lazy">' +
          '<div>' +
            '<h3 class="ci-name">' + esc(p.name) + '</h3>' +
            '<div class="ci-meta">' + esc(p.cat) + (it.size && it.size !== 'One size' ? ' | Size ' + esc(it.size) : '') + '</div>' +
            '<div class="qty" data-key="' + esc(k) + '">' +
              '<button type="button" data-qmod="-1" aria-label="Reduce quantity">-</button>' +
              '<span>' + it.qty + '</span>' +
              '<button type="button" data-qmod="1" aria-label="Increase quantity">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="ci-right">' +
            '<span class="ci-price">' + money(p.price * it.qty) + '</span>' +
            '<button type="button" class="ci-remove" data-remove="' + esc(k) + '">Remove</button>' +
          '</div>' +
        '</div>';
      }).join('');
      var subtotal = keys.reduce(function (s, k) {
        var it = cart[k]; var p = byId(it.id);
        return p ? s + p.price * it.qty : s;
      }, 0);
      var st = $('#cart-subtotal');
      if (st) st.textContent = money(subtotal);
      var gt = $('#cart-total');
      if (gt) gt.textContent = money(subtotal);
      var cn = $('#cart-note-count');
      if (cn) cn.textContent = cartCount(cart) + ' item' + (cartCount(cart) === 1 ? '' : 's');
    }
    document.addEventListener('click', function (e) {
      var mod = e.target.closest('[data-qmod]');
      var rem = e.target.closest('[data-remove]');
      var cart = getCart();
      if (mod) {
        var k1 = mod.closest('.qty').getAttribute('data-key');
        if (cart[k1]) {
          cart[k1].qty += parseInt(mod.getAttribute('data-qmod'), 10);
          if (cart[k1].qty < 1) delete cart[k1];
          saveCart(cart); renderCart();
        }
      } else if (rem) {
        var k2 = rem.getAttribute('data-remove');
        delete cart[k2];
        saveCart(cart); renderCart();
        toast('Item removed from your bag');
      }
    });
    renderCart();
  }

  /* ---------- checkout ---------- */
  var checkoutForm = $('#checkout-form');
  if (checkoutForm) {
    var coItems = $('#co-items');
    var coTotal = $('#co-total');
    var coCount = $('#co-count');
    var coNote = $('#co-empty-note');
    var formWrap = $('#checkout-form-wrap');
    var receiptEl = $('#receipt');

    function coRender() {
      var cart = getCart();
      var keys = Object.keys(cart);
      var subtotal = 0, count = 0;
      if (coItems) {
        coItems.innerHTML = keys.map(function (k) {
          var it = cart[k]; var p = byId(it.id);
          if (!p) return '';
          subtotal += p.price * it.qty; count += it.qty;
          return '<div class="co-item">' +
            '<img src="' + p.img + '" alt="" width="54" height="66" loading="lazy">' +
            '<div><div class="ci-n">' + esc(p.name) + '</div><div class="ci-m">' + esc(p.cat) +
              (it.size && it.size !== 'One size' ? ' | Size ' + esc(it.size) : '') + ' | Qty ' + it.qty + '</div></div>' +
            '<span class="ci-p">' + money(p.price * it.qty) + '</span>' +
          '</div>';
        }).join('');
      }
      if (coTotal) coTotal.textContent = money(subtotal);
      if (coCount) coCount.textContent = count + ' item' + (count === 1 ? '' : 's');
      if (!keys.length) {
        if (coNote) coNote.style.display = '';
        if (formWrap) formWrap.style.display = 'none';
      }
    }

    // radio cards highlight
    $$('.radio-card input').forEach(function (inp) {
      inp.addEventListener('change', function () {
        var group = inp.name;
        $$('.radio-card input[name="' + group + '"]').forEach(function (o) {
          o.closest('.radio-card').classList.toggle('picked', o.checked);
        });
      });
    });

    function setError(id, show) {
      var f = document.getElementById(id);
      if (f) f.closest('.form-field').classList.toggle('error', show);
      return !show;
    }

    checkoutForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = ($('#cf-name') || {}).value || '';
      var phone = ($('#cf-phone') || {}).value || '';
      var county = ($('#cf-county') || {}).value || '';
      var town = ($('#cf-town') || {}).value || '';
      var delivery = ($('input[name="delivery"]:checked') || {}).value || '';
      var payment = ($('input[name="payment"]:checked') || {}).value || '';
      var notes = ($('#cf-notes') || {}).value || '';
      var terms = $('#cf-terms');

      var ok = true;
      ok = setError('cf-name', name.trim().length < 2) && ok;
      ok = setError('cf-phone', !/^[0-9+\s()-]{9,15}$/.test(phone.trim())) && ok;
      ok = setError('cf-county', !county) && ok;
      ok = setError('cf-town', town.trim().length < 2) && ok;
      if (terms && terms.classList) {
        var termsOK = terms.checked;
        terms.closest('.terms-row').classList.toggle('error', !termsOK);
        ok = termsOK && ok;
      }
      if (!ok) { toast('Please complete the highlighted fields'); return; }

      var cart = getCart();
      var keys = Object.keys(cart);
      if (!keys.length) { toast('Your bag is empty'); return; }

      var ref = 'BXKE-' + String(Math.floor(100000 + Math.random() * 900000));
      var subtotal = 0, lines = [];
      keys.forEach(function (k) {
        var it = cart[k]; var p = byId(it.id);
        if (!p) return;
        subtotal += p.price * it.qty;
        lines.push('- ' + p.name + (it.size && it.size !== 'One size' ? ' (size ' + it.size + ')' : '') + ' x' + it.qty + ' : ' + money(p.price * it.qty));
      });

      var waMsg = 'Hello ' + CONFIG.brandName + '. I have placed an order on your website.' +
        '\nOrder ref: ' + ref +
        '\nName: ' + name.trim() +
        '\nPhone: ' + phone.trim() +
        '\nDelivery: ' + delivery +
        '\nCounty: ' + county + (town.trim() ? ', ' + town.trim() : '') +
        '\nPayment: ' + payment +
        (notes.trim() ? '\nNotes: ' + notes.trim() : '') +
        '\nItems:\n' + lines.join('\n') +
        '\nTotal: ' + money(subtotal) +
        '\nPlease confirm availability and delivery details. Thank you!';

      // popup
      var popup = $('#order-popup');
      var popupRef = $('#op-ref');
      if (popupRef) popupRef.textContent = ref;
      if (popup) popup.classList.add('open');

      var complete = function () {
        if (popup) popup.classList.remove('open');
        // receipt
        if (receiptEl) {
          receiptEl.style.display = '';
          var rRows = $('#receipt-rows');
          if (rRows) {
            rRows.innerHTML = keys.map(function (k) {
              var it = cart[k]; var p = byId(it.id);
              if (!p) return '';
              return '<div class="receipt-row"><span>' + esc(p.name) + (it.size && it.size !== 'One size' ? ' (' + esc(it.size) + ')' : '') + ' x ' + it.qty + '</span><span>' + money(p.price * it.qty) + '</span></div>';
            }).join('') +
            '<div class="receipt-row total"><span>Total</span><span>' + money(subtotal) + '</span></div>';
          }
          var rRef = $('#receipt-ref');
          if (rRef) rRef.textContent = ref;
          var rMeta = $('#receipt-meta');
          if (rMeta) rMeta.textContent = name.trim() + ' | ' + delivery + ' | ' + payment;
          var rWa = $('#receipt-whatsapp');
          if (rWa) rWa.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(waMsg);
          if (formWrap) formWrap.style.display = 'none';
          var coSum = $('#co-summary');
          if (coSum) coSum.style.display = 'none';
          receiptEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        saveCart({});
        toast('Order placed. Reference ' + ref);
      };

      // Formspree-ready: set data-endpoint on the form to also email the order
      var endpoint = checkoutForm.getAttribute('data-endpoint');
      var autoDismiss = setTimeout(complete, 2100);
      if (popup) {
        popup.addEventListener('click', function (ev) {
          if (ev.target === popup) { clearTimeout(autoDismiss); complete(); }
        });
      }
      if (endpoint) {
        var fd = new FormData();
        fd.append('Order ref', ref);
        fd.append('Customer', name.trim());
        fd.append('Phone', phone.trim());
        fd.append('County', county);
        fd.append('Town or estate', town.trim());
        fd.append('Delivery', delivery);
        fd.append('Payment', payment);
        fd.append('Notes', notes.trim());
        fd.append('Items', lines.join('\n'));
        fd.append('Total', money(subtotal));
        fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).catch(function () {});
      }
    });

    ['cf-name', 'cf-phone', 'cf-county', 'cf-town'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () { setError(id, false); });
        el.addEventListener('change', function () { setError(id, false); });
      }
    });

    var again = $('#order-again');
    if (again) {
      again.addEventListener('click', function (e) {
        e.preventDefault();
        location.reload();
      });
    }

    coRender();
  }

  /* ---------- content protection (deterrent) ---------- */
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c' || k === 'k')) ||
        (e.ctrlKey && k === 'u') ||
        (e.metaKey && e.altKey && (k === 'i' || k === 'j' || k === 'c'))) {
      e.preventDefault();
      toast('Content is protected');
      return false;
    }
  });

  /* ---------- footer year ---------- */
  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- smooth anchor offset ---------- */
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  updateBadge();
})();
