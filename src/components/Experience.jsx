import { ContactShadows, OrbitControls, Stage } from '@react-three/drei';
import { Map } from './Map';

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[4, 5, 15]} intensity={1} />

      <Stage>
        <Map />
      </Stage>

      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
