import React from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';

export function WaterPlane(props) {
  const { nodes, materials } = useGLTF('models/waterPlane.gltf');

  const { scale } = useSpring({
    from: {
      scale: 0,
    },
    to: [{ scale: 8 }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
  });
  return (
    <group position={[-0.5, 0.01, 0]} {...props} dispose={null}>
      <animated.group scale={scale}>
        <mesh receiveShadow geometry={nodes.Circle_1.geometry} material={materials.layer1} />
        <mesh receiveShadow geometry={nodes.Circle_2.geometry} material={materials.layer2} />
        <mesh receiveShadow geometry={nodes.Circle_3.geometry} material={materials.layer3} />
      </animated.group>
    </group>
  );
}

useGLTF.preload('models/waterPlane.gltf');
