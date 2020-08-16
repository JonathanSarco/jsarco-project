import React from 'react';
import { Composition } from 'atomic-layout';
import { defaultTemplate, mobileTemplate, formTemplate } from './templates';
import { Form, Col, Button } from 'react-bootstrap'
import { useWindowsDimensions } from '../Hooks/useWindowsDimesions'
import { 
    Section, 
    CardBox, 
    Title, 
    DivTitle, 
    Paragraph, 
    BLine, 
    TextContainer, 
    ButtonContainer,
    MessageBox, 
} from './styles';

export const Contact = () => {
    const { height } = useWindowsDimensions();

    const CardLink = () => (
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
                                    <MessageBox as='textarea' rows='4' placeholder='Write me a cool (or not so cool) message...'/>
                                </TextContainer>
                            </Message>
                        </Form>
                        <SubmitArea flex flexDirection='column'>    
                            <ButtonContainer >
                                <Button variant='outline-secondary'>Send</Button>{' '}
                            </ButtonContainer>
                        </SubmitArea>
                    </CardBox>
                )
            }
        </Composition>

    )

    return (
        <Section id='contact' alt='Contact me' fullHeight={height}>
            <Composition areas={mobileTemplate} areasMd={defaultTemplate}>
                {({ Contact, Networks }) => (
                    <>
                        <Contact
                            flex
                            flexDirection='column'
                            justifyContent='space-between'>
                            <CardLink />
                        </Contact>
                        <Networks
                            flex
                            flexDirection='column'
                            justifyContent='space-between'>
                            <CardLink />
                        </Networks>
                    </>
                )
                }
            </Composition>
        </Section>
    )
};

