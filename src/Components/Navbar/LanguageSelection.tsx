import germanFlag from "../../Assets/germany.png";
import frenchFlag from "../../Assets/france.png";
import ukFlag from "../../Assets/united-kingdom.png";

export default function LanguageSelection(props: Record<string, any>) {
  return (
    <div className="text-lg flex items-center justify-center">
      <div className="mx-2 focus:outline-none">
        <img
          src={ukFlag}
          onClick={() => props.handleLanguageSelect("en")}
          className="h-7 w-auto cursor-pointer"
          alt="UK Flag"
        />
      </div>
      <div className="mx-2 focus:outline-none">
        <img
          src={frenchFlag}
          onClick={() => props.handleLanguageSelect("fr")}
          className="h-7 w-auto cursor-pointer"
          alt="French Flag"
        />
      </div>
      <div className="mx-2 focus:outline-none">
        <img
          src={germanFlag}
          onClick={() => props.handleLanguageSelect("de")}
          className="h-7 w-auto cursor-pointer"
          alt="German Flag"
        />
      </div>
    </div>
  );
}
