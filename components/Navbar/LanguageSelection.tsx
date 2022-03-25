export default function LanguageSelection(props: Record<string, any>) {
  return (
    <div className="text-lg flex items-center justify-center">
      <div className="mx-2 focus:outline-none">
        <img
          src="static/assets/united-kingdom.png"
          onClick={() => props.handleLanguageSelect("en")}
          className="h-7 w-auto cursor-pointer"
          alt="UK Flag"
        />
      </div>
      <div className="mx-2 focus:outline-none">
        <img
          src="static/assets/france.png"
          onClick={() => props.handleLanguageSelect("fr")}
          className="h-7 w-auto cursor-pointer"
          alt="French Flag"
        />
      </div>
      <div className="mx-2 focus:outline-none">
        <img
          src="static/assets/germany.png"
          onClick={() => props.handleLanguageSelect("de")}
          className="h-7 w-auto cursor-pointer"
          alt="German Flag"
        />
      </div>
    </div>
  );
}
