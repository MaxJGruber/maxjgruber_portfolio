import ElectricalCircuitPattern from "./ElectricalCircuitPattern";
import contentLanguage from "../Redux/languageContent";

export default function ProjectInfoSection(props: Record<string, any>) {
  return (
    <div className="relative bg-white py-16 sm:py-10">
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
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            {/* <h2>AFTER</h2> */}
            <div className="relative pt-64  rounded-2xl shadow-xl overflow-hidden">
              <img
                className={`absolute inset-0 h-full w-full ${
                  props.project.contain ? "object-contain" : "object-cover"
                }`}
                src={props.project.landingPagePic}
                alt="Landing page of project"
              />
            </div>
            {/* <h2>BEFORE</h2>
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover "
                src={props.project.landingPagePic}
                alt="Landing page of project"
              />
            </div> */}
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="leading-6 text-medium-logo-blue font-semibold tracking-wide uppercase">
              {props.project.intro}
            </h2>
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              {props.project.name}
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">{props.project.type}</p>
              <p className="text-base text-left leading-7">
                <strong>{contentLanguage().projectSection.description} </strong>{" "}
                {props.project.description}
              </p>
              {props.project.specialFeatures && (
                <p className="text-base text-left leading-7">
                  <strong>
                    {contentLanguage().projectSection.specialFeatures}{" "}
                  </strong>
                  {props.project.specialFeatures}
                </p>
              )}
              <p className="text-base text-left leading-7">
                <strong>
                  {contentLanguage().projectSection.technologiesUsed}{" "}
                </strong>
                {props.project.technologies}
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {props.project.stats.map((stat: Record<string, any>) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {props.project.name === "Aquitaine Lifestyle Solutions" ? (
              ""
            ) : (
              <div className="mt-10">
                <a
                  href="#"
                  className="text-base font-medium text-medium-logo-blue"
                >
                  {contentLanguage().projectSection.linkText}{" "}
                  {props.project.name} <span aria-hidden="true">&rarr;</span>{" "}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
