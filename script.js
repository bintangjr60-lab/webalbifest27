/* ==========================================================================
   ALBIDAYAH FESTIVAL 2027 — SCRIPT.JS
   File ini HANYA berisi logika/fungsi website.
   Untuk mengganti TEKS atau GAMBAR, edit content.js — bukan file ini.
   ========================================================================== */

(function () {
  "use strict";

  const data = window.websiteData;
  if (!data) {
    console.error("content.js belum dimuat atau websiteData tidak ditemukan.");
    return;
  }

  /* ---------- ICON SET (inline SVG, ringan, tanpa library eksternal) ---------- */
  const ICONS = {
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',
    brush: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 5 17.5v-1.05a2.5 2.5 0 0 1-1.5-4.5A2.5 2.5 0 0 1 5 8v-1a2.5 2.5 0 0 1 2-2.45A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 19 17.5v-1.05a2.5 2.5 0 0 0 1.5-4.5A2.5 2.5 0 0 0 19 8v-1a2.5 2.5 0 0 0-2-2.45A2.5 2.5 0 0 0 14.5 2z"/></svg>',
    drum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9M12 14v8M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.32-1.94 1.36-.5.05-1.02.24-3.4-.7-2.87-1.14-4.71-4.05-4.86-4.24-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.38c.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.24.57.8 1.97.87 2.11.07.14.11.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.19 1.36.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.27.14.44.2.5.32.07.12.07.68-.17 1.35z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.72-.63-1.2-1.5-1.32-2.48h-3.02v13.6c0 1.3-1.06 2.36-2.36 2.36a2.36 2.36 0 0 1 0-4.72c.24 0 .48.04.7.1V11.6a5.4 5.4 0 0 0-.7-.05 5.36 5.36 0 0 0-5.36 5.36 5.36 5.36 0 0 0 5.36 5.36 5.36 5.36 0 0 0 5.36-5.36V9.83a8.32 8.32 0 0 0 4.86 1.55V8.36c-1.24 0-2.36-.42-3.52-1.53z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.9 2.8 12 2.8 12 2.8h-.01s-4.9 0-8.2.34c-.46.05-1.46.06-2.36 1C.72 4.86.5 6.5.5 6.5S.26 8.42.26 10.34v1.8C.26 14.06.5 16 .5 16s.23 1.64.94 2.36c.9.94 2.08.9 2.6 1 1.9.18 8 .24 8 .24s4.9-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.24-1.92.24-3.84v-1.8c0-1.92-.24-3.84-.24-3.84zM9.6 14.98V7.9l6.4 3.55-6.4 3.53z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  };
  function icon(name) { return ICONS[name] || ""; }

  /* ---------- HELPERS ---------- */
  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function setText(id, text) {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  }
  function setHTML(id, html) {
    const node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  /* =====================================================================
     RENDER: NAVBAR
     ===================================================================== */
  function renderNavbar() {
    const { navbar } = data;
    setHTML(
      "navbar-brand",
      `<img src="${navbar.logoImage}" alt="Logo Albifest" /><span>${navbar.brandName} <span class="year">${navbar.brandYear}</span></span>`
    );

    const linksHTML = navbar.links.map((l) => `<a href="${l.href}">${l.label}</a>`).join("");
    setHTML("navbar-links", linksHTML);

    const ctaEl = document.getElementById("navbar-cta");
    if (ctaEl) {
      ctaEl.style.display = "none";
      ctaEl.setAttribute("aria-hidden", "true");
      ctaEl.removeAttribute("href");
    }

    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.innerHTML = linksHTML;

    // close mobile menu when a link is tapped
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMobileMenu());
    });
  }

  function initNavbarBehavior() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
      toggleBackToTop();
    });

    const toggleBtn = document.getElementById("navbar-toggle");
    toggleBtn.addEventListener("click", () => {
      const isOpen = document.getElementById("mobile-menu").classList.toggle("is-open");
      toggleBtn.classList.toggle("is-open", isOpen);
      toggleBtn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }
  function closeMobileMenu() {
    document.getElementById("mobile-menu").classList.remove("is-open");
    document.getElementById("navbar-toggle").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* =====================================================================
     RENDER: HERO
     ===================================================================== */
  function renderHero() {
    const { hero } = data;
    setText("hero-eyebrow", hero.eyebrow);
    setHTML("hero-title", `${hero.title} <span class="accent">${hero.titleAccent}</span>`);
    setText("hero-subtitle", hero.subtitle);
    setText("hero-theme", `“${hero.theme}”`);
    setText("hero-desc", hero.description);
    setText("hero-date-label", hero.dateLabel);
    setText("hero-date-value", hero.dateShort);

    const img = document.getElementById("hero-image");
    img.src = hero.image;
    img.alt = hero.imageAlt;

    setHTML(
      "hero-actions",
      `<a href="${hero.secondaryButtonHref}" class="btn btn-outline-dark">${hero.secondaryButtonLabel}</a>`
    );

  }

  /* =====================================================================
     COUNTDOWN
     ===================================================================== */
  function initCountdown() {
    const target = new Date(data.hero.eventDateISO).getTime();
    const grid = document.getElementById("countdown-grid");
    if (!target || isNaN(target)) return;

    function render() {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      grid.innerHTML = [
        [d, "Hari"], [h, "Jam"], [m, "Menit"], [s, "Detik"],
      ].map(([val, label]) =>
        `<div class="countdown-item"><div class="num">${String(val).padStart(2, "0")}</div><div class="unit">${label}</div></div>`
      ).join("");
    }
    render();
    setInterval(render, 1000);
  }

  /* =====================================================================
     RENDER: CABANG LOMBA
     ===================================================================== */
  function renderCompetitions() {
    const c = data.competitions;
    setText("comp-eyebrow", c.eyebrow);
    setText("comp-title", c.title);
    setText("comp-subtitle", c.subtitle);

    setHTML(
      "comp-grid",
      c.list
        .map(
          (item) => {
            const cardClass = item.id === "hadroh" ? "comp-card reveal comp-card-center" : "comp-card reveal";
            return `
        <article class="${cardClass}" data-id="${item.id}">
          <div class="comp-card-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <div class="comp-card-icon">${icon(item.icon)}</div>
          </div>
          <div class="comp-card-body">
            <h3 class="comp-card-name">${item.name}</h3>
            <span class="comp-card-category">${item.category}</span>
            <p class="comp-card-desc">${item.shortDescription}</p>
            <button class="comp-card-btn" data-open-modal="${item.id}">
              Lihat Detail ${icon("chevron")}
            </button>
          </div>
        </article>`;
          }
        )
        .join("")
    );

    setHTML(
      "comp-legend",
      c.list
        .map((item) => `<div class="comp-legend-item">${icon(item.icon)}<span>${item.name}</span></div>`)
        .join("")
    );

    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => openCompetitionModal(btn.getAttribute("data-open-modal")));
    });
  }

  function openCompetitionModal(id) {
    const item = data.competitions.list.find((c) => c.id === id);
    if (!item) return;
    const d = item.detail;

    let fields = "";
    const fieldMap = [
      ["Peserta", d.peserta],
      ["Kategori Tingkat", item.category],
      ["Durasi Penampilan", d.durasi],
      ["Tempat", d.tempat],
      ["Sistem Perlombaan", d.sistem],
      ["Jadwal", d.jadwal],
      ["Hadiah", d.hadiah],
      ["Biaya Pendaftaran", d.biaya],
      ["Ketentuan Tambahan", d.ketentuanTambahan],
    ];
    fieldMap.forEach(([label, value]) => {
      if (!value) return;
      fields += `<div class="modal-field"><div class="label">${label}</div><div class="value">${value}</div></div>`;
    });
    if (d.tema && d.tema.length) {
      fields += `<div class="modal-field"><div class="label">Tema</div><ul>${d.tema.map((t) => `<li>${t}</li>`).join("")}</ul></div>`;
    }
    if (d.ketentuan && d.ketentuan.length) {
      fields += `<div class="modal-field"><div class="label">Ketentuan</div><ul>${d.ketentuan.map((t) => `<li>${t}</li>`).join("")}</ul></div>`;
    }

    setHTML(
      "modal-content",
      `<h3 class="modal-title">${item.name}</h3>
       <span class="modal-category">${item.category}</span>
       <div class="modal-body">${fields}</div>`
    );

    document.getElementById("modal-overlay").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    document.getElementById("modal-overlay").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* =====================================================================
     RENDER: JADWAL
     ===================================================================== */
  function renderBazaar() {
    const b = data.bazaar;
    setText("bazaar-eyebrow", b.eyebrow);
    setText("bazaar-title", b.title);
    setText("bazaar-subtitle", b.subtitle);

    setHTML(
      "bazaar-grid",
      b.items
        .map(
          (item) => `
        <div class="bazaar-card reveal">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>`
        )
        .join("")
    );
  }

  function renderSchedule() {
    const s = data.schedule;
    setText("schedule-eyebrow", s.eyebrow);
    setText("schedule-title", s.title);
    setText("schedule-subtitle", s.subtitle);
    setText("schedule-note", s.note);

    setHTML(
      "schedule-tabs",
      s.days
        .map((day, i) => `<button class="schedule-tab${i === 0 ? " is-active" : ""}" data-day="${i}">${day.dayName}<br><small>${day.date}</small></button>`)
        .join("")
    );

    setHTML(
      "schedule-days",
      s.days
        .map(
          (day, i) => `
        <div class="schedule-day${i === 0 ? " is-active" : ""}" data-day-panel="${i}">
          <div class="schedule-day-header">${day.dayName}, ${day.date}</div>
          <div class="schedule-list">
            ${day.items
              .map(
                (it) => `
              <div class="schedule-item">
                <div class="schedule-time">${it.time}</div>
                <div>
                  <div class="schedule-item-title">${it.title}</div>
                  <div class="schedule-item-desc">${it.description}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>`
        )
        .join("")
    );

    document.querySelectorAll("[data-day]").forEach((tab) => {
      tab.addEventListener("click", () => {
        const idx = tab.getAttribute("data-day");
        document.querySelectorAll("[data-day]").forEach((t) => t.classList.remove("is-active"));
        document.querySelectorAll("[data-day-panel]").forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        document.querySelector(`[data-day-panel="${idx}"]`).classList.add("is-active");
      });
    });
  }

  /* =====================================================================
     RENDER: PENDAFTARAN + DOKUMEN
     ===================================================================== */
  function renderRegistration() {
    const r = data.registration;
    setText("reg-eyebrow", r.eyebrow);
    setText("reg-title", r.title);
    setText("reg-subtitle", r.subtitle);

    setHTML(
      "steps-list",
      r.steps
        .map(
          (step, i) => `
        <div class="step-item reveal">
          <span class="step-num">${i + 1}</span>
          <div>
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.description}</div>
          </div>
        </div>`
        )
        .join("")
    );

    const ctaEl = document.getElementById("reg-cta");
    ctaEl.textContent = r.buttonLabel;
    ctaEl.href = r.buttonLink;
    setText("reg-deadline", r.deadlineNote);

    const docs = data.documents;
    setText("docs-eyebrow", docs.eyebrow);
    setText("docs-title", docs.title);
    setText("docs-subtitle", docs.subtitle);
    setHTML(
      "documents-grid",
      docs.list
        .map(
          (doc) => `
        <a class="doc-card reveal" href="${doc.link}" target="_blank" rel="noopener">
          <div class="doc-card-icon">${icon("file")}</div>
          <div>
            <div class="doc-card-title">${doc.label}</div>
            <div class="doc-card-desc">${doc.description}</div>
          </div>
          <div class="doc-card-arrow">${icon("chevron")}</div>
        </a>`
        )
        .join("")
    );
  }

  /* =====================================================================
     RENDER: GALERI
     ===================================================================== */
  let galleryImages = [];
  let galleryIndex = 0;

  function renderGallery() {
    const g = data.gallery;
    setText("gallery-eyebrow", g.eyebrow);
    setText("gallery-title", g.title);
    setText("gallery-subtitle", g.subtitle);
    galleryImages = g.images;

    setHTML(
      "gallery-grid",
      g.images
        .map(
          (img, i) => `
        <div class="gallery-item reveal" data-index="${i}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" />
        </div>`
        )
        .join("")
    );

    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => openLightbox(parseInt(item.getAttribute("data-index"), 10)));
    });
  }

  function openLightbox(index) {
    galleryIndex = index;
    updateLightboxImage();
    document.getElementById("lightbox").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function updateLightboxImage() {
    const img = galleryImages[galleryIndex];
    const node = document.getElementById("lightbox-image");
    node.src = img.src;
    node.alt = img.alt;
  }
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function nextLightbox() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }
  function prevLightbox() {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  /* =====================================================================
     RENDER: KONTAK
     ===================================================================== */
  function renderContact() {
    const c = data.contact;
    setText("contact-eyebrow", c.eyebrow);
    setText("contact-title", c.title);
    setText("contact-subtitle", c.subtitle);
    setText("contact-address", c.address);

    setHTML(
      "contact-persons",
      c.persons
        .map(
          (p) => `
        <div class="contact-person">
          <div>
            <div class="name">${p.name}</div>
            <div class="num">${p.whatsappDisplay}</div>
          </div>
          <a class="wa-btn" href="https://wa.me/${p.whatsapp}" target="_blank" rel="noopener" aria-label="Chat WhatsApp ${p.name}">${icon("whatsapp")}</a>
        </div>`
        )
        .join("")
    );

    const social = c.social;
    const socialItems = [
      { key: "instagram", label: "Instagram", data: social.instagram },
      { key: "tiktok", label: "TikTok", data: social.tiktok },
      { key: "youtube", label: "YouTube", data: social.youtube },
    ];
    setHTML(
      "social-grid",
      socialItems
        .map(
          (s) => `
        <a class="social-btn" href="${s.data.url}" target="_blank" rel="noopener">
          ${icon(s.key)}
          <span>${s.label}</span>
        </a>`
        )
        .join("")
    );
  }

  /* =====================================================================
     RENDER: FOOTER
     ===================================================================== */
  function renderFooter() {
    const f = data.footer;
    setHTML(
      "footer-brand",
      `<img src="${f.logoImage}" alt="Logo Albifest" /><span>${f.eventName}</span>`
    );
    setText("footer-tagline", `“${f.tagline}”`);
    setText("footer-org", f.organizerName);

    const social = data.contact.social;
    setHTML(
      "footer-social",
      `<a href="${social.instagram.url}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
       <a href="${social.tiktok.url}" target="_blank" rel="noopener" aria-label="TikTok">${icon("tiktok")}</a>
       <a href="${social.youtube.url}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube")}</a>`
    );
    setText("footer-bottom", f.copyrightText);
  }

  /* =====================================================================
     REVEAL ON SCROLL
     ===================================================================== */
  function initReveal() {
    const targets = document.querySelectorAll(
      ".reveal, .comp-card, .step-item, .doc-card, .gallery-item, .timeline-item"
    );
    targets.forEach((t) => t.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((t) => observer.observe(t));
  }

  /* ---------- BACK TO TOP ---------- */
  function toggleBackToTop() {
    document.getElementById("back-to-top").classList.toggle("is-visible", window.scrollY > 480);
  }

  /* =====================================================================
     BOOT
     ===================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    document.title = data.site.title;
    renderNavbar();
    renderHero();
    renderCompetitions();
    renderBazaar();
    renderSchedule();
    renderRegistration();
    renderGallery();
    renderContact();
    renderFooter();

    initNavbarBehavior();
    initCountdown();
    initReveal();

    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-overlay").addEventListener("click", (e) => {
      if (e.target.id === "modal-overlay") closeModal();
    });

    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-next").addEventListener("click", nextLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", prevLightbox);
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });

    document.getElementById("back-to-top").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeModal(); closeLightbox(); closeMobileMenu(); }
    });
  });
})();
