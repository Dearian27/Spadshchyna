import { Environment, Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';

import * as THREE from 'three';

export const Background = () => {
  // files={'./hdri/beach.hdr'}
  return (
    <>
      <Environment files={'./hdri/attic.hdr'} />
      <Sphere scale={[50, 50, 50]} rotation-y={Math.PI / 2}>
        <LayerMaterial lighting="physical" side={THREE.BackSide}>
          <Gradient colorA={'#d18754'} colorB={'#eeca8d'} axes={'y'} start={0} end={-0.5} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
