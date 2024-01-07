import ProjectInfoSection from "@/components/Projects/ProjectInfoSection";

const Projects = ({
  text,
  titles,
  captions,
}: {
  text: ProjectsListProps;
  titles: TitlesProps;
  captions: ProjectsSectionProps;
}) => (
  <>
    {text.upcomingProjects.map((project) => (
      <ProjectInfoSection
        project={project}
        titles={titles}
        captions={captions}
        key={project.name}
      />
    ))}
    {text.projects.map((project) => (
      <ProjectInfoSection
        project={project}
        titles={titles}
        captions={captions}
        key={project.name}
      />
    ))}
  </>
);

export default Projects;
