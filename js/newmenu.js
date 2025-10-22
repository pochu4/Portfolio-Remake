// --- Focus trap helpers ---
let lastFocused = null;

function getFocusable(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(
    (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
  );
}

function trapKeydown(e) {
  if (e.key !== "Tab") return;
  const focusables = getFocusable(menu);
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;

  if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
  if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
  }
}

(() => {
  const body = document.body;
  const header = document.querySelector("header");
  const menu = document.getElementById("mobileMenu");
  const burger = document.getElementById("burger");
  const links = document.querySelectorAll(".menu-nav-links a");

  // 1) Set CSS var for header height so panel starts below it
  function setHeaderVar() {
    const h = header.offsetHeight;
    document.documentElement.style.setProperty("--header-h", h + "px");
  }
  setHeaderVar();
  window.addEventListener("resize", setHeaderVar);
  // GSAP timeline
  // timeline
  const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

  tl.add(() => {
    body.classList.add("is-menu-open", "no-scroll");
    menu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    burger.textContent = "Close";
  })
    .set(menu, { display: "flex" })

    // smoother blur fade (animate body’s custom prop)
    .set(body, { "--blur-o": 0 })
    .to(body, { "--blur-o": 1, duration: 1.1, ease: "power2.out" })

    // then bring in content
    .from(
      [".menu-time", ".menu-nav-links_link"],
      {
        y: -28,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
      },
      "-=0.15"
    );

  tl.eventCallback("onReverseComplete", () => {
    gsap.set(menu, { display: "none" });
    gsap.set(body, { "--blur-o": 0 }); // reset blur
    menu.setAttribute("aria-hidden", "true");
    body.classList.remove("is-menu-open", "no-scroll");
    burger.setAttribute("aria-expanded", "false");
    burger.textContent = "Menu";
    burger.focus();
  });

  function openMenu() {
    body.classList.add("is-menu-open", "no-scroll");
    menu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    burger.textContent = "Close";
    tl.play(0);
    burger.focus(); // keep focus on the same control
  }
  function closeMenu() {
    tl.reverse();
  }

  burger.addEventListener("click", () => {
    body.classList.contains("is-menu-open") ? closeMenu() : openMenu();
  });

  links.forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("is-menu-open"))
      closeMenu();
  });

  // 3) live time
  const headerTime = document.getElementById("time");
  const menuTime = document.getElementById("menuTime");
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const now = new Date();
    const hh = pad(now.getHours()),
      mm = pad(now.getMinutes()),
      ss = pad(now.getSeconds());
    if (headerTime) headerTime.textContent = `${hh}:${mm}:${ss}`;
    if (menuTime) menuTime.textContent = `${hh}:${mm}:${ss}`;
  }
  tick();
  setInterval(tick, 1000);
})();

function setHeaderHeightVar() {
  const header = document.querySelector("header");
  if (header) {
    const h = header.offsetHeight;
    document.documentElement.style.setProperty("--header-h", h + "px");
  }
}

setHeaderHeightVar();
window.addEventListener("resize", setHeaderHeightVar);
