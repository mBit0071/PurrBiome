/* ============================================================
   PurrBiome — main.js
   Shared interactivity across all landing pages
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  initRevealAnimations();
  initAccordionBehavior();
  initFooterYear();
});

/* ---------- Sticky header shadow on scroll ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile menu toggle ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    navLinks.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a nav link is clicked (including mobile CTA)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click
  document.addEventListener("click", (event) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });

  // Reset state when resizing back up to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

/* ---------- Scroll reveal animations ---------- */
function initRevealAnimations() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ---------- FAQ accordion: close others when one opens ---------- */
function initAccordionBehavior() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (event) => {
      // Let the native <details> toggle first
      const isOpening = !item.open;

      // Close other open items
      faqItems.forEach((other) => {
        if (other !== item && other.open) {
          other.open = false;
        }
      });

      // If we were closing this item, prevent the native toggle re-opening
      if (!isOpening) {
        event.preventDefault();
        item.open = false;
      }
    });
  });
}

/* ---------- Auto-update copyright year ---------- */
function initFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

