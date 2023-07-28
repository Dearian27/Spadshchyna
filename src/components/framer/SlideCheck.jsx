import React, {useEffect, useRef} from 'react';
import { useInView } from 'framer-motion';

export const SlideCheck = ({index, setCurrentScreen}) => {
  const ref = useRef();
  const isInView = useInView(ref);
  useEffect(() => {
    if(isInView) {
      setCurrentScreen(index);
    }
  }, [isInView])

  return (
    <div style={{position: 'absolute'}} ref={ref}></div>
  )
}