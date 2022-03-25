import contentLanguage from "stores/languageContent";

export default function FunFacts() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {contentLanguage().funFacts.title}
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {contentLanguage().funFacts.features.map((feature) => (
              <div
                key={feature.name}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-bold text-medium-logo-blue md:col-span-5">
                  {feature.name}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">
                    {feature.description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
