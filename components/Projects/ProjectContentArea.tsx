const ProjectContentArea = ({
  project,
  captions,
}: {
  project: ProjectsProps;
  captions: ProjectsSectionProps;
}) => (
  <div className="pt-12 sm:pt-16 lg:pt-20">
    <h2 className="leading-6 text-medium-logo-blue font-semibold tracking-wide uppercase">
      {project.intro}
    </h2>
    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
      {project.name}
    </h2>
    <div className="mt-6 text-gray-500 space-y-6">
      <p className="text-lg">{project.type}</p>
      <p className="text-base text-left leading-normal">
        <strong>{captions.description} </strong> {project.description}
      </p>
      {project.specialFeatures && (
        <p className="text-base text-left leading-normal">
          <strong>{captions.specialFeatures} </strong>
          {project.specialFeatures}
        </p>
      )}
      <p className="text-base text-left leading-normal">
        <strong>{captions.technologiesUsed} </strong>
        {project.technologies}
      </p>
    </div>
  </div>
);

export default ProjectContentArea;
