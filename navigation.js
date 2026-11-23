const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// I don't know what this is because we never learned javascript, I can't explain a language I don't know. I'll do my best guesses on the script below

//This looks like maybe it keeps the menu hidden?
document.documentElement.classList.add("js");
button.hidden = false;
list.dataset.open = "false";

// This looks like it opens a menu.
function setMenu(open) {
  button.setAttribute("aria-expanded", String(open));
  list.dataset.open = String(open);
}

// This looks like the menu gets opened when it's clicked on.
button.addEventListener("click", () => {
  setMenu(button.getAttribute("aria-expanded") !== "true");
});

// This looks like it closes the menu when the escape key is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    button.focus();
  }
});

// I think it's asinine to be expected to suddenly write a whole page of a scripting language we aren't supposed to know yet
// I don't know what const and function and string are or what they do??