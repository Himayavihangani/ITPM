import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavBar from '../component/header'
import Footer from '../component/footer'

const cardData = [
    {
        id: 1,
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/021/952/564/original/free-tasty-hamburger-on-transparent-background-free-png.png',
        title: 'Cheese burger',
        description: 'regular burger with cheese',
        price: 'RS 940.00'
    },
    {
        id: 2,
        imageUrl: 'https://www.saltandlavender.com/wp-content/uploads/2020/10/creamy-tomato-pasta-1.jpg',
        title: 'Creamy pasta',
        description: 'penne pasta',
        price: 'RS 1300.00'
    },
    {
        id: 3,
        imageUrl: 'https://houseofnasheats.com/wp-content/uploads/2023/10/FB-Chocolate-Milkshake-1.jpg',
        title: 'Chocolate Milkshake',
        description: 'Choc malt milkshake',
        price: 'RS 890.00'
    },
    {
        id: 4,
        imageUrl: 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
        title: 'French fries',
        description: 'Salty french fries with ketchup',
        price: 'RS 590.00'
    },
];

export default function Cart() {
    return (
        <div>
                 <NavBar></NavBar>
                 <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: '999' , alignItems:"left"}}>
            <Button style={{ backgroundColor: '#ffffff00', border: '1px solid #000000', borderRadius: '50%', width: '60px', height: '60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </Button>
        </div>

            <center>
                {cardData.map((card) => (
                    <Card key={card.id} style={{ width: '1100px', backgroundColor: '#FFEEDA', height: '140px', marginBottom: '20px' , marginTop:"10px"}}>
                        <Card.Body>
                            <Row>
                                <Col><Image src={card.imageUrl} style={{ width: '70px', marginBottom: '20px' }} /></Col>
                                <Col>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>{card.title}</h3>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '16px', fontWeight: 500 }}>{card.description}</h3>
                                </Col>
                                <Col>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700, paddingTop: '20px', color: '#7C7C7C', opacity: '60%' }}>{card.price}</h3>
                                </Col>
                                <Col>
                                    <Container style={{ backgroundColor: '#FC9735', borderRadius: '20px', marginTop: '20px' }}>
                                        <Row>
                                            <Col><Button style={{ backgroundColor: '#FC9735', fontSize: '20px', border: '#FC9735', color: '#000000' }}>+</Button></Col>
                                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '20px', fontWeight: 700, paddingTop: '10px' }}>1</h3></Col>
                                            <Col><Button style={{ backgroundColor: '#FC9735', fontSize: '20px', border: '#FC9735', color: '#000000' }}>-</Button></Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Button style={{ backgroundColor: '#FFEEDA', border: '#FFEEDA', marginTop: '16px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#000000" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
                {/* Subtotal Card */}
                <Card style={{ width: '1100px', backgroundColor: '#FFEEDA', height: '130px', marginBottom: '70px' }}>
                    <Card.Body>
                        <Row>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 700 }}>4 Selected</h3> <h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 500 }}>Food Items</h3></Col>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>SubTotal: RS 3750.00</h3> <Button style={{ color: '#FFFFFF', fontSize: '30px', backgroundColor: '#000000', border: '#000000', borderRadius: '20px', width: '300px' }} href="/payment">CHECKOUT</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </center>
            <Footer></Footer>
        </div>
    );
}
