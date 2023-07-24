import { ContactShadows, Html, OrbitControls, Shadow, Stage } from '@react-three/drei';
import { Map } from './locations/Map';
import { useEffect } from 'react';
import { useControls } from 'leva';
import { Museum } from './signs/Museum';
import { FrontSide } from 'three';
import { Statue } from './signs/Statue';
import {useNavigate} from 'react-router-dom';

export const MapScene = () => {
  const navigate = useNavigate();

  const {Mx, My, Mz, Mry, Mscale} = useControls({
    Mry: {
      min: 0,
      max: 2 * Math.PI,
      value: 0,
    },
    Mx: {
      min: -6,
      max: 6,
      value: 0
    },
    My: {
      min: -6,
      max: 6,
      value: 0
    },
    Mz: {
      min: -6,
      max: 6,
      value: 0
    },
    Mscale: {
      min: 0.0001,
      max: 0.005,
      value: 0.001
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[8, 1, 0]} intensity={0.5} />
      <spotLight position={[3, 2, 3]} angle={5} penumbra={1} />
      {/* <Stage
        environment="sunset"
        //   intensity={1}
        // shadows={{ 
        //   type: 'accumulative',
        //   color: '#d5d5d5',
        //   colorBlend: 4,
        //   opacity: 0.4
        // }}
        adjustCamera={0.7}> */}
        
        <Map />
       
        {/* <Statue 
        scale={0.08} 
        position={[Mx, My, Mz]}
        rotation={[0, Mry, 0]}
        // color="#E2CE9B"
        /> */}
        <Statue 
        scale={0.08} 
        position={[-5.8, 0.6, -1.3]}
        rotation={[0, 2.52, 0]}
        // color="#E2CE9B"
        />
        {/* <Statue 
          scale={0.08} 
          position={[-1.3, 0.54,-1.78]}
          rotation={[0, 5.52, 0]}
          // color="#E2CE9B"
        /> */}
        <Museum 
          onClick={() => {navigate('/eggs')}}
          scale={0.00065} 
          position={[-1.3, 0.54,-1.78]}
          rotation={[0, 5.52, 0]}
          color="#E2CE9B"
        />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={7}
        maxDistance={15}
      />
        {/* </Stage> */}
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
