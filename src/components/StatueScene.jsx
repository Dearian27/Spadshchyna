import React from 'react';
import { Statue } from './Statue';
import { Background } from './Background';
import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const StatueScene = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 6], fov: 30 }}>
        <Suspense fallback={null}>
          <Background />
          <ambientLight intensity={0.1} />
          <Statue rotation-y={180} />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default StatueScene;
