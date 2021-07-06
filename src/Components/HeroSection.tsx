const HeroSection = () => {
  return (
    <main id="home">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left flex flex-col justify-center">
        <div className="relative z-10 flex flex-col justify-center items-center px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Maximilian Gruber,</span>
            <br />
            <span className="block text-medium-logo-blue xl:inline">
              Web Developer
            </span>
          </h1>
          <p className="mt-3 relative z-10 max-w-md mx-auto text-lg text-gray-50 sm:text-xl md:mt-5 md:max-w-3xl">
            Hi, I'm Maximilian. "Max" for short!
            <br />
            I'm a Full Stack Web Developer based in Paris, skilled in MERN
            stack, curious about and happy to explore other programming
            technologies.
          </p>
        </div>
      </div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
        alt=""
      />
    </main>
  );
};

export default HeroSection;
