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

export const navlinksEnglish = {
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
      icon: ComputerDesktopIcon,
      current: false,
    },
    {
      name: "Projects",
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
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV.pdf",
            icon: DocumentArrowDownIcon,
          },
          {
            name: "My CV (French)",
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/Max-Gruber-CV-FR.pdf",
            icon: DocumentArrowDownIcon,
          },
          {
            name: "My Certificate",
            href: "https://max-gruber-cvs.s3.eu-west-3.amazonaws.com/IRONHACK_CERTIFICATE.pdf",
            icon: DocumentArrowDownIcon,
          },
        ],
      },
    },
  ],
  contactMe: "Contact Me",
};
