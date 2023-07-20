import { ContactShadows, OrbitControls, Shadow, Stage } from '@react-three/drei';
import { Map } from './Map';
import { useEffect } from 'react';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[8, 1, 0]} intensity={0.5} />
      {/* <spotLight position={[3, 2, 3]} angle={5} penumbra={1} castShadow /> */}
      <Stage
        environment="sunset"
        //   intensity={1}
        shadows={{ type: 'accumulative', color: '#d5d5d5', colorBlend: 4, opacity: 0.4 }}
        adjustCamera={0.7}>
        <Map />
      </Stage>
      <ContactShadows scale={30} opacity={0.32} />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={20}
        maxDistance={25}
      />
      ;
      {/* <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={0.0001}
      /> */}
    </>
  );
};
