import {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import flutterImage from '../media/flutter.jpg';

const SecondFrontendExperience = () => {

  //@ts-ignore
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      if (positionOnScreen < 2 || positionOnScreen > 4) {
        console.log('returning');
        return;
      }
      const section = document.getElementById('second-frontend-sec');
      if (section) {
        section.style.transform = `translateY(${(positionOnScreen - 2) * 90}%)`;
      }
    });
  });

  return (
    <div className="container-fluid" id="second-frontend-sec" style={{zIndex: 2}}>
      <div className="black-square-cont" style={{backgroundColor: '#fff'}}>
        <img className="img-flutter" src={flutterImage} alt="flutter" />
      </div>
      <div className="black-square-cont">
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
