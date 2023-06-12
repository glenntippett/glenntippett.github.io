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

async function fetchAddressBookEntry() {
  const response = await fetch(
    "https://gh-pages-backend.onrender.com/addressBook"
  );
  const data = await response.json();
  const ipList = data.address.split(",");
  return ipList[0];
}

function signAddressBook(entry) {
  const list = document.querySelector("#address-book");
  list.insertAdjacentHTML("afterbegin", `<li>${entry}</li>`);
}

async function addressBook() {
  const ip = await fetchAddressBookEntry();
  signAddressBook(ip);
}
