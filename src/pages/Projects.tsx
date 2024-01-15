import {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

export interface IProject {
  title: string;
  img: string;
  img_two: string;
  link: string;
}

const listOfProjects: Array<IProject> = [
  {
    title: 'dddd',
    img: 'https://i.imgur.com/5X9Z3ZV.png',
    img_two: 'dddd',
    link: '/hhh/'
  },
  {
    title: 'Teral, Aplicacion mobil y microservicios',
    img: 'https://i.imgur.com/5X9Z3ZV.png',
    img_two: 'dddd',
    link: '/hhh/'
  },
  {
    title: 'Teral, Aplicacion mobil y microservicios',
    img: 'https://i.imgur.com/5X9Z3ZV.png',
    img_two: 'dddd',
    link: '/hhh/'
  }
];

const Projects = () => {

  //@ts-ignore
  const { t } = useTranslation();

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
