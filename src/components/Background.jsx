import { Environment, Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';

import * as THREE from 'three';

export const Background = () => {
  // files={'./hdri/beach.hdr'}
  return (
    <>
      <Environment files={'./hdri/sunrise.hdr'} />
      <Sphere scale={[50, 50, 50]} rotation-y={Math.PI / 2}>
        <LayerMaterial lighting="physical" side={THREE.BackSide}>
          <Gradient colorA={'#011638'} colorB={'#47CACC'} axes={'y'} start={0} end={-0.5} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
