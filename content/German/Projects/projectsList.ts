export const projectsList = {
  upcomingProjects: [
    {
      name: "Aquitaine Lifestyle Solutions",
      type: "Werbebroschüre und Webauftritt",
      intro: "Gegenwärtig in Arbeit",
      technologies: "React.JS / TypeScript / Tailwind",
      description:
        "Unabhängiges Auftragsprojekt für eine Firma für Unternehmensberatung in Südwest-Frankreich. Das Unternehmen benötigt eine radikal neu gestaltete und attraktivere Version ihres bisherigen Webauftritts, um durch eine zeitgemäße Aktualisierung einen erweiterten Kundenkreis in allen Altersschichten zu erreichen. Ich habe die neue Website auf einem völlig anderen technischen Stack entworfen, wobei hauptsächlich der Inhalt beibehalten wurde. Da das Unternehmen auch geographisch eine Ausdehnung in ganz Europa anstrebt, werden die sprachlichen Inhalte des Projekts in Englisch, Französisch und Deutsch konzipiert.",
      specialFeatures: "",
      landingPagePic: "static/project-pics/new-als-demo.gif",
      oldLandingPage: "static/project-pics/old-als-demo.gif",
      contain: true,
      stats: [{ label: "Fälligkeit", value: "TBD" }],
    },
  ],
  projects: [
    {
      name: "Europe Sustainable Development Report 2021",
      type: "Datenvisualisierung",
      intro: "Zweites Projekt bei SDSN",
      technologies: "Next.Js",
      description:
        "Der Bericht über die nachhaltige Entwicklung in Europa 2021 ist die dritte Ausgabe des unabhängigen quantitativen Berichts von SDSN über die Fortschritte der Europäischen Union und ihrer Mitgliedstaaten bei der Umsetzung der Ziele für nachhaltige Entwicklung (SDGs).",
      specialFeatures: "",
      landingPagePic: "static/project-pics/esdr2021.gif",
      contain: false,
      projectLink: "https://eu-dashboards.sdgindex.org/",
      stats: [
        { label: "Erstellt", value: "2021" },
        { label: "Dauer", value: "6 Wochen" },
      ],
    },
    {
      name: "SDG Impact Investment Toolkit BETA",
      type: "Datenvisualisierung",
      intro: "Erstes Projekt bei SDSN",
      technologies: "Next.Js",
      description:
        "Ein in Zusammenarbeit mit der Inter-american Development Bank entwickeltes Toolkit, das eine Ex-ante-Analyse bietet, um Investitionsmöglichkeiten zur Förderung der Ziele für nachhaltige Entwicklung in Lateinamerika und der Karibik zu untersuchen und zu verfolgen.",

      specialFeatures: "",
      landingPagePic: "static/project-pics/impact-investment-toolkit.gif",
      contain: false,
      projectLink: "https://sdg-investment-tool-beta.netlify.app/",
      stats: [
        { label: "Fälligkeit", value: "TBD" },
        // { label: "Created", value: "2021" },
        // { label: "Duration", value: "3 weeks" },
      ],
    },
    {
      name: "Marss N30",
      type: "Werbebroschüre und Webauftritt",
      intro: "Zweites unabhängiges Auftragsprojekt",
      technologies: "React.JS / Tailwind",
      description:
        "Werbebroschüre und Webauftritt für einen neuen Frisörsalon im Süden Frankreichs. Der Kunde wünschte  eine einfach gehaltene jedoch graphisch elegante und stilvolle Webseite, die gleichermaßen alle Alters- und Kundengruppen anspricht. Da die Kundschaft des Salons sehr vielschichtig ist, wurden die entsprechenden Inhalte auf Englisch und Französisch verfasst.",
      specialFeatures: "",
      landingPagePic: "static/project-pics/marss-n30-demo.gif",
      contain: false,
      projectLink: "https://www.marss-n30.com/",
      stats: [
        { label: "Erstellt", value: "2021" },
        { label: "Dauer", value: "3 Wochen" },
      ],
    },
    {
      name: "Charles Dumeige Osteomeaux",
      type: "Hochentwickelte Werbebroschüre und Webauftritt",
      intro: "Erstes unabhängiges Auftragsprojekt",
      technologies: "Vue.JS / Tailwind / MongoDB / Mongoose / Express.JS",
      description:
        "Hochentwickelte Werbebroschüre und Webauftritt für eine osteopathische Praxis in Meaux, Frankreich. Die Webseite wurde als elektronische Geschäftskarte für den Kunden konzipiert und erläutert auch fachlich fundiert und allgemeinverständlich alle Aspekte von Therapie, Theorie und Behandlungsprinzipien dieser medizinischen Berufsgattung.",
      specialFeatures: "",
      landingPagePic: "static/project-pics/osteomeaux-demo.gif",
      contain: true,
      projectLink: "https://www.charles-dumeige-osteomeaux.fr/",
      stats: [
        { label: "Erstellt", value: "2021" },
        { label: "Dauer", value: "8 Wochen" },
      ],
    },
    {
      name: "COSMOUSSE",
      type: "Full MERN Stack Mobile Application",
      intro: "Mein Abschlussprojekt bei ironhack",
      technologies:
        "HTML / CSS / JavaScript / MongoDB / Mongoose / Express.JS / React.JS ",
      description:
        "Eine app, auf der ein Benutzer sein eigenes Konto eröffnen und auch einen geographischen Marker setzen kann - um seine Lieblingsbiersorten und lokalen Entdeckungen / Erlebnisse zu speichern und für andere zu dokumentieren. Eine app, die allgegenwärtig und in der Tasche stets verfügbar ist.",
      specialFeatures:
        "Benützung von MapBox, full user authentication mit React.JS, benützung von Front-End Libraries wie Semantics UI and Material UI.",
      landingPagePic: "static/project-pics/cosmousse-demo.gif",
      contain: true,
      projectLink: "https://cosmousse.herokuapp.com/",
      stats: [
        { label: "Erstellt", value: "2020" },
        { label: "Dauer", value: "10 Tage" },
      ],
    },
    {
      name: "EKAM Games",
      type: "Front & Back-End Responsive Website",
      intro: "Mein zweites Projekt bei ironhack",
      technologies:
        "HTML / CSS / JavaScript / Handlebars / MongoDB / Mongoose / Express.JS",
      description:
        "Eine Webseite, auf der man ein Konto eröffnen und Videospiele auswählen kann, entweder als Wunschliste oder aus dem eigenen Bestand (auf der Basis einer API-Verbindung mit 350 000 Videospielen). Eine voll interaktive Webseite für zuhause oder auch unterwegs auf dem Smartphone. Mit 2 anderen Klassenkameraden entworfen, die sich auch für Videospiele begeistern.",
      specialFeatures: "",
      landingPagePic: "static/project-pics/ekam-demo.gif",
      contain: false,
      projectLink: "https://ekam-games.herokuapp.com/",
      stats: [
        { label: "Erstellt", value: "2020" },
        { label: "Dauer", value: "5 Tage" },
      ],
    },
    {
      name: "Iron Guitar",
      type: "Front-End Game Application",
      intro: "Mein erstes Projekt bei ironhack",
      technologies: "HTML / CSS / JavaScript",
      description:
        "Eine Nachahmung des weltberühmten Videospiels Guitar Hero, bei der die Spieler die richtigen Noten auf dem Griffbrett treffen müssen. Je mehr zusammenhängende Treffer erzielt werden, desto höher steigt die Punktzahl.",
      specialFeatures: "",
      landingPagePic: "static/project-pics/iron-guitar-demo.gif",
      contain: false,
      projectLink: "https://maxjgruber.github.io/Iron-Guitar/",
      stats: [
        { label: "Erstellt", value: "2020" },
        { label: "Dauer", value: "5 Tage" },
      ],
    },
  ],
};
