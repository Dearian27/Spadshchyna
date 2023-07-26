import React from 'react'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import { LazyMotion, domAnimation, motion, useAnimate, useMotionValue, useTransform } from "framer-motion"
import Box from '../components/Box';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';

export default function Framer() {
  const [animateState, setAnimateState] = useState(false);

  const startAnimation = () => {
    setAnimateState(true);
  };

  // console.log("gas",Fullpage.getActiveSection());

  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
  }
  // const x = useMotionValue(0);
  // const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  // const [scope, animate] = useAnimate()
  return (
    <>
    {/* <div style={{height: 500, width: "100%", display: 'flex', alignItems: 'start', justifyContent: "center", flexDirection: "column"}}>
      <Box />
      <motion.h3 
        initial={{translateY: '50%', opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
      >
        Hello world, Hello world!
      </motion.h3>
    </div> */}
      {/* <motion.div drag="x" style={{ x, opacity }}>fdsfds</motion.div>
      <motion.div layout>
        <div>124</div>
        <div>124</div>
        <div>124</div>
      </motion.div> 
      <div onClick={() => animate(".boxes", { opacity: 0 })}>dsada</div> */}
    <Fullpage scrollingSpeed={6000}>
      <FullpageNavigation scrollingSpeed={6000} />
      <FullPageSections scrollingSpeed={6000}>
        <FullpageSection style={SectionStyle}>
          <Reveal>
          <h3 style={{fontFamily: "Fixel"}}>
            This is the 1st screen.
          </h3>
          </Reveal>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
        <Reveal>
          <h3 style={{fontFamily: "Fixel"}}>
            This is the 1st screen.
          </h3>
          </Reveal>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
        <Reveal>
          <h3 style={{fontFamily: "Fixel"}}>
            This is the 1st screen.
          </h3>
        </Reveal>
        <Reveal delay={0.45}>
          <h2> some description</h2>
        </Reveal>
        <Reveal delay={0.60}>
          <span>Lorem ispum dolor and something like that</span>
        </Reveal>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
    </>
  )
}
