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
import * as CVEn from "../../CVs/MaxJGruber_CV.pdf";
import * as CVFr from "../../CVs/MaxJGruber_CV_FR.pdf";
import * as certificate from "../../Certificate/IRONHACK_CERTIFICATE.pdf";

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
            href: CVEn.default,
            icon: DocumentDownloadIcon,
          },
          {
            name: "My CV (French)",
            href: CVFr.default,
            icon: DocumentDownloadIcon,
          },
          {
            name: "My Certificate",
            href: certificate.default,
            icon: DocumentDownloadIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Contact Me",
};
