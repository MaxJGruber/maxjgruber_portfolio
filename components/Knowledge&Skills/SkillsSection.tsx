import { CheckIcon, FlagIcon } from "@heroicons/react/outline";
import contentLanguage from "stores/languageContent";

const SkillsSection = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {contentLanguage().skillsSection.title}
        </h2>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {contentLanguage().skillsSection.features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              {feature.id === "currently learning" ? (
                <FlagIcon
                  className="absolute h-6 w-6 text-yellow-500"
                  aria-hidden="true"
                />
              ) : (
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
              )}
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

export default SkillsSection;
