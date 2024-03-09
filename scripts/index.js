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

function colorTheme() {
  const rootElement = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  /**
   * @returns {"light" | "dark"} Theme stored either in localStorage or device preference
   */
  function getPreferredTheme() {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }

  /**
   * @param {"light" | "dark"} theme
   * @returns {void}
   */
  function setCurrentTheme(theme) {
    rootElement.setAttribute("data-theme", theme);
    const icon = theme === "light" ? "sun" : "moon";
    toggle.querySelector("svg.feather").innerHTML = feather.icons[icon].toSvg();
    localStorage.setItem("theme", theme);
  }

  function toggleTheme() {
    const isLightTheme = localStorage.getItem("theme") === "light";
    const targetTheme = isLightTheme ? "dark" : "light";
    setCurrentTheme(targetTheme);
  }

  function listenForSystemThemeChanges() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (event) {
        setCurrentTheme(event.matches ? "dark" : "light");
      });
  }

  setCurrentTheme(getPreferredTheme());
  toggle.onclick = toggleTheme;
  listenForSystemThemeChanges();
}

function loadHljs() {
  hljs.highlightAll();
}

function main() {
  colorTheme();
  scrollToTop();
  fadeInOnScroll();
}

document.addEventListener("DOMContentLoaded", main);
