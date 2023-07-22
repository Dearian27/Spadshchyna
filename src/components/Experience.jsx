import {
  ContactShadows,
  Html,
  OrbitControls,
  Plane,
  Stage,
  Stars,
  useHelper,
} from '@react-three/drei';
import { Map } from './Map';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

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
      {/* <Stage
        environment="sunset"
        //   intensity={1}
        //   shadows={{ type: 'accumulative', color: '#d5d5d5', colorBlend: 3, opacity: 0.4 }}
        adjustCamera={0.7}> */}
      <Map />
      <Plane
        receiveShadow // highlight- line
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        args={[15, 15]}>
        <meshStandardMaterial attach="material" color="red" />
      </Plane>

      {/* </Stage> */}
      {/* <ContactShadows scale={50} opacity={0.32} /> */}
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
