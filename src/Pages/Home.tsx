import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMeSection";
import ContactForm from "../Components/ContactForm";
import MaxJGruberLogo from "../Assets/MaxJGruber_LOGO.png";
import Title from "../Components/Title";
import Projects from "../Components/Projects";
import BlogSection from "../Components/BlogSection";
import MissionSection from "../Components/MissionSection";
import SkillsSection from "../Components/SkillsSection";
import FunFacts from "../Components/FunFacts";
import Faq from "../Components/FAQ";
import NavlinkWithoutChildren from "../Components/Navbar/NavlinkWithoutChildren";
import NavlinkWithChildren from "../Components/Navbar/NavlinkWithChildren";
import contentLanguage from "../Redux/languageContent";

const mapDispatchToProps = (dispatch: Function) => ({
  setLanguage: (language: string) =>
    dispatch({ type: "SET_LANGUAGE", language }),
});
const mapStateToProps = (state: Record<string, any>) => {
  return { language: state.language };
};

const Home = (props: Record<string, any>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLanguageSelect = (event: Record<string, any>) => {
    event.preventDefault();
    props.setLanguage(event.target.value);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src={MaxJGruberLogo}
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {contentLanguage().navlinks.navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <NavlinkWithoutChildren item={item} />
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <NavlinkWithChildren item={item} open={open} />
                        )}
                      </Disclosure>
                    )
                  )}
                  <a
                    href="#contact-form"
                    className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue"
                  >
                    <div className="flex items-center">
                      <div>{contentLanguage().navlinks.contactMe}</div>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 border-t border-gray-200 p-4">
                <p className="text-lg">
                  <button
                    onClick={handleLanguageSelect}
                    value="en"
                    className="mx-2"
                  >
                    🇬🇧
                  </button>
                  <button
                    onClick={handleLanguageSelect}
                    value="fr"
                    className="mx-2"
                  >
                    🇫🇷
                  </button>
                  <button
                    onClick={handleLanguageSelect}
                    value="de"
                    className="mx-2"
                  >
                    🇩🇪
                  </button>
                </p>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center justify-center">
                <img
                  className="h-20 w-auto logo"
                  src={MaxJGruberLogo}
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {contentLanguage().navlinks.navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <NavlinkWithoutChildren item={item} />
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <NavlinkWithChildren item={item} open={open} />
                      )}
                    </Disclosure>
                  )
                )}
                <a
                  href="#contact-form"
                  className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue"
                >
                  <div className="flex items-center">
                    <div>{contentLanguage().navlinks.contactMe}</div>
                  </div>
                </a>
              </nav>
            </div>
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <p className="text-lg">
                <button
                  onClick={handleLanguageSelect}
                  value="en"
                  className="mx-2"
                >
                  🇬🇧
                </button>
                <button
                  onClick={handleLanguageSelect}
                  value="fr"
                  className="mx-2"
                >
                  🇫🇷
                </button>
                <button
                  onClick={handleLanguageSelect}
                  value="de"
                  className="mx-2"
                >
                  🇩🇪
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-medium-logo-blue"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
