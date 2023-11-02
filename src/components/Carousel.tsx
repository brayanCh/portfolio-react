import { useCallback, useState } from 'react';

interface CarouselProps {
    images: any[];
}

const Carousel = ({images}: CarouselProps) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSwipe = useCallback((isLeft: boolean) => {

        if (isLeft && activeIndex !== 0) 
            setActiveIndex(activeIndex - 1); // Swipe left

        else if (!isLeft && activeIndex !== images.length - 1)
            setActiveIndex(activeIndex + 1); // Swipe right

    }, [activeIndex, images.length]);

    return (
        <div className="image-slider">
            {images.map((image, index) => (
                <div className="image-container" key={image} style={{ transform: `translateX(${-(activeIndex * 100)}%)` }}>
                    <img className="img-full"  src={image} alt={`Image ${index}`} />
                </div>
            ))}
            <div className="image-slider_dots_cont">    
                {images.map((image, index) => (
                    <button
                        key={image}
                        className={`image-slider_dot ${activeIndex === index ? 'active_dot' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
