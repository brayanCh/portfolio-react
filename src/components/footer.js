import githubSrc from "../media/github.png";
import linkSrc from "../media/linkedin.png";

const Footer = () => {
    return (
        <footer className="flexcenter footer">
        
            <h3>Related Accounts</h3>

            <a>LinkedIn <img src={linkSrc} alt="logo linkedin"/></a>
            <a>Github <img src={githubSrc} alt="logo github"/></a>

        </footer>
    )
};

export default Footer
