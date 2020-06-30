import styled from 'styled-components'
import backgroundImage from '../../images/home.jpg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export const Section = styled.section` 
    background-image: url(${backgroundImage});   
    height: ${props => props.fullHeight}px;
    background-color: ${props => props.selectedColor }
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 0;

    @media (max-width: 1199.98px) {
        background-position: top center !important;
    }
`;

export const BoxContainer = styled(Container)`
    border: 1px solid white;
    align-items: center;
    width: 50%
`;

export const ColBootstrap = styled(Col)`
    height: ${props => props.fullHeight}px;
    border: 1px white solid; 
`;

export const WrapperDiv = styled.div`
    height: 50%;

    h1 {
        font-family: 'Noto Sans';
        font-size: 5vw;
        font-weight: 700;
        font-style: bold;
        color: #F0F8FF;
    }

    h2 {
        font-family: 'Noto Sans';
        font-size: 3vw;
        font-style: bold;
        color: #F0F8FF;
    }

    .main-text {
        font-family: 'Noto Sans';
        font-size: 2vw;
        color: #F0F8FF;
    }
`;
