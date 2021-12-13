import bLogo from "../media/BPurple.png"

const Intro = () => {

    return (
            <div className="starting-module column-container shadow">

                <div className="intro-text" >

                    <div>
                        <h2> Welcome </h2>
                    </div>

                    <p>I'm brayan Chavarro, a junior frontend developer with a Strong passion 
                        for design and creating intuitive products to the public. <br/>  <br/> 
                        I have knowledge in:</p>

                    <ul>
                        <li>
                    </ul>
                </div>
    
                <div className="flexcenter">
                    <img className="logo-b"  src={bLogo} alt="Purple b logo" />
                </div>

            </div>
    )
}

export default Intro;
