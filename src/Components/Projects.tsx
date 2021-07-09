import ProjectInfoSection from "./ProjectInfoSection";
import ALSLandingPage from "../Assets/project-pics/ALS_LandingPage.png";
import marssn30LandingPage from "../Assets/project-pics/marss-n30_landing-page.png";
import osteomeauxLandingPage from "../Assets/project-pics/osteomeaux_landing-page.png";
import cosmousseLandingPage from "../Assets/project-pics/cosmousse_landing-page.png";
import ekamLandingPage from "../Assets/project-pics/ekam_landing-page.png";
import ironGuitarLandingPage from "../Assets/project-pics/iron-guitar_landing-page.png";

const upcomingProjects = [
  {
    name: "Aquitaine Lifestyle Solutions",
    type: "Brochure Website",
    technologies: "React, TypeScript, Tailwind",
    description:
      "Freelance mission project a business consultancy company in the South-West of France. The company wanted a remodel and facelift of their old website to appeal to a larger clientele of all age groups. As the current and futur clientele expands over Europe, the website content is in English, French and German.",
    specialFeatures: "",
    landingPagePic: ALSLandingPage,
    stats: [
      { label: "Expected", value: "Fall 2021" },
      // { label: "Duration", value: "3 weeks" },
    ],
  },
];

const projects = [
  {
    name: "Marss N30",
    type: "Brochure Website",
    technologies: "React, Tailwind",
    description:
      "Freelance mission project for a hairdressing salon in the South-West of France. The client wanted a simple and elegant website for all age groups. As the clientele of the salon is varied, the website content is in English and French.",
    specialFeatures: "",
    landingPagePic: marssn30LandingPage,
    stats: [
      { label: "Created", value: "2021" },
      { label: "Duration", value: "3 weeks" },
    ],
  },
  {
    name: "Charles Dumeige Osteomeaux",
    type: "Advanced Brochure Website",
    technologies: "Vue, Tailwind, Mongoose, MongoDB, Express",
    description:
      "Freelance mission project for an osteopath in Meaux, France. The website works as an electronic business card for the client and it also has the function to explain in greater detail what his profession consists of. This was my first project for the medical sector.",
    specialFeatures: "",
    landingPagePic: osteomeauxLandingPage,
    stats: [
      { label: "Created", value: "2021" },
      { label: "Duration", value: "8 weeks" },
    ],
  },
  {
    name: "COSMOUSSE",
    type: "Full MERN Stack Mobile Application",
    technologies:
      "HTML, CSS, JavaScript, MongoDB, Mongoose, Express.JS, React.JS;",
    description:
      "An application for a user to create an account and pin-point on your map, the best beers you've had and keep an inventory of your best moments. A mobile application to always have in your pocket!",
    specialFeatures:
      "Using MapBox, full user authentication using React.JS, use of libraries such as Semantics UI and Material UI.",
    landingPagePic: cosmousseLandingPage,
    stats: [
      { label: "Created", value: "2020" },
      { label: "Duration", value: "10 days" },
    ],
  },
  {
    name: "EKAM Games",
    type: "Front & Back-End Responsive Website",
    technologies:
      "HTML, CSS, JavaScript, Handlebars, MongoDB, Mongoose, Express.JS;",
    description:
      "A website where you can create an account and select video games (from an API connecting us to 350 thousand video games) to add to your wishlist, or your owned games list. A fully responsive website to have at home or on-the-go on your smartphone. Designed with 2 other classmates who are also passionate about video games.",
    specialFeatures: "",
    landingPagePic: ekamLandingPage,
    stats: [
      { label: "Created", value: "2020" },
      { label: "Duration", value: "5 days" },
    ],
  },
  {
    name: "Iron Guitar",
    type: "Front-End Game Application",
    technologies: "HTML, CSS, JavaScript",
    description:
      "An imitation of world-known video game Guitar Hero where the player needs to hit the note as they align with the fret-board. The higher your streak, the higher the points multiply.",
    specialFeatures: "",
    landingPagePic: ironGuitarLandingPage,
    stats: [
      { label: "Created", value: "2020" },
      { label: "Duration", value: "5 days" },
    ],
  },
];

export default function Projects() {
  return (
    <div>
      {upcomingProjects.map((project: Record<string, any>) => (
        <ProjectInfoSection project={project} />
      ))}
      {projects.map((project: Record<string, any>) => (
        <ProjectInfoSection project={project} />
      ))}
    </div>
  );
}
