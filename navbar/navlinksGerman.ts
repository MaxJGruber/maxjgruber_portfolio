import {
  DocumentArrowDownIcon,
  FolderIcon,
  HomeIcon,
  ComputerDesktopIcon,
  InboxIcon,
  UserIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export const navlinksGerman = {
  navigation: [
    { name: "Home", href: "#home", icon: HomeIcon, current: true },
    {
      name: "Über mich",
      href: "#about",
      icon: UserIcon,
      current: false,
    },
    {
      name: "Wissen & Fähigkeiten",
      href: "#knowledge",
      icon: ComputerDesktopIcon,
      current: false,
    },
    {
      name: "Projekte",
      href: "#projects",
      icon: FolderIcon,
      current: false,
    },
    { name: "Blog", href: "#blog", icon: PaperAirplaneIcon, current: false },
    {
      name: "FAQ",
      href: "#faq",
      icon: ChatBubbleLeftRightIcon,
      current: false,
    },
    {
      name: "Ressourcen",
      href: "#",
      icon: InboxIcon,
      current: false,
      children: {
        links: [
          {
            name: "Mein GitHub",
            href: "https://github.com/MaxJGruber",
            icon: faGithubSquare,
          },
          {
            name: "Mein LinkedIn",
            href: "https://www.linkedin.com/in/maximilian-j-gruber/",
            icon: faLinkedin,
          },
        ],
        documents: [
          {
            name: "Mein CV (Englisch)",
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV.pdf",
            icon: DocumentArrowDownIcon,
          },
          {
            name: "Mein CV (Französisch)",
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV-FR.pdf",
            icon: DocumentArrowDownIcon,
          },
          {
            name: "Mein Diplom",
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/IRONHACK_CERTIFICATE.pdf",
            icon: DocumentArrowDownIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Kontakt",
};
