import {
  DatabaseIcon,
  DeviceMobileIcon,
  ServerIcon,
  UsersIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

export const knowledge = {
  title: `Knowledge`,
  features: [
    {
      name: "Full Stack Web Development",
      icon: DatabaseIcon,
      description:
        "I am trained in the MongoDB, Express, React, Node stack and Python. I have also explored Vue, Golang and SQL.",
    },
    {
      name: "Responsive Design",
      icon: DeviceMobileIcon,
      description:
        "I have laid enormous work into responsive design so that my projects always keep the same spirit on desktop or smaller screens.",
    },
    {
      name: "SEO & Performance",
      icon: GlobeAltIcon,
      description:
        "I am regularly searching how to stay on top of fast-changing trends with Google. I also have a keen interest in webpage performace optimization.",
    },
    {
      name: "Testing & Debugging",
      icon: SparklesIcon,
      description:
        "I ran into countless bugs but I've managed to fix a lot of them too. I'm trained in Cypress and Jest.",
    },
    {
      name: "Teamwork",
      icon: UsersIcon,
      description:
        "I have experience collaborating on projects with 2+ people, while using git versioning and Slack.",
    },
    {
      name: "Hosting",
      icon: ServerIcon,
      description:
        "Through my freelancing work, I have used Heroku and started using AWS hosting. I also use Netlify.",
    },
  ],
};
