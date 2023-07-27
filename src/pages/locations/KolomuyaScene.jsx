import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lights from '../../components/Lights';
import { Background } from '../../components/Background';
import { Eggscene } from '../../components/Eggscene';
import { useSpring, animated } from '@react-spring/three';
import Framer from '../Framer';

const KolomuyaScene = () => {
  return (
    <>
      <Framer>
        <div style={{ position: 'fixed', height: '100vh', width: '100%' }}>
          <Canvas shadows camera={{ position: [0, 10, 15], fov: 30 }}>
            <Background />
            <ambientLight intensity={0.4} />
            <Lights />

            <OrbitControls
              enableZoom={false}
              makeDefault
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 3}
              // minDistance={7}
              // maxDistance={20}
            />
            {/* <PointerLockControls /> */}
            <Eggscene position={[1, 0, -2]} rotation-y={(2 * Math.PI) / 6} />
          </Canvas>
        </div>
      </Framer>
    </>
  );
};

export default KolomuyaScene;
