import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserIcon } from "@heroicons/react/24/outline";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
interface SubnavObject {
  href: string;
  current: boolean;
  name: string;
  children: {
    links: { name: string; href: string; icon: typeof faLinkedin }[];
    documents: { name: string; href: string; icon: typeof UserIcon }[];
  };
  icon: typeof UserIcon;
}

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const NavlinkWithChildren = ({
  item,
  open,
}: {
  item: SubnavObject;
  open: boolean;
}) => {
  return (
    <>
      <Disclosure.Button
        className={classNames(
          item.current
            ? "bg-gray-100 text-gray-900"
            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-medium-logo-blue"
        )}
      >
        <item.icon
          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="flex-1">{item.name}</span>
        <svg
          className={classNames(
            open ? "text-gray-400 rotate-90" : "text-gray-300",
            "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
          )}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="space-y-1">
        {item.children.links.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.href}
            target="_blank"
            className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <FontAwesomeIcon
              icon={subItem.icon}
              className="mr-3 ml-1 flex-shrink-0 text-xl text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {subItem.name}
          </Link>
        ))}
        {item.children.documents.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.href}
            target="_blank"
            className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <subItem.icon
              className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {subItem.name}
          </Link>
        ))}
      </Disclosure.Panel>
    </>
  );
};

export default NavlinkWithChildren;
