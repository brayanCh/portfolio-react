import {useEffect, useState} from "react";
import exitSrc from "../media/x.png"

const Project = props => {

    const [isDisplayed, setDisplay] = useState(false) 

    useEffect(() => setTimeout(() => setDisplay("true"), 20) ,[])

    const cerrar = () => {
        setDisplay(false);
        setTimeout(props.exit, 300);
    }

    return (
        <div className={!isDisplayed ? "project hidden-pr" : "project"}>

            <div className="head flexcenter">
                <h2>{props.title}</h2>
            </div>
        
            <div className={!isDisplayed ? "wrapper-exit-hd" : "wrapper-exit"} onClick={cerrar} >
                <img src={exitSrc} alt="exit" />
            </div>

            <div className="project-content">

                {props.children}

            </div>
        </div>
    )
}


        //<img src={} alt="" />

export default Project;
