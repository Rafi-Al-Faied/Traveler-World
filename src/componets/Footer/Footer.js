import React from 'react';
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone, faSitemap, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {


    return (
        <div className='footer-section'>
            <Container className='footer'>
                <Row className='footer-title'>
                    <Col className='travel' lg={3} sm={12}>
                        <h4 > Traveler World</h4>
                        <p className='hide'>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    </Col>

                    <Col lg={3} sm={12} >
                        <h3>BLOG POST</h3>
                        <div className="blogss">
                        <Row className='hide' sm={6}>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.n5JT1wzbm-.webp'></img>
                            </Col>
                            <Col>
                                <p>Travel with us this year</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        <Row  className='hide' sm={6}>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.n5JT1wzbm-.webp'></img>
                            </Col>
                            <Col>
                                <p>Travel with us this year</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        <Row  className='hide' sm={6}>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_2.jpg.pagespeed.ic.u_Bp7zMu38.webp'></img>
                            </Col>
                            <Col>
                                <p>New destinations for you</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        <Row  className='hide' sm={6}>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_3.jpg.pagespeed.ic.XDkX_CloU3.webp'></img>
                            </Col>
                            <Col>
                                <p>Travel with us this year</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <h3>TAGS</h3>
                        <div class="grid-container hide">
                            <div class="item1 hide">Travel</div>
                            <div class="item2 hide">Party</div>
                            <div class="item3 hide">Adventure</div>
                            <div class="item4 hide">Music</div>
                            <div class="item5 hide">photography</div>
                        </div>

                    </Col>
                    <Col lg={3} sm={12}>
                        <h3 className='contact'>CONTACT INFO</h3>
                    
                        <Row className='hide contact-row'>
                            <Col lg="1" sm="1">
                                <FontAwesomeIcon icon={faLocationDot} className="faicon" />
                            </Col>
                            <Col lg="11"  sm="11">
                                <p>4127 Raoul Wallenber 45b-c Gibraltar</p>
                            </Col>
                        </Row>

                        <Row className='hide contact-row'>
                            <Col lg="1" sm="1">
                                <FontAwesomeIcon icon={faPhone} className="faicon" />
                            </Col>
                            <Col lg="11" sm="11">
                                <p>2556-808-8613</p>
                            </Col>
                        </Row>

                        <Row className='hide contact-row'>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faMailBulk} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>
                                    contactme@gmail.com</p>
                            </Col>
                        </Row>

                        <Row  className='hide contact-row'>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faSitemap} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>
                                    www.travelerworld.com</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row className='hide2'>
                    <Col>
                        <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>

                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.n5JT1wzbm-.webp'></img>
                            </Col>
                            <Col>
                                <p>Travel with us this year</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_2.jpg.pagespeed.ic.u_Bp7zMu38.webp'></img>
                            </Col>
                            <Col>
                                <p>New destinations for you</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src='https://preview.colorlib.com/theme/travelix/images/xfooter_blog_3.jpg.pagespeed.ic.XDkX_CloU3.webp'></img>
                            </Col>
                            <Col>
                                <p>Travel with us this year</p>
                                <p className='date'>Apr 29, 2022</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='tags'>
                        <div class="grid-container">
                            <div class="item1">Travel</div>
                            <div class="item2">Party</div>
                            <div class="item3">Adventure</div>
                            <div class="item4">Music</div>
                            <div class="item5">photography</div>
                        </div>


                    </Col>

                    <Col>
                        <Row>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faLocationDot} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>4127 Raoul Wallenber 45b-c Gibraltar</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faPhone} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>2556-808-8613</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faMailBulk} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>
                                    contactme@gmail.com</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="1">
                                <FontAwesomeIcon icon={faSitemap} className="faicon" />
                            </Col>
                            <Col lg="11">
                                <p>
                                    www.travelerworld.com</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
            <footer>
                <Container>
                    <Row className='footer2'>
                        <Col>
                            <p>Copyright ©2022 All rights reserved </p>
                            <p>This template is made with  by Rafee Al Fayed</p>
                        </Col>
                        <Col>
                            <h4>Traveler World</h4>
                        </Col>
                    </Row>
                </Container>

            </footer>
        </div>
    );
};

export default Footer;