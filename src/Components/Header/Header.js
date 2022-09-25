import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrap">
      {/*Alternative Need display flaex 
            <div className="logo">
                <h2><Link to="home">City Riders</Link></h2>    
            </div>
            <div className="menu">
                <li><Link to="home">Home</Link></li>
                <li><Link to="destination">Destination</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </div> */}
      <Navbar style={{boxShadow:' 3px 9px 5px -9px rgba(0,0,0,0.75)'}} variant="dark">
        <Container className="">
          <Navbar.Brand style={{color:'black'}} className="fw-bolder fs-3" to="home">City Riders</Navbar.Brand>
          <Nav className=" float-end">
            <Nav.Link style={{color:'black'}} className=" fs-5 color-white" href="home">Home</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" href="destination">Destination</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" href="blog">Blog</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
