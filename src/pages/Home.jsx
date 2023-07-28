import React from 'react';
import { Experience } from '../components/Experience';
import { Background } from '../components/Background';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 13, 20], fov: 30 }}>
        <Suspense fallback={null}>
          <Background />
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
