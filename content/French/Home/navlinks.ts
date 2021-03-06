import {
  DocumentDownloadIcon,
  FolderIcon,
  HomeIcon,
  DesktopComputerIcon,
  InboxIcon,
  UserIcon,
  PaperAirplaneIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export const navlinks = {
  navigation: [
    { name: "Accueil", href: "#home", icon: HomeIcon, current: true },
    {
      name: "A propos de moi",
      href: "#about",
      icon: UserIcon,
      current: false,
    },
    {
      name: "Savoir & Compétences",
      href: "#knowledge",
      icon: DesktopComputerIcon,
      current: false,
    },
    {
      name: "Projets",
      href: "#projects",
      icon: FolderIcon,
      current: false,
    },
    { name: "Blog", href: "#blog", icon: PaperAirplaneIcon, current: false },
    { name: "FAQ", href: "#faq", icon: ChatAlt2Icon, current: false },
    {
      name: "Ressources",
      href: "#",
      icon: InboxIcon,
      current: false,
      children: {
        links: [
          {
            name: "Mon GitHub",
            href: "https://github.com/MaxJGruber",
            icon: faGithubSquare,
          },
          {
            name: "Mon LinkedIn",
            href: "https://www.linkedin.com/in/maximilian-j-gruber/",
            icon: faLinkedin,
          },
        ],
        documents: [
          {
            name: "Mon CV (Anglais)",
            href: "static/personal-documents/MaxJGruber_CV.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "Mon CV (Français)",
            href: "static/personal-documents/MaxJGruber_CV_FR.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "Mon Diplôme",
            href: "static/personal-documents/IRONHACK_CERTIFICATE.pdf",
            icon: DocumentDownloadIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Me contacter",
};
