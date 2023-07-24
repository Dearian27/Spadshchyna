import React from 'react';
import { Experience } from '../components/Experience';
import { Background } from '../components/Background';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

const Main = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 9, 10], fov: 30 }}>
        <Suspense fallback={null}>
          <Background />
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Main;
