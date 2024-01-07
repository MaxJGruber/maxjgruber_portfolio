import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe/AboutMeSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import Title from "@/components/Title";
import Projects from "@/components/Projects/Projects";
import BlogSection from "@/components/BlogSection";
import MissionSection from "@/components/Knowledge&Skills/MissionSection";
import SkillsSection from "@/components/Knowledge&Skills/SkillsSection";
import FunFacts from "@/components/AboutMe/FunFacts";
import Faq from "@/components/AboutMe/FAQ";

const MainView = ({ text }: { text: TextProps }) => (
  <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <HeroSection text={text.heroSection} />
      <div className="mt-20" id="about">
        <Title title={text.titles.about} />
        <AboutMe text={text.aboutMe} />
        <FunFacts text={text.funFacts} />
      </div>
      <div id="knowledge">
        <Title title={text.titles.knowledgeSkills} />
        <MissionSection text={text.knowledge} />
        <SkillsSection text={text.skillsSection} />
      </div>
      <div id="projects">
        <Title title={text.titles.projects} />
        <Projects
          text={text.projectsList}
          titles={text.titles}
          captions={text.projectSection}
        />
      </div>
      <div id="blog">
        <Title title={text.titles.blog} />
        <BlogSection />
      </div>
      <div id="faq">
        <Title title={text.titles.faq} />
        <Faq text={text.faq} />
      </div>
      <ContactForm text={text.contactForm} notifications={text.notifications} />
    </div>
  </main>
);

export default MainView;
