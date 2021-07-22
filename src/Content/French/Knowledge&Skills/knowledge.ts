import {
  DatabaseIcon,
  DeviceMobileIcon,
  ServerIcon,
  UsersIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

export const knowledge = {
  title: `Connaissances`,
  features: [
    {
      name: "Developpement Web Full Stack",
      icon: DatabaseIcon,
      description:
        "Je suis formé en MongoDB, Express, React, Node stack. J'ai aussi exploré Vue, Golang et SQL.",
    },
    {
      name: "Design réactif",
      icon: DeviceMobileIcon,
      description:
        "J'ai énormément travaillé sur le responsive design afin que mes projets gardent toujours le même esprit sur des écrans de bureau ou plus petits.",
    },
    {
      name: "SEO & Performance",
      icon: GlobeAltIcon,
      description:
        "Je cherche régulièrement comment rester au courant des tendances en évolution rapide avec Google. J'ai également un vif intérêt pour l'optimisation des performances des pages Web.",
    },
    {
      name: "Tests & Debugging",
      icon: SparklesIcon,
      description:
        "J'ai rencontré d'innombrables bugs mais j'ai réussi à en corriger beaucoup aussi. J'ai essayé Mocha et Jasmine pendant un court moment, et j'ai l'intention d'explorer Jest ensuite.",
    },
    {
      name: "Travail en équipe",
      icon: UsersIcon,
      description:
        "J'ai de l'expérience en collaboration sur des projets avec plus de 2 personnes, tout en utilisant le versionnement git et Slack.",
    },
    {
      name: "Hébergement",
      icon: ServerIcon,
      description:
        "Grâce à mes missions en Freelance, j'utilise principalement Heroku et j'ai commencé à utiliser l'hébergement AWS.",
    },
  ],
};
