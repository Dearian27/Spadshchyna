import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Background } from './components/Background';

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 8, 10], fov: 30 }}>
      <Background />
      <Experience />
    </Canvas>
  );
}

export default App;
