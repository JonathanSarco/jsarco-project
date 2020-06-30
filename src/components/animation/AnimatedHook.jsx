import React from 'react';
import {useSpring, animated} from 'react-spring'

export const AnimatedHook = () => {
    const props = useSpring({
        opacity: 1,
        color: 'red',
        fontFamily: 'Montserrat',
        from: { opacity: 0, color: 'blue' },
      })
      return <animated.h1 style={props}>hello</animated.h1>
  }