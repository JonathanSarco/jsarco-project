import styled from 'styled-components'
import backgroundImage from '../../images/home.jpg';

export const Section = styled.section`
    background-image: url(${backgroundImage});
    height: ${props => props.fullHeight}px;
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