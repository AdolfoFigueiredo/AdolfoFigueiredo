/* =========================================================
   i18n — Language switching logic
   ========================================================= */
const I18nManager = (() => {
  const STORAGE_KEY = "portfolio-lang";
  let currentLang = DEFAULT_LANG;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // Detect initial language
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;

    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (I18N[browserLang]) return browserLang;

    return DEFAULT_LANG;
  }

  // Apply translations to DOM
  function apply(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update <html lang>
    document.documentElement.lang = lang;

    // Update switcher UI
    const current = $("#langCurrent");
    if (current) current.textContent = LANGS[lang].label;

    $$(".lang-switch__option").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const lang = detectLang();
    apply(lang);

    const switcher = $("#langSwitch");
    const btn = $("#langBtn");
    const menu = $("#langMenu");

    if (!switcher || !btn || !menu) return;

    // Toggle dropdown
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = switcher.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });

    // Select language
    menu.addEventListener("click", (e) => {
      const option = e.target.closest(".lang-switch__option");
      if (!option) return;
      const lang = option.dataset.lang;
      apply(lang);
      switcher.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && switcher.classList.contains("open")) {
        switcher.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  return {
    init,
    apply,
    get current() {
      return currentLang;
    },
  };
})();

// Initialize i18n on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18nManager.init());
} else {
  I18nManager.init();
}

/* =========================================================
   Minimal vanilla JS — mobile menu, scroll reveal, nav state
   ========================================================= */
(() => {
  "use strict";

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("main section[id]");
  const reveals = document.querySelectorAll(".reveal");

  /* --- Mobile menu toggle --- */
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Nav scrolled state --- */
  const onScroll = () => {
    if (nav) {
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    // Active link highlighting
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`,
      );
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Scroll reveal (IntersectionObserver) --- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );

    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }
})();
