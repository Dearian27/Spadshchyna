import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lights from '../../components/Lights';
import { Background } from '../../components/Background';
import { Eggscene } from '../../components/Eggscene';
import { useSpring, animated } from '@react-spring/three';

const KolomuyaScene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 10, 15], fov: 30 }}>
      <Background />
      <ambientLight intensity={0.4} />
      <Lights />
      <Eggscene position={[1, 0, -2]} rotation-y={(2 * Math.PI) / 6} />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={7}
        maxDistance={20}
      />
    </Canvas>
  );
};

export default KolomuyaScene;
