import {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import mernImage from '../media/mern.png';

const FirstBackendExperience = () => {

  //@ts-ignore
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      if (positionOnScreen < 3) {
        return;
      }
      const section = document.getElementById('first-frontend-sec');
      if (section) {
        section.style.transform = `translateY(${(positionOnScreen - 3) * 80}%)`;
      }
    });
  });

  return (
    <div className="container-fluid" style={{zIndex: 3}}>
      <div className="black-square-cont">
        <p className="text-frontend darkstyle" style={{zIndex: 0}}>
          {`${t('parallax.backend.first')} `}
          <em className="em-third">{`${t('parallax.backend.second')} `}</em>
          {`${t('parallax.backend.third')} `}
          <em className="em-second">{`${t('parallax.backend.fourth')} `}</em>
        </p>
      </div>
      <div className="black-square-cont" style={{backgroundColor: '#fff'}}>
        <img className="img-flutter" src={mernImage} alt="image of the mern stack" />
      </div>
    </div>
  );
};

export default FirstBackendExperience;
