import { OrbitControls, useHelper } from '@react-three/drei';
import { Map } from './Map';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import WaterPlane from './WaterPlane';
import { Statue } from './Statue';

export const Experience = () => {
  const lightRef = useRef();

  useHelper(lightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        ref={lightRef}
        castShadow
        scale={3}
        position={[5, 3.5, -2]}
        intensity={0.5}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <Statue position={[-5.5, 0.62, -1.5]} rotation-y={180} />
      <Map />
      <WaterPlane />

      <OrbitControls
      //   makeDefault
      //   minPolarAngle={0}
      //   maxPolarAngle={Math.PI / 3}
      //   minDistance={17}
      //   maxDistance={30}
      />
    </>
  );
};
