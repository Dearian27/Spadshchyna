import { ContactShadows, OrbitControls } from '@react-three/drei';

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, -5]} intensity={1} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
