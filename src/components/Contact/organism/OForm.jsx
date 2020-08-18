import React from 'react';
import { Composition } from 'atomic-layout';
import { formTemplate } from '../templates';
import { Form, Col } from 'react-bootstrap'
import { 
    CardBox, 
    Title, 
    DivTitle, 
    Paragraph, 
    BLine, 
    TextContainer, 
    ButtonContainer,
    MessageBox, 
    CustomButton,
} from '../styles';

export const OForm = () =>
    (
        <Composition
            areas={formTemplate}
            gap={10}
            gutter={50}
            justifyContent='center'>
            {
                ({ MainTitle, FName, Message, SubmitArea }) => (
                    <CardBox>
                        <MainTitle flex flexDirection='column' alignItems='center'>
                            <DivTitle>
                                <Title color='rgb(225, 106, 106)'>Contact&nbsp;</Title>
                                <Title color='white'>me</Title>
                            </DivTitle>
                            <Paragraph> If you want to ask me something, feel free to get in touch! </Paragraph>
                            <BLine />
                        </MainTitle>
                        <Form>
                            <FName>
                                <Form.Row>
                                    <Col>
                                        <MessageBox placeholder='Name' />
                                    </Col>
                                    <Col>
                                        <MessageBox type='email' placeholder='Email' />
                                    </Col>
                                </Form.Row>
                            </FName>
                            <Message flex flexDirection='column' alignItems='center'>
                                <TextContainer>
                                    <MessageBox as='textarea' rows='4' placeholder='Write me a cool (or not so cool) message...' />
                                </TextContainer>
                            </Message>
                        </Form>
                        <SubmitArea flex flexDirection='column'>
                            <ButtonContainer >
                                <CustomButton variant='outline-secondary'>Send</CustomButton>{' '}
                            </ButtonContainer>
                        </SubmitArea>
                    </CardBox>
                )
            }
        </Composition>
    );
