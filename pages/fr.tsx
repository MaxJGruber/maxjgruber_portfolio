import MainView from "@/components/MainView";

const Home = ({ text }: { text: TextProps }) => <MainView text={text} />;

import { getAllText } from "@/helpers/getText";

export async function getStaticProps() {
  const text = getAllText("TextContentFrench");

  const navbarText = {
    navigation: [
      { name: "Accueil", href: "#home", icon: "HomeIcon", current: true },
      {
        name: "A propos de moi",
        href: "#about",
        icon: "UserIcon",
        current: false,
      },
      {
        name: "Savoir & Compétences",
        href: "#knowledge",
        icon: "ComputerDesktopIcon",
        current: false,
      },
      {
        name: "Projets",
        href: "#projects",
        icon: "FolderIcon",
        current: false,
      },
      { name: "Blog", href: "#blog", icon: "PaperAirplaneIcon", current: false },
      {
        name: "FAQ",
        href: "#faq",
        icon: "ChatBubbleLeftRightIcon",
        current: false,
      },
      {
        name: "Ressources",
        href: "#",
        icon: "InboxIcon",
        current: false,
        children: {
          links: [
            {
              name: "Mon GitHub",
              href: "https://github.com/MaxJGruber",
              icon: "faGithubSquare",
            },
            {
              name: "Mon LinkedIn",
              href: "https://www.linkedin.com/in/maximilian-j-gruber/",
              icon: "faLinkedin",
            },
          ],
          documents: [
            {
              name: "Mon CV (Anglais)",
              href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV.pdf",
              icon: "DocumentArrowDownIcon",
            },
            {
              name: "Mon CV (Français)",
              href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV-FR.pdf",
              icon: "DocumentArrowDownIcon",
            },
            {
              name: "Mon Diplôme",
              href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/IRONHACK_CERTIFICATE.pdf",
              icon: "DocumentArrowDownIcon",
            },
          ],
        },
      },
    ],
    contactMe: "Me contacter",
  };

  return { props: { text, navbarText } };
}

export default Home;
