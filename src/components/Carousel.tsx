import { useCallback, useState } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel = ({images}: CarouselProps) => {

    const [activeIndex, setActiveIndex] = useState<number>(0.2);

    const handleSwipe = useCallback((e : {deltaX: number}) => {
        if (e.deltaX > 50 && activeIndex > 0) {
            setActiveIndex(activeIndex - 1); // Swipe right
        } else if (e.deltaX < -50 && activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1); // Swipe left
        }
    }, [activeIndex, images.length]);

    return (
        <div className="image-slider" onWheel={handleSwipe} onClick={handleSwipe}>
            {images.map((image, index) => (
                <div className="image-container" key={image} style={{ transform: `translateX(${-(activeIndex * 100)}%)` }}>
                    <img className="img-full"  src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
