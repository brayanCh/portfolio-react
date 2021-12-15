import Card from "../components/cardwork"; 
import { useState } from "react";
import kosmicSrc from "../media/projects/kosmicThumbnail.png"
import Project from "../components/projects";


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
