import Carousel from "../components/Carousel";
import Content from "./content";
import Contact from "./contact";
import PreviousWork from "./previous";

const Home = () => {

    const images = [
        'https://i.redd.it/forest-of-light-3840x2160-v0-emzka1wnfaga1.png?s=5faac1552884e216ad01d775025df7214ccc3900',
        'https://i.redd.it/blue-blackhole-1920x1080-v0-ryaeylwn5s5a1.png?s=1682d18533ef21fb6737900de80e06d2eced6447',
    ]

    return (
        <>
            <Carousel images={images}/>
            <Content />
            <PreviousWork />
            <Contact />
        </>
    );
}

export default Home;
