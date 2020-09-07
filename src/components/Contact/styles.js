import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import backgroundImage from '../../images/contact-back.jpeg';

export const Section = styled.section`
    padding: 10em 0;
    background-image: url(${backgroundImage});  
    background-size: contain;
`;

export const CardBox = styled(Card)`    
    padding: 30px;
    border-radius: 15px;
    border-color: white;
    background-color: transparent;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    font-family: 'Noto Sans';
    font-weight: 700;
    color: ${props => props.color};
    display: inline-block;
`;

export const DivTitle = styled.div`
    display: inline-block;
`;

export const Paragraph = styled.p`
    font-family: 'Noto Sans';
    font-size: 14px;
    color: white;
    padding-bottom: 5px;
`;

export const BLine = styled.p`
    border-bottom: 1px solid white;
    color: white;;
    width: 100%;
`;

export const TextContainer = styled.div`
    margin-top: 10px;
    width: 100%;
`;

export const MessageBox = styled(Form.Control)`
    padding-top: 10px;
    resize: none;    
    background-color: transparent;
    width: 100%;
    border-color: white;
    border-radius: 0px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    color: white;
    padding-left: 5px;

    &:focus {
        background-color: transparent;
        border-color: white;
        box-shadow: 0 0 0 0.1rem white;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: right
`;

export const CustomButton = styled(Button)`
    color: white;
`;

export const NetContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`;

export const CustomImage = styled(Image)`
    background-color: ${props => props.color};
    width: 70px;
    height: 70px;
`;