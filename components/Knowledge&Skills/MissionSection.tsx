import {
  CircleStackIcon,
  DeviceTabletIcon,
  GlobeAltIcon,
  UsersIcon,
  SparklesIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const ICONS = {
  CircleStackIcon,
  DeviceTabletIcon,
  GlobeAltIcon,
  UsersIcon,
  SparklesIcon,
  ServerIcon,
};

type IconsType = {
  CircleStackIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
  DeviceTabletIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
  GlobeAltIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
  UsersIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
  SparklesIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
  ServerIcon: React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>;
};

const MissionSection = ({ text }: { text: KnowledgeProps }) => {
  const textWithIcons: KnowledgeFeatureProps[] = text.features.map(
    (feature) => {
      const newIcon = ICONS[feature.icon as keyof IconsType];
      return {
        ...feature,
        icon: newIcon,
      };
    }
  );
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-900">{text.title}</h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {textWithIcons.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
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
};

export default MissionSection;
