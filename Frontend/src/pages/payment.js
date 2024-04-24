import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../component/header'
import Footer from '../component/footer'

// Visa form component
function VisaForm() {
    return (
        <div style={{paddingLeft:"40px" , paddingTop:"20px"}}>
            <h2  style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700  }}>Visa Form</h2>
            <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>Card Number</Form.Label>
      <Form.Control
        type="text"
        id="number"
        aria-describedby="passwordHelpBlock"
        style={{width:"800px"}}
        required
      />
      <Form.Text id="passwordHelpBlock" >
        Your card Number must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <br></br>
      <br></br>
      
      <Row style={{width:"400px"}}>
        <Col>
        <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>Expiry date</Form.Label>
      <Form.Control
        type="date"
        id="date"
        aria-describedby="passwordHelpBlock"
        style={{width:"100px"}}
        required
      />
        </Col>
        <Col>
        <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>CVV</Form.Label>
      <Form.Control
        type="text"
        id="CVV"
        aria-describedby="passwordHelpBlock"
        style={{width:"100px"}}
        required
      />
        </Col>
       
      </Row>
      
        </div>
    );
}

// MasterCard form component
function MasterCardForm() {
    return (
        <div style={{paddingLeft:"40px" , paddingTop:"20px"}}>
        <h2  style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700  }}>Master Card Form</h2>
        <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>Card Number</Form.Label>
  <Form.Control
    type="text"
    id="number"
    aria-describedby="passwordHelpBlock"
    style={{width:"800px"}}
    required
  />
  <Form.Text id="passwordHelpBlock" >
    Your card Number must be 8-20 characters long, contain letters and numbers,
    and must not contain spaces, special characters, or emoji.
  </Form.Text>
  <br></br>
  <br></br>
  
  <Row style={{width:"400px"}}>
    <Col>
    <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>Expiry date</Form.Label>
  <Form.Control
    type="date"
    id="date"
    aria-describedby="passwordHelpBlock"
    style={{width:"100px"}}
    required
    min={new Date().toISOString().split('T')[0]} // Setting minimum date to today
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      e.target.setCustomValidity("Please select a valid date");
    } else {
      e.target.setCustomValidity(""); // Resetting validation message if date is valid
    }}}
  />
    </Col>
    <Col>
    <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>CVV</Form.Label>
  <Form.Control
    type="text"
    id="CVV"
    aria-describedby="passwordHelpBlock"
    style={{width:"100px"}}
    required
  />
    </Col>
   
  </Row>
  
    </div>
    );
}

// Cash form component
function CashForm() {
    return (
        <div style={{paddingLeft:"40px" , paddingTop:"20px"}}>
        <h2  style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700  }}>Cash Form</h2>
            <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato', }}>Name</Form.Label>
  <Form.Control
    type="text"
    id="name"
    aria-describedby="passwordHelpBlock"
    style={{width:"800px"}}
    required
  />
  <Form.Text id="passwordHelpBlock" >
   provide the reciever's name for cash orders.
  </Form.Text>
  <br></br>

  <Form.Label htmlFor="inputPassword5"  style={{ fontFamily: 'lato' }}>Contact Number</Form.Label>
  <Form.Control
    type="Number"
    id="Contact Number"
    aria-describedby="passwordHelpBlock"
    style={{width:"800px"}}
    required
  />
  <Form.Text id="passwordHelpBlock" >
   provide a contact number to contact the reciever.
  </Form.Text>

        </div>
    );
}

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePaymentMethodSelection = (method) => {
        setPaymentMethod(method);
    };

    // Function to render selected form based on payment method
    const renderForm = () => {
        switch (paymentMethod) {
            case 'visa':
                return <VisaForm />;
            case 'mastercard':
                return <MasterCardForm />;
            case 'cash':
                return <CashForm />;
            default:
                return null;
        }
    };

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
           <Row style={{ marginTop:"20px"}}>
            <Col style={{paddingLeft:"45px"}}>
            <h1 style={{ fontFamily: 'lato', fontSize: '31px', fontWeight: 700 }}>Payment Method</h1>
            </Col>
            <Col style={{paddingLeft:"900px" }}>
            <Button style={{backgroundColor:"#FC9735" , color:"#000000" , fontSize:"20px" , border:"#FC9735" , borderRadius: '20px' , width:"200px"}}>ORDER REPORT</Button>
            </Col>
           </Row>
            <Row style={{ width: '800px' , paddingTop:"20px" , paddingLeft:"40px" }}>
                <Col>
                    <Card style={{ width: '200px', height: '140px' }} onClick={() => handlePaymentMethodSelection('mastercard')}>
                        <Card.Body>
                            <Image src={"https://pngimg.com/d/mastercard_PNG16.png"} style={{ width: "150px" }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '200px', height: '140px' }} onClick={() => handlePaymentMethodSelection('visa')}>
                        <Card.Body>
                            <Image src={"https://static.vecteezy.com/system/resources/previews/020/975/567/original/visa-logo-visa-icon-transparent-free-png.png"} style={{ width: "150px" }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '200px', height: '140px' }} onClick={() => handlePaymentMethodSelection('cash')}>
                        <Card.Body>
                            <Image src={"https://clipart-library.com/2023/giving-money-clipart-dT7e5Lzbc.png"} style={{ width: "150px" }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Render selected form */}
            {renderForm()}

            <hr style={{height:"5px" , marginTop:"20px"}}></hr>

            <Row style={{paddingLeft:"45px"}}>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '20px', fontWeight: 700 }}>Sub Total</h3> <h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 500 }}>Delivery</h3> <h3 style={{ fontFamily: 'lato', fontSize: '24px', fontWeight: 700 }}>Total</h3></Col>
                            <Col><h3 style={{ fontFamily: 'lato', fontSize: '20px', fontWeight: 700 }}>RS 3700.00</h3> <h3 style={{ fontFamily: 'lato', fontSize: '18px', fontWeight: 500 }}>Rs 200.00</h3> <h3 style={{ fontFamily: 'lato', fontSize: '24px', fontWeight: 700 }}>Rs 3900.00</h3></Col>
                        </Row>
                        <footer></footer>
        </div>
        
    );
}
