import Card from "../components/cardwork"; 
import { useState } from "react";
import kosmicSrc from "../media/projects/kosmicThumbnail.png";
import Project from "../components/projects";

import km1 from "../media/projects/Screenshot_1_kosmic.png";
import km2 from "../media/projects/Screenshot_2_kosmic.png";
import km3 from "../media/projects/Screenshot_3_kosmic.png";



const PreviousWork = () => {

    const [indexProject, setIndex] = useState(0);
    const [isShown, setShown] = useState(false);

    const mostrarProyecto = i => {
        setIndex(i);
        setShown(true);
    }

    const listOfProjects = [
        <Project title="Kosmic" exit={() => setShown(false)}> 

            <p>This was a project that I make in a hackaton, it is
                a webApp that helps in the management of cattle-raisign
                focused in tracking the vital signs of cattle in order to
                prevent illness and facilitate the work of a veterinarian
                doctor.</p>
            
            <img src={km1} alt="starting-page" />

            <p> This page was made by me and another group of wonderful
                programmers:</p>
        
            <ul> 
                <li>Juan Carlos Orozco.</li>
                <li>Katherine Arias.</li>
                <li>Carlos Felipe Cortes.</li>
            </ul>

            <p> It includes the register of veterinarians,
            farm gestors, cattle and anomalies in the vital signs of 
            a given cow.</p> 

            <img src={km2} alt="data of vital signs" />
            <img src={km3} alt="looking the data of a gestor" />

        </Project>
    ]

    return(
        <>
            <div className="portfolio flexcenter" >
                <h2> Previous Work</h2>
                
                <Card method={() => mostrarProyecto(0)} src={kosmicSrc} >Kosmic</Card> 
        
            </div>

            {isShown && listOfProjects[indexProject]}
        </>
    )
}

export default PreviousWork;
