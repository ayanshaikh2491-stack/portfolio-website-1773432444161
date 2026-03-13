import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of project 1',
    technologies: ['React', 'Node.js', 'MongoDB'],
    slug: 'project-1',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of project 2',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    slug: 'project-2',
  },
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;