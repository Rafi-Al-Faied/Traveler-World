import React from 'react';
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';
import './CarouselSlider.css';

const CarouselSlider = () => {
    return (

        <div >
            <Carousel fade className='carousel'>
                <Carousel.Item  >
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/travelix/images/xhome_slider.jpg.pagespeed.ic.lLDKIDdpoS.webp"
                        alt="First slide"

                    />

                    <Carousel.Caption className='bg-text'>
                        <h3>Discover Your Favorite </h3>
                        <h3> Place with Us</h3>
                        <Button className='btn-grad ex-btn'>Explore Now</Button>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/passport/images/hero_1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='bg-text'>
                        <h3>Discover Your Favorite </h3>
                        <h3> Place with Us</h3>
                        <Button className='btn-grad'>Explore Now</Button>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/pacific/images/bg_5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-text'>
                        <h3>Discover Your Favorite </h3>
                        <h3> Place with Us</h3>
                        <Button className='btn-grad'>Explore Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/roberto/img/bg-img/17.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bg-text'>
                        <h3>Discover Your Favorite </h3>
                        <h3> Place with Us</h3>
                        <Button className='btn-grad'>Explore NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;