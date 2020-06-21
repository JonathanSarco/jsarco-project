import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Section, Building, CardBoot } from './styles';
import { useWindowsDimensions } from '../hooks/useWindowsDimesions';

export const About = () => {
    const { height } = useWindowsDimensions();

    return (
        <Section id="about" fullHeight={height}>
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Building />
                </Row>
                <Row className="justify-content-center align-items-center text-center">
                    <CardBoot>
                        <Card.Body>
                            <Card.Title className="card-title"> Don't be anxious!</Card.Title>
                            <Card.Text className="card-text"> I'm working on it. </Card.Text>
                        </Card.Body>
                    </CardBoot>
                </Row>
            </Container>
        </Section>
    )
};

