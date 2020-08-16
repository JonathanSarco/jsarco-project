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
    padding: 10em 0;
    height: ${props => props.fullHeight}px;

    @media (max-width: 1120px) and (max-height: 800px) {
        padding: 8em 0;
    }

    @media (max-width: 767.98px) and (max-height: 500px) {
        padding: 3em 0;
    }
`;

export const Building = styled(RiBuilding3Line)`
    color: white;
    font-size: 20vh;

    @media (max-width: 767.98px) and (max-height: 500px) {
        font-size: 40px;
    }
`;

export const CardBoot = styled(Card)`
    border-radius: 10px;
    width: 25rem;

    .card-title {
        color: #D8000C;
        font-family: 'Holtwood One SC';
        font-size: 40px;
    }

    .card-text {
        font-size: 30px;
    }
    
    @media (max-width: 1120px) and (max-height: 800px) {
        width : 50% ;
        max-width : 50%;
     
        .card-title {
            font-size: 30px;
        }

        .card-text {
            font-size: 25px;
        }
    }

    @media (max-width: 700px) and (max-height: 400px) {
        width : 50% ;
        max-width : 50%;
     
        .card-title {
            font-size: 20px;
        }

        .card-text {
            font-size: 15px;
        }
    }


`