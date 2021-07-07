const features = [
  {
    name: "I love movies!",
    description:
      "I'm a huge fan of all kinds of movies. I'm also a movie business encyclopedia rivalling imDb and Wikipedia. Try me!",
  },
  {
    name: "I can't work without music!",
    description:
      "Music gives me the rhythm and beat I need to pump the productivity, whatever I do.",
  },
  {
    name: "I have a wicked sense of humor",
    description:
      "With at least 15 LOL moments a day, humor is an important part of how I get through my day.",
  },
  {
    name: "Stand-Up comedy is my jam!",
    description:
      "I only watch an incredible amount of it but I really wish I could do it.",
  },
  {
    name: `I'm a "Disney Baby"`,
    description:
      "My parents met working for Disneyland Paris. If it hadn't been for the most magical place on Earth, I wouldn't be here.",
  },
  {
    name: "I have stickamadidusphobia",
    description:
      "I have a repulsion towards wet, damp or dirty plastic (in the form of shrink wrap or plastic shopping bags).",
  },
  {
    name: "I love video games!",
    description: "I'm a PlayStation man. Have been and always will be!",
  },
];

export default function FunFacts() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Fun Facts about me
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {features.map((feature) => (
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
