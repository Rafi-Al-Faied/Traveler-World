import React, { Component } from "react";
import './ServicesPage.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, Button, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import CheckOut from "../CheckOut/CheckOut";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}




export default class ServicesPage extends Component {
  render() {
   
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2600,
      pauseOnHover: true,
      rows: 2,
      slidesPerRow: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            rows: 2,
            slidesPerRow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            rows: 2,
            slidesPerRow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            rows: 3,
            slidesPerRow: 1,
          }
        }
      ]
    };
    return (
      <div >
        <Container className="services-section">
          <h2 className="services-title4">My Services</h2>
          <h2 className="services-title3">My Services</h2>
          <h4 className="services-title2">The Best Offer With Room</h4>
          <Slider {...settings}>

            <div >
              <Card className="card" style={{ width: '36rem', height: '20rem' }} >
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/travelix/images/xoffer_1.jpg.pagespeed.ic.LnLHOsFCJq.webp" />
                    <div>
                      <h3>GRAND CASTLE</h3>
                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$190 <span>Price per day</span></h4> <h5>Tour length </h5>

                    <h6>8 days</h6>
                    <div className="ratings">

                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStarHalfStroke} className="star" />

                    </div>

                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>

                    <Button className='btn-grad' onClick={<CheckOut />}>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>


            <div>
              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/travelix/images/xoffer_2.jpg.pagespeed.ic.HA9cJExNCg.webp" />
                    <div>
                      <h3>TURKEY HILLS</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$130 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>6 days</h6>
                    <div className="ratings">

                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>

              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://preview.colorlib.com/theme/travelix/images/xoffer_3.jpg.pagespeed.ic.9JfYNcm8fb.webp" />
                    <div>
                      <h3>ISLAND DREAM</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$120 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>2 days</h6>
                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStarHalfStroke} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>
            <div>

              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/93831_e15ebb55.jpg" />
                    <div>
                      <h3>Northern Thailand</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$200 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>9 days</h6>
                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>








            <div>
              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/93833_609bd117ac16a.jpg" />
                    <div>
                      <h3>Bali Experience</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$160 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>7 days</h6>
                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStarHalfStroke} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>
              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/136783_fad6ce63.jpg" />
                    <div>
                      <h3>Spirits Of Vietnam</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$140 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>4 days</h6>
                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>
              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/91447_5e2041670dba9.jpg" />
                    <div>
                      <h3>Taj Mahal</h3>

                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$100 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>3 days</h6>
                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStarHalfStroke} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>

            <div>
              <Card className="card" style={{ width: '36rem', height: '20rem' }}>
                <Row>
                  <Col className="left">
                    <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/67027_5dfb47423685e.jpg" />
                    <div>
                      <h3>Thailand Island Hopper</h3>
                    </div>
                  </Col>
                  <Col className="right">
                    <h4>$200 <span>Price per day</span></h4> <h5>Tour length </h5>
                    <h6>5 days</h6>

                    <div className="ratings">
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                    <Row>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                      <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                    </Row>
                    <Button className='btn-grad'>Book Now</Button>
                  </Col>
                </Row>
              </Card>
            </div>

          </Slider>
        </Container>

        <Footer />
      </div>
    );
  }
}