import { Statue } from "../signs/Statue"
import { Museum } from "../signs/Museum"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export const Kolomya = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[8, 1, 0]} intensity={0.5} />
      <spotLight position={[3, 2, 3]} angle={5} penumbra={1} />
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
        scale={0.00065}
        position={[-1.3, 0.54, -1.78]}
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
    </Canvas>
  )
}