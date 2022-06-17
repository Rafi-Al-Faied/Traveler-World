import React from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Blogs.css';


const Blogs = () => {
    return (
        <div>
            <h1 className='top-section2'>React Question</h1>
            <h1 className='top-section3'>Firebase Question</h1>
            <Container >
                <div className='top-section2'></div>
                <Row>
                    <Col lg={6} sm={12} className='cards'>
                        <Card  className='car'>
                            <Card.Body>
                                <Card.Text className='title'>1. Difference between authorization and authentication?</Card.Text>
                                <Card.Text className='answer'>
                                    Authentication is the process of verifying who someone is and authorization is the process of
                                    verifying what specific applications, files, and data a user has access to. The process of verifying and
                                    confirming employees ID and passwords in an organization is called authentication,
                                    but determining which employee has access to which floor is called authorization.
                                    Authentication is done before the authorization process and authorization process is done after the authentication process.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} sm={12} className='cards'>
                        <Card  className='car'>
                            <Card.Body>
                                <Card.Text className='title'>2. Why are you using firebase? What other options do you have to implement authentication?</Card.Text>
                                <Card.Text className='answer'>
                                    There are definitely great advantages if you use Firebase Authentication.Firebase is Google’s app development platform. It will help you to build, improve, and grow your application in a smooth and standardized way.
                                    Firebase manages all data real-time in the database. So, the exchange of data from the database is easy and quick.
                                    If you are looking to develop mobile apps such as live streaming, chat messaging, etc you can use Firebase.Back4app
                                    is a reliable Firebase alternative that works with an amalgamation of open-source technologies.Parse is also a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your apps.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12} className='cards'> <Card  className='car'>
                        <Card.Body>
                            <Card.Text className='title'>2. What other services does firebase provide other than authentication?</Card.Text>
                            <Card.Text className='answer'>
                                Firebase is very time efficient and rich of very helpful tools which are easy to use for entry level developers and experienced developers as well.
                                Some of the key features that firebase does without authentication are -
                                Analytics,Cloud Messaging,Realtime Database,Storage,Hosting,Remote Configuration,
                                Test Lab,Crash Reporting
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default Blogs;