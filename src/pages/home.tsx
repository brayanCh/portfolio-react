import Carousel from '../components/Carousel';
import SkillSections from './SkillSections';
import firstBG from '../media/introCarousel/programming-code-colorful.jpg';
import secondBG from '../media/introCarousel/project-wallpaper-1920x1200.jpg';
import thirdBG from '../media/introCarousel/0e055bd6fc948f460fe50aa193ac36e6.jpg';
import fourthBG from '../media/introCarousel/iJAYES_webp (Imagen WEBP, 1920 × 1080 píxeles) - Escalado.jpg';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

const Home = () : React.JSX.Element => {

    const images = [
        {
            url: firstBG,
            paragraph: 'intro.first_p',
            title: 'intro.first_h',
        },
        {
            url: thirdBG,
            paragraph: 'intro.third_p',
            title: 'intro.third_h',
        },
        {
            url: secondBG,
            paragraph: 'intro.second_p',
            title: 'intro.second_h',
        },
        {
            url: fourthBG,
            paragraph: 'intro.fourth_p',
            title: 'intro.fourth_h',
        },
    ];

    return (
        <Parallax pages={4}>
            <Carousel images={images}/>
            <ParallaxLayer sticky={{start: 1, end: 2}} speed={0.5}>
                <SkillSections />
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;
