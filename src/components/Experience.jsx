import { ContactShadows, OrbitControls, Shadow, Stage } from '@react-three/drei';
import { Map } from './Map';
import { useEffect } from 'react';
import { Museum } from './Museum';
import { useControls } from 'leva';

export const Experience = () => {

  const {Mx, My, Mz, Mry, Mscale} = useControls({
    Mry: {
      min: 0,
      max: 2 * Math.PI,
      value: 0,
    },
    Mx: {
      min: -3,
      max: 3,
      value: 0
    },
    My: {
      min: -3,
      max: 3,
      value: 0
    },
    Mz: {
      min: -3,
      max: 3,
      value: 0
    },
    Mscale: {
      min: 0.001,
      max: 2,
      value: 0.01
    }
  })
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[8, 1, 0]} intensity={0.5} />
      {/* <spotLight position={[3, 2, 3]} angle={5} penumbra={1} castShadow /> */}
      <Stage
        environment="sunset"
        //   intensity={1}
        shadows={{ 
          type: 'accumulative',
          color: '#d5d5d5',
          colorBlend: 4,
          opacity: 0.4
        }}
        adjustCamera={0.7}>
        
        <Map />
        <Museum 
        scale={Mscale} 
        position={[Mx, My, Mz]}
        rotation={[0, Mry, 0]}
        // color="E2CE9B"
        />

      </Stage>
      {/* <ContactShadows scale={30} opacity={0.32} /> */}
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={20}
        maxDistance={25}
      />
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
