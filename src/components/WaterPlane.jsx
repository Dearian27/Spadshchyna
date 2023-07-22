import { Cylinder } from '@react-three/drei';

const WaterPlane = () => {
  return (
    <Cylinder receiveShadow args={[8, 8, 0.01]} position={[-0.5, 0, 0]}>
      <meshStandardMaterial attach="material" color="#3388ff" />
    </Cylinder>
  );
};

export default WaterPlane;
