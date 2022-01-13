import React, { Component } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import store from './redux/store';
import {Link} from 'react-router-dom';
// import './Header.css';

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <Navbar bg="light" variant="light" className="navbar navbar-expand-lg">
                    <div className="container">
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon"/>
                        </Button>


                        <div className="collapse navbar-collapse" id="navmenu">
                        <Nav className="navbar-nav">
                            <Nav.Link href="#features">About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">All products</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.2">Popular items</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">New arrivals</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        </div>
                        <div className="ms-auto">
                            <Link to="/cart">
                            <Button className="ms-auto" variant="dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                {/* <img src="./images/cart.svg"/> */}
                                 Cart
                            </Button>
                            </Link>
                            </div>
                    </div>
                
                    
                </Navbar>
            </header>
        );
    }
}
 
export default Header;