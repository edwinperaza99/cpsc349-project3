function gameNav() {
  const mainNav = document.querySelectorAll(".main-nav");
  mainNav.forEach((elem) => elem.classList.remove("hidden"));

  const gameNav = document.querySelectorAll(".game-nav");
  gameNav.forEach((elem) => {
    elem.classList.add("hidden");
    elem.classList.remove("flex");
  });

  const exitBtn = document.getElementById("exit-btn");
  exitBtn.classList.add("hidden");
}

export default function exitGame() {
  const home = document.getElementById("home");
  const game = document.getElementById("game");
  const footerTxt = document.getElementById("footer-txt");

  home.classList.remove("hidden");
  game.classList.add("hidden");
  game.classList.remove("flex");
  footerTxt.classList.remove("hidden");

  gameNav();
}
