import { Disclosure } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavlinkWithChildren = (props: Record<string, any>) => {
  return (
    <>
      <Disclosure.Button
        className={classNames(
          props.item.current
            ? "bg-gray-100 text-gray-900"
            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-medium-logo-blue"
        )}
      >
        <props.item.icon
          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="flex-1">{props.item.name}</span>
        <svg
          className={classNames(
            props.open ? "text-gray-400 rotate-90" : "text-gray-300",
            "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
          )}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="space-y-1">
        {props.item.children.map((subItem: Record<string, any>) => (
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
  );
};

export default NavlinkWithChildren;
