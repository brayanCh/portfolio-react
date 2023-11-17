import {useTranslation} from 'react-i18next';

interface IMenuProps {
    close: () => void;
    languageSection: boolean;
    setModalLanguagesOpen: (value: boolean) => void;
}

const MobileMenu = ({close, languageSection, setModalLanguagesOpen} : IMenuProps) => {

  //@ts-ignore
  const {t, i18n} = useTranslation();
  const scrollTo = (location: string) : void => {

    const element = document.getElementById(location);
    if (element)
    {
      close();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  const changeLanguage = (lang: string) : void => {
    if (typeof lang !== 'string')
      return;
    i18n.changeLanguage(lang);
    setModalLanguagesOpen(false);
    close();
  };

  return (
    <div className="mobile-menu-back" >
      <div className="exit-back" onClick={() => close()} />
      <div className="mobile-menu" onClick={() => {}}>
        {!languageSection ? (
          <>
            <button
              className="item-mobile-menu"
              onClick={() => scrollTo('contact')}
            >
              {t('navbar.projects')}
            </button>
            <button
              className="item-mobile-menu"
              onClick={() => scrollTo('projects')}
            >
              {t('navbar.skills')}
            </button>
            <button
              className="item-mobile-menu"
              onClick={() => setModalLanguagesOpen(true)}
            >
              {t('navbar.change_lang')}
            </button>
          </>
        ) : (
          <>
            <button
              className="item-mobile-menu"
              onClick={() => changeLanguage('en')}
            >
              {t('navbar.en')}
            </button>
            <button
              className="item-mobile-menu"
              onClick={() => changeLanguage('es')}
            >
              {t('navbar.es')}
            </button>
            <button
              className="item-mobile-menu exit-alt"
              onClick={() => setModalLanguagesOpen(false)}
            >
              {t('navbar.close')}
            </button>
          </>
        )}
      </div>
    </div>
  );
};


export default MobileMenu;
