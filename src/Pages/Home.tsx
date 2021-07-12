import {
  DocumentDownloadIcon,
  UserGroupIcon,
  GlobeAltIcon,
  FolderIcon,
  HomeIcon,
  DesktopComputerIcon,
  InboxIcon,
  UserIcon,
  MenuIcon,
  PaperAirplaneIcon,
  XIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMeSection";
import ContactForm from "../Components/ContactForm";
import MaxJGruberLogo from "../Assets/MaxJGruber_LOGO.png";
import Title from "../Components/Title";
import * as CVEn from "../Content/CVs/MaxJGruber_CV.pdf";
import * as CVFr from "../Content/CVs/MaxJGruber_CV_FR.pdf";
import * as certificate from "../Content/Certificate/IRONHACK_CERTIFICATE.pdf";
import Projects from "../Components/Projects";
import BlogSection from "../Components/BlogSection";
import MissionSection from "../Components/MissionSection";
import SkillsSection from "../Components/SkillsSection";
import FunFacts from "../Components/FunFacts";
import Faq from "../Components/FAQ";
import NavlinkWithoutChildren from "../Components/Navbar/NavlinkWithoutChildren";
import NavlinkWithChildren from "../Components/Navbar/NavlinkWithChildren";

const navigation = [
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
    children: [
      {
        name: "My GitHub",
        href: "https://github.com/MaxJGruber",
        icon: UserGroupIcon,
      },
      {
        name: "My LinkedIn",
        href: "https://www.linkedin.com/in/maximilian-j-gruber/",
        icon: GlobeAltIcon,
      },
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
];

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
                  {navigation.map((item) =>
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
                      <div>Contact Me</div>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 border-t border-gray-200 p-4">
                {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Change Language
                </h3>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="emailAddress" className="sr-only">
                    Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-medium-logo-blue focus:border-indigo-500 sm:text-sm"
                    defaultValue="English"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-medium-logo-blue flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-medium-logo-blue"
                    >
                      Confirm
                    </button>
                  </div>
                </form> */}
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
                {navigation.map((item) =>
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
                    <div>Contact Me</div>
                  </div>
                </a>
              </nav>
            </div>
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <p className="text-lg">
                <a href="#" className="mx-2">
                  🇬🇧
                </a>
                <a href="#" className="mx-2">
                  🇫🇷
                </a>
                <a href="#" className="mx-2">
                  🇩🇪
                </a>
              </p>
              {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Change Language
              </h3>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="emailAddress" className="sr-only">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-medium-logo-blue focus:border-indigo-500 sm:text-sm"
                  defaultValue="English"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-light-logo-blue flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-medium-logo-blue focus:ring-2 focus:ring-offset-2 focus:ring-medium-logo-blue"
                  >
                    Confirm
                  </button>
                </div>
              </form> */}
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
              <Title title="ABOUT" />
              <AboutMe />
              <FunFacts />
            </div>
            <div id="knowledge">
              <Title title="KNOWLEDGE & SKILLS" />
              <MissionSection />
              <SkillsSection />
            </div>
            <div id="projects">
              <Title title="PROJECTS" />
              <Projects />
            </div>
            <div id="blog">
              <Title title="BLOG" />
              <BlogSection />
            </div>
            <div id="faq">
              <Title title="FREQUENTLY ASKED QUESTIONS" />
              <Faq />
            </div>
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
