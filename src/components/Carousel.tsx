import { useCallback, useState } from 'react';
import arrow from '../media/LtoR.png';
import { useTranslation } from 'react-i18next';

interface CarouselProps {
    images: { 
        url: any;
        paragraph: string;
        title: string;
    }[];
}

const Carousel = ({images}: CarouselProps) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    //@ts-ignore
    const { t } = useTranslation();

    const handleSwipe = useCallback((isLeft: boolean) => {

        if (isLeft && activeIndex !== 0) 
            setActiveIndex(activeIndex - 1); // Swipe left

        else if (!isLeft && activeIndex !== images.length - 1)
            setActiveIndex(activeIndex + 1); // Swipe right

    }, [activeIndex, images.length]);

    return (
        <div className="image-slider">
            {images.map((image, index) => (
                <div className="image-container" key={index} style={{ transform: `translateX(${-(activeIndex * 100)}%)` }}>
                    <img className="img-full"  src={image.url} alt={`Image ${index}`} />
                    <p className="image-slider_text">
                        <h1>{t(image.title)}</h1>
                        {t(image.paragraph)}
                    </p>
                </div>
            ))}
            <button className='right-slide left' onClick={() => handleSwipe(true)}>
                <img src={arrow} className="inverted-img arrow-img" alt="left"  />
            </button>
            <button className='right-slide' onClick={() => handleSwipe(false)}>
                <img src={arrow} className="arrow-img" alt="right"  />
            </button>
            <div className="image-slider_dots_cont">    
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`image-slider_dot ${activeIndex === index ? 'active_dot' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
