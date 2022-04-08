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
      icon: DesktopComputerIcon,
      current: false,
    },
    {
      name: "Projekte",
      href: "#projects",
      icon: FolderIcon,
      current: false,
    },
    { name: "Blog", href: "#blog", icon: PaperAirplaneIcon, current: false },
    { name: "FAQ", href: "#faq", icon: ChatAlt2Icon, current: false },
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
            href: "static/personal-documents/MaxJGruber_CV.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "Mein CV (Französisch)",
            href: "static/personal-documents/MaxJGruber_CV_FR.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "Mein Diplom",
            href: "static/personal-documents/IRONHACK_CERTIFICATE.pdf",
            icon: DocumentDownloadIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Kontakt",
};
