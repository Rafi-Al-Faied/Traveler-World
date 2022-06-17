import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import CarouselSlider from './Componets/Carousel/CarouselSlider';
import MyService from './Componets/Services/Services';
const Home = () => {


    return (
        <div >
            <CarouselSlider />
            <div className="services"><MyService /></div>
            <Footer />
        </div>
    );
};

export default Home;