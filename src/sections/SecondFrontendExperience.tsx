import {useCallback, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import flutterImage from '../media/flutter.jpg';

const SecondFrontendExperience = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
  //@ts-ignore
  const { t } = useTranslation();

  const checkMobile = useCallback(() : void => {
    const width = window.innerWidth;
    setIsMobile(width < 1080);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {

      const positionOnScreen: number = window.scrollY/window.innerHeight;
      const section = document.getElementById('second-frontend-sec');
      console.log(positionOnScreen, 'positionOnScreen');

      if (window.innerWidth < 1080) {
        if ((positionOnScreen < 3 || positionOnScreen > 5) && section) {
          section.style.transform = 'translateY(0)';
          return;
        }
        if (section) {
          section.style.transform = `translateY(${(positionOnScreen - 3) * 90}%)`;
          return;
        }
      }
      if (positionOnScreen < 2 || positionOnScreen > 4) {
        //console.log('dont move');
        return;
      }
      if (section) {
        //console.log('move');
        section.style.transform = `translateY(${(positionOnScreen - 2) * 90}%)`;
      }
    });

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });

  return (
    <div className="container-fluid" id="second-frontend-sec" style={{zIndex: 2}}>
      {!isMobile && (
        <div className="black-square-cont" style={{backgroundColor: '#fff'}}>
          <img className="img-flutter" src={flutterImage} alt="flutter" />
        </div>
      )}
      <div className="black-square-cont second-sec-text">
        <p className="text-frontend darkstyle" style={{zIndex: 0}}>
          {`${t('parallax.frontend.third')} `}
          <em className="em-first">{`${t('parallax.frontend.fourth')} `}</em>
          {`${t('parallax.frontend.five')} `}
          <em className="em-second">{`${t('parallax.frontend.six')} `}</em>
          {`${t('parallax.frontend.seven')} `}
          <em className="em-third">{`${t('parallax.frontend.eight')} `}</em>
        </p>
      </div>
    </div>
  );
};

export default SecondFrontendExperience;
