import { getAuth } from 'firebase/auth';
import React, { Component, useState } from 'react'
import './SignIn.css';
import { Navbar, Nav, Button, Container, Form, FormControl } from 'react-bootstrap';
import app from '../../firebase.init';
const auth = getAuth(app);

export default class SignIn extends Component {
    render() {
        const [email, setEmail] = useState('');
        const handleEmail = event => {
            console.log(event.target.value);
        }

        const handlePassword = event => {
            console.log(event.target.value);
        }

        const handleFormSubmit = event => {
            console.log('form submited');
            event.preventDefault();

        }

        return (
            <div className='SignIn'>
                <h2>Validation</h2>
                <h3 className='text-primary'>Register</h3>

                <Container>

                    <div className='registration w-50 mx-auto mt-5'>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>

                </Container>


            </div>
        )
    }
}
