import { OrbitControls } from '@react-three/drei';
import { Map } from './Map';
import { Statue } from './Statue';
import Boats from './Boats';
import { WaterPlane } from './WaterPlane';
import Lights from './Lights';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Lights />

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
