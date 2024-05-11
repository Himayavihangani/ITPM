import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavBar from '../component/header'
import Footer from '../component/footer'
import { useState, useEffect } from 'react';


export default function Cart() {
    const deleteItem = (itemIndex) => {
        const confirmed = window.confirm('Do you want to remove item ' + data[itemIndex].title + '?');
        
        if (!confirmed) { return; }

        fetch('http://localhost:3000/items/' + data[itemIndex]._id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then(() => fetchData());
    }
    const updateItem = (itemIndex, isAddingItem) => {
        // delete item if less than 2
        if (!isAddingItem && data[itemIndex].quantity <= 1) {
            deleteItem(itemIndex);
            return;
        }
        if (isAddingItem) {
            // add item
            data[itemIndex].quantity += 1;
        } else  {
            // Remove item
            data[itemIndex].quantity -= 1;
        }
        // Updating quantity
        setData(data);
        // Calling API to update quantity
        fetch('http://localhost:3000/items/' + data[itemIndex]._id, {
            method: 'PATCH',
            body: JSON.stringify({
                quantity: data[itemIndex].quantity
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => fetchData());
    }
    

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/items');
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => { fetchData();}, []);
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
{/* cart */}
{isLoading ?
                                    <h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>loading items...</h3>
                :
                
            
           <center>
                {data.map((cartItem, i) => (
                    <Card key={cartItem._id} style={{ width: '100%', backgroundColor: '#FFEEDA', height: '140px', marginBottom: '20px' , marginTop:"10px"}}>
                        <Card.Body>
                            <Row>
                                <Col><Image src={cartItem.imageUrl} style={{ width: '70px', marginBottom: '20px' }} /></Col>
                                <Col>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>{cartItem.title}</h3>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '16px', fontWeight: 500 }}>{cartItem.description}</h3>
                                </Col>
                                <Col>
                                    <h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700, paddingTop: '20px', color: '#7C7C7C', opacity: '60%' }}>RS: {cartItem.price}.00</h3>
                                </Col>
                                
                                <Col>
                                    <Container style={{ backgroundColor: '#FC9735', borderRadius: '20px', marginTop: '20px' }}>
                                        <Row>
                                            <Col><Button style={{ backgroundColor: '#FC9735', fontSize: '20px', border: '#FC9735', color: '#000000' } } onClick={() => updateItem(i, false)}>-</Button></Col>
                                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '20px', fontWeight: 700, paddingTop: '10px' }}>{cartItem.quantity}</h3></Col>
                                            <Col><Button style={{ backgroundColor: '#FC9735', fontSize: '20px', border: '#FC9735', color: '#000000' }} onClick={() => updateItem(i, true)}>+</Button></Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Button style={{ backgroundColor: '#FFEEDA', border: '#FFEEDA', marginTop: '16px' }}  onClick={() => deleteItem(i)}>
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
                <Card style={{ width: '100%', backgroundColor: '#FFEEDA', height: '130px', marginBottom: '70px' }}>
                    <Card.Body>
                        <Row>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 700 }}>{data.length} Selected</h3> <h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 500 }}>Food Items</h3></Col>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>SubTotal: RS 3750.00</h3> <Button style={{ color: '#FFFFFF', fontSize: '30px', backgroundColor: '#000000', border: '#000000', borderRadius: '20px', width: '300px' }} href="/payment">CHECKOUT</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </center>
}
            <Footer></Footer>
        </div>
    );
}
