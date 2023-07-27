import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Boat(props) {
  const { nodes } = useGLTF('models/boat.gltf');

  const boatRef = useRef();
  const radius = 0.45;
  const amplitude = 0.01;
  let time = 0;

  useFrame((_state, delta) => {
    time += delta;
    boatRef.current.rotation.y += 0.25 * delta;

    const angle = -boatRef.current.rotation.y;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(time * 1.5) * amplitude + 0.08;

    boatRef.current.position.set(x + -0.5, y, 3.45 + z);
  });

  return (
    <group ref={boatRef} scale={0.8} {...props} dispose={null}>
      <group position={[0, 0, 0.002]} rotation={[Math.PI / 2, 0, -0.009]} scale={0.01}>
        <group position={[-0.054, -21.034, 12.288]}>
          <mesh
            castShadow
            geometry={nodes.Polygon.geometry}
            material={nodes.Polygon.material}
            position={[0.245, 24.266, -9.297]}
            rotation={[0, 0, 0.006]}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[3.554, 10.517, -6.144]}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder_1.geometry}
          material={nodes.Cylinder_1.material}
          position={[-3.5, 10.517, -6.144]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/boat.gltf');
