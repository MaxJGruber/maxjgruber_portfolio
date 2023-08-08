import contentLanguage from "stores/languageContent";

interface ContentArea {
  intro: string;
  name: string;
  type: string;
  description: string;
  technologies: string;
  specialFeatures?: string;
}

function ProjectContentArea(props: { project: ContentArea }) {
  return (
    <div className="pt-12 sm:pt-16 lg:pt-20">
      <h2 className="leading-6 text-medium-logo-blue font-semibold tracking-wide uppercase">
        {props.project.intro}
      </h2>
      <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
        {props.project.name}
      </h2>
      <div className="mt-6 text-gray-500 space-y-6">
        <p className="text-lg">{props.project.type}</p>
        <p className="text-base text-left leading-normal">
          <strong>{contentLanguage().projectSection.description} </strong>{" "}
          {props.project.description}
        </p>
        {props.project.specialFeatures && (
          <p className="text-base text-left leading-normal">
            <strong>{contentLanguage().projectSection.specialFeatures} </strong>
            {props.project.specialFeatures}
          </p>
        )}
        <p className="text-base text-left leading-normal">
          <strong>{contentLanguage().projectSection.technologiesUsed} </strong>
          {props.project.technologies}
        </p>
      </div>
    </div>
  );
}

export default ProjectContentArea;
