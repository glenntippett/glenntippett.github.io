function fadeInObserver(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}

function fadeInOnScroll() {
  const contentToFadeIn = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver(fadeInObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  contentToFadeIn.forEach((el) => observer.observe(el));
}

function scrollToTop() {
  const title = document.getElementById("title");
  title.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

function themeToggle() {
  const toggle = document.getElementById("theme-toggle");

  const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }

  toggle.onclick = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    let toggleIcon = "sun";
    let newToggleIcon = "moon";

    if (currentTheme === "light") {
      targetTheme = "dark";
    } else {
      toggleIcon = "moon";
      newToggleIcon = "sun";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    toggle.querySelector(`svg.feather.feather-${toggleIcon}`).innerHTML =
      feather.icons[newToggleIcon].toSvg();

    localStorage.setItem("theme", targetTheme);
  };
}

function main() {
  themeToggle();
  scrollToTop();
  fadeInOnScroll();
}

document.addEventListener("DOMContentLoaded", main);
