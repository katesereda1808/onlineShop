import React, { Component } from 'react';
import { Button, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer">
                <p>Copyright © Your Website 2021</p>
            </footer>
        );
    }
}
 
export default Footer;