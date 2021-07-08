/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Programming Languages & Engines",
    description: "JavaScript(ES6) / HTML5 / CSS3 / Node",
  },
  {
    name: "Front-End Frameworks",
    description: "React (with Hooks & Redux) / Vue (with Vuex)",
  },
  {
    name: "Front-End Libraries",
    description: "Material UI / Semantic UI / Vuetify / Bootstrap / Tailwind",
  },
  {
    name: "Back-End Frameworks",
    description: "Express / Mongoose",
  },
  {
    name: "Database Types",
    description: "MongoDB",
  },
  {
    name: "Programming Tools",
    description:
      "Visual Studio Code / CLI / Heroku / Git / GitHub / Postman / npm & yarn",
  },
  {
    name: "Community Tools",
    description:
      "Slack / Zoom / Stack Overflow / Medium",
  },
  {
    name: "Currently Learning:",
    description: "Golang / AWS / SQL / TypeScript",
  },

];

export default function SkillsSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Technical Skills
          </h2>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
