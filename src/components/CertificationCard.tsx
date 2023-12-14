
export interface CertificationCardProps {
  title: string;
  description: string;
  link: string;
}

const CertificationCard = ({ title, description, link }: CertificationCardProps) => {

  return (
    <a className="cert-card" href={link}>
      <div className='cert-full' />
      <h5 className="cert-title">{title}</h5>
      <p className="cert-text">{description}</p>
    </a>
  );
};


//<a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">{}</a>
export default CertificationCard;
