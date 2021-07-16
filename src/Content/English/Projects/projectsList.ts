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
      type: "Brochure Website",
      intro: "upcoming",
      technologies: "React.JS / TypeScript / Tailwind",
      description:
        "Freelance mission project for a business consultancy company in the South-West of France. The company wanted a remodel and facelift of their old website to appeal to a larger clientele of all age groups. I designed the new website on a completly different technical stack keeping mostly the content. As the client has the intentions to appeal to a international demographic, the website content is in English, French and German.",
      specialFeatures: "",
      landingPagePic: newALSDemo,
      oldLandingPage: oldALSDemo,
      contain: true,
      stats: [
        { label: "Expected", value: "Fall 2021" },
        // { label: "Duration", value: "3 weeks" },
      ],
    },
  ],
  projects: [
    {
      name: "Marss N30",
      type: "Brochure Website",
      intro: "My second freelance mission",
      technologies: "React.JS / Tailwind",
      description:
        "Freelance mission project for a hairdressing salon in the South-West of France. The client wanted a simple and elegant website for all age groups. As the clientele of the salon is varied, the website content is in English and French.",
      specialFeatures: "",
      landingPagePic: marssn30Demo,
      contain: false,
      projectLink: "https://www.marss-n30.com/",
      stats: [
        { label: "Created", value: "2021" },
        { label: "Duration", value: "3 weeks" },
      ],
    },
    {
      name: "Charles Dumeige Osteomeaux",
      type: "Advanced Brochure Website",
      intro: "My first freelance mission",
      technologies: "Vue.JS / Tailwind / MongoDB / Mongoose / Express.JS",
      description:
        "Freelance mission project for an osteopath in Meaux, France. The website works as an electronic business card for the client and it also has the function to explain in greater detail what his profession consists of. This was my first project for the medical sector.",
      specialFeatures: "",
      landingPagePic: osteomeauxDemo,
      contain: true,
      projectLink: "https://www.charles-dumeige-osteomeaux.fr/",
      stats: [
        { label: "Created", value: "2021" },
        { label: "Duration", value: "8 weeks" },
      ],
    },
    {
      name: "COSMOUSSE",
      type: "Full MERN Stack Mobile Application",
      intro: "My final project at ironhack",
      technologies:
        "HTML / CSS / JavaScript / MongoDB / Mongoose / Express.JS / React.JS ",
      description:
        "An application for a user to create an account and pin-point on your map, the best beers you've had and keep an inventory of your best moments. A mobile application to always have in your pocket!",
      specialFeatures:
        "Using MapBox, full user authentication using React.JS, use of libraries such as Semantics UI and Material UI.",
      landingPagePic: cosmousseDemo,
      contain: true,
      projectLink: "https://cosmousse.herokuapp.com/",
      stats: [
        { label: "Created", value: "2020" },
        { label: "Duration", value: "10 days" },
      ],
    },
    {
      name: "EKAM Games",
      type: "Front & Back-End Responsive Website",
      intro: "My second project at Ironhack",
      technologies:
        "HTML / CSS / JavaScript / Handlebars / MongoDB / Mongoose / Express.JS",
      description:
        "A website where you can create an account and select video games (from an API connecting us to 350 thousand video games) to add to your wishlist, or your owned games list. A fully responsive website to have at home or on-the-go on your smartphone. Designed with 2 other classmates who are also passionate about video games.",
      specialFeatures: "",
      landingPagePic: ekamDemo,
      contain: false,
      projectLink: "https://ekam-games.herokuapp.com/",
      stats: [
        { label: "Created", value: "2020" },
        { label: "Duration", value: "5 days" },
      ],
    },
    {
      name: "Iron Guitar",
      type: "Front-End Game Application",
      intro: "My first project at ironhack",
      technologies: "HTML / CSS / JavaScript",
      description:
        "An imitation of world-known video game Guitar Hero where the player needs to hit the notes as they align with the fret-board. The higher your streak, the higher the points multiply.",
      specialFeatures: "",
      landingPagePic: ironGuitarDemo,
      projectLink: "https://maxjgruber.github.io/Iron-Guitar/",
      contain: false,
      stats: [
        { label: "Created", value: "2020" },
        { label: "Duration", value: "5 days" },
      ],
    },
  ],
};
