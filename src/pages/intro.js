import bLogo from "../media/BPurple.png"

const Intro = () => {

    return (
            <div className="starting-module column-container shadow">
                <div className="intro-text" >
                    <div>
                        <h2>home</h2>
                    </div>
                    <p>content content  content content content
                        content content content content </p>
                </div>
    
                <div className="flexcenter">
                    <img className="logo-b"  src={bLogo} alt="Purple b logo" />
                </div>
            </div>
    )
}

export default Intro;
