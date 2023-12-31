import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation } from 'framer-motion';

export const Portal = ({children, width='fit-content', delay = 0.25, isLoaded, bgc = "#0CFC92"}) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView 
      && isLoaded
    ) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView, isLoaded])

  return (
    <div ref={ref} style={{position: 'relative', width, 
    overflow: "hidden",
     zIndex: 100100}}>
        <motion.div
          style={{fontFamily: "Fixel"}}
          variants={{
            // hidden: {opacity: 0},
            hidden: {opacity: 0, y: '2em'},
            visible: {opacity: 1, y: 0},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            type: 'tween',
            duration: 0.75,
            delay,
          }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0},
            visible: { left: "100%"}
          }}
          initial="hidden"
          animate={slideControls}
          transition={{duration: 0.5, ease: 'easeIn'}}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: bgc,
            zIndex: 200000,
            // borderRadius: '5px',
          }}
        >
        </motion.div>
    </div>
  )
}