import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
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

function Gallery() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className="carousel-container">
            <center> <h3 className="dt-title" style={{ margin: '20px' }}>
                <span>Gallery</span>
            </h3></center>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 4,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image0} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image0_1} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image1} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image2} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image3} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image4} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image5} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image6} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image7} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image8} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image9} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image10} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image11} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image12} />
                <img style={{ border: '2px solid black', borderRadius: '10px', width: '18rem', height: '50vh', objectFit: 'contain', marginTop: '20px', marginLeft: '5px', }} src={Image13} />


            </ReactSimplyCarousel>
        </div>
    );
}

export default Gallery;
