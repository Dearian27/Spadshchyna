import React from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';

export function Map(props) {
  const { nodes, materials } = useGLTF('./models/map.gltf');

  const { scale } = useSpring({
    from: {
      scale: 1,
    },
    to: [{ scale: 50.404 }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
  });
  return (
    <group {...props} dispose={null}>
      <animated.group position={[-0.559, 0, -0.032]} scale={scale}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Curve_1.geometry}
          material={materials.Material}
        />
        <mesh castShadow geometry={nodes.Curve_2.geometry} material={materials['Material.001']} />
      </animated.group>
    </group>
  );
}

useGLTF.preload('./models/map.gltf');
