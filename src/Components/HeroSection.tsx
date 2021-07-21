import heroSectionImg from "../Assets/hero-section-img.jpeg";
import contentLanguage from "../Redux/languageContent";

const HeroSection = () => {
  return (
    <main id="home" className="">
      <div className="mx-auto max-w-7xl w-full text-center py-48 md:py-48 2xl:py-72 lg:text-left flex flex-col justify-center">
        <div className="relative z-10 flex flex-col justify-center items-center px-4 lg:w-3/5 sm:px-8 ">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
            <span className="block xl:inline">Maximilian Gruber,</span>
            <br />
            <span className="block text-medium-logo-blue xl:inline">
              {contentLanguage().heroSection.profession}
            </span>
          </h1>
          <div className="mt-3 relative z-10 max-w-md mx-auto text-lg text-gray-50 sm:text-2xl md:mt-5 md:max-w-3xl">
            {contentLanguage().heroSection.intro.map((text, i) => (
              <p className="my-2" key={i}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <img
        className="absolute inset-0 w-full
      h-screen object-cover"
        src={heroSectionImg}
        alt="MacBook on a desktop"
      />
    </main>
  );
};

export default HeroSection;
