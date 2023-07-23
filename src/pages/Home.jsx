import { AdaptiveDpr } from "@react-three/drei";
import { Background } from "../components/Background";
import { MapScene } from "../components/MapScene";
import { Canvas } from '@react-three/fiber';

const Home = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 9, 8], fov: 30 }}
    >
      <Background />
      <MapScene />
      <AdaptiveDpr />
    </Canvas>
  )
}

export default Home;