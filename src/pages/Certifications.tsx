import {useTranslation} from 'react-i18next';

const Certifications = () => {

  //@ts-ignore
  const { t } = useTranslation();

  return (
    <div id="certification-container">
      <div className="certs-text">
        <h1>{t('navbar.certifications')}</h1>
      </div>
    </div>
  );
};

export default Certifications;
