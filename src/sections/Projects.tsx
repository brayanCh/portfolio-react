import {useTranslation} from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import teralImg from '../media/teral.jpg';
import graphqlImg from '../media/graphql.png';
import musicNoteImg from '../media/music_note.jpg';

export interface IProject {
  title: string;
  img: string;
  link: string;
}


const Projects = () => {

  //@ts-ignore
  const { t } = useTranslation();

  const listOfProjects: Array<IProject> = [
    {
      title: t('projects.title-teral'),
      img: teralImg,
      link: '/portfolio-react/project-teral/'
    },
    {
      title: t('projects.title-graphql-rust'),
      img: graphqlImg,
      link: '/portfolio-react/graphql-rust/'
    },
    {
      title: t('projects.title-flutter-music-player'),
      img: musicNoteImg,
      link: '/portfolio-react/flutter-music-player/'
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
