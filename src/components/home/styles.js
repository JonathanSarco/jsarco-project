import styled from 'styled-components'
import backgroundImage from '../../images/home.jpg';
import Container from 'react-bootstrap/Container';

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
    border: 0px solid white;
    width: 100%;
    height: 891px;
`;