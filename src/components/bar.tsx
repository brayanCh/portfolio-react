import logoSrc from '../media/new_portfolio_logo.png';
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

const Navbar = (props : inputProps) => {

    const navigate = useNavigate();

    // state to keep track of the scroll position
    const [isOnTop, setIsOnTop] = useState<boolean>(true);

    const pasar = useCallback((link: string) : void => {
        props.method();
        setTimeout(() => navigate(link), 500);
    }, [props, navigate]);

    // function to update the scroll position on scroll
    const handleScroll = useCallback(() => {
        const position = window.pageYOffset;
        setIsOnTop(position < 90);
    }, []);

    // use effect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () : void => {
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
            />
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

        </nav>
    );
};
export default Navbar;
