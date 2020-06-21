import React from 'react';
import Container from 'react-bootstrap/Container';
import { Section } from './styles';
import { useWindowsDimensions } from '../hooks/useWindowsDimesions'

export const Home = () => {
    const { height } = useWindowsDimensions();
    return (
        <Section id="home" fullHeight={ height }>
            <Container fluid>
            </Container>
        </Section>
    )

};

