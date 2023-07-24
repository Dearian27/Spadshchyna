import React from 'react';
import { Experience } from '../Experience';
import { Background } from '../Background';
import { Canvas } from '@react-three/fiber';

const MainScene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 9, 8], fov: 30 }}>
      <Background />
      <Experience />
    </Canvas>
  );
};

export default MainScene;
