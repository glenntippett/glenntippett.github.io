function fadeInObserver(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);

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

function main() {
  scrollToTop();
  fadeInOnScroll();
}

document.addEventListener("DOMContentLoaded", main);
