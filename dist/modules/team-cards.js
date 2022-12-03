const team = [
  {
    name: "mike p",
    role: "ux engineer",
    image: "https://avatars.githubusercontent.com/u/110638329?v=4",
    repo: "https://github.com/mploythai/cpsc349-project3",
  },
  {
    name: "edwin p",
    role: "",
    image: "https://avatars.githubusercontent.com/u/98931477?v=4",
    repo: "https://github.com/edwinperaza99/cpsc349-project3",
  },
  {
    name: "danyal n",
    role: "",
    image: "https://avatars.githubusercontent.com/u/70175019?v=4",
    repo: "https://github.com/danyalnemati8/cpsc349-project3",
  },
  { name: "thien l", role: "", image: "", repo: "" },
];

function createHeader(member) {
  const header = document.createElement("div");
  const img = document.createElement("img");
  const txt = document.createElement("p");

  header.setAttribute("class", "flex flex-col gap-4");

  if (member.image) img.setAttribute("src", member.image);
  img.setAttribute("class", "w-24 h-24 rounded-full bg-slate-900");

  txt.setAttribute("class", "text-lg");
  txt.textContent = member.name;

  header.append(img, txt);

  return header;
}

function createDetails(member) {
  const details = document.createElement("div");
  const role = document.createElement("p");
  const anchor = document.createElement("a");
  const btn = document.createElement("button");

  details.setAttribute("class", "flex flex-col gap-4");

  role.textContent = member.role || "insert role";

  anchor.setAttribute("href", member.repo || "#");
  if (member.repo) anchor.setAttribute("target", "_blank");

  btn.setAttribute(
    "class",
    "p-4 text-neutral-100 bg-slate-900 hover:bg-slate-900/90"
  );
  btn.textContent = "github fork";

  anchor.appendChild(btn);
  details.append(role, anchor);

  return details;
}

export function createCards() {
  for (const member of team) {
    const main = document.getElementById("card-list");
    const container = document.createElement("div");
    const header = createHeader(member);
    const details = createDetails(member);

    container.setAttribute(
      "class",
      "flex flex-col justify-between gap-8 p-8 w-64 bg-neutral-100/30 shadow-2xl shadow-slate-900/10"
    );
    container.append(header, details);
    main.appendChild(container);
  }
}
