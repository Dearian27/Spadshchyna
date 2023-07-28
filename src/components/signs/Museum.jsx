import React, { useState } from 'react';
import { useCursor, useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';

export function Museum(props) {
  const { nodes, materials } = useGLTF('/models/museum.gltf');
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.route}`);
  };

  const handlePointerOver = () => {
    setHovered(true);
    props.gotoAnnotation(props.markIndex);
  };
  const handlePointerOut = () => {
    setHovered(false);
    props.gotoAnnotation(-1);
  };

  const { scale } = useSpring({
    from: {
      scale: 0,
    },
    to: [{ scale: 0.0005 }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay: props.delay || 0,
  });

  return (
    <>
      <animated.group dispose={null} position-y={0.45} scale={scale} {...props}>
        <mesh
          onPointerOut={handlePointerOut}
          onPointerOver={handlePointerOver}
          onClick={handleClick}
          castShadow
          geometry={nodes['01_2'].geometry}
          material={materials.Mat}
          position={[-0.145, 0.226, -0.471]}
          rotation={[Math.PI / 2, 0, 0]}>
          {/* <meshBasicMaterial color={"#E2CE9B"} /> */}
        </mesh>
      </animated.group>
    </>
  );
}

useGLTF.preload('/models/museum.gltf');
