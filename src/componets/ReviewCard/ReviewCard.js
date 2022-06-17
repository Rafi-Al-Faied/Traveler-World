import React from 'react';
import './ReviewCard.css';
import { Card, Col, Container, Button, Img, Row } from 'react-bootstrap';
const ReviewCard = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, reveiw, price, rating } = product;


    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Row className='top'>
                        <Col className='card-img'>
                            <Card.Img variant="top" src={img} />
                        </Col>
                        <Col className='card-title'>
                            <Card.Text>{name}</Card.Text>
                        </Col>
                    </Row>
                    <Row >
                    <Card.Text className='ratings'>
                       Ratings: {rating}
                    </Card.Text>
                    </Row>
                   
                    <Card.Text className='review'>
                        {reveiw}
                    </Card.Text>
                    <br />
                 
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;