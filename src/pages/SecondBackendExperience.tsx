import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

const SecondBackendExperience = () => {

  const [visibleText, setVisibleText] = useState<boolean>(false);
  //@ts-ignore
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      if (positionOnScreen < 4) {
        return;
      }
      const section = document.getElementById('section-st');
      if (section) {
        if (positionOnScreen > 5) {
          section.style.transform = 'translateY(0)';
        } else {
          section.style.transform = `translateY(${(positionOnScreen - 4) * 100}%)`;
        }
      }
      const blackCircle = document.getElementById('black-circle');
      if (blackCircle) {
        //console.log(positionOnScreen, (positionOnScreen - 4.5) * 1000);
        if (positionOnScreen > 5.6) {
          blackCircle.style.height = '100vh';
          blackCircle.style.width = '100%';
          blackCircle.style.borderRadius = '0';
        } else {
          blackCircle.style.height = `${(positionOnScreen - 4.8) * 3800}px`;
          blackCircle.style.width = `${(positionOnScreen - 4.8) * 3800}px`;
          blackCircle.style.borderRadius = '50%';
        }
      }

      setVisibleText(positionOnScreen > 5.1);

      if (positionOnScreen < 5) {
        return;
      }
      const section2 = document.getElementById('section-fi');
      if (section2) {
        if (positionOnScreen < 6) {
          console.log(positionOnScreen, 'blink');
          section2.style.transform = `translateY(${(positionOnScreen - 5) * 100}%)`;
        } else {
          section2.style.transform = `translateY(${100}%)`;
        }

      }
    });
  });

  return (
    <div className="final-paralax-container"  style={{zIndex: 3}}>
      <div className="section-starting" id="section-st">
        <p className="text-frontend" style={{zIndex: 0}}>
          {`${t('parallax.backend.five')} `}
          <em className="em-third">{`${t('parallax.backend.six')} `}</em>
        </p>
      </div>
      <div className="section-starting" id="section-fi">
        <div id="black-circle">
          {visibleText && <p className="text-frontend darkstyle" style={{zIndex: 0}}>
            {`${t('parallax.backend.seven')} `}
            <em className="em-second">{`${t('parallax.backend.eight')} `}</em>
          </p>
          }
        </div>
      </div>
    </div>
  );
};

export default SecondBackendExperience;
