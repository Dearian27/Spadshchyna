import React from 'react';
import { useCursor, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/three';
import { useState } from 'react';

export function Statue(props) {
  const { scale } = useSpring({
    from: {
      scale: 0,
    },
    to: [{ scale: 0.1 }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay: props.delay || 0,
  });

  const { nodes, materials } = useGLTF('/models/statue.gltf');
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

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

  return (
    <animated.group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
      {...props}
      dispose={null}
      scale={scale}>
      <group position={[-0.012, 1.28, -0.182]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow geometry={nodes.Oleg01.geometry} material={materials.Glass} />
        <mesh castShadow geometry={nodes.Oleg01_1.geometry} material={materials.Glass} />
      </group>
      <mesh
        castShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Glass}
        position={[0.05, -3.14, 0.019]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Glass}
        position={[-0.004, 4.615, -0.16]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </animated.group>
  );
}

useGLTF.preload('models/statue.gltf');
