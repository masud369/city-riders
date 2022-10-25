import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
  const [login,setLogin] = useContext(UserContext);
  console.log(login.name);
  const handelSignOut = ()=>{
    console.log('clicked')
    setLogin(!login);
    document.getElementById("dNone").classList.add("d-none")
  }
  if(login.name){
    document.getElementById("dNone").classList.remove("d-none")
  }
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
            <Nav.Link style={{color:'black'}} className=" fs-5 color-white" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" as={Link} to="/destination">Destination</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link style={{color:'black'}} className="fs-5" as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link style={{color:'black'}} id="dNone" className="fs-5 d-none" as={Link} to="#"> <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {login.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handelSignOut} href="#/action-1">Singnout</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
