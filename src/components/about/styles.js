import styled from 'styled-components'
import { RiBuilding3Line } from 'react-icons/ri';
import Card from 'react-bootstrap/Card';
import backgroundImage from '../../images/under-build.jpg';

export const Section = styled.section`
    width: 100%;
    background-size: cover;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: top center;
    padding: 7em 0;
    height: ${props => props.fullHeight}px;
`;

export const Building = styled(RiBuilding3Line)`
    color: white;
    font-size: 20vh;
`;

export const CardBoot = styled(Card)`
    border-radius: 15px;
    width: 20em;

    .card-title {
        color: #D8000C;
        font-family: 'Holtwood One SC';
        font-size: 40px;
    }

    .card-text {
        color: red,
        font-family: Roboto;
        font-size: 25px;
    }
`