import { useTranslation } from 'react-i18next';

interface CertificationCardProps {
  title: string;
  description: string;
  link: string;
}

const CertificationCard = ({ title, description, link }: CertificationCardProps) => {

  //@ts-ignore
  const { t } = useTranslation();

  return (
    <div className="cert-card">
      <h5 className="cert-title">{title}</h5>
      <p className="cert-text">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">{}</a>
    </div>
  );
};

export default CertificationCard;
