let isLightMode = true;
const btn = document.querySelector("button");

function changeLightDarkMode() {
  isLightMode = !isLightMode;
}

function handleThemeBtnClick() {
  const pageTitle = document.querySelector("h1");
  if (isLightMode) {
    pageTitle.innerText = "Hey, I'm evil Glenn";
    btn.innerText = "Light Mode";
  }

  if (!isLightMode) {
    pageTitle.innerText = "Hey, I'm Glenn";
    btn.innerText = "Dark Mode";
  }
  changeLightDarkMode();
}

// Dark/Light mode button event
btn.addEventListener("click", handleThemeBtnClick);
