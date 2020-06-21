import React from 'react';
import NavBar from 'react-bootstrap/Navbar'
import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav'
import './styles.css'

export const NavigationBar = () => (
    <NavBar key="navbar" className="navbar">
        <Nav className="nav-menu">
            <li>
                <Link className="dot active" to="/#home">Home</Link>
            </li>
            <li>
                <Link to="/#about" className="dot">About</Link>
            </li>
            <li>
                <Link to="/#about" className="dot">About</Link>
            </li>
        </Nav>
    </NavBar>
)