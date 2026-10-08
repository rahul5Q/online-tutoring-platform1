/**
 * getstared.js — Learnify
 *
 * Phase 1 (preserved):
 *   - Hero "Get Started" btn → smooth scroll to #pricing
 *   - Pricing .plan-btn clicks → smooth scroll to #contact
 *   - #messageForm client-side submit → confirmation message
 *
 * Phase 2 (added):
 *   - Scroll-aware header (.scrolled class)
 *   - Hamburger menu toggle with ARIA + body scroll lock
 *   - IntersectionObserver scroll-reveal for .reveal-item elements
 */

/* ── Utility ─────────────────────────────────────────────────
   Named helper so all scroll actions use the same behaviour.
──────────────────────────────────────────────────────────── */
function scrollToSection(id) {
    var el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ── Scroll-aware Header ─────────────────────────────────────
   Adds .scrolled to <header> after 40px scroll.
   CSS uses this class for the frosted-glass effect.
──────────────────────────────────────────────────────────── */
var mainHeader = document.getElementById('mainHeader');

if (mainHeader) {
    var onScroll = function () {
        mainHeader.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* run once on load in case page is already scrolled */
}

/* ── Hamburger Menu ──────────────────────────────────────────
   Toggles the mobile nav open/closed.
   Manages:
     - .open class on both hamburger and nav
     - aria-expanded for screen readers
     - body overflow lock so background doesn't scroll behind open menu
     - Close on nav link click
     - Close on click outside the header
──────────────────────────────────────────────────────────── */
var hamburger = document.getElementById('hamburger');
var mainNav   = document.getElementById('mainNav');

function closeMobileMenu() {
    if (!hamburger || !mainNav) return;
    mainNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function openMobileMenu() {
    if (!hamburger || !mainNav) return;
    mainNav.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; /* prevent background scroll */
}

if (hamburger && mainNav) {

    hamburger.addEventListener('click', function () {
        if (mainNav.classList.contains('open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    /* Any nav link click → close menu + scroll to section */
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    /* Click outside the header → close menu */
    document.addEventListener('click', function (e) {
        if (mainHeader && !mainHeader.contains(e.target)) {
            closeMobileMenu();
        }
    });

    /* Escape key → close menu */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

/* ── IntersectionObserver — Scroll Reveal ────────────────────
   Watches every .reveal-item element.
   Adds .visible when the element enters the viewport.
   Animates once only (unobserve after trigger).
   Falls back gracefully if IntersectionObserver is unsupported.
──────────────────────────────────────────────────────────── */
if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold:  0.12,
            rootMargin: '0px 0px -36px 0px'
        }
    );

    document.querySelectorAll('.reveal-item').forEach(function (el) {
        revealObserver.observe(el);
    });

} else {
    /* Older browsers: just show everything immediately */
    document.querySelectorAll('.reveal-item').forEach(function (el) {
        el.classList.add('visible');
    });
}

/* ── Hero "Get Started" button ───────────────────────────────
   Smooth scroll to the Pricing section.
   (Phase 1 behaviour preserved)
──────────────────────────────────────────────────────────── */
var getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function () {
        scrollToSection('pricing');
    });
}

/* ── Pricing "Get Started" buttons ──────────────────────────
   All three plan buttons scroll to the Contact section.
   (Phase 1 behaviour preserved)
──────────────────────────────────────────────────────────── */
document.querySelectorAll('.plan-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        scrollToSection('contact');
    });
});

/* ── Contact Form — client-side submission ───────────────────
   Prevents default POST, validates inputs, shows confirmation.
   No backend or PHP required.
   (Phase 1 behaviour preserved)
──────────────────────────────────────────────────────────── */
var messageForm = document.getElementById('messageForm');

if (messageForm) {
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var name    = document.getElementById('studentName').value.trim();
        var message = document.getElementById('studentMessage').value.trim();

        if (!name || !message) return;

        var confirmation = document.getElementById('confirmationMessage');
        confirmation.innerText =
            '\u2705 Thanks, ' + name + '! Your message has been received. '
            + 'We\u2019ll get back to you shortly.';
        confirmation.style.display = 'block';

        messageForm.reset();

        /* Scroll confirmation into view on mobile */
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}
