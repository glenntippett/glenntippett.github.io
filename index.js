let lightMode = true;
const btn = document.querySelector('button');
const arrow = document.querySelector('.arrow');

function changeLightDarkMode() {
  lightMode = !lightMode;
}

function handleThemeBtnClick() {
  const pageTitle = document.querySelector('h1');
  if (lightMode) {
    pageTitle.innerText = "Hey, I'm evil Glenn";
    btn.innerText = "Light Mode";
  }

  if (!lightMode) {
    pageTitle.innerText = "Hey, I'm Glenn";
    btn.innerText = "Dark Mode";
  }
  changeLightDarkMode();
}

function handleArrowClick() {
  text = `
    <span class="helper-text">(Not a button, try scrolling)</span>
  `;
  if (!document.querySelector('.helper-text')) {
    arrow.insertAdjacentHTML('beforeend', text)
  }
}

// Dark/Light mode button event
btn.addEventListener('click', handleThemeBtnClick);

// Arrow click event
arrow.addEventListener('click', handleArrowClick);
