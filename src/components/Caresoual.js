// components/Carousel.js
import { useState } from 'react';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const images = [
        'https://imgur.com/BUQq4CS.jpeg',
        'https://via.placeholder.com/800x400?text=Slide+2.jpg',
        'https://via.placeholder.com/800x400?text=Slide+3.jpg',
    ];
    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 transform -translate-x-full" style={{ width: `${images.length * 100}%`, marginLeft: `-${currentIndex * 100}%` }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
                Prev
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
                Next
            </button>
        </div>
    );
};

export default Carousel;
