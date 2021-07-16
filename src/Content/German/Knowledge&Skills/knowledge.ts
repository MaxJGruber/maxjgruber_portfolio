import {
  DatabaseIcon,
  DeviceMobileIcon,
  ServerIcon,
  UsersIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

export const knowledge = {
  title: `Wissen`,
  features: [
    {
      name: "Full Stack Web Development",
      icon: DatabaseIcon,
      description:
        "Ich bin im MongoDB-, Express-, React-, Node-Stack ausgebildet. Ich habe auch Vue, Golang und SQL erforscht.",
    },
    {
      name: "Responsive Design",
      icon: DeviceMobileIcon,
      description:
        "Ich habe enorm viel Arbeit in Responsive Design gesteckt, damit meine Projekte auf Desktop- oder kleineren Bildschirmen immer den gleichen Charakter behalten.",
    },
    {
      name: "SEO & Leistung",
      icon: GlobeAltIcon,
      description:
        "Ich suche regelmäßig nach Möglichkeiten, um mit Google über sich schnell ändernde Trends auf dem Laufenden zu bleiben. Ich interessiere mich auch sehr für die Optimierung der Webseiten-Performance.",
    },
    {
      name: "Testgetriebene Entwicklung",
      icon: SparklesIcon,
      description:
        "Dies ist etwas, in dem ich ziemlich neu bin. Allerdings habe ich mich für eine kurze Zeit mit Mocha und Jasmine beschäftigt und habe vor, Jest als nächstes zu erkunden.",
    },
    {
      name: "Zusammenarbeit",
      icon: UsersIcon,
      description:
        "Ich habe Erfahrung in der Zusammenarbeit an Projekten mit mehr als 2 Personen, während ich git Versioning und Slack verwende.",
    },
    {
      name: "Hosting",
      icon: ServerIcon,
      description:
        "Durch meine freiberufliche Tätigkeit habe ich Heroku verwendet und angefangen, AWS-Hosting zu verwenden.",
    },
  ],
};
