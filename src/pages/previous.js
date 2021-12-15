import Card from "../components/cardwork"; 
import kosmicSrc from "../media/projects/kosmicThumbnail.png"



const PreviousWork = () => {

    return(
        <div className="portfolio flexcenter" >
            <h2> Previous Work</h2>
            
            <Card src={kosmicSrc} >Kosmic</Card> 

        </div>
    )
}

export default PreviousWork;
