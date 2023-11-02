import Carousel from '../components/Carousel';
import Content from './content';
import Contact from './contact';
import PreviousWork from './previous';
import firstBG from '../media/introCarousel/programming-code-colorful.jpg';
import secondBG from '../media/introCarousel/developers-team.png';
import thirdBG from '../media/introCarousel/0e055bd6fc948f460fe50aa193ac36e6.jpg';
import forthBG from '../media/introCarousel/iJAYES_webp (Imagen WEBP, 1920 × 1080 píxeles) - Escalado.jpg';

const Home = () : React.JSX.Element => {

    const images = [
        firstBG,
        secondBG,
        thirdBG,
        forthBG,
    ];

    return (
        <>
            <Carousel images={images}/>
            <Content />
            <PreviousWork />
            <Contact />
        </>
    );
};

export default Home;
