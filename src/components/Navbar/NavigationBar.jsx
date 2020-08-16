import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav'
import { CustomNavBar } from './styles.js'
import { useScrollHandler } from '../Hooks/useScrollHandler.jsx';

export const NavigationBar = () => {
    const [selected, setSelected] = useState({
        ref: "home"
    });

    const scroll = useScrollHandler();

    function isActive(ref) {
        if (scroll.ref === ref) {
            selected.ref = scroll.ref;
            return true;
        }
        return selected.ref === ref;
    }

    return(
    <CustomNavBar id='navbar'>
        <Nav className='nav-menu flex-column'>
            <Nav.Item className='nav-item' onClick={() => setSelected({ref: 'home'})}>
                <Link to='/#home' className={`dot ${isActive('home') ? 'active' : ''}`}>
                    <span>Home</span>
                </Link>
            </Nav.Item>
            <Nav.Item className='nav-item' onClick={() => setSelected({ref: 'about'})}>
                <Link to='/#about' className={`dot ${isActive('about') ? 'active' : ''}`}>
                    <span>About</span>
                </Link>
            </Nav.Item>
        </Nav>
    </CustomNavBar>
    )
}