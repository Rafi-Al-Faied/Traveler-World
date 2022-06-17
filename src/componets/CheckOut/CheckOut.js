import React from 'react';
import { Container, Form, Row, Col, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './CheckOut.css'





const CheckOut = () => {


    return (

        <div className='chekckout'>
            <h2>Billing details</h2>
            <Container className='chekckout2'>
                <Row>
                    <Col sm={12}>
                        <h3>Billing details</h3>


                        <Form className='w-50 '>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='bg-success'>
                                Place Order
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={12}>
                        <h3 className='blind'>Billing details</h3>
                        <Card style={{ width: '18rem', border: '1px solid #FA9E1B' }}>
                         
                            <Card.Body>
                                <Card.Title>Cart Summary</Card.Title>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <Row>
                                        <Col>GRAND CASTLE</Col>
                                        <Col>$190 <span>Price per day</span></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>The Grand Castle is a multi-family residential development in Grandville, Michigan with 520 apartment units.It has been described "as the second
                                    largest castle structure in the world.</ListGroupItem>
                               
                            </ListGroup>
                         
                        </Card>
                    </Col>
                </Row>
            </Container>
<Footer />
        </div>




    );
};

export default CheckOut;