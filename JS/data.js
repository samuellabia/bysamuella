// ===== À compléter par Samuella =====
// Les liens laissés vides ("") ne s'affichent pas sur le site.
const LINKS = {
  github: "https://github.com/samuellabia",
  linkedin: "https://www.linkedin.com/in/samuellabia",
  substack: "https://samuellabia.substack.com",
  email: "",    // optionnel : ton adresse e-mail de contact
  cv: ""        // chemin de ton CV, ex. "CV/cv-samuella.pdf" (le bouton CV apparaît quand c'est rempli)
};

// Section "Écrits" : ta phrase d'accompagnement et tes articles mis en avant.
// La phrase s'affiche seulement quand tu l'as écrite, et chaque article seulement quand son lien est rempli.
const ECRITS = {
  phrase: {
    fr: "", // ta phrase : ce que tu explores dans tes textes et ce que ça t'apporte
    en: ""  // la même en anglais
  },
  articles: [
    { title: "Scientifique, donc banal ?", url: "https://samuellabia.substack.com/p/scientifique-donc-banal" }
  ]
};

// Chaque projet : titre, image, lien du dépôt, description et outils.
// Champs facultatifs pour la page du projet (laisse-les vides s'ils ne servent pas) :
//   video   : lien YouTube, ou chemin d'un fichier vidéo, ex. "VIDEO/sokoban.mp4"
//   diagram : un schéma écrit en texte (syntaxe Mermaid, https://mermaid.live pour tester)
//   private : true si le code n'est pas public (affiche "Code privé, disponible sur demande")
//   code    : des extraits de code, chacun avec un nom de fichier, un langage et le code
//
// Exemple à copier dans un projet :
//   tech: ["C", "ncurses"],
//   video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
//   diagram: `
//     flowchart LR
//       A[Lecture du niveau] --> B[Boucle de jeu]
//       B --> C{Caisse sur une cible ?}
//       C -- oui --> D[Niveau suivant]
//       C -- non --> B
//   `,
//   code: [
//     {
//       file: "main.c",
//       language: "c",
//       source: `
// int main(void) {
//     return 0;
// }
//       `
//     }
//   ]
// Écris les descriptions avec tes propres mots (description.fr et description.en).
// Tant qu'une description est vide, le site affiche "Description à venir".
// Si "image" est vide, une image neutre s'affiche à la place.
const PROJECTS = [
  {
    id: "sokoban",
    title: { fr: "Jeu Sokoban", en: "Sokoban game" },
    image: "IMG/sokoban.png",
    repo: "https://github.com/samuellabia/sokoban",
    description: { fr: "", en: "" },
    tech: [],
    video: "",
    diagram: "",
    code: []
  },
  {
    id: "wifibot",
    title: { fr: "Wifibot", en: "Wifibot" },
    image: "",
    repo: "https://github.com/samuellabia/Wifibot",
    description: { fr: "", en: "" },
    tech: [],
    video: "",
    diagram: "",
    code: []
  },
  {
    id: "graphe-enquete",
    title: { fr: "Graphe d'enquête criminelle", en: "Criminal investigation graph" },
    image: "",
    repo: "https://github.com/samuellabia/criminal-investigation-graph-c",
    description: { fr: "", en: "" },
    tech: [],
    video: "",
    diagram: "",
    code: []
  },
  {
    id: "ar-landmarks",
    title: {
      fr: "Réalité augmentée par landmarks faciaux en temps réel",
      en: "Real-time augmented reality with facial landmarks"
    },
    image: "",
    repo: "https://github.com/samuellabia/realtime-facial-landmark-AR",
    description: { fr: "", en: "" },
    tech: [],
    video: "",
    diagram: "",
    code: []
  },
  {
    id: "etoffe",
    title: { fr: "Étoffe", en: "Étoffe" },
    image: "",
    repo: "",
    private: true,
    description: { fr: "", en: "" },
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "LLM (vision)"],
    video: "",
    diagram: "",
    code: []
  },
  {
    id: "kliche",
    title: { fr: "Kliche", en: "Kliche" },
    image: "",
    repo: "",
    private: true,
    description: { fr: "", en: "" },
    tech: [],
    video: "",
    diagram: "",
    code: []
  }
];
