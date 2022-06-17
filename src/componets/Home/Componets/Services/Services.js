import React, { Component, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, Button, Card, ListGroupItem, ListGroup, Nav } from 'react-bootstrap';
import './services.css'
import CheckOut from "../../../CheckOut/CheckOut";

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,

} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app from "../../../../firebase.init";

const auth = getAuth(app)



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

function nextPath(path) {
  this.props.history.push(path);
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




const Home = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();


  const handGoogleSignIn = () => {
      signInWithPopup(auth, googleprovider)
          .then(result => {
              const user = result.user;
              setUser(user);
              console.log(user);
          })
          .catch(error => {
              console.error('error', error);
          })
  }
  const handGithubSignIn = () => {
      signInWithPopup(auth, githubprovider)
          .then(result => {
              const user = result.user;
              setUser(user);
              console.log(user);
          })
          .catch(error => {
              console.error('error', error);
          })
  }

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  const [registered, setRegisterd] = useState(false);
  const handleEmail = event => {
      setEmail(event.target.value);
  }

  const handlePassword = event => {
      setPass(event.target.value);
  }
  const alreadyRegister = event => {
      setRegisterd(event.target.checked);
  }

  const handleFormSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {

          event.stopPropagation();
          return;
      }
      if (!/(?=.*?[#?!@$%^&*-])/.test(pass)) {
          setError('Password should contain at least one special character')
          return;
      }
      setValidated(true);
      setError('');

      if (registered) {
          signInWithEmailAndPassword(auth, email, pass)
              .then(result => {
                  const user = result.user;
                  setUser(user);
                  console.log(user);
              })
              .catch(
                  error => {
                      setError(error.message);
                  })
      } else {
          createUserWithEmailAndPassword(auth, email, pass)
              .then(
                  result => {
                      const user = result.user;
                      console.log(user);
                      setUser(user);
                      varifyEmail();
                  }
              )
              .catch(error => {
                  console.log(error);
                  setError('Already register', error);
              })
      }



      console.log('form submited');
      event.preventDefault();

  }
  const varifyEmail = () => {
      sendEmailVerification(auth.currentUser)
          .then(() => {
              console.log('Email Varification Send');
          })
  }



  const SignOut = () => {
      signOut(auth)
          .then(() => {
              setUser({});
          })
          .catch(error => {
              setUser({});
          })
  }
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,
          rows: 8,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,
          rows: 8,
          slidesPerRow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          rows: 8,
          slidesPerRow: 1,
          dots: false,
        }
      }
    ]
  };
  const navigate = useNavigate();

  return (
    <div >
      <Container className="services-section">
        <h2 className="services-title">My Services</h2>
        <h4 className="services-title2">The Best Offer With Room</h4>
        <Slider {...settings}>

          <div >
            <Card className="card"  >
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

                  <p>The Grand Castle is a multi-family residential development in Grandville, Michigan with 520 apartment units.It has been described "as the second
                    largest castle structure in the world.</p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                 
                </Col>
              </Row>
            </Card>
          </div>


          <div>
            <Card className="card"  >
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
                  <p>Turkey is a transcontinental country located mainly on Anatolia in Western Asia, with a portion on the Balkans in Southeast Europe.
                  </p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>

          <div>

            <Card className="card"  >
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
                  <p>Dream Island is an island lying 0.7 km south-east of Cape Monaco, off the south-west coast of Anvers Island in Wylie Bay,
                    in the Palmer Archipelago of Antarctica.</p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>
          <div>

            <Card className="card"  >
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
                  <p>Northern Thailand is geographically characterised by several mountain ranges, which continue from the Shan Hills in
                    bordering Myanmar to Laos and the river valleys which cut through them.</p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>


          <div>
            <Card className="card"  >
              <Row>
                <Col className="left">
                  <Card.Img variant="top" src="https://cdn.tourradar.com/s3/tour/232x170/93833_609bd117ac16a.jpg" />
                  <div>
                    <h3>Bali</h3>

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
                  <p>
                    East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring island. </p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>

          <div>
            <Card className="card"  >
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
                  <p>Vietnam is a country in Southeast Asia. Located at the eastern edge of mainland Southeast Asia. It covers 311,699 square kilometres,with a population of over
                    96 million.</p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>

          <div>
            <Card className="card"  >
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
                  <p>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. </p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>

          <div>
            <Card className="card"  >
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
                  <p>Thailand is a country in Southeast Asia spanning 513,120 square kilometres. It has a population of almost 70 million.</p>
                  <Row>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xpost.png.pagespeed.ic.8S9NJqfU1S.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xcompass.png.pagespeed.ic.BMlGyHi2Dm.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xbicycle.png.pagespeed.ic.-D-2GN2myH.webp"></img></Col>
                    <Col className="icon"><img src="https://preview.colorlib.com/theme/travelix/images/xsailboat.png.pagespeed.ic.bAIbYdxQvf.webp"></img></Col>
                  </Row>
                  {
        
                  //  user.uid ?  <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> 
                   user.uid ?  <Button className='btn-grad' onClick={() => navigate('/signin')}>Book Now</Button> : <Button className='btn-grad' onClick={() => navigate('/checkout')}>Book Now</Button>
                  }
                </Col>
              </Row>
            </Card>
          </div>

        </Slider>
      </Container>
    </div>
  );
}

export default Home;