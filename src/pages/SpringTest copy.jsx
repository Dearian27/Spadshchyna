// // import { Spring } from "@react-spring/three";
// import { useEffect, useRef, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import { Slider } from "../components/Slider";
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

// const data = [
//   `Hello!`,
//   `Hi,`,
//   `React spring is bullshit`,
//   `ok...`,
// ]

// const SpringTest = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const divRef = useRef();

//   const SectionStyle = {
//     height: '100vh',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alighItems: 'center',

//   }

//   const props = useSpring({
//     from: { opacity: 0, transform: "translateY(50%)" },
//     to: { opacity: 1, transform: "translateY(0)" },
//     reset: true,
//   })

//   const handleScroll = () => {
//     setCurrentSlide(() => currentSlide+1);
//     divRef.current.children[currentSlide+1].scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
//   }
//   useEffect(() => {
//     divRef.current.children[currentSlide].scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
//   }, [currentSlide])
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   },[])

//   // useEffect(() => {
//   //   console.log(divRef.current);
//   //   console.log();
//   // }, [])

//   return (
//     <>
//       <div
//       onClick={handleScroll}
//        ref={divRef}
//       style={{scrollBehavior: 'smooth', overflowY: 'hidden'}}
//       >
//         <div style={{...SectionStyle, scrollBehavior: 'smooth', scrollSnapAlign: 'center'}}>screen1</div>
//         <div style={{...SectionStyle, scrollBehavior: 'smooth', scrollSnapAlign: 'center'}}>screen2</div>
//         <div style={SectionStyle}>screen3</div>
//         <div style={SectionStyle}>screen4</div>
//       </div>
//       {/* <Fullpage>
//         <FullpageNavigation />
//         <FullPageSections>
//           <FullpageSection style={SectionStyle}>
//             <animated.h3 style={{...props, fontFamily: "Fixel"}}>
//               This is the 1st screen.
//             </animated.h3>
//           </FullpageSection>
//           <FullpageSection style={SectionStyle}>
//             <animated.h3 style={{...props, fontFamily: "Fixel"}}>
//               This is the 2nd...
//             </animated.h3>
//           </FullpageSection>
//           <FullpageSection style={SectionStyle}>
//             <animated.h3 style={{...props, fontFamily: "Fixel"}}>
//               So, it's the 3rd.
//             </animated.h3>
//           </FullpageSection>
//         </FullPageSections>
//       </Fullpage>*/}
//       {/* <Slider data={data} /> */}
//     </>
//   )
// }

// export default SpringTest;