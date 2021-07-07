import cvPhoto from "../Assets/Photo_CV.jpeg";

export default function AboutMeSection() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div id="about">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Max
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
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
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
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={cvPhoto}
                    alt="Max Gruber"
                    width={500}
                    height={700}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            {/* <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                I have graduated from Ironhack’s 9-week immersive Web
                Development Bootcamp after having decided to retrain and make a
                career change out of the hospitality industry due COVID-19 and I
                am keen to start off my digital career using my new found skills
                in MERN Stack.
              </p>
            </div> */}
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I have graduated from Ironhack’s 9-week immersive Web
                Development Bootcamp after having decided to retrain and make a
                career change out of the hospitality industry due COVID-19 and I
                am keen to start off my digital career using my new found skills
                in MERN Stack.
              </p>
              <p>
                Given the right guidance, my goal is to become a successful Full
                Stack Developer. For this, I feel your company’s singular
                approach to employee training and work ethics are remarkable
                cornerstones to assist me on my path.
              </p>
              <p>
                Thanks to my past experiences in management within the
                Hospitality sector and the fact that I am a tri-cultural person
                fluent in English, French and German, I know what it is like to
                have to learn things quickly, solve issues spontaneously yet
                correctly and, most of all, how to work harmoniously with
                coworkers whilst facing important tasks and deadlines.
              </p>
              <p>
                Being able to combine my instincts from a past career and my new
                found passion for web developing has enabled me to bring
                strength, energy and determination to my recent projects.
              </p>
              {/* <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
              <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
