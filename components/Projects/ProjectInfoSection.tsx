import ElectricalCircuitPattern from "@/components/ElectricalCircuitPattern";
import ComparisonComponent from "@/components/Projects/ComparisonComponent";
import ProjectContentArea from "@/components/Projects/ProjectContentArea";
import ProjectStatsSection from "@/components/Projects/ProjectStatsSection";

export default function ProjectInfoSection({
  project,
  titles,
  captions,
}: {
  project: ProjectsProps;
  titles: TitlesProps;
  captions: ProjectsSectionProps;
}) {
  return (
    <div
      className={`relative bg-white py-16 ${
        project.name === "Aquitaine Lifestyle Solutions"
          ? "sm:py-15"
          : "sm:py-10"
      }`}
    >
      <div className="lg:mx-auto lg:max-w-7xl lg:px-5 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
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
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div
            className={`relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none ${
              project.name === "Aquitaine Lifestyle Solutions"
                ? "lg:pt-20 lg:pb-10"
                : "py-20"
            }`}
          >
            {/* Testimonial card*/}
            {project.oldLandingPage && <h2>{titles.after}</h2>}
            <div
              className={`relative pt-64 rounded-2xl  overflow-hidden ${
                project.name === "COSMOUSSE" ? "demo" : "shadow-xl"
              }`}
            >
              <img
                className={`absolute inset-0 h-full w-full ${
                  project.contain ? "object-contain" : "object-cover"
                }`}
                src={project.landingPagePic}
                alt="Landing page of project"
              />
            </div>
          </div>
          {project.oldLandingPage && (
            <ComparisonComponent project={project} titles={titles} />
          )}
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <ProjectContentArea project={project} captions={captions} />
          {/* Stats section */}
          <ProjectStatsSection project={project} captions={captions} />
        </div>
      </div>
    </div>
  );
}
