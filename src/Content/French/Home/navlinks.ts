import {
  DocumentDownloadIcon,
  UserGroupIcon,
  GlobeAltIcon,
  FolderIcon,
  HomeIcon,
  DesktopComputerIcon,
  InboxIcon,
  UserIcon,
  PaperAirplaneIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import * as CVEn from "../../CVs/MaxJGruber_CV.pdf";
import * as CVFr from "../../CVs/MaxJGruber_CV_FR.pdf";
import * as certificate from "../../Certificate/IRONHACK_CERTIFICATE.pdf";

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
      children: [
        {
          name: "Mon GitHub",
          href: "https://github.com/MaxJGruber",
          icon: UserGroupIcon,
        },
        {
          name: "Mon LinkedIn",
          href: "https://www.linkedin.com/in/maximilian-j-gruber/",
          icon: GlobeAltIcon,
        },
        {
          name: "Mon CV (Anglais)",
          href: CVEn.default,
          icon: DocumentDownloadIcon,
        },
        {
          name: "Mon CV (Français)",
          href: CVFr.default,
          icon: DocumentDownloadIcon,
        },
        {
          name: "Mon Diplôme",
          href: certificate.default,
          icon: DocumentDownloadIcon,
        },
      ],
    },
  ],
  contactMe: "Me contacter",
};
