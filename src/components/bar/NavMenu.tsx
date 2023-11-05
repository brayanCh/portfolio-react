
interface IMenuProps {
    close: () => void;
}

const MobileMenu = ({close} : IMenuProps) => {

    const scrollTo = (location: string) : void => {

        const element = document.getElementById(location);
        if (element)
        {
            close();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="mobile-menu"
        >
            <button
                className="item-mobile-menu"
                onClick={() => scrollTo('contact')}
            >
                Contact Me
            </button>
            <button
                className="item-mobile-menu"
                onClick={() => scrollTo('projects')}
            >
                Projects
            </button>
            <button
                className="item-mobile-menu"
                onClick={() => scrollTo('projects')}
            >
                Experience
            </button>
        </div>
    );
};


export default MobileMenu;
