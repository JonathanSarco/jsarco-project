import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AnimatedHook } from '../animation/AnimatedHook';
import { useWindowsDimensions } from '../hooks/useWindowsDimesions'
import { Section, BoxContainer, ColBootstrap, WrapperDiv } from './styles';

export const Home = () => {
    const { height } = useWindowsDimensions();
    const [color, setColor] = useState('red')

    return (
        <Section id='home' alt='home' fullHeight={height} selectedColor={color}>
            <Container fluid>
                <Row className=''>
                    <ColBootstrap xs={8} fullHeight={height} className='d-flex align-items-center'>
                        <BoxContainer>
                            <AnimatedHook />
                        </BoxContainer>
                    </ColBootstrap>
                    <ColBootstrap fullHeight={height} className='d-flex align-items-center justify-content-center'>
                        <WrapperDiv className='text-center'>
                            <h1>Hi!</h1>
                            <h2>I'm Jonathan</h2>
                            <p className='main-text'>I am just testing React :)</p>
                        </WrapperDiv>
                    </ColBootstrap>
                </Row>
            </Container>
        </Section>
    )

};

