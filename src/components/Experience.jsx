import { Html, OrbitControls } from '@react-three/drei';
import { Map } from '../pages/locations/Map';
import { Museum } from './signs/Museum';
import Boats from './Boats';
import { WaterPlane } from './WaterPlane';
import Lights from './Lights';
import { useState } from 'react';
import annotations from '../assets/annotations.json';

function Annotations({ selected, gotoAnnotation }) {
  return (
    <>
      {annotations.map((a, i) => {
        return (
          <Html key={i} position={[a.markPos.x, a.markPos.y, a.markPos.z]}>
            {a.description && i === selected && (
              <div
                id={'desc_' + i}
                className="annotationDescription"
                dangerouslySetInnerHTML={{ __html: a.description }}
              />
            )}
          </Html>
        );
      })}
    </>
  );
}

export const Experience = () => {
  const [selected, setSelected] = useState(-1);

  function gotoAnnotation(idx) {
    setSelected(idx);
  }
  const handlePointerDown = (idx) => {
    setSelected(idx);
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <Lights />
      {annotations.map((item, index) => {
        return (
          <Museum
            markIndex={index}
            gotoAnnotation={gotoAnnotation}
            selected={selected}
            key={index}
            delay={item.delay}
            position={[item.markPos.x, item.markPos.y, item.markPos.z]}
            rotation-y={item.markRotation}
            route={item.route}
          />
        );
      })}

      <Annotations selected={selected} gotoAnnotation={gotoAnnotation} />
      <Map />
      <Boats />
      <WaterPlane />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={17}
        maxDistance={30}
        enablePan={false}
      />
    </>
  );
};
