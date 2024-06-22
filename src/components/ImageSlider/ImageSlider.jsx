import React, { useRef, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="slider-container">
            <div
                className="slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
