const ProjectStatsSection = ({
  project,
  captions,
}: {
  project: ProjectsProps;
  captions: ProjectsSectionProps;
}) => (
  <div className="mt-10">
    <dl
      className={
        project.stats.length > 1
          ? `grid grid-cols-2 gap-x-4 gap-y-8`
          : `flex items-center justify-center`
      }
    >
      {project.stats.map((stat) => (
        <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
          <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
          <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
    {project.projectLink && (
      <div className="mt-10">
        <a
          href={project.projectLink}
          className="text-base font-medium text-medium-logo-blue"
        >
          {captions.linkText} {project.name}{" "}
          <span aria-hidden="true">&rarr;</span>{" "}
        </a>
      </div>
    )}
  </div>
);

export default ProjectStatsSection;
