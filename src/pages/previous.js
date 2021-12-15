import Card from "../components/cardwork"; 
import { useState } from "react";
import kosmicSrc from "../media/projects/kosmicThumbnail.png"
import listOfProjects from "../components/projects";


const PreviousWork = () => {

    const [indexProject, setIndex] = useState(0);
    const [isShown, setShown] = useState(false);

    const mostrarProyecto = i => {
        setIndex(i);
        setShown(true);
    }

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
