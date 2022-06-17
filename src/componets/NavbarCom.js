import React, { useState } from 'react';
import './NavbarCom.css';
import './nav.js';
import { Navbar, Nav, Button, Container, Form, FormControl, Modal, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import Home from './Home/Home';
import PageNotefound from './PageNotefound/PageNotefound';
import ServicesPage from './ServicesPage/ServicesPage';
import app from './../firebase.init';
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignIn2 from './SignIn/SignIn2';
import CheckOut from './CheckOut/CheckOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const auth = getAuth(app);

const NavbarCom = () => {
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

    return (

        <Router>
            <header>
                <div>

                    <Navbar variant='dark' expand="lg" className='navbar'>

                        <Container>
                            <Navbar.Brand as={Link} to={'/'}>Traveler World</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"  sticky-top/> 
                            <Navbar.Collapse id="navbarScroll">

                                <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                                    <Nav.Link as={Link} to={'/home'} className='nav'>Home</Nav.Link>
                                    <Nav.Link as={Link} to={'/Services'} className='nav'>Services</Nav.Link>
                                    <Nav.Link as={Link} to={'/blogs'} className='nav'>Blogs</Nav.Link>
                                    <Nav.Link as={Link} to={'/about'} className='nav'>About</Nav.Link>
                                    {
                                        registered ?  <Nav.Link as={Link} to={'/checkout'} className='nav'>Checkout</Nav.Link> : ''
                                    }
                                  
                                </Nav>
                                {user.uid ?
                                    <Button onClick={SignOut}>Sign Out</Button> :
                                    <div className='SignInBtn'>
                                        {/* <Nav.Link as={Link} to={'/signin'} className='nav'>
                                            Sign In
                                        </Nav.Link> */}
                                        <Button onClick={handleShow}> Sign In</Button>
                                        <Button onClick={handGoogleSignIn}>Google</Button>
                                        <Button onClick={handGithubSignIn}>Github</Button>
                                    </div>
                                }


                                <>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{registered ? "Login " : " Please Register"}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Container>
                                                <div className='registration w-50 mx-auto mt-5'>
                                                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                                                        {registered ? " " : 
                                                        <div> 
                                                        <Form.Group controlId="validationCustom01">
                                                            <Form.Label>First name</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                            <Form.Group controlId="validationCustom02">
                                                                <Form.Label>Last name</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            </div>                                                           
                                                        }

                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter valid email
                                                            </Form.Control.Feedback>
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please enter  password
                                                            </Form.Control.Feedback>
                                                        </Form.Group>

                                                        <Form.Group className="mb-3">
                                                            <Form.Check
                                                                onChange={alreadyRegister}
                                                                name="terms"
                                                                label="Already Register"
                                                            />
                                                        </Form.Group>
                                                        <p className='text-danger'>{error}</p>
                                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                                            {registered ? "Login" : "Register"}
                                                        </Button>
                                                    </Form>
                                                </div>
                                            </Container>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                                {
                                    user.displayName
                                }
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                    <Routes>
                        <Route path="/home" caseSensitive={false} element={<Home />} />
                        <Route path="/Services" caseSensitive={false} element={<ServicesPage />} />
                        <Route path="/blogs" caseSensitive={false} element={<Blogs />} />
                        <Route path="/about" caseSensitive={false} element={<About />} />
                        <Route path="/signin" caseSensitive={false} element={<SignIn2 />} />
                        <Route path="/checkout" caseSensitive={false} element={<CheckOut />} />
                        <Route path="/" caseSensitive={false} element={<Home />} />

                        <Route path="*" element={<PageNotefound></PageNotefound>} />
                    </Routes>
                </div>
            </header>
        </Router>
    );
};

export default NavbarCom;