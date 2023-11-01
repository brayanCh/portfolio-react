import logoSrc from '../media/bLogos.png';
import menuSrc from '../media/menu-black.png';
import { useNavigate } from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';

interface inputProps {
    method: () => void;
}

const NavItem = (props: { text: string, location: string, isOnTop: boolean}) => {

    const scrollTo = useCallback(() : void => {

        const element = document.getElementById(props.location);
        if (element)
            element.scrollIntoView({ behavior: 'smooth' });

    }, [props.location]);

    return (
        <button
            onClick={scrollTo}
            className={props.isOnTop ? 'item-nav' : 'item-nav item-w'}
        >
            {props.text}
        </button>
    );
};

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

const Navbar = () => {

    const navigate = useNavigate();

    // state to keep track of the scroll position
    const [isOnTop, setIsOnTop] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 600);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const pasar = useCallback((link: string) : void => {
        navigate(link)
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

    // use effect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', checkMobile);

        return () : void => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <nav className={isOnTop ? 'navbar nv-top shadow' : 'navbar'} >
            <img
                alt="logo"
                onClick={() => pasar('/portfolio-react')}
                src={logoSrc}
                className="nav-img"
                style={{ filter: !isOnTop ? 'invert(0)' : 'invert(1)' }}
            />
            {isMobile ?
                (
                    <>
                        <img 
                            alt="menu button"
                            onClick={() => setOpenDrawer(true)}
                            className="nav-menu"
                            style={{ filter: isOnTop ? 'invert(0)' : 'invert(1)' }}
                            src={menuSrc}
                        />
                        { openDrawer && 
                            <MobileMenu 
                                close={() => setOpenDrawer(false)}
                            /> 
                        }
                    </>
                )
                :
                (

                    <div className="item-container"> 
                        <NavItem
                            text="Projects"
                            location="projects"
                            isOnTop={isOnTop}
                        />
                        <NavItem
                            text="Contact me"
                            location="contact"
                            isOnTop={isOnTop}
                        />
                        <NavItem
                            text="Experience"
                            location="contact"
                            isOnTop={isOnTop}
                        />
                    </div>
                )
            }

        </nav>
    );
};
export default Navbar;
