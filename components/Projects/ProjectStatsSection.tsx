import contentLanguage from "stores/languageContent";

interface StatsArea {
  stats: { label: string; value: string }[];
  projectLink?: string | undefined;
  name: string;
}

function ProjectStatsSection(props: { project: StatsArea }) {
  return (
    <div className="mt-10">
      <dl
        className={
          props.project.stats.length > 1
            ? `grid grid-cols-2 gap-x-4 gap-y-8`
            : `flex items-center justify-center`
        }
      >
        {props.project.stats.map((stat) => (
          <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
            <dt className="text-base font-medium text-gray-500">
              {stat.label}
            </dt>
            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      {props.project.projectLink && (
        <div className="mt-10">
          <a
            href={props.project.projectLink}
            className="text-base font-medium text-medium-logo-blue"
          >
            {contentLanguage().projectSection.linkText} {props.project.name}{" "}
            <span aria-hidden="true">&rarr;</span>{" "}
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectStatsSection;
