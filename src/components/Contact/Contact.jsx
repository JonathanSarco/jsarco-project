import React from 'react';
import { Composition } from 'atomic-layout';
import { defaultTemplate, mobileTemplate } from './templates';
import { useWindowsDimensions } from '../Hooks/useWindowsDimesions'
import { Section } from './styles';
import { OForm } from './organism/OForm';

export const Contact = () => {
    const { height } = useWindowsDimensions();

    return (
        <Section id='contact' alt='Contact me' fullHeight={height}>
            <Composition areas={mobileTemplate} areasMd={defaultTemplate}>
                {({ Contact, Networks }) => (
                    <>
                        <Contact
                            flex
                            flexDirection='column'
                            justifyContent='space-between'>
                            <OForm />
                        </Contact>
                        <Networks
                            flex
                            flexDirection='column'
                            justifyContent='space-between'>
                            <OForm />
                        </Networks>
                    </>
                )
                }
            </Composition>
        </Section>
    )
};

