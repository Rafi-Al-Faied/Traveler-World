
import React from 'react';
import { PureComponent, Component } from 'react';
import { useEffect, useState } from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import { Row, Col, Container, Button, Card, ListGroupItem, ListGroup, Nav } from 'react-bootstrap';

const About = () => {


    return (
        <div className='about'>
            <h1>fasdfasdf</h1>
            <Container>
                <br />
                <h2>Sale Analysis</h2>
                <div class="about-wrapper">
                    <div class="about-left">
                        <div class="about-left-content">
                            <div>
                                <div class="shadow">
                                    <div class="about-img">
                                        <img src="https://i.ibb.co/LrVHRmv/73415990-2541472226123226-746988151003676672-n.jpg" alt="about image"></img>
                                    </div>
                                </div>

                                <h2>Rafee Al Fayed</h2>
                                <h3>Web developer</h3>
                            </div>

                            <ul class="about-icons">
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-linkedin"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>

                    </div>

                    <div class="about-right">
                        <h1>Hello<span>!</span></h1>
                        <h2>I am Rafee Al Fayed</h2>
                        <div class="about-btns">
                            <button type="button" class="btn btn-pink about-btn">resume / CV</button>
                            <button type="button" class="btn btn-white">Git hub</button>
                        </div>

                        <div class="about-para">
                            <p>currently I am learning front end developing. I want to build my career in programing. In future I want to be a full stack developer.</p>
                            <p>I beleive that hard work is the key to success.</p>
                        </div>

                    </div>
                </div>
            </Container>
            <footer className='footer1'><Footer /></footer>

        </div>
    );
};

export default About;