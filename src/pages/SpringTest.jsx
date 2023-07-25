// import { Spring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const SpringTest = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alighItems: 'center',
  }

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(50%)" },
    to: { opacity: 1, transform: "translateY(0)" },
  })

  return (
    <>
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...props, fontFamily: "Fixel"}}>
            This is the 1st screen.
          </animated.h3>
          <h3 style={{ fontFamily: "Fixel"}}>animated</h3>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...props, fontFamily: "Fixel"}}>
            This is the 2nd...
          </animated.h3>
          <h3>animated</h3>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <animated.h3 style={{...props, fontFamily: "Fixel"}}>
            So, it's the 3rd.
          </animated.h3>
          <h3>animated</h3>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
    </>
  )
}

export default SpringTest;