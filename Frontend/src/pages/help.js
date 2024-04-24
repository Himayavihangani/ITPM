import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavBar from '../component/header';
import Button from 'react-bootstrap/Button';

export default function Help() {
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
                <h1 style={{ fontFamily: 'lato', fontSize: '32px', fontWeight: 700, paddingTop: "20px" }}>Help center</h1>
                <h2 style={{ fontFamily: 'lato', fontSize: '24px', fontWeight: 700 }}>How can I help you?</h2>
                {/* help content */}
                <Accordion style={{ width: "1000px" }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I place an order?</Accordion.Header>
                        <Accordion.Body>
                            To place an order, simply browse our menu, select the items you'd like to order, and proceed to checkout. Follow the prompts to provide your delivery address and payment information.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                        <Accordion.Body>
                            We accept various payment methods, including credit/debit cards, PayPal, and cash on delivery. Choose the option that suits you best during checkout.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How long does delivery take?</Accordion.Header>
                        <Accordion.Body>
                            Delivery times may vary depending on your location and current order volume. Typically, orders are delivered within 30-60 minutes.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What if I have dietary restrictions or allergies?</Accordion.Header>
                        <Accordion.Body>
                            Please let us know about any dietary restrictions or allergies when placing your order. We'll do our best to accommodate your needs and provide suitable alternatives.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How can I track my order?</Accordion.Header>
                        <Accordion.Body>
                            Once your order is confirmed, you'll receive a confirmation email or SMS with a tracking link. You can use this link to track the status of your delivery in real-time.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </center>
        </div>
    );
};
