// import { Spring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated, config } from 'react-spring';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const SpringTest = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alighItems: 'center',
  }

  const springs = useSpring({
    from: { opacity: 1, transform: "translateY(50%)" },
    to: [{ opacity: 1, transform: "translateY(0)" }],
  })
  // const [springs, api] = useSpring(() => ({
  //   from: { opacity: 0 },
  // }))
  // const handleClick = () => {
    //   console.log('start')
    //   api.start({
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   })
      // }
      
  const handleClick = () => {}
  return (
    <>
    <h3 onClick={() => handleClick()} style={{ fontFamily: "Fixel"}}>
      Start
    </h3>
    <animated.h3 style={{...springs
    // , fontFamily: "Fixel"
    }}>
      This is the 1st screen.
    </animated.h3>
    {/* <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...springs , fontFamily: "Fixel"}}>
            This is the 1st screen.
          </animated.h3>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...springs , fontFamily: "Fixel"}}>
            This is the 2nd...
          </animated.h3>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...springs , fontFamily: "Fixel"}}>
            So, it's the 3rd.
          </animated.h3>
        </FullpageSection>
      </FullPageSections>
    </Fullpage> */}
    </>
  )
}

export default SpringTest;