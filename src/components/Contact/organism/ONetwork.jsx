import React from 'react';
import { Composition } from 'atomic-layout';
import { networkTemplate } from '../templates';

import {
    CardBox,
    Title,
    DivTitle,
    Paragraph,
    NetContainer,
    CustomImage
} from '../styles';

export const ONetwork = () => {

    const icons = [
        { id: '1', imageUrl: require('../../../images/twitter-icon.svg'), link: 'https://twitter.com/JonySar90', color: ''},
        { id: '2', imageUrl: require('../../../images/linkedin-icon.svg'), link: 'https://www.linkedin.com/in/jonathan-sarco/', color: '' },
        { id: '3', imageUrl: require('../../../images/github-icon.svg'), link: 'https://github.com/JonathanSarco', color: 'white' },
    ];

    const ListImages = () =>
    (
        icons.map( (image) => (
            <NetContainer key={image.key}>
                <a href={image.link} rel='noopener noreferrer' target='_blank'>
                    <CustomImage src={image.imageUrl} roundedCircle color={image.color}/>
                </a>
            </NetContainer>
        )
        ));

    return (
        <Composition
            areas={networkTemplate}
            gap={10}
            gutter={50}
            justifyContent='center'>
            {
                ({ MainTitle, Message, Network }) => (
                    <CardBox>
                        <MainTitle flex flexDirection='column' alignItems='center'>
                            <DivTitle>
                                <Title color='white'>Social&nbsp;</Title>
                                <Title color='rgb(225, 106, 106)'>media</Title>
                            </DivTitle>
                           
                        </MainTitle>
                        <Message>
                            <Paragraph> I know! You don't want to send an email before know me a little bit... </Paragraph>
                        </Message>

                        <Network flex justifyItems='center'>
                            <ListImages />
                        </Network>
                    </CardBox>
                )
            }
        </Composition>
    );
}
