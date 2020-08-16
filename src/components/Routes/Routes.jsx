import React from 'react';
import { NavigationBar } from '../Navbar/NavigationBar'
import { Home } from '../Home/Home';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
import { CustomContainer } from './styles';

export const Routes = () => {
    return (
        <React.Fragment>
            <CustomContainer fluid>
                {/* <NavigationBar /> */}
                {/* <Home /> */}
                <Contact />
                {/* <About /> */}
            </CustomContainer>
        </React.Fragment>
    );
}