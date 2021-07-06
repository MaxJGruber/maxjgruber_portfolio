import NavMain from "../Components/NavMain";
import HeroSection from "../Components/HeroSection";
import LogoClouds from "../Components/LogoClouds";
import MissionSection from "../Components/MissionSection";
import AboutMe from "../Components/AboutMeSection";
import ProjectInfoSection from "../Components/ProjectInfoSection";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

import * as CVEn from "../Content/CVs/MaxJGruber_CV.pdf";
import * as CVFr from "../Content/CVs/MaxJGruber_CV_FR.pdf";
import * as certificate from "../Content/Certificate/IRONHACK_CERTIFICATE.pdf";

import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import {
  CalendarIcon,
  BookmarkAltIcon,
  UserGroupIcon,
  GlobeAltIcon,
  FolderIcon,
  HomeIcon,
  DesktopComputerIcon,
  InboxIcon,
  UsersIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "About Me",
    href: "#",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    current: false,
    children: [
      {
        name: "Osteomeaux",
        description: "A full stack responsive website for an osteopath.",
        href: "#",
        icon: ChartBarIcon,
      },
      {
        name: "Marss N30",
        description: "A fully responsive website for a hairdressing salon.",
        href: "#",
        icon: CursorClickIcon,
      },
      {
        name: "Cosmousse",
        description:
          "A mobile web application designed to keep track of your favourite beers.",
        href: "#",
        icon: ShieldCheckIcon,
      },
      {
        name: "EKAM Games",
        description:
          "A website where you can add video games to your wishlists.",
        href: "#",
        icon: ViewGridIcon,
      },
    ],
  },
  { name: "Technologies", href: "#", icon: CalendarIcon, current: false },
  { name: "Blog", href: "#", icon: CalendarIcon, current: false },
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
      { name: "My CV (English)", href: CVEn.default, icon: BookmarkAltIcon },
      { name: "My CV (French)", href: CVFr.default, icon: DesktopComputerIcon },
      {
        name: "My Certificate",
        href: certificate.default,
        icon: DesktopComputerIcon,
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href="#"
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-gray-400 rotate-90"
                                    : "text-gray-300",
                                  "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                  <a
                    href="#"
                    className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <div className="flex items-center">
                      <div>Contact Me</div>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 border-t border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Change Language
                </h3>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="emailAddress" className="sr-only">
                    Language
                  </label>
                  <select
                    id="language"
                    name="language"
                    className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue="English"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
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
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <a
                        href="#"
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? "text-gray-400 rotate-90"
                                  : "text-gray-300",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                              >
                                {" "}
                                <subItem.icon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                {subItem.name}
                              </a>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
                <a
                  href="#"
                  className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <div className="flex items-center">
                    <div>Contact Me</div>
                  </div>
                </a>
              </nav>
            </div>
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Change Language
              </h3>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="emailAddress" className="sr-only">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue="English"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1> */}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <HeroSection />
                <MissionSection />
                <LogoClouds />
                <AboutMe />
                <ProjectInfoSection />
                <ContactForm />
                {/* <Footer /> */}
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200">
          {/* Start secondary column (hidden on smaller screens) */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
            <HeroSection />
          </div>
          {/* End secondary column */}
        </aside>
      </div>
    </div>
  );
};

export default Home;
