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
      children: [
        {
          name: "Mein GitHub",
          href: "https://github.com/MaxJGruber",
          icon: UserGroupIcon,
        },
        {
          name: "Mein LinkedIn",
          href: "https://www.linkedin.com/in/maximilian-j-gruber/",
          icon: GlobeAltIcon,
        },
        {
          name: "Mein CV (Englisch)",
          href: CVEn.default,
          icon: DocumentDownloadIcon,
        },
        {
          name: "Mein CV (Französisch)",
          href: CVFr.default,
          icon: DocumentDownloadIcon,
        },
        {
          name: "Mein Diplom",
          href: certificate.default,
          icon: DocumentDownloadIcon,
        },
      ],
    },
  ],
  contactMe: "Kontakt",
};
