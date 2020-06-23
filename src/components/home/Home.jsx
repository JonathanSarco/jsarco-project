import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Section, BoxContainer } from './styles';
import { useWindowsDimensions } from '../hooks/useWindowsDimesions'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
    const { height } = useWindowsDimensions();
    const [color, setColor] = useState('red') 

    function changeColor() {
        setColor('white'); 
    }

    return (
        <Section id='home' alt='home' fullHeight={ height } selectedColor={ color }>
            <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col xs={2} />
                <Col>
                    <BoxContainer>

                    </BoxContainer>
                </Col>
                <Col>
                    <BoxContainer />
                </Col>
            </Row>
            </Container>
        </Section>
    )

};

