import React from 'react';
import { Composition } from 'atomic-layout';

import { defaultTemplate, mobileTemplate } from './templates';
import { Section } from './styles';
import { OForm } from './organism/OForm';
import { ONetwork } from './organism/ONetwork';

export const Contact = () => {

    return (
        <Section id='contact' alt='Contact me' >
            <Composition areas={mobileTemplate} areasMd={defaultTemplate} justifyItems='center'>
                {({ Contact, Networks }) => (
                    <>
                        <Contact
                            flex
                            flexDirection='column'
                            justifyContent='center'
                            >
                            <OForm />
                        </Contact>
                        <Networks
                            flex
                            flexDirection='column'
                            justifyContent='center'
                            >
                            <ONetwork />
                        </Networks>
                    </>
                )
                }
            </Composition>
        </Section>
    )
};

