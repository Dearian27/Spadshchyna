import React from 'react';
import { Boat } from './Boat';

const Boats = () => {
  return (
    <>
      <Boat position={[-0.7, 0.1, 3.6]} />
      <Boat position={[-0.7, 0.1, 3.4]} rotation-y={3.06} />
    </>
  );
};

export default Boats;
