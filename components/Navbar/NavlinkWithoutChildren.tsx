import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

interface SubnavObject {
  href: string;
  current: boolean;
  name: string;
  icon: typeof UserIcon;
}
const NavlinkWithoutChildren = ({ item }: { item: SubnavObject }) => (
  <Link
    href={item.href}
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
  </Link>
);

export default NavlinkWithoutChildren;
