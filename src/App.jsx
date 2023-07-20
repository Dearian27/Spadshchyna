import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Background } from './components/Background';
import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { Html, SoftShadows } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 9, 8], fov: 20 }}>
        {/* <Background /> */}
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
