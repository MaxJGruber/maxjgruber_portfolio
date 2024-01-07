import Link from "next/link";

const LanguageSelection = () => (
  <div className="text-lg flex items-center justify-center">
    <div className="mx-2 focus:outline-none">
      <Link href="/">
        <img
          src="static/assets/united-kingdom.png"
          className="h-7 w-auto cursor-pointer"
          alt="UK Flag"
        />
      </Link>
    </div>
    <div className="mx-2 focus:outline-none">
      <Link href="/fr">
        <img
          src="static/assets/france.png"
          className="h-7 w-auto cursor-pointer"
          alt="French Flag"
        />
      </Link>
    </div>
    <div className="mx-2 focus:outline-none">
      <Link href="/de">
        <img
          src="static/assets/germany.png"
          className="h-7 w-auto cursor-pointer"
          alt="German Flag"
        />
      </Link>
    </div>
  </div>
);

export default LanguageSelection;
