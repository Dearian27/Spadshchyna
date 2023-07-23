import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import * as THREE from 'three';
import {useSpring, animated} from '@react-spring/three';
import styles from './components.module.scss';

export function Museum(props) {
  const [hover, setHover] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    if(hover) {
      // textRef.current.classList.add('active');
      textRef.current.classList.add(styles.active);
    } else {
      // textRef.current.classList.remove('active');
      textRef.current.classList.remove(styles.active);
    }
  }, [hover])

  const {
    posY
  } = useSpring({
    from: {
      posY: 0.5
    },
    to: [{
      posY: 1
    },{
      posY: 0.5
    },
  ],
    // config: config.stiff,
    config: {
      mass: 5,
      tension: 200,
      friction: 20
    },
    loop: true
  })
  const mY = posY.to([0, 0.5, 1, 1.5, 2], [0, 0.5, 1, 0.5, 0])

  const { nodes, materials } = useGLTF('/models/museum.gltf')
  useEffect(() => {
    // materials.Mat.color = new THREE.Color("#E2CE9B");
    // materials.Mat.transmission = 0.9;
  }, [])
  return (
    <>
      <animated.group dispose={null} scale={0.001} {...props} position-y={mY}>
        <Html 
        // distanceFactor={30}
        >
          <div ref={textRef} className={styles.hint}>
            HTML-уваґа
          </div>
        </Html>
        <mesh 
          onPointerOut={() => {setHover(false)}}
          onPointerOver={() => {setHover(true)}}
          castShadow geometry={nodes['01_2'].geometry} material={materials.Mat} position={[-0.145, 0.226, -0.471]} rotation={[Math.PI / 2, 0, 0]}>
          {/* <meshBasicMaterial color={"#E2CE9B"} /> */}
        </mesh>
      </animated.group>
    </>
  )
}

useGLTF.preload('/models/museum.gltf')
