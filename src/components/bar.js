import logoSrc from "../media/logonav.png";

const Navbar = () => {
    
    return (
        <nav className="navbar" >
            
            <img alt="logo" src={logoSrc} />

            <div className="item-container"> 
                <p>wah wah</p>
                <p>wah wah</p>
            </div>

        </nav>
    )
}
 
export default Navbar;
