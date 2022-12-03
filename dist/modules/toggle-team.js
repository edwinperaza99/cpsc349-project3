export default function toggleTeam() {
  const home = document.getElementById("home");
  const cards = document.getElementById("cards");

  home.classList.add("hidden");
  cards.classList.remove("hidden");
}
