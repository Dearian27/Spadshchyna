import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const Camera = () => {
  const cameraRef = useRef();
  const { size } = useThree();

  useEffect(() => {
    const camera = cameraRef.current;
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }, [size]);

  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = event.clientX / size.width * 2 - 1;
    mouse.current.y = -(event.clientY / size.height) * 2 + 1;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const camera = cameraRef.current;
    camera.rotation.x = mouse.current.y * 0.5;
    camera.rotation.y = mouse.current.x * 0.5;
  });

  return (
    <perspectiveCamera
      makeDefault
      ref={cameraRef}
      fov={75}
      position={[15, 15, 5]}
    />
  );
};

export default Camera;