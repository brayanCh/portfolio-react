import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import mobileReactNative from '../media/Iphone-react-native.jpg';

const ParallaxSection = () => {

  //@ts-ignore
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => {

      const positionOnScreen: number = window.scrollY/window.innerHeight;
      const section = document.getElementById('first-frontend-sec');

      if (window.innerWidth < 1080) {
        if (positionOnScreen < 2) {
          if (section) {
            section.style.transform = 'translateY(0)';
          }
          return;
        }
        if (section) {
          if (positionOnScreen > 4) {
            section.style.transform = 'translateY(0)';
          } else {
            section.style.transform = `translateY(${(positionOnScreen - 2) * 40}%)`;
          }
        }
        return;
      }


      if (positionOnScreen < 1) {
        if (section) {
          section.style.transform = 'translateY(0)';
        }
        return;
      }
      if (section) {
        if (positionOnScreen > 4) {
          section.style.transform = 'translateY(0)';
        } else {
          section.style.transform = `translateY(${(positionOnScreen - 1) * 100}%)`;
        }
      }
    });
  });

  return (
    <div className='container-fluid first-sec' id="first-frontend-sec" style={{zIndex: 0}}>
      <div className="black-square-cont first-text-mobile" style={{backgroundColor: '#f9f0'}}>
        <p className="text-frontend">
          {`${t('parallax.frontend.first')} `}
          <em className="text-frontend-em">{`${t('parallax.frontend.second')} `}</em>
        </p>
      </div>
      <div className="black-square-cont" style={{backgroundColor: '#ff00'}}>
        <img src={mobileReactNative} alt="React Native" className="img-fluid" />
      </div>
    </div>
  );
};

/*
 */
export default ParallaxSection;
