import React, { useRef } from 'react';
import { PlaneGeometry, MeshLambertMaterial, extend } from 'three';
import { useTweaks } from 'use-tweaks';
import { useFrame } from '@react-three/fiber';

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ PlaneGeometry });

const WaterPlane = () => {
  const meshRef = useRef();

  const { rows, columns } = useTweaks('Water Settings', {
    rows: 15,
    columns: 15,
  });

  // Create a plane geometry
  const geometry = new PlaneGeometry(50, 50, rows, columns);
  geometry.rotateX(-Math.PI * 0.5);

  // Define the vertex data
  let vertData = [];
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    vertData.push({
      initH: geometry.attributes.position.getY(i),
      amplitude: Math.random() * 2 - 1,
      phase: Math.random() * Math.PI,
    });
  }

  // Create a mesh material
  const material = new MeshLambertMaterial({ color: 'aqua' });

  // Set up the animation loop
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    vertData.forEach((vd, idx) => {
      let y = vd.initH + Math.sin(time + vd.phase) * vd.amplitude;
      geometry.attributes.position.setY(idx, y);
    });

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} material={material}>
      <planeGeometry args={[50, 50, rows, columns]} />
      <meshLambertMaterial color="aqua" />
    </mesh>
  );
};

export default WaterPlane;
