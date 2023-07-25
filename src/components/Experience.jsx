import { OrbitControls, useHelper } from '@react-three/drei';
import { Map } from './Map';
import { useRef } from 'react';
import { Statue } from './Statue';
import Boats from './Boats';
import { WaterPlane } from './WaterPlane';

export const Experience = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const lightRef3 = useRef();

  //   useHelper(lightRef1, DirectionalLightHelper);
  //   useHelper(lightRef2, DirectionalLightHelper);
  //   useHelper(lightRef3, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        ref={lightRef1}
        castShadow
        scale={3}
        position={[-5, 3, -3]}
        intensity={0.5}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        color={'#9cfffd'}
      />
      <directionalLight
        ref={lightRef2}
        scale={3}
        position={[5, 3, -2]}
        intensity={0.8}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        color={'#ff9147'}
      />
      <directionalLight
        ref={lightRef3}
        scale={3}
        position={[0, 5, 0]}
        intensity={0.4}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <Statue position={[-5.5, 0.62, -1.5]} rotation-y={180} />
      <Map />
      <Boats />
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
