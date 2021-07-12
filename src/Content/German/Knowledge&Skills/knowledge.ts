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
        "I am trained in the MongoDB, Express, React, Node stack. I have also explored Vue, Golang and SQL.",
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
      name: "Test Driven Development",
      icon: SparklesIcon,
      description:
        "This is something I am fairly new in. However, I have dabbled with Mocha and Jasmine for a short while, and I intend to explore Jest next.",
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
        "Through my freelancing work, I have used Heroku and started using AWS hosting.",
    },
  ],
};
