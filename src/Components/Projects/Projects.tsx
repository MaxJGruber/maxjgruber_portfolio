import contentLanguage from "../../Redux/languageContent";
import ProjectInfoSection from "./ProjectInfoSection";

export default function Projects() {
  return (
    <div>
      {contentLanguage().projectsList.upcomingProjects.map(
        (project) => (
          <ProjectInfoSection project={project} key={project.name} />
        )
      )}
      {contentLanguage().projectsList.projects.map((project) => (
        <ProjectInfoSection project={project} key={project.name} />
      ))}
    </div>
  );
}
