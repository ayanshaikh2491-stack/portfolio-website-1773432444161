import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Technologies used:</p>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link href={`/projects/${project.slug}`}>
        <a>View project details</a>
      </Link>
    </div>
  );
};

export default ProjectCard;