import logoSrc from '../../media/bLogos.png';
import menuSrc from '../../media/menu-black.png';
import { useNavigate } from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import NavItem from './NavItem';
import MobileMenu from './NavMenu';
import {useTranslation} from 'react-i18next';

const Navbar = () => {

  const navigate = useNavigate();

  //@ts-ignore
  const {t, i18n} = useTranslation();
  const [isOnTop, setIsOnTop] = useState<boolean>(true);
  const [modalLanguagesOpen, setModalLanguagesOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 600);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const pasar = useCallback((link: string) : void => {
    navigate(link);
  }, [navigate]);

  // function to update the scroll position on scroll
  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setIsOnTop(position < 90);
  }, []);

  // check if the screen is mobile
  const checkMobile = useCallback(() : void => {
    const width = window.innerWidth;
    setIsMobile(width < 1020);
  }, []);

  useEffect(() => {
    console.log('isMobile', isMobile);
    console.log('openDrawer', openDrawer);
  }, [isMobile, openDrawer]);
  // use effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);

    return () : void => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, checkMobile]);

  const scrollTo = (id : string, isStart: boolean = false) : void => {
    const element = document.getElementById(id);
    if (element)  {
      if (isStart) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
  };

  return (
    <nav className={!isOnTop ? 'navbar nv-top shadow' : 'navbar'} >
      <img
        alt="logo"
        onClick={() => pasar('/portfolio-react')}
        src={logoSrc}
        className="nav-img"
        style={{ filter: isOnTop ? 'invert(0)' : 'invert(1)' }}
      />
      {isMobile ?
        (
          <>
            <img 
              alt="menu button"
              onClick={() => setOpenDrawer(true)}
              className="nav-menu"
              style={{ filter: !isOnTop ? 'invert(0)' : 'invert(1)' }}
              src={menuSrc}
            />
            { openDrawer && 
                        <MobileMenu 
                          languageSection={modalLanguagesOpen}
                          close={() => setOpenDrawer(false)}
                          setModalLanguagesOpen={setModalLanguagesOpen}
                        /> 
            }
          </>
        )
        :
        (

          <div className="item-container"> 
            <NavItem
              text={t('navbar.projects')}
              method={() => scrollTo('projects-container', true)}
              isOnTop={isOnTop}
            />
            <NavItem
              text={t('navbar.certifications')}
              method={() => scrollTo('certification-container')}
              isOnTop={isOnTop}
            />
            <NavItem
              text={t('navbar.skills')}
              method={() => scrollTo('first-frontend-sec')}
              isOnTop={isOnTop}
            />
            <NavItem
              text={t('navbar.change_lang')}
              method={() => setModalLanguagesOpen(true)}
              isOnTop={isOnTop}
            />
          </div>
        )
      }
      {
        modalLanguagesOpen && !isMobile && (
          <div className="modal-languages-back" onClick={() => setModalLanguagesOpen(false)}>
            <div className="modal-languages" onClick={() => {}}>
              <h3 className="modal-languages-title">{t('navbar.change_lang')}</h3>
              <button
                className="modal-languages-button"
                onClick={() => i18n.changeLanguage('en')}
              >
                {t('navbar.en')}
              </button>
              <button
                className="modal-languages-button"
                onClick={() => i18n.changeLanguage('es')}
              >
                {t('navbar.es')}
              </button>
              <button
                className="modal-languages-button exit-alt"
                onClick={() => setModalLanguagesOpen(false)}
              >
                {t('navbar.close')}
              </button>
            </div>
          </div>
        )
      }

    </nav>
  );
};
export default Navbar;
