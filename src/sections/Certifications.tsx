import {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import CertificationCard, {CertificationCardProps} from '../components/CertificationCard';

const Certifications = () => {

  //@ts-ignore
  const { t } = useTranslation();

  const certificationsCont: Array<CertificationCardProps> = [
    {
      title: t('certifications.title-meta'),
      description: t('certifications.text-meta'),
      link: 'https://coursera.org/share/f282ab018d993f8427677cfa8aff3529',
    },
    {
      title: t('certifications.title-arch-aws'),
      description: t('certifications.text-arch-aws'),
      link: 'https://coursera.org/share/a4e74c6aeada5adcb893b9f44eff5a8f',
    },
    {
      title: t('certifications.title-datalake-aws'),
      description: t('certifications.text-datalake-aws'),
      link: 'https://coursera.org/share/f5327cd4eaf2326434fc95ca335dfef3',
    },
  ];

  const scrollElem = useCallback((id: string, positionOnScreen: number, fromTop: boolean) => {
    const section = document.getElementById(id);
    if (section) {
      if (positionOnScreen > (window.innerWidth < 1080 ? 10 : 8)) {
        section.style.transform = 'translateY(0)';
      } else {
        section.style.transform = `translateY(${((fromTop ? 1 : -1 ) * (positionOnScreen - (window.innerWidth < 1080 ? 9 : 7))) * 80}%)`;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const positionOnScreen: number = window.scrollY/window.innerHeight;
      if (positionOnScreen < (window.innerWidth < 1080 ? 8 : 6)) {
        return;
      }
      scrollElem('cert-bg1', positionOnScreen, false);
      scrollElem('cert-bg2', positionOnScreen, true);
    });
  });

  return (
    <div id="certification-container">
      <div className="certs-text">
        <h1>{t('navbar.certifications')}</h1>
        {certificationsCont.map((cert, index) => (
          <CertificationCard {...cert} key={index} />
        ))}
      </div>
      <div id="cert-bg1" className="cert-bg">
        <h3>{t('navbar.certifications').split('').reduce((a, b) => a + '\n'+ b)}</h3>
      </div>
      <div id="cert-bg2" className="cert-bg">
        <h3>{'F\nr\no\nn\nt\ne\nn\nd'}</h3>
      </div>
    </div>
  );
};

export default Certifications;
