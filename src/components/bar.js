import logoSrc from "../media/logonav.png";
import { useNavigate } from "react-router-dom";

const Navbar = props => {

    let navigate = useNavigate

    const pasar = link => {
        props.method();
        setTimeout(() => navigate(link), 500);
    }


    return (
        <nav className="navbar" >
            
            <img alt="logo" onClick={() => pasar("/")} src={logoSrc} />

            <div className="item-container"> 
                <button>wah wah</button>
                <button>wah wah</button>
            </div>

        </nav>
    )
}
export default Navbar;
