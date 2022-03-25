import contentLanguage from "stores/languageContent";

const AboutMeSection = () => (
  <div className="bg-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
      <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {contentLanguage().aboutMe.title}
          </h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:row-start-1 lg:col-start-2 ">
          <svg
            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
            height={1284}
            fill="currentColor"
            viewBox="0 0 404 984"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={80}
                height={100}
                patternUnits="userSpaceOnUse"
              >
                <g fillRule="inherit">
                  <g
                    id="death-star"
                    className="text-gray-200"
                    fill="currentColor"
                  >
                    <path d="M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z" />
                  </g>
                </g>
              </pattern>
            </defs>
            <rect
              width={400}
              height={700}
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div className="aspect-w-12 aspect-h-14 lg:aspect-none">
                <img
                  className="rounded-lg shadow-lg object-cover object-center profile-pic"
                  src="static/assets/Photo_CV.jpeg"
                  width={500}
                  height={800}
                  alt="Max Gruber"
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mt-5 prose prose-indigo text-md text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              {contentLanguage().aboutMe.intro.map((paragraph, i) => (
                <span key={i}>
                  {paragraph}
                  {paragraph && paragraph.includes("Maximilian") ? (
                    <span>&#128540;</span>
                  ) : (
                    ""
                  )}
                </span>
              ))}
            </p>
            {contentLanguage().aboutMe.text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMeSection;
