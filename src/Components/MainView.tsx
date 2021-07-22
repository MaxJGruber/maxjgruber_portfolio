import contentLanguage from "../Redux/languageContent";
import HeroSection from "../Components/HeroSection";
import AboutMe from "./AboutMe/AboutMeSection";
import ContactForm from "../Components/ContactForm/ContactForm";
import Title from "../Components/Title";
import Projects from "./Projects/Projects";
import BlogSection from "../Components/BlogSection";
import MissionSection from "./Knowledge&Skills/MissionSection";
import SkillsSection from "./Knowledge&Skills/SkillsSection";
import FunFacts from "./AboutMe/FunFacts";
import Faq from "./AboutMe/FAQ";

function MainView() {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <HeroSection />
        <div className="mt-20" id="about">
          <Title title={contentLanguage().titles.about} />
          <AboutMe />
          <FunFacts />
        </div>
        <div id="knowledge">
          <Title title={contentLanguage().titles.knowledgeSkills} />
          <MissionSection />
          <SkillsSection />
        </div>
        <div id="projects">
          <Title title={contentLanguage().titles.projects} />
          <Projects />
        </div>
        <div id="blog">
          <Title title={contentLanguage().titles.blog} />
          <BlogSection />
        </div>
        <div id="faq">
          <Title title={contentLanguage().titles.faq} />
          <Faq />
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

export default MainView;
