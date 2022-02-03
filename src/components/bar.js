import logoSrc from "../media/logonav.svg";
import { useNavigate } from "react-router-dom";

const Navbar = props => {

    let navigate = useNavigate();

    const pasar = link => {
        props.method();
        setTimeout(() => navigate(link), 500);
    }


    return (
        <nav className="navbar" >
            
            <img alt="logo" onClick={() => pasar("/portfolio-react")} src={logoSrc} />

            <div className="item-container"> 
                <button onClick={() => pasar("/contact")} >Contactame</button>
            </div>

        </nav>
    )
}
export default Navbar;
