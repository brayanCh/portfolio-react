import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import mobileReactNative from '../media/Iphone-react-native.jpg';

const ParallaxSection = () => {

  //@ts-ignore
  const { t } = useTranslation();


  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      if (positionOnScreen < 1 ) {
        return;
      }
      const section = document.getElementById('first-frontend-sec');
      if (section) {
        if (positionOnScreen > 3) {
          section.style.transform = 'translateY(0)';
        } else {
          section.style.transform = `translateY(${(positionOnScreen - 1) * 100}%)`;
        }
      }
    });
  });

  return (
    <div className='container-fluid first-sec' id="first-frontend-sec" style={{zIndex: 0}}>
      <div className="black-square-cont" style={{backgroundColor: '#fff0'}}>
        <p className="text-frontend">
          {`${t('parallax.frontend.first')} `}
          <em className="text-frontend-em">{`${t('parallax.frontend.second')} `}</em>
        </p>
      </div>
      <div className="black-square-cont" style={{backgroundColor: '#fff0'}}>
        <img src={mobileReactNative} alt="React Native" className="img-fluid" />
      </div>
    </div>
  );
};

/*
 */
export default ParallaxSection;
