import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

export class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" className="flex-column">
                <Nav>
                    <ul>
                    <li><Nav.Link href="/">Home</Nav.Link></li>
                    <li><Nav.Link href="about">About</Nav.Link></li>
                    <li><Nav.Link href="contact">Contact</Nav.Link></li>
                    </ul>
                </Nav>
            </Navbar>
        )
    }
}


