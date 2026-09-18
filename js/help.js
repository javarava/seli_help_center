/* ── Seli Help Center — Scripts ─────────────────────────────────────────
   Plain vanilla JavaScript, no build step.
   HELP_STRUCTURE is the single source of truth that drives the sidebar,
   the search dropdowns and the search results page.                             */

// ── Site structure (drives sidebar + search) ─────────────────────────────
const HELP_STRUCTURE = [
  {
    id: 'seli-market',
    title: 'Seli Market',
    icon: 'bi-shop',
    tint: 'c-red',
    desc: 'Buy and sell on the marketplace — listings, escrow-secured purchases, stores and sellers.',
    articles: [
      { id: 'what-is-seli-market',        title: 'What is Seli Market?',                  desc: 'A video-first marketplace where every purchase is protected by escrow.' },
      { id: 'browsing-and-searching',     title: 'Browsing and Searching',                desc: 'Explore products, filter by category and price, and save favourites.' },
      { id: 'buying-with-escrow',         title: 'Buying with Escrow',                    desc: 'How escrow protects your money until your order is delivered and verified.' },
      { id: 'tracking-your-order',        title: 'Tracking Your Order',                   desc: 'Follow your order from a placed to delivered across every status.' },
      { id: 'opening-a-store',            title: 'Opening a Store',                       desc: 'How merchants set up a storefront on Seli Market and get verified.' },
      { id: 'creating-a-listing',         title: 'Creating a Listing',                    desc: 'Add products manually, set prices, and write great descriptions.' },
      { id: 'listing-requirements',       title: 'Listing Requirements',                  desc: 'What your listings must include — photos, video, condition and authenticity.' },
      { id: 'verified-seller-program',    title: 'Verified Seller Program',               desc: 'Earn the Verified Seller badge and reach more buyers with confidence.' },
      { id: 'refunds-and-claims',         title: 'Refunds and Claims',                    desc: 'Raise a claim under Buyer Protection and understand what happens next.' },
      { id: 'merchant-payouts-and-fees',  title: 'Merchant Payouts and Fees',             desc: 'Selling fees, payout timing and how you receive your earnings.' },
    ]
  },
  {
    id: 'seli-pilot',
    title: 'Seli Pilot',
    icon: 'bi-bicycle',
    tint: 'c-turq',
    desc: 'Deliver — accept jobs, make deliveries, and earn as a verified Seli Pilot.',
    articles: [
      { id: 'about-seli-pilot',                 title: 'About Seli Pilot',                    desc: 'An overview of the delivery programme for Pilots in Nigeria.' },
      { id: 'becoming-a-pilot',                 title: 'Becoming a Pilot',                    desc: 'Apply, complete onboarding, and start accepting delivery jobs.' },
      { id: 'accepting-delivery-jobs',          title: 'Accepting Delivery Jobs',             desc: 'How the job queue works and how to accept a delivery near you.' },
      { id: 'starting-and-completing-a-delivery', title: 'Starting and Completing a Delivery', desc: 'Pick-up and drop-off steps, customer verification, and order completion.' },
      { id: 'delivery-codes-and-proof',         title: 'Delivery Codes and Proof',            desc: 'Use delivery codes and photos to confirm every completed order.' },
      { id: 'pilot-earnings-and-payouts',       title: 'Pilot Earnings and Payouts',          desc: 'See how fares are calculated and how you get paid.' },
      { id: 'ratings-and-performance',          title: 'Ratings and Performance',             desc: 'How ratings work and how they affect future job offers.' },
      { id: 'pilot-safety-and-support',         title: 'Pilot Safety and Support',            desc: 'Staying safe on the road and getting help from Seli support.' },
    ]
  },
  {
    id: 'shemi-ai',
    title: 'Shemi AI',
    icon: 'bi-magic',
    tint: 'c-purple',
    desc: 'Generate polished listings in seconds from a single photo.',
    articles: [
      { id: 'what-is-shemi-ai',                title: 'What is Shemi AI?',              desc: 'Shemi turns a photo into a ready-to-publish product listing.' },
      { id: 'creating-a-listing-from-a-photo', title: 'Creating a Listing from a Photo', desc: 'Upload a photo and let Shemi draft the title, description and price.' },
      { id: 'editing-and-pricing',             title: 'Editing and Pricing Shemi Listings', desc: 'Refine AI copy, swap photos, and set or adjust the suggested price.' },
      { id: 'publishing-shemi-listings',       title: 'Publishing Shemi Listings to Market', desc: 'Send your finished listing to Seli Market with one tap.' },
      { id: 'shemi-best-practices',            title: 'Shemi Best Practices',           desc: 'Take the best photos and phrase prompts for better listings.' },
      { id: 'shemi-limits-and-troubleshooting',title: 'Shemi Limits and Troubleshooting', desc: 'Message limits, supported photos, and fixing common errors.' },
    ]
  },
  {
    id: 'orders-payments',
    title: 'Orders, Payments & Escrow',
    icon: 'bi-credit-card',
    tint: 'c-teal',
    desc: 'Escrow, payment methods, refunds, fees and payouts.',
    articles: [
      { id: 'how-escrow-works',          title: 'How Escrow Works',               desc: 'The payment-protection journey from checkout to fund release.' },
      { id: 'paying-on-seli',            title: 'Paying on Seli',                 desc: 'Cards via Paystack, credits, and supported payment methods.' },
      { id: 'refunds-and-resolutions',   title: 'Refunds and Resolutions',        desc: 'The possible outcomes of a claim and how refunds are processed.' },
      { id: 'fees-and-pricing',          title: 'Fees and Pricing',               desc: 'Why we charge a 5.5% seller fee and how pricing is displayed.' },
      { id: 'invoices-and-receipts',     title: 'Invoices and Receipts',          desc: 'Download receipts for purchases, payouts and settled claims.' },
      { id: 'payout-schedule-and-banks', title: 'Payout Schedule and Banks',      desc: 'When funds reach sellers and pilots, and supported banks.' },
    ]
  },
  {
    id: 'account',
    title: 'Account & Settings',
    icon: 'bi-person-gear',
    tint: 'c-lime',
    desc: 'Sign in, security, notifications and account management.',
    articles: [
      { id: 'creating-an-account-and-signing-in', title: 'Creating an Account and Signing In', desc: 'How to register and sign in to Seli on any device.' },
      { id: 'resetting-your-password',            title: 'Resetting Your Password',            desc: 'Recover a forgotten password in a few steps.' },
      { id: 'signing-in-troubleshooting',         title: 'Signing-in Troubleshooting',         desc: 'Fix OTP, verification and temporary lockout issues.' },
      { id: 'two-factor-and-security',            title: 'Two-Factor Authentication and Security', desc: 'Add a second verification step and keep your account safe.' },
      { id: 'notifications-and-preferences',      title: 'Notifications and Preferences',      desc: 'Choose what messages you receive — orders, payouts and alerts.' },
      { id: 'deleting-or-deactivating',           title: 'Deleting or Deactivating Your Account', desc: 'Deactivate temporarily or delete your Seli account permanently.' },
    ]
  },
  {
    id: 'trust-safety',
    title: 'Trust & Safety',
    icon: 'bi-shield-check',
    tint: 'c-ink',
    desc: 'Reporting, prohibited items, verified badges, privacy and policies.',
    articles: [
      { id: 'reporting-a-user-or-listing',   title: 'Reporting a User or Listing',  desc: 'How to report content or behaviour that breaks our rules.' },
      { id: 'prohibited-and-restricted-items', title: 'Prohibited and Restricted Items', desc: 'What cannot be sold on Seli, and what needs approval.' },
      { id: 'verified-badges-and-fraud',     title: 'Verified Badges and Fraud Prevention', desc: 'Understanding verified badges and protecting yourself from scams.' },
      { id: 'privacy-and-your-data',         title: 'Privacy and Your Data',        desc: 'What data we collect and how you can control it.' },
      { id: 'platform-policies',             title: 'Seli Platform Policies',        desc: 'Links to our Terms, Privacy, Escrow and Cookie policies.' },
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: 'bi-book',
    tint: 'c-teal',
    desc: 'FAQ, glossary and reference material for Seli sellers, buyers and pilots.',
    articles: [
      { id: 'faq',      title: 'FAQ',       desc: 'Answers to the most frequently asked questions about Seli.' },
      { id: 'glossary', title: 'Glossary',  desc: 'Definitions of common Seli terms — escrow, delivery code, Shemi, and more.' },
    ]
  }
];

// ── Detect base path ─────────────────────────────────────────────────────
// Returns '' for root-level pages, '../' for pages inside a category folder.
function getBase() {
  const knownDirs = HELP_STRUCTURE.map(c => c.id).concat(['resources']);
  const parts = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const inSub = parts.some(p => knownDirs.includes(p));
  return inSub ? '../' : '';
}

// ── Flatten categories→articles for lookup by id ─────────────────────────
function findArticle(catId, pageId) {
  const cat = HELP_STRUCTURE.find(c => c.id === catId);
  if (!cat) return null;
  const art = cat.articles.find(a => a.id === pageId);
  return art ? { cat, art } : null;
}
function popularArticles(count) {
  /* Hand-picked "popular" articles shown on the home page. */
  const ids = [
    ['orders-payments', 'how-escrow-works'],
    ['seli-market', 'buying-with-escrow'],
    ['seli-pilot', 'becoming-a-pilot'],
    ['shemi-ai', 'creating-a-listing-from-a-photo'],
    ['seli-market', 'opening-a-store'],
    ['account', 'resetting-your-password'],
  ];
  const out = [];
  ids.slice(0, count || 6).forEach(([catId, artId]) => {
    const f = findArticle(catId, artId);
    if (f) out.push({ cat: f.cat, art: f.art });
  });
  return out;
}

// ── Build sidebar HTML ────────────────────────────────────────────────────
function buildSidebar(base, activeSection, activePage, isMobile) {
  const suffix = isMobile ? '-mobile' : '';
  let html = `<a href="${base}index.html" class="sidebar-home-link"><i class="bi bi-house-door-fill"></i> Help Home</a>`;

  HELP_STRUCTURE.forEach(cat => {
    const isActive = cat.id === activeSection;
    const collapseId = `collapse-${cat.id}${suffix}`;
    html += `
      <div class="sidebar-section">
        <button class="sidebar-section-btn ${isActive ? 'active-section' : ''} ${!isActive ? 'collapsed' : ''}"
                data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isActive}">
          <span><i class="bi ${cat.icon} sidebar-section-icon"></i>${cat.title}</span>
          <i class="bi bi-chevron-down" style="font-size:11px"></i>
        </button>
        <div id="${collapseId}" class="collapse ${isActive ? 'show' : ''}">
          <ul class="sidebar-links">`;
    cat.articles.forEach(art => {
      const href = `${base}${cat.id}/${art.id}.html`;
      const isArticleActive = cat.id === activeSection && art.id === activePage;
      html += `<li><a href="${href}" class="${isArticleActive ? 'active' : ''}">${art.title}</a></li>`;
    });
    html += `</ul></div></div>`;
  });

  html += `<div class="sidebar-utility">
      <a href="${base}contact.html"><i class="bi bi-envelope"></i> Contact Us</a>
      <a href="${base}index.html#popular"><i class="bi bi-collection"></i> Popular articles</a>
    </div>`;
  return html;
}

// ── Init sidebar (desktop + mobile offcanvas) ──────────────────────────────
function initSidebar() {
  const base = getBase();
  const body = document.body;
  const section = body.dataset.section || '';
  const page = body.dataset.page || '';

  const desktopEl = document.getElementById('sidebar-nav');
  if (desktopEl) desktopEl.innerHTML = buildSidebar(base, section, page, false);

  const mobileEl = document.getElementById('sidebar-nav-mobile');
  if (mobileEl) mobileEl.innerHTML = buildSidebar(base, section, page, true);
}

// ── Search data ───────────────────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];
  HELP_STRUCTURE.forEach(cat => {
    cat.articles.forEach(art => {
      index.push({
        title: art.title,
        desc: art.desc,
        category: cat.title,
        catId: cat.id,
        artId: art.id,
        href: `${cat.id}/${art.id}.html`,
      });
    });
  });
  return index;
}

function doesMatch(item, q) {
  return (
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  );
}

/** Renders the shared dropdown used by navbar + hero search inputs. */
function renderDropdown(dropdown, index, q, base) {
  const matches = index.filter(i => doesMatch(i, q)).slice(0, 10);
  if (!matches.length) {
    dropdown.innerHTML = `<div class="sr-empty">No results for "<strong>${escapeHtml(q)}</strong>". Try "escrow", "password" or "pilot".</div>`;
    return;
  }

  /* Group matches by category to keep the dropdown scannable. */
  const grouped = {};
  matches.forEach(m => { (grouped[m.category] = grouped[m.category] || []).push(m); });

  let html = '';
  Object.keys(grouped).forEach(catName => {
    html += `<div class="sr-group-label">${catName}</div>`;
    grouped[catName].forEach(m => {
      html += `<a class="sr-item" href="${base}${m.href}">
        <div class="sr-item-title">${escapeHtml(m.title)}</div>
        <div class="sr-item-cat">${escapeHtml(m.desc)}</div>
      </a>`;
    });
  });
  html += `<a class="sr-footer" href="${base}search.html?q=${encodeURIComponent(q)}">
      See all results for "${escapeHtml(q)}" <i class="bi bi-arrow-right"></i>
    </a>`;
  dropdown.innerHTML = html;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/** Attaches live search to every input carrying .help-search-input. */
function initSearch() {
  const base = getBase();
  const index = buildSearchIndex();
  const inputs = document.querySelectorAll('.help-search-input');

  inputs.forEach(input => {
    const wrap = input.closest('.search-relative');
    if (!wrap || wrap.dataset.bound) return;
    wrap.dataset.bound = '1';

    let dropdown = wrap.querySelector('.search-results');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results';
      dropdown.style.display = 'none';
      wrap.appendChild(dropdown);
    }

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { dropdown.style.display = 'none'; return; }
      renderDropdown(dropdown, index, q, base);
      dropdown.style.display = 'block';
    });

    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) dropdown.style.display = 'none';
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') dropdown.style.display = 'none';
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) window.location.href = `${base}search.html?q=${encodeURIComponent(q)}`;
      }
    });
  });
}

// ── Home hero search: also live-filters category cards ────────────────────
function initHomeFilter() {
  const heroInput = document.getElementById('heroSearch');
  if (!heroInput) return;

  heroInput.addEventListener('input', () => {
    const q = heroInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.category-card-wrap');
    let visible = 0;
    cards.forEach(card => {
      const show = !q || card.textContent.toLowerCase().includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    const none = document.getElementById('noResults');
    if (none) none.style.display = visible === 0 ? 'block' : 'none';
  });
}

// ── Search results page (search.html?q=...) ───────────────────────────────
function initSearchPage() {
  const container = document.getElementById('searchResults');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || '').trim().toLowerCase();
  const queryEl = document.getElementById('searchQuery');
  if (queryEl) queryEl.textContent = q || '…';

  if (!q) {
    container.innerHTML = `<div class="sr-empty" style="text-align:center;padding:40px">
      Type a few words above to find help articles, e.g. "escrow", "pilot" or "store".</div>`;
    return;
  }

  const index = buildSearchIndex();
  const matches = index.filter(i => doesMatch(i, q));
  const summaryEl = document.getElementById('resultsSummary');
  if (summaryEl) summaryEl.textContent = `We found ${matches.length} article${matches.length === 1 ? '' : 's'} for your search.`;

  if (!matches.length) {
    container.innerHTML = `<p class="text-center py-4 text-muted">Nothing matched "<strong>${escapeHtml(q)}</strong>". Check the spelling or try a different keyword.</p>`;
    return;
  }

  container.innerHTML = matches.map(m => `
    <a class="result-item" href="${m.href}">
      <i class="bi bi-file-earmark-text" style="font-size:1.2rem;color:var(--help-red);margin-top:2px"></i>
      <div>
        <div class="result-cat">${escapeHtml(m.category)}</div>
        <div class="result-title">${escapeHtml(m.title)}</div>
        <div class="result-desc">${escapeHtml(m.desc)}</div>
      </div>
    </a>`).join('');
}

// ── Home "popular" section + "resources" counts (build from structure) ────
function renderHome() {
  const popularEl = document.getElementById('popularList');
  if (popularEl) {
    popularEl.innerHTML = popularArticles(6).map(p => `
      <a class="popular-card" href="${p.cat.id}/${p.art.id}.html">
        <span class="pc-cat">${p.cat.title}</span>
        <span class="pc-title">${p.art.title}</span>
        <span class="pc-desc">${p.art.desc}</span>
      </a>`).join('');
  }

  /* Inject article counts into each category card so numbers never drift
     from the source of truth. */
  document.querySelectorAll('[data-cat-count]').forEach(el => {
    const cat = HELP_STRUCTURE.find(c => c.id === el.dataset.catCount);
    if (cat) el.textContent = `${cat.articles.length} articles`;
  });

  /* Render category landing article lists + counts. */
  document.querySelectorAll('[data-cat-list]').forEach(el => {
    const cat = HELP_STRUCTURE.find(c => c.id === el.dataset.catList);
    if (!cat) return;
    el.innerHTML = cat.articles.map(a => `
      <li class="article-list-item">
        <a href="${a.id}.html">
          <i class="bi ${cat.icon} article-list-icon"></i>
          <div>
            <div class="article-list-title">${a.title}</div>
            <div class="article-list-desc">${a.desc}</div>
          </div>
        </a>
      </li>`).join('');
  });
}

// ── Auto-build "Jump to section" from h2s inside the article body ─────────
function initJumpToc() {
  const toc = document.getElementById('jumpToc');
  if (!toc) return;
  const headings = document.querySelectorAll('.article-body h2');
  const ul = document.createElement('ul');
  headings.forEach(el => {
    if (!el.id) el.id = el.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + el.id;
    a.textContent = el.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });
  if (headings.length) toc.appendChild(ul);
}

// ── Was this helpful widget ───────────────────────────────────────────────
function initHelpful() {
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const widget = btn.closest('.was-helpful');
      widget.querySelectorAll('.vote-btn').forEach(b => b.classList.remove('voted'));
      btn.classList.add('voted');
      const thanks = widget.querySelector('.thanks-msg');
      if (thanks) {
        thanks.style.display = 'block';
        const btns = widget.querySelector('.vote-btns');
        if (btns) btns.style.display = 'none';
      }
    });
  });
}

// ── Mobile sidebar offcanvas toggle ───────────────────────────────────────
function initMobileSidebar() {
  const btn = document.getElementById('sidebarToggleBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const offcanvas = document.getElementById('sidebarOffcanvas');
    if (offcanvas && window.bootstrap) {
      window.bootstrap.Offcanvas.getOrCreateInstance(offcanvas).toggle();
    }
  });
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initSearch();
  initHomeFilter();
  initSearchPage();
  renderHome();
  initJumpToc();
  initHelpful();
  initMobileSidebar();
});

// ── Display current year ───────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();