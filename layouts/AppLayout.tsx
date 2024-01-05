import { Fragment, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import NavlinkWithoutChildren from "@/components/Navbar/NavlinkWithoutChildren";
import NavlinkWithChildren from "@/components/Navbar/NavlinkWithChildren";
import returnLanguageContent from "@/navbar/index";

const AppLayout = ({
  children,
  language,
}: {
  children: JSX.Element;
  language: "en" | "fr";
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarText: NavbarProps = returnLanguageContent(language);
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
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="static/assets/MaxJGruber_LOGO.png"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navbarText.navigation.map((item) =>
                    !item.children ? (
                      <div
                        key={item.name}
                        onClick={() => setSidebarOpen(false)}
                      >
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
                  <Link
                    href="#contact-form"
                    className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue"
                  >
                    {/* <div className="flex items-center"> */}
                    {navbarText.contactMe}
                    {/* </div> */}
                  </Link>
                </nav>
              </div>
              <div className="flex-shrink-0 border-t border-gray-200 p-4">
                {/* <LanguageSelection
                    handleLanguageSelect={handleLanguageSelect}
                  /> */}
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
                  src="static/assets/MaxJGruber_LOGO.png"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navbarText.navigation.map((item) =>
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
                <Link
                  href="#contact-form"
                  className="flex-shrink-0 w-full group block inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue"
                >
                  {/* <div className="flex items-center"> */}
                  {navbarText.contactMe}
                  {/* </div> */}
                </Link>
              </nav>
            </div>
            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              {/* <LanguageSelection handleLanguageSelect={handleLanguageSelect} /> */}
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
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
