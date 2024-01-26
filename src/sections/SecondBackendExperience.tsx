import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

const SecondBackendExperience = () => {

  const [visibleText, setVisibleText] = useState<boolean>(false);
  //@ts-ignore
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      const section = document.getElementById('section-st');
      const blackCircle = document.getElementById('black-circle');
      const section2 = document.getElementById('section-fi');

      if (window.innerWidth < 1080) {
        if (positionOnScreen < 6) {
          return;
        }
        if (section) {
          if (positionOnScreen > 7.6) {
            section.style.transform = 'translateY(0)';
          } else {
            section.style.transform = `translateY(${(positionOnScreen - 6) * 100}%)`;
          }
        }
        if (blackCircle) {
        //console.log(positionOnScreen, (positionOnScreen - 4.5) * 1000);
          if (positionOnScreen > 7.8) {
            blackCircle.style.height = '100vh';
            blackCircle.style.width = '100%';
            blackCircle.style.borderRadius = '0';
          } else {
            blackCircle.style.height = `${(positionOnScreen - 7.1) * 4600}px`;
            blackCircle.style.width = `${(positionOnScreen - 7.1) * 4600}px`;
            blackCircle.style.borderRadius = '50%';
          }
        }

        setVisibleText(positionOnScreen > 7.2);


        if (positionOnScreen < 7) {
          return;
        }
        if (section2) {
          if (positionOnScreen < 8) {
            section2.style.transform = `translateY(${(positionOnScreen - 7) * 100}%)`;
          } else {
            section2.style.transform = `translateY(${100}%)`;
          }
        }
        return;
      }

      if (positionOnScreen < 4) {
        return;
      }
      if (section) {
        if (positionOnScreen > 5) {
          section.style.transform = 'translateY(0)';
        } else {
          section.style.transform = `translateY(${(positionOnScreen - 4) * 100}%)`;
        }
      }
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
      if (section2) {
        if (positionOnScreen < 6) {
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
