import { OrbitControls } from '@react-three/drei';
import { Map } from '../pages/locations/Map';
import { Statue } from './Statue';
import Boats from './Boats';
import { WaterPlane } from './WaterPlane';
import Lights from './Lights';
import { Eggscene } from './Eggscene';

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Lights />
      <Statue delay={2000} position={[-5.5, 0.62, -1.5]} rotation-y={180} />
      <Statue delay={2300} position={[-4.5, 0.62, 0]} rotation-y={180} />
      <Statue delay={2600} position={[-3.5, 0.62, -1]} rotation-y={180} />
      <Statue delay={2900} position={[-2, 0.62, -2]} rotation-y={180} />
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
