function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavlinkWithoutChildren = (props: Record<string, any>) => {
  return (
    <div>
      <a
        href={props.item.href}
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
    </div>
  );
};

export default NavlinkWithoutChildren;
