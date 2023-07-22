import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Background } from './components/Background';
import { Html } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 9, 8], fov: 30 }}>
        <Background />
        <Experience />
        {/* <AdaptiveDpr />
        <AdaptiveEvents /> */}
      </Canvas>
    </>
  );
}

export default App;
