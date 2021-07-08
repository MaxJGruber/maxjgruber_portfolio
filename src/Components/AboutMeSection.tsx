import cvPhoto from "../Assets/Photo_CV.jpeg";
// import Bounce from "react-reveal/Bounce";

export default function AboutMeSection() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hello World, Meet Max!
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={80}
                  height={800}
                  patternUnits="userSpaceOnUse"
                >
                  <g fill-rule="evenodd">
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
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 ">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center profile-pic"
                    src={cvPhoto}
                    alt="Max Gruber"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mt-5 prose prose-indigo text-md text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I’m Maximilian Gruber (yes, like the bad guy in Die Hard). I’m a
                NaN (😉) year old Junior Full Stack Web Developer graduated from
                Ironhack’s 10-week immersive bootcamp in Paris, France. In a
                past life I had a career in Hospitality, and am now keen to
                start off my digital career using my new found skills in MERN
                Stack.
              </p>
              <p>
                I am a tri-cultural person fluent in English, French and German
                allowing me to insert myself easily in any work culture or
                conversation. While also having a heck of a time deciding who
                I'm backing in football competitions.
              </p>
              <p>
                Given the right guidance, my goal is to become a successful Full
                Stack Developer.
                <br />
                Technology leads, society follows. I want to be at the heart of
                that change. To make a difference.
              </p>
              <p>
                Thanks to my past experiences in management within the
                Hospitality sector, I know what it is like to have to learn
                things quickly, solve issues spontaneously yet correctly and,
                most of all, how to work harmoniously with coworkers whilst
                facing important tasks and deadlines.
              </p>
              <p>
                I'm excited to make the leap and continue improving my skills,
                as well as myself, with the right company. Feel free to contact
                me with any job opportunities and/or vegetarian recipes that
                don't include coriander.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
