import { navlinksEnglish } from "@/navbar/navlinksEnglish";
import { navlinksFrench } from "@/navbar/navlinksFrench";
import { navlinksGerman } from "@/navbar/navlinksGerman";

const returnLanguageContent = (language: "en" | "fr" | "de"): NavbarProps => {
  const languageSelection = {
    en: navlinksEnglish,
    fr: navlinksFrench,
    de: navlinksGerman,
  };
  return languageSelection[language];
};
export default returnLanguageContent;
