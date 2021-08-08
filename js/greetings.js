const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function paintGreetings(nameInput) {
  greeting.innerText = `Hello ${nameInput}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  paintGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

logout.addEventListener("click", onLogoutSubmit);
