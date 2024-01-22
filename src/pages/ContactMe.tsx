import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const ContactMe = () : ReactElement  => {

  //@ts-ignore
  const { t } = useTranslation();

  return (
    <div id="contact-me-section">
      <div className='content-contact-me'>
        <p>{t('contact-me.text')}</p>
      </div>
    </div>
  );
};

export default ContactMe;
