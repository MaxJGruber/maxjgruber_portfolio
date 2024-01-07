import ElectricalCircuitPattern from "@/components/ElectricalCircuitPattern";

interface comparisonData {
  name: string;
  contain: boolean;
  oldLandingPage?: string;
}

const ComparisonComponent = ({
  project,
  titles,
}: {
  project: comparisonData;
  titles: TitlesProps;
}) => {
  return (
    <>
      <div className="relative py-16 sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-32" />
          <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x={0}
                y={0}
                width={304}
                height={304}
                patternUnits="userSpaceOnUse"
              >
                <ElectricalCircuitPattern />
              </pattern>
            </defs>
            <rect
              width={404}
              height={252}
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none ">
          {/* Testimonial card*/}
          <h2>{titles.before}</h2>
          <div
            className={`relative pt-64 rounded-2xl overflow-hidden ${
              project.name === "COSMOUSSE" ? "demo" : "shadow-xl"
            }`}
          >
            <img
              className={`absolute inset-0 h-full w-full ${
                project.contain ? "object-contain" : "object-cover"
              }`}
              src={project.oldLandingPage}
              alt="Landing page of project"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonComponent;
