const HeroSection = ({ text }: { text: HeroSectionProps }) => (
  <main id="home">
    <div className="mx-auto max-w-7xl w-full text-center py-64 md:py-48 2xl:py-72 lg:text-left flex flex-col justify-center h-screen">
      <div className="relative z-10 flex flex-col justify-center items-center px-4 lg:w-3/5 sm:px-8 ">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
          <span className="block xl:inline">Maximilian Gruber,</span>
          <br />
          <span className="block text-medium-logo-blue xl:inline">
            {text.profession}
          </span>
        </h1>
        <div className="mt-3 relative z-10 max-w-md mx-auto text-lg text-gray-50 sm:text-2xl md:mt-5 md:max-w-3xl">
          {text.intro.map((text, i) => (
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
      src="static/assets/hero-section-img.jpeg"
      alt="MacBook on a desktop"
    />
  </main>
);

export default HeroSection;
