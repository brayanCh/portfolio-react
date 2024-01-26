import {useCallback, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import mernImage from '../media/mern.png';

const FirstBackendExperience = () => {

  const [isMobile,setIsMobile] = useState(window.innerWidth < 1080);
  //@ts-ignore
  const { t } = useTranslation();

  const checkMobile = useCallback(() : void => {
    const width = window.innerWidth;
    setIsMobile(width < 1080);
  }, []);

  const scrollCallback = useCallback(() => {
    const positionOnScreen: number = window.scrollY/window.innerHeight;

    if (isMobile) {
      if (positionOnScreen < 4) {
        return;
      }
      const mernImage = document.getElementById('mern-img');
      if (mernImage) {
        if (positionOnScreen > 6) {
          mernImage.style.transform = 'translateY(0)';
        } else {
          mernImage.style.transform = `translateY(${(positionOnScreen - 4) * 100}%)`;
        }
      }
      const firstBackendText = document.getElementById('first-backend-text');
      if (positionOnScreen < 5) {
        return;
      }
      if (firstBackendText) {
        firstBackendText.style.transform = `translateY(${(positionOnScreen - 5) * 60}%)`;
      }
      return;
    }
    if (positionOnScreen < 3) {
      return;
    }
    const section = document.getElementById('first-backend-sec');
    if (section) {
      section.style.transform = `translateY(${(positionOnScreen - 3) * 70}%)`;
    }
  }, [isMobile]);


  useEffect(() => {
    window.addEventListener('scroll',scrollCallback);

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });

  return (
    <div className="container-fluid" id="first-backend-sec" style={{zIndex: 3}}>
      { !isMobile ? (
        <>
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
        </>
      ) : (
        <>
          <div className="black-square-cont" id="mern-img" style={{backgroundColor: '#fff'}}>
            <img className="img-flutter" src={mernImage} alt="image of the mern stack" />
          </div>
          <div className="black-square-cont" id="first-backend-text">
            <p className="text-frontend darkstyle" style={{zIndex: 0}}>
              {`${t('parallax.backend.first')} `}
              <em className="em-third">{`${t('parallax.backend.second')} `}</em>
              {`${t('parallax.backend.third')} `}
              <em className="em-second">{`${t('parallax.backend.fourth')} `}</em>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FirstBackendExperience;
