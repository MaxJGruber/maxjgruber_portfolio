import Link from "next/link";
import { UserIcon } from "@heroicons/react/outline";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

interface SubnavObject {
  href: string;
  current: boolean;
  name: string;
  icon: typeof UserIcon;
}
const NavlinkWithoutChildren = (props: { item: SubnavObject }) => (
  <Link href={props.item.href} passHref>
    <a
      className={classNames(
        props.item.current
          ? "bg-gray-100 text-gray-900"
          : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
      )}
    >
      <props.item.icon
        className={classNames(
          props.item.current
            ? "text-gray-500"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-3 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {props.item.name}
    </a>
  </Link>
);

export default NavlinkWithoutChildren;
