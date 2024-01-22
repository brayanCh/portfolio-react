import {useTranslation} from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import teralImg from '../media/teral.jpg';

export interface IProject {
  title: string;
  img: string;
  img_two: string;
  link: string;
}


const Projects = () => {

  //@ts-ignore
  const { t } = useTranslation();

  const listOfProjects: Array<IProject> = [
    {
      title: t('projects.title-teral'),
      img: teralImg,
      img_two: 'dddd',
      link: '/hhh/'
    },
  ];
  return (
    <div id="projects-container">
      <div className="project-content">
        <h1>{t('projects.title')}</h1>
        <div className="projects">
          {listOfProjects.map((project: IProject) => <ProjectCard key={project.title} project={project} />)}
          {listOfProjects.length % 2 !== 0 && <div />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
