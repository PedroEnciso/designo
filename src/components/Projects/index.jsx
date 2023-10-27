import ProjectSectionItem from "./ProjectSectionItem";

import classes from "./ProjectsSection.module.css";

function ProjectsSection({ projects }) {
  return (
    <section className={classes.wrapper}>
      <ul>
        {projects.map((project) => (
          <ProjectSectionItem
            key={project.id}
            id={project.id}
            title={project.title}
            slug={project.slug}
            imgMobile={project.imgMobile}
            imgTablet={project.imgTablet}
            imgDesktop={project.imgDesktop}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
