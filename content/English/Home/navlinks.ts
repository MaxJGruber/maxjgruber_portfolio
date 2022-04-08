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
      name: "About Me",
      href: "#about",
      icon: UserIcon,
      current: false,
    },
    {
      name: "Knowledge & Skills",
      href: "#knowledge",
      icon: DesktopComputerIcon,
      current: false,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderIcon,
      current: false,
    },
    { name: "Blog", href: "#blog", icon: PaperAirplaneIcon, current: false },
    { name: "FAQ", href: "#faq", icon: ChatAlt2Icon, current: false },
    {
      name: "Resources",
      href: "#",
      icon: InboxIcon,
      current: false,
      children: {
        links: [
          {
            name: "My GitHub",
            href: "https://github.com/MaxJGruber",
            icon: faGithubSquare,
          },
          {
            name: "My LinkedIn",
            href: "https://www.linkedin.com/in/maximilian-j-gruber/",
            icon: faLinkedin,
          },
        ],
        documents: [
          {
            name: "My CV (English)",
            href: "static/personal-documents/MaxJGruber_CV.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "My CV (French)",
            href: "static/personal-documents/MaxJGruber_CV_FR.pdf",
            icon: DocumentDownloadIcon,
          },
          {
            name: "My Certificate",
            href: "static/personal-documents/IRONHACK_CERTIFICATE.pdf",
            icon: DocumentDownloadIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Contact Me",
};
