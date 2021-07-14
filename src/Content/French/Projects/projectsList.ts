import ironGuitarDemo from "../../../Assets/project-pics/iron-guitar-demo.gif";
import cosmousseDemo from "../../../Assets/project-pics/cosmousse-demo.gif";
import osteomeauxDemo from "../../../Assets/project-pics/osteomeaux-demo.gif";
import newALSDemo from "../../../Assets/project-pics/new-als-demo.gif";
import marssn30Demo from "../../../Assets/project-pics/marss-n30-demo.gif";
import ekamDemo from "../../../Assets/project-pics/ekam-demo.gif";
import oldALSDemo from "../../../Assets/project-pics/old-als-demo.gif";

export const projectsList = {
  upcomingProjects: [
    {
      name: "Aquitaine Lifestyle Solutions",
      type: "Site vitrine",
      intro: "prochainement",
      technologies: "React, TypeScript, Tailwind",
      description:
        "Projet de mission indépendante d'une société de conseil aux entreprises dans le Sud-Ouest de la France. L'entreprise souhaitait une refonte et un lifting de son ancien site Web pour plaire à une clientèle plus large de tous les groupes d'âge. J'ai conçu le nouveau site Web sur un stack technique complètement différent en gardant principalement le contenu. Comme le client a l'intention de s'adresser à une population internationale, le contenu du site Web est en anglais, français et allemand.",
      specialFeatures: "",
      landingPagePic: newALSDemo,
      oldLandingPage: oldALSDemo,
      contain: true,
      stats: [{ label: "Attendu", value: "Automne 2021" }],
    },
  ],
  projects: [
    {
      name: "Marss N30",
      type: "Site vitrine",
      intro: "Ma seconde mission en freelance",
      technologies: "React, Tailwind",
      description:
        "Projet de mission en freelance pour un salon de coiffure dans le Sud-Ouest de la France. Le client voulait un site Web simple et élégant pour tous les groupes d'âge. La clientèle du salon étant variée, le contenu du site est en anglais et en français.",
      specialFeatures: "",
      landingPagePic: marssn30Demo,
      contain: false,
      projectLink: "https://www.marss-n30.com/",
      stats: [
        { label: "Conçu", value: "2021" },
        { label: "Durée", value: "3 semaines" },
      ],
    },
    {
      name: "Charles Dumeige Osteomeaux",
      type: "Site vitrine avancé",
      intro: "Ma première mission en freelance",
      technologies: "Vue, Tailwind, Mongoose, MongoDB, Express",
      description:
        "Projet de mission en freelance pour un ostéopathe à Meaux, France. Le site Web fonctionne comme une carte de visite électronique pour le client et il a également pour fonction d'expliquer plus en détail en quoi consiste son métier. C'était mon premier projet pour le secteur médical.",
      specialFeatures: "",
      landingPagePic: osteomeauxDemo,
      contain: true,
      projectLink: "https://www.charles-dumeige-osteomeaux.fr/",
      stats: [
        { label: "Conçu", value: "2021" },
        { label: "Durée", value: "8 semaines" },
      ],
    },
    {
      name: "COSMOUSSE",
      type: "Application mobile Full MERN Stack",
      intro: "Mon projet final à Ironhack",
      technologies:
        "HTML, CSS, JavaScript, MongoDB, Mongoose, Express.JS, React.JS;",
      description:
        "Une application permettant à un utilisateur de créer un compte et de localiser sur votre carte les meilleures bières que vous avez bues et de garder un inventaire de vos meilleurs moments. Une application mobile à toujours avoir dans sa poche !",
      specialFeatures:
        "Utilisation de MapBox, authentification complète de l'utilisateur à l'aide de React.JS, utilisation de bibliothèques telles que Semantics UI et Material UI.",
      landingPagePic: cosmousseDemo,
      contain: true,
      projectLink: "https://cosmousse.herokuapp.com/",
      stats: [
        { label: "Conçu", value: "2020" },
        { label: "Durée", value: "10 jours" },
      ],
    },
    {
      name: "EKAM Games",
      type: "Site Web réactif Front & Back-End",
      intro: "Mon second projet à Ironhack",
      technologies:
        "HTML, CSS, JavaScript, Handlebars, MongoDB, Mongoose, Express.JS;",
      description:
        "Un site Web où vous pouvez créer un compte et sélectionner des jeux vidéo (à partir d'une API nous connectant à 350 000 jeux vidéo) à ajouter à votre liste de souhaits ou à votre liste de jeux. Un site Web entièrement responsive à avoir à la maison ou en déplacement sur votre smartphone. Conçu avec 2 autres camarades de classe également passionnés de jeux vidéo.",
      specialFeatures: "",
      landingPagePic: ekamDemo,
      contain: false,
      projectLink: "https://ekam-games.herokuapp.com/",
      stats: [
        { label: "Conçu", value: "2020" },
        { label: "Durée", value: "5 jours" },
      ],
    },
    {
      name: "Iron Guitar",
      type: "Jeu vidéo Front-End",
      intro: "Mon premier projet à Ironhack",
      technologies: "HTML, CSS, JavaScript",
      description:
        "Une imitation du jeu vidéo mondialement connu Guitar Hero où le joueur doit frapper la note en s'alignant avec le manche. Plus votre séquence est élevée, plus les points se multiplient.",
      specialFeatures: "",
      landingPagePic: ironGuitarDemo,
      contain: false,
      projectLink: "https://maxjgruber.github.io/Iron-Guitar/",
      stats: [
        { label: "Conçu", value: "2020" },
        { label: "Durée", value: "5 jours" },
      ],
    },
  ],
};
