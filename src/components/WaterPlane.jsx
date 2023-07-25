import React from 'react';
import { useGLTF } from '@react-three/drei';

export function WaterPlane(props) {
  const { nodes, materials } = useGLTF('models/waterPlane.gltf');
  return (
    <group position={[-0.5, 0.01, 0]} {...props} dispose={null}>
      <group scale={8}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials.layer1} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials.layer2} />
        <mesh geometry={nodes.Circle_3.geometry} material={materials.layer3} />
      </group>
    </group>
  );
}

useGLTF.preload('models/waterPlane.gltf');
