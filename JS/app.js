// Traductions FR / EN
const TRAD = {
  fr: {
    accueil: "Accueil",
    propos: "À propos",
    contact: "Contact",
    portfolio: "Mon portfolio",
    metier: "Élève ingénieure en systèmes intelligents et autonomes",
    bienvenue: "Je travaille à la frontière entre logiciel et matériel : robotique, vision par ordinateur et algorithmique. Je recherche un stage à partir de juillet 2027.",
    projets: "Mes projets",
    lire: "Lire plus",
    chercher: "Chercher",
    placeholder: "Rechercher...",
    aucunResultat: "Désolé, aucun projet ne correspond à votre recherche.",
    contacter: "Écrits et contact",
    lireArticle: "Lire sur Substack",
    descriptionTitre: "Description",
    illustrationTitre: "Illustration",
    descriptionAVenir: "Description à venir.",
    demoTitre: "Démo vidéo",
    codeTitre: "Extraits de code",
    schemaTitre: "Schéma",
    aideSchema: "Cliquez sur le schéma pour l'agrandir.",
    copier: "Copier",
    copie: "Copié !",
    fermer: "Fermer",
    cvTitre: "Télécharger mon CV",
    codePrive: "Code privé, disponible sur demande",
    prive: "Code privé",
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
    metier: "Engineering student in intelligent and autonomous systems",
    bienvenue: "I work where software meets hardware: robotics, computer vision and algorithms. I am looking for an internship starting July 2027.",
    projets: "My projects",
    lire: "Read more",
    chercher: "Search",
    placeholder: "Search...",
    aucunResultat: "Sorry, no project matches your search.",
    contacter: "Writing and contact",
    lireArticle: "Read on Substack",
    descriptionTitre: "Description",
    illustrationTitre: "Illustration",
    descriptionAVenir: "Description coming soon.",
    demoTitre: "Video demo",
    codeTitre: "Code excerpts",
    schemaTitre: "Diagram",
    aideSchema: "Click the diagram to enlarge it.",
    copier: "Copy",
    copie: "Copied!",
    fermer: "Close",
    cvTitre: "Download my resume",
    codePrive: "Private code, available on request",
    prive: "Private code",
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
  return projet.image || (lang === "en" ? "IMG/placeholder-en.svg" : "IMG/placeholder.svg");
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
  // bouton unique : il affiche la langue vers laquelle on bascule
  const bouton = document.querySelector("#langue");
  if (bouton) {
    const autre = lang === "fr" ? "en" : "fr";
    bouton.textContent = autre.toUpperCase();
    bouton.setAttribute("href", "?lang=" + autre);
    bouton.setAttribute("lang", autre);
    bouton.setAttribute("aria-label", autre === "en" ? "Switch to English" : "Passer en français");
  }
}

function listeTags(tech) {
  const ul = creer("ul", "", { class: "tags" });
  tech.forEach((outil) => ul.append(creer("li", outil)));
  return ul;
}

// ----- Liste des projets (page d'accueil) -----
function afficherProjets(liste) {
  const conteneur = document.querySelector("#liste-projets");
  if (!conteneur) return;
  conteneur.replaceChildren();
  liste.forEach((projet) => {
    const article = creer("article", "", { class: "carte" });
    const corps = creer("div", "", { class: "carte-corps" });
    corps.append(creer("h3", projet.title[lang]));
    if (projet.private) corps.append(creer("p", "🔒 " + t("prive"), { class: "prive" }));
    if (projet.tech.length > 0) corps.append(listeTags(projet.tech));
    corps.append(creer("a", t("lire") + " →", { href: "project.html?id=" + encodeURIComponent(projet.id) }));
    article.append(
      creer("img", "", { src: imageProjet(projet), alt: t("illustrationAlt") + " " + projet.title[lang], loading: "lazy" }),
      corps
    );
    conteneur.append(article);
  });
}

// ----- Recherche côté navigateur -----
function normaliser(texte) {
  return texte.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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

// ----- Bouton CV dans la barre du haut, seulement si le fichier est renseigné -----
function afficherCV() {
  document.querySelectorAll("#cv").forEach((el) => el.remove());
  const menu = document.querySelector(".barre ul");
  if (!menu || !LINKS.cv) return;
  const li = creer("li", "", { id: "cv" });
  li.append(creer("a", "CV", { href: LINKS.cv, class: "cv", target: "_blank", rel: "noopener", title: t("cvTitre"), "aria-label": t("cvTitre") }));
  menu.lastElementChild.before(li);
}

// ----- Écrits : ta phrase et tes articles mis en avant -----
function afficherEcrits() {
  const phrase = document.querySelector("#phrase-ecrits");
  if (phrase) {
    const texte = ECRITS.phrase[lang] || ECRITS.phrase.fr;
    phrase.textContent = texte;
    phrase.hidden = !texte;
  }
  const liste = document.querySelector("#articles");
  if (!liste) return;
  liste.replaceChildren();
  ECRITS.articles.filter((a) => a.url).forEach((article) => {
    const lien = creer("a", "", { href: article.url, target: "_blank", rel: "noopener noreferrer" });
    lien.append(creer("strong", article.title), creer("span", t("lireArticle") + " →"));
    const li = creer("li");
    li.append(lien);
    liste.append(li);
  });
}

// ----- Bibliothèques externes, chargées seulement si un projet en a besoin -----
const HLJS = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
const MERMAID = "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js";
const scriptsCharges = {};

function chargerScript(url) {
  if (!scriptsCharges[url]) {
    scriptsCharges[url] = new Promise((ok, erreur) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = ok;
      s.onerror = erreur;
      document.head.append(s);
    });
  }
  return scriptsCharges[url];
}

function section(titre, ...contenu) {
  const s = creer("section");
  s.append(creer("h2", titre), ...contenu);
  return s;
}

// Vidéo : lien YouTube, ou chemin vers un fichier .mp4 / .webm du dossier du site
function lecteurVideo(url, titre) {
  const boite = creer("div", "", { class: "video" });
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) {
    boite.append(creer("iframe", "", {
      src: "https://www.youtube-nocookie.com/embed/" + yt[1],
      title: titre,
      loading: "lazy",
      allow: "accelerometer; encrypted-media; picture-in-picture; fullscreen",
      allowfullscreen: ""
    }));
  } else {
    boite.append(creer("video", "", { src: url, controls: "", preload: "metadata" }));
  }
  return boite;
}

// Extrait de code affiché dans une fenêtre façon éditeur
function editeur(extrait) {
  const source = extrait.source.trim();
  const boite = creer("div", "", { class: "editeur" });
  const barre = creer("div", "", { class: "editeur-barre" });
  const bouton = creer("button", t("copier"), { type: "button" });
  bouton.addEventListener("click", () => {
    navigator.clipboard.writeText(source).then(() => {
      bouton.textContent = t("copie");
      setTimeout(() => { bouton.textContent = t("copier"); }, 1500);
    }).catch(() => { /* copie impossible (page ouverte sans serveur) */ });
  });
  barre.append(
    creer("span", "", { class: "point" }),
    creer("span", "", { class: "point" }),
    creer("span", "", { class: "point" }),
    creer("span", extrait.file || "", { class: "nom" }),
    bouton
  );
  const pre = creer("pre");
  pre.append(creer("code", source, extrait.language ? { class: "language-" + extrait.language } : {}));
  boite.append(barre, pre);
  return boite;
}

function colorerCode(zone) {
  const blocs = zone.querySelectorAll(".editeur code");
  if (blocs.length === 0) return;
  chargerScript(HLJS)
    .then(() => blocs.forEach((bloc) => window.hljs.highlightElement(bloc)))
    .catch(() => { /* sans connexion, le code reste lisible, sans couleurs */ });
}

function dessinerSchema(zone) {
  const schema = zone.querySelector(".schema");
  if (!schema) return;
  chargerScript(MERMAID).then(() => {
    window.mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      fontFamily: "JetBrains Mono, monospace",
      themeVariables: {
        darkMode: true,
        background: "#101a26",
        primaryColor: "#0d141e",
        primaryTextColor: "#d7e2ee",
        primaryBorderColor: "#22d3ee",
        lineColor: "#39ff88",
        secondaryColor: "#0d141e",
        tertiaryColor: "#101a26"
      }
    });
    return window.mermaid.run({ nodes: [schema] });
  }).catch(() => { /* sans connexion, le texte du schéma reste affiché */ });

  // clic : agrandir le schéma dans une fenêtre
  schema.addEventListener("click", () => {
    const fenetre = document.querySelector("#zoom");
    const svg = schema.querySelector("svg");
    if (!fenetre || !svg) return;
    fenetre.querySelector(".zoom-contenu").replaceChildren(svg.cloneNode(true));
    fenetre.showModal();
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
  const article = creer("article");
  article.append(creer("h1", projet.title[lang]));
  if (projet.tech.length > 0) article.append(listeTags(projet.tech));

  article.append(section(t("descriptionTitre"), creer("p", projet.description[lang] || t("descriptionAVenir"))));

  if (projet.video) {
    article.append(section(t("demoTitre"), lecteurVideo(projet.video, projet.title[lang])));
  }
  if (projet.diagram) {
    article.append(section(t("schemaTitre"),
      creer("pre", projet.diagram.trim(), { class: "schema" }),
      creer("p", t("aideSchema"), { class: "aide" })
    ));
  }
  if (projet.code && projet.code.length > 0) {
    article.append(section(t("codeTitre"), ...projet.code.map(editeur)));
  }

  article.append(section(t("illustrationTitre"),
    creer("img", "", { class: "illustration", src: imageProjet(projet), alt: t("illustrationAlt") + " " + projet.title[lang] })
  ));

  const actions = creer("div", "", { class: "actions" });
  if (projet.repo) {
    actions.append(creer("a", t("voirCode"), { href: projet.repo, target: "_blank", rel: "noopener noreferrer" }));
  } else if (projet.private) {
    actions.append(creer("span", "🔒 " + t("codePrive"), { class: "prive" }));
  }
  actions.append(creer("a", "← " + t("retour"), { href: "index.html#projets" }));
  article.append(actions);
  zone.append(article);

  colorerCode(zone);
  dessinerSchema(zone);
}

function afficherTout() {
  traduirePage();
  afficherProjets(PROJECTS);
  afficherProjet();
  afficherLiens();
  afficherEcrits();
  afficherCV();
  const annee = document.querySelector("#annee");
  if (annee) annee.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  afficherTout();
  initialiserRecherche();

  const fenetre = document.querySelector("#zoom");
  if (fenetre) {
    fenetre.querySelector(".fermer").addEventListener("click", () => fenetre.close());
    fenetre.addEventListener("click", (e) => { if (e.target === fenetre) fenetre.close(); });
  }

  const bouton = document.querySelector("#langue");
  if (bouton) {
    bouton.addEventListener("click", (e) => {
      e.preventDefault();
      lang = lang === "fr" ? "en" : "fr";
      try { localStorage.setItem("lang", lang); } catch (err) { /* stockage indisponible */ }
      afficherTout();
      const champ = document.querySelector("#recherche");
      if (champ && champ.value) rechercher(champ.value);
    });
  }
});
