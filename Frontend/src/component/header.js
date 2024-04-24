import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Cart() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundImage: "url('https://res.cloudinary.com/di7h2rh7z/image/upload/v1711113474/Rectangle_25_fonf86.png')", backgroundSize: 'cover', minHeight: '150px' }} >
        <Image src='https://res.cloudinary.com/di7h2rh7z/image/upload/v1711113478/Rectangle_26_duh0mh.png' style={{width:"200px", paddingLeft:"40px"}}></Image>
        <Container style={{paddingLeft:"120px" }}>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               
              <Nav.Link href="#home" style={{paddingRight:"50px" , fontFamily:"lato" , fontSize:"24px" , fontWeight:700 , color:"#000000"}}>Home</Nav.Link>
              <Nav.Link href="#link"  style={{paddingRight:"50px" , fontFamily:"lato" , fontSize:"24px" , fontWeight:700 , color:"#000000"}}>Categories</Nav.Link>
              <Nav.Link href="#link" style={{paddingRight:"50px" , fontFamily:"lato" , fontSize:"24px" , fontWeight:700 , color:"#000000"}}>Contact Us</Nav.Link>
              <Nav.Link href="#link"  style={{paddingRight:"50px" , fontFamily:"lato" , fontSize:"24px" , fontWeight:700 , color:"#000000"}}>About Us</Nav.Link>
              <Nav.Link href="/help" style={{paddingRight:"50px" , fontFamily:"lato" , fontSize:"24px" , fontWeight:700 , color:"#000000"}}>Help</Nav.Link>
              <Button style={{ backgroundColor: '#ffffff00', border: '#ffffff00', marginTop: '4px' }} href="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
                                    </Button>
                                    <Button style={{ backgroundColor: '#ffffff00', border: '#ffffff00', marginTop: '4px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                                    </Button>
                                    <Button style={{ backgroundColor: '#ffffff00', border: '#000000', marginTop: '4px' , borderRadius:"40px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
                                    </Button>
                                  <div style={{marginLeft:"120px"}}>
                                  <Button style={{ backgroundColor: '#FC9735', border: '#FC9735', marginTop: '4px' , borderRadius:"40px" , color:"#000000" , fontWeight:600 , width:"100px" }}>
                                    Log In
                                    </Button>
                                  </div>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
    );
}
