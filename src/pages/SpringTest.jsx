// import { Spring } from "@react-spring/three";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Slider } from "../components/Slider";
const data = [
  () => (
    <animated.h3 style={props}>
      hello    
    </animated.h3>
  ),
  () => (
    <animated.h3 style={props}>
      1234
    </animated.h3>
  ),
  // `Hello!`,
  // `Hi,`,
  // `React spring is bullshit`,
  // `ok...`,
]



const SpringTest = () => {

  return (
    <div>
        <Slider data={data} />
        {/* <animated.h3 style={props}>Hello</animated.h3> */}
        {/* {(props) => (<h3 style={{...props, fontFamily: "Fixel"}}>Hello</h3>)} */}
        {/* <h3 style={{fontFamily: "Fixel"}}>Hello</h3> */}
    </div>
  )
}

export default SpringTest;