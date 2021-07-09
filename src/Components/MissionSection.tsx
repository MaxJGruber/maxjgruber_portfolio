import {
  DatabaseIcon,
  DeviceMobileIcon,
  ServerIcon,
  UsersIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Full Stack Web Development",
    icon: DatabaseIcon,
    description:
      "I am trained in the MongoDB, Express, React, Node stack. I have also explored Vue, Golang and SQL.",
  },
  {
    name: "Responsive Design",
    icon: DeviceMobileIcon,
    description:
      "I have laid enormous work into responsive design so that my projects always keep the same spirit on desktop or smaller screens.",
  },
  {
    name: "SEO & Performance",
    icon: GlobeAltIcon,
    description:
      "I am regularly searching how to stay on top of fast-changing trends with Google. I also have a keen interest in webpage performace optimization.",
  },
  {
    name: "Test Driven Development",
    icon: SparklesIcon,
    description:
      "This is something I am fairly new in. However, I have dabbled with Mocha and Jasmine for a short while, and I intend to explore Jest next.",
  },
  {
    name: "Teamwork",
    icon: UsersIcon,
    description:
      "I have experience collaborating on projects with 2+ people, while using git versioning and Slack.",
  },
  {
    name: "Hosting",
    icon: ServerIcon,
    description:
      "Through my freelancing work, I have used Heroku and started using AWS hosting.",
  },
];

export default function MissionSection() {
  return (
    <div className=" bg-white py-16 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900">Knowledge</h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-medium-logo-blue rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
