import { useState, useEffect, useTransition } from "react";
import { useSpring, animated } from "react-spring";

export const Slider = ({data}) => {
  const [current, setCurrent] = useState(0);
  
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(50%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
  })
  // const props = useSpring({
  //   opacity: 1,
  //   transform: "translateY(0%)",
  // });


  const handleKeyPress = (event) => {
    setCurrent((prevCurrent) => {
      if (event.key === "ArrowDown" && prevCurrent < data.length - 1) {
        return prevCurrent + 1;
      }
      if (event.key === "ArrowUp" && prevCurrent > 0) {
        return prevCurrent - 1;
      }
      return prevCurrent;
    });
  }
  useEffect(() => {
    // Застосуємо анімацію для кожного переходу
    props.to = { opacity: 1, transform: "translateY(0)" };
  }, [current]); // Відстежуємо зміну `current`

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  },[])

  return(
    <>
    {/* <animated.h3 style={props}>{data[current]}</animated.h3> */}
    <animated.h3 style={{ ...props }}>
        {data[current]}
      </animated.h3>
    </>
  )
}