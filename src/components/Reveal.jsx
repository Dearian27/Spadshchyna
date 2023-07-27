import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({children, width='fit-content', delay = 0.25}) => {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView])

  return (
    <div ref={ref} style={{position: 'relative', width, 
    // overflow: "hidden",
     zIndex: 100100}}>
        <motion.div
          variants={{
            hidden: {opacity: 0, x: '-100%'},
            // hidden: {opacity: 0, y: '2em'},
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
    </div>
  )
}