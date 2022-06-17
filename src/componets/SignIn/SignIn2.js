import React, { useState } from 'react';
import './SignIn.css';
import { Navbar, Nav, Button, Container, Form, FormControl } from 'react-bootstrap';
import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);

const SignIn2 = () => {
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


    // const SignOut = () => {
    //     signOut(auth)
    //         .then(() => {
    //             setUser({});
    //         })
    //         .catch(error => {
    //             setUser({});
    //         })
    // }


    return (
        <div className='SignIn'>
            <h2>Validation</h2>
            <h3 className='text-primary'>{registered ? 'Login' : "Register"}</h3>

            <Container>

                <div className='registration w-50 mx-auto mt-5'>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
                        <Button variant="primary" type="submit">
                            {registered ? "Login" : "Register"}
                        </Button>
                    </Form>
                </div>

            </Container>


        </div>
    );
}

export default SignIn2;