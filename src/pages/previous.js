import Card from '../components/cardwork'; 
import { useState } from 'react';
import kosmicSrc from '../media/projects/kosmicThumbnail.png';
import Project from '../components/projects';

import km1 from '../media/projects/Screenshot_1_kosmic.png';
import km2 from '../media/projects/Screenshot_2_kosmic.png';
import km3 from '../media/projects/Screenshot_3_kosmic.png';

/*
Teral Mobile - React Native
Teral web - React / Next.js
Kosmic - React /Firebase
Graphql Api - Rust

*/


const PreviousWork = () => {

    const [indexProject, setIndex] = useState(0);
    const [isShown, setShown] = useState(false);

    const mostrarProyecto = i => {
        setIndex(i);
        setShown(true);
    };

    const listOfProjects = [
        <Project key=""  title="Kosmic" link="https://kosmic.herokuapp.com/" exit={() => setShown(false)}> 

            <p> 
                Este proyecto que hice en una hackaton de la universidad de
                Antioquia, es una aplicacion web que facilita las labores 
                ganaderas que permite la visualizacion en tiempo real de los
                signos vitales del ganado, para prevenir enfermedades y aplicar 
                tratamientos.
            </p>
            <img src={km1} alt="starting-page" />

            <p> 
                Esta pagina fue desarrollada por mi y un grupo de excelentes
                programadores:
            </p>
        
            <ul> 
                <li>Juan Carlos Orozco.</li>
                <li>Katherine Arias.</li>
                <li>Carlos Felipe Cortes.</li>
            </ul>

            <p> 
                Incluye el registro de veterinarios, gestores de finca
                Ganado y anomalias en los signos vitales de un bovino dado. 
            </p>

            <img src={km2} alt="data of vital signs" />
            <img src={km3} alt="looking the data of a gestor" />

        </Project>
    ];

    return(
        <>
            <div
                className="portfolio flexcenter"
                id="projects"
            >
                <h2>Proyectos previos</h2>
                
                <Card method={() => mostrarProyecto(0)} src={kosmicSrc} >Kosmic</Card> 
        
            </div>

            {isShown && listOfProjects[indexProject]}
        </>
    );
};

export default PreviousWork;
