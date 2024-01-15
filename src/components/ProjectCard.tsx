import {Link} from 'react-router-dom';
import {IProject} from '../pages/Projects';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Link className="project-card" to={project.link}>
      <div className="project-card-img">
        <img src={project.img} alt={project.title} />
      </div>
      <h2>{project.title}</h2>
    </Link>
  );
};

export default ProjectCard;
