
import { useState, useEffect, useRef } from 'react';
import '../Styles/Gallery.css';
import Image0 from '../Assets/gallery/image0.jpg';
import Image0_1 from '../Assets/gallery/image0.1.jpg';
import Image1 from '../Assets/gallery/image1.jpg';
import Image2 from '../Assets/gallery/image2.jpg';
import Image3 from '../Assets/gallery/image3.jpg';
import Image4 from '../Assets/gallery/image4.jpg';
import Image5 from '../Assets/gallery/image5.jpg';
import Image6 from '../Assets/gallery/image6.jpg';
import Image7 from '../Assets/gallery/image7.jpg';
import Image8 from '../Assets/gallery/image8.jpg';
import Image9 from '../Assets/gallery/image9.jpg';
import Image10 from '../Assets/gallery/image10.jpg';
import Image11 from '../Assets/gallery/image11.jpg';
import Image12 from '../Assets/gallery/image12.jpg';
import Image13 from '../Assets/gallery/image13.jpg';
import Image14 from '../Assets/gallery/image14.jpg';
import Image15 from '../Assets/gallery/image15.jpg';
import Image16 from '../Assets/gallery/image16.jpg';
import Image17 from '../Assets/gallery/image17.jpg';
import Image18 from '../Assets/gallery/image18.jpg';
import Image19 from '../Assets/gallery/image19.jpg';
import Image20 from '../Assets/gallery/image20.jpg';
import Image21 from '../Assets/gallery/image21.jpg';
import Image22 from '../Assets/gallery/image22.jpg';
import Image23 from '../Assets/gallery/image23.jpg';
import Image24 from '../Assets/gallery/image24.jpg';


function Gallery() {
    // All gallery images
    const images = [
        Image0, Image0_1, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16,Image17, Image18, Image19, Image20, Image21, Image22, Image23,Image24
    ];
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const intervalRef = useRef();
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // Show 4 images at once
    const imagesToShow = 4;

    // Auto-scroll effect (faster: 1s)
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setActiveSlideIndex((prev) => (prev + 1) % images.length);
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [images.length, isPaused]);

    // Get visible images for the row
    const getVisibleImages = () => {
        let visible = [];
        for (let i = 0; i < imagesToShow; i++) {
            visible.push((activeSlideIndex + i) % images.length);
        }
        return visible;
    };

    const visible = getVisibleImages();

    return (
        <div className="carousel-container">
            <center> <h3 className="dt-title" style={{ margin: '20px' }}>
                <span>Gallery</span>
            </h3></center>
            <div
                className="gallery-row"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => { setIsPaused(false); setHoveredIdx(null); }}
            >
                {visible.map((imgIdx) => (
                    <img
                        key={imgIdx}
                        src={images[imgIdx]}
                        className={`carousel-image gallery-img${hoveredIdx === imgIdx ? ' hovered' : ''}`}
                        alt={`gallery${imgIdx}`}
                        onMouseEnter={() => setHoveredIdx(imgIdx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                    />
                ))}
                {hoveredIdx !== null && (
                    <>
                        <div className="gallery-overlay"></div>
                        <img
                            src={images[hoveredIdx]}
                            className="carousel-image gallery-img hovered"
                            alt={`gallery${hoveredIdx}`}
                            style={{ pointerEvents: 'auto' }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Gallery;
