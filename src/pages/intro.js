import bLogo from "../media/BPurple.png"

const Intro = () => {

    return (
        <div className="home_section">
            <div className="oval-module column-container shadow">

                <div className="intro-text" >

                    <h2> Bienvenid@ </h2>

                    <p>
                        Soy Brayan Chavarro, un desarrollador junior de frontend con una
                        Fuerte pasion por el diseño y la creacion de paginas Web
                
                        <br />
                        <br />

                        Tengo experiencia en: 
                    </p>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>

                </div>
    
                <div className="flexcenter">
                    <img className="logo-b"  src={bLogo} alt="Purple b logo" />
                </div>

            </div>
        </div>
    )
}

export default Intro;
