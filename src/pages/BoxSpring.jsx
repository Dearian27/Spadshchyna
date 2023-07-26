import { useSpring, animated } from '@react-spring/web';

const BoxSpring = () => {
  const springs = useSpring({
    from: { x: 10 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  );
};

export default BoxSpring;
