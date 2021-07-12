import contentLanguage from "../Redux/languageContent";

const HeroSection = () => {
  return (
    <main id="home" className="">
      <div className="mx-auto max-w-7xl w-full py-72 text-center sm:py-60 md:py-48 2xl:py-72 lg:text-left flex flex-col justify-center">
        <div className="relative z-10 flex flex-col justify-center items-center px-4 lg:w-3/5 sm:px-8 ">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
            <span className="block xl:inline">Maximilian Gruber,</span>
            <br />
            <span className="block text-medium-logo-blue xl:inline">
              {contentLanguage().heroSection.profession}
            </span>
          </h1>
          <div className="mt-3 relative z-10 max-w-md mx-auto text-lg text-gray-50 sm:text-2xl md:mt-5 md:max-w-3xl">
            {contentLanguage().heroSection.intro.map((text) => (
              <p className="my-2">{text}</p>
            ))}
          </div>
        </div>
      </div>
      <img
        className="absolute inset-0 w-full
      h-screen object-cover"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
        alt=""
      />
    </main>
  );
};

export default HeroSection;
