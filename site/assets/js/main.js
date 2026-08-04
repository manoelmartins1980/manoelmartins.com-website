/* Manoel Martins Jr — main.js
   Vanilla JS, no external dependencies. Safe for a strict CSP. */
(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Rotating role text in hero ---- */
  var roles = [
    "Network Security Engineer",
    "Systems Administrator",
    "Network Administrator",
    "Infrastructure Automation"
  ];
  var typedEl = document.getElementById("typedRole");

  if (typedEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var roleIndex = 0;
    var charIndex = roles[0].length;
    var deleting = false;

    function tick() {
      var current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }

      typedEl.textContent = roles[roleIndex].slice(0, charIndex);
      setTimeout(tick, deleting ? 40 : 70);
    }

    setTimeout(tick, 1600);
  }

  /* ---- Lightweight email de-obfuscation ----
     Keeps the address out of the raw HTML source to reduce
     harvesting by basic scrapers/spam bots. Assembled only
     client-side, on demand. */
  var emailLink = document.getElementById("emailLink");
  if (emailLink) {
    var user = ["m", "a", "n", "o", "e", "l", ".", "j", "u", "n", "i", "o", "r"].join("");
    var domain = ["m", "a", "n", "o", "e", "l", "m", "a", "r", "t", "i", "n", "s", ".", "c", "o", "m", ".", "b", "r"].join("");
    var address = user + "@" + domain;

    emailLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "mailto:" + address;
    });
  }

  /* ---- Certifications: vendor tabs ---- */
  var tabList = document.querySelector(".cert-tablist");
  if (tabList) {
    var tabs = Array.prototype.slice.call(tabList.querySelectorAll(".cert-tab"));

    function activateTab(tab) {
      tabs.forEach(function (t) {
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        var isActive = t === tab;

        t.classList.toggle("is-active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
        t.setAttribute("tabindex", isActive ? "0" : "-1");

        if (panel) {
          panel.classList.toggle("is-active", isActive);
          panel.hidden = !isActive;
        }
      });
      tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(tab);
      });

      tab.addEventListener("keydown", function (e) {
        var newIndex = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          newIndex = (index + 1) % tabs.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          newIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === "Home") {
          newIndex = 0;
        } else if (e.key === "End") {
          newIndex = tabs.length - 1;
        }
        if (newIndex !== null) {
          e.preventDefault();
          activateTab(tabs[newIndex]);
        }
      });
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
