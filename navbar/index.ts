import { navlinksEnglish } from "@/navbar/navlinksEnglish";
import { navlinksFrench } from "@/navbar/navlinksFrench";

const returnLanguageContent = (language: "en" | "fr"): NavbarProps => {
  const languageSelection = {
    en: navlinksEnglish,
    fr: navlinksFrench,
  };
  return languageSelection[language];
};
export default returnLanguageContent;
