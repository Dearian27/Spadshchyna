import { OrbitControls, useHelper } from '@react-three/drei';
import { Map } from './Map';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import WaterPlane from './WaterPlane';

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
        position={[5, 2, -2]}
        intensity={0.5}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <Map />
      <WaterPlane />

      <OrbitControls
      //   makeDefault
      //   minPolarAngle={0}
      //   maxPolarAngle={Math.PI / 3}
      //   minDistance={17}
      //   maxDistance={30}
      />

      {/* <Plane
        receiveShadow // highlight- line
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        args={[15, 15]}>
        <meshStandardMaterial attach="material" color="red" />
      </Plane> */}
    </>
  );
};
