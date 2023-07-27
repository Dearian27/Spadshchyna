import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import Lights from '../../components/Lights';
import { Background } from '../../components/Background';
import { Eggscene } from '../../components/Eggscene';
import Framer from '../Framer';

const KolomuyaScene = () => {
  return (
    <>
      <Framer>
        <div style={{ position: 'fixed', height: '100vh', width: '100%' }}>
          <Canvas shadows camera={{ position: [0, 7, 15], fov: 30 }}>
            <Background />
            <ambientLight intensity={0.4} />
            <OrbitControls
            //   enableZoom={false}
            //   makeDefault
            //   minPolarAngle={Math.PI / 3}
            //   maxPolarAngle={Math.PI / 3}
            />
            <Lights />
            <Eggscene position={[5, 0, -2]} rotation-y={(2 * Math.PI) / 6} />
          </Canvas>
        </div>
      </Framer>
    </>
  );
};

export default KolomuyaScene;
