// Traductions FR / EN
const TRAD = {
  fr: {
    accueil: "Accueil",
    propos: "À propos",
    contact: "Contact",
    portfolio: "Mon portfolio",
    bienvenue: "Bienvenue sur mon site web ! Ici, vous trouverez une collection de projets qui m'inspirent et me passionnent.",
    projets: "Mes projets",
    lire: "Lire plus",
    chercher: "Chercher",
    placeholder: "Rechercher...",
    aucunResultat: "Désolé, aucun projet ne correspond à votre recherche.",
    contacter: "Écrits et contact",
    ecrits: "Mes essais sont publiés sur Contre-jour (Substack).",
    descriptionTitre: "Description",
    illustrationTitre: "Illustration",
    descriptionAVenir: "Description à venir.",
    voirCode: "Voir le code sur GitHub",
    retour: "Retour aux projets",
    introuvable: "Projet introuvable.",
    fond: "Image de fond du portfolio",
    bitmoji: "Photo de mon bitmoji",
    illustrationAlt: "Illustration du projet"
  },
  en: {
    accueil: "Home",
    propos: "About",
    contact: "Contact",
    portfolio: "My portfolio",
    bienvenue: "Welcome to my website! Here you'll find a collection of projects that inspire and excite me.",
    projets: "My projects",
    lire: "Read more",
    chercher: "Search",
    placeholder: "Search...",
    aucunResultat: "Sorry, no project matches your search.",
    contacter: "Writing and contact",
    ecrits: "My essays are published on Contre-jour (Substack).",
    descriptionTitre: "Description",
    illustrationTitre: "Illustration",
    descriptionAVenir: "Description coming soon.",
    voirCode: "View the code on GitHub",
    retour: "Back to projects",
    introuvable: "Project not found.",
    fond: "Portfolio background image",
    bitmoji: "Picture of my bitmoji",
    illustrationAlt: "Illustration of the project"
  }
};

// Langue : paramètre ?lang=, sinon valeur mémorisée, sinon français
function lireLangue() {
  const demande = new URLSearchParams(location.search).get("lang");
  if (demande === "fr" || demande === "en") {
    try { localStorage.setItem("lang", demande); } catch (e) { /* stockage indisponible */ }
    return demande;
  }
  try {
    const memorisee = localStorage.getItem("lang");
    if (memorisee === "fr" || memorisee === "en") return memorisee;
  } catch (e) { /* stockage indisponible */ }
  return "fr";
}

let lang = lireLangue();
const t = (cle) => TRAD[lang][cle];

function creer(tag, texte, attributs) {
  const el = document.createElement(tag);
  if (texte) el.textContent = texte;
  Object.entries(attributs || {}).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function imageProjet(projet) {
  return projet.image || "IMG/placeholder.svg";
}

// Textes fixes marqués avec data-i18n, data-i18n-placeholder, data-i18n-alt
function traduirePage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.dataset.i18nAlt));
  });
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.setAttribute("aria-current", el.dataset.lang === lang ? "true" : "false");
  });
}

// ----- Liste des projets (page d'accueil) -----
function afficherProjets(liste) {
  const conteneur = document.querySelector("#liste-projets");
  if (!conteneur) return;
  conteneur.replaceChildren();
  liste.forEach((projet) => {
    const article = creer("article");
    article.append(
      creer("h3", projet.title[lang]),
      creer("img", "", { src: imageProjet(projet), alt: t("illustrationAlt") + " " + projet.title[lang] }),
      creer("a", t("lire"), { href: "project.html?id=" + encodeURIComponent(projet.id) })
    );
    conteneur.append(article);
  });
}

// ----- Recherche côté navigateur -----
function normaliser(texte) {
  return texte.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function rechercher(terme) {
  const resultats = document.querySelector(".results");
  const saisie = normaliser(terme.trim());
  resultats.replaceChildren();
  if (saisie.length < 2) {
    afficherProjets(PROJECTS);
    return;
  }
  const trouves = PROJECTS.filter((p) =>
    normaliser(p.title[lang] + " " + p.description[lang] + " " + p.tech.join(" ")).includes(saisie)
  );
  if (trouves.length === 0) {
    resultats.append(creer("p", t("aucunResultat")));
  }
  afficherProjets(trouves);
}

function initialiserRecherche() {
  const formulaire = document.querySelector("#search");
  if (!formulaire) return;
  const champ = formulaire.querySelector("input");
  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    rechercher(champ.value);
  });
  champ.addEventListener("input", () => rechercher(champ.value));
}

// ----- Liens (GitHub, LinkedIn, Substack, e-mail) -----
function afficherLiens() {
  const conteneur = document.querySelector("#liens");
  if (!conteneur) return;
  conteneur.replaceChildren();
  const definitions = [
    ["GitHub", LINKS.github],
    ["LinkedIn", LINKS.linkedin],
    ["Substack", LINKS.substack],
    ["Email", LINKS.email ? "mailto:" + LINKS.email : ""]
  ];
  definitions.forEach(([nom, url]) => {
    if (!url) return;
    const attributs = { href: url };
    if (url.startsWith("http")) {
      attributs.target = "_blank";
      attributs.rel = "noopener noreferrer";
    }
    const li = creer("li");
    li.append(creer("a", nom, attributs));
    conteneur.append(li);
  });
}

// ----- Page d'un projet -----
function afficherProjet() {
  const zone = document.querySelector("#projet");
  if (!zone) return;
  const id = new URLSearchParams(location.search).get("id");
  const projet = PROJECTS.find((p) => p.id === id);
  zone.replaceChildren();

  if (!projet) {
    document.title = t("introuvable");
    zone.append(creer("p", t("introuvable")), creer("a", t("retour"), { href: "index.html#projets" }));
    return;
  }

  document.title = projet.title[lang] + " | Samuella";
  const description = projet.description[lang] || t("descriptionAVenir");
  const article = creer("article");
  article.append(
    creer("h1", projet.title[lang]),
    creer("h2", t("descriptionTitre")),
    creer("p", description),
    creer("h2", t("illustrationTitre")),
    creer("img", "", { src: imageProjet(projet), alt: t("illustrationAlt") + " " + projet.title[lang] })
  );
  if (projet.tech.length > 0) {
    article.append(creer("p", projet.tech.join(" · ")));
  }
  if (projet.repo) {
    article.append(creer("a", t("voirCode"), { href: projet.repo, target: "_blank", rel: "noopener noreferrer" }));
  }
  article.append(creer("a", t("retour"), { href: "index.html#projets" }));
  zone.append(article);
}

function afficherTout() {
  traduirePage();
  afficherProjets(PROJECTS);
  afficherProjet();
  afficherLiens();
  const annee = document.querySelector("#annee");
  if (annee) annee.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  afficherTout();
  initialiserRecherche();
  document.querySelectorAll("[data-lang]").forEach((lien) => {
    lien.addEventListener("click", (e) => {
      e.preventDefault();
      lang = lien.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (err) { /* stockage indisponible */ }
      afficherTout();
      const champ = document.querySelector("#recherche");
      if (champ && champ.value) rechercher(champ.value);
    });
  });
});
