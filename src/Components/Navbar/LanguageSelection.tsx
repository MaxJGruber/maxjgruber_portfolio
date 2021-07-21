export default function LanguageSelection(props: Record<string, any>) {
  return (
    <p className="text-lg">
      <button
        onClick={props.handleLanguageSelect}
        value="en"
        className="mx-2 focus:outline-none"
      >
        🇬🇧
      </button>
      <button
        onClick={props.handleLanguageSelect}
        value="fr"
        className="mx-2 focus:outline-none"
      >
        🇫🇷
      </button>
      <button
        onClick={props.handleLanguageSelect}
        value="de"
        className="mx-2 focus:outline-none"
      >
        🇩🇪
      </button>
    </p>
  );
}
