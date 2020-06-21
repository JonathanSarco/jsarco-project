import React from 'react';
import { Home } from '../home/Home';
import { About } from '../about/About';
import { NavigationBar } from '../navbar/NavigationBar'
import { CustomContainer } from './styles';

export const Routes = () => {
    return (
        <React.Fragment>
            <CustomContainer fluid>
                <NavigationBar />
                <Home />
                <About />
            </CustomContainer>
        </React.Fragment>
    );
}