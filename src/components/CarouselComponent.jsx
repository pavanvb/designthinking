import React from 'react'
import pr from './pr.jpg'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import './components.styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

function CarouselComponent() {
    return (
        <>
            <center>
                <Carousel className="c-outer">
                    <Carousel.Item className="c-item">
                        <img
                            className="c-img"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text">Why MultiCropping</h3>
                            <p className="text">Good, Better, and Best possible yield!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="c-item">
                        <img
                            className="c-img"
                            src={img2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text">Crop disease management!</h3>
                            <p className="text">Monitoring crop growth for better yield!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="c-item">
                        <img
                            className="c-img"
                            src={pr}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text">Benifits!</h3>
                            <p className="text">Improved yield, soil fertility and income of farmer</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </center>
        </>

    )
}

export default CarouselComponent

            // <Carousel className="c-outer">
            //     <Carousel.Item className="c-item-1">
            //         <img />
            //         <Carousel.Caption>
            //             <p>Nachiket G Kallapur</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item className="c-item-1">
            //         <img />
            //         <Carousel.Caption>
            //             <p>Raghav G Kallapur</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>

            // </Carousel>