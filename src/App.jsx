import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 30 }}>
      <color attach="background" args={['#ececec']} />
      <Experience />
    </Canvas>
  );
}

export default App;
