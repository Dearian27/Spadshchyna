import React, { useRef, useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import * as THREE from 'three';
import {useSpring, animated} from '@react-spring/three';
import styles from './museum.module.scss';

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
          {/* <Html
          as='div' // Wrapping element (default: 'div')
          wrapperClass // The className of the wrapping element (default: undefined)
          prepend // Project content behind the canvas (default: false)
          center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
          fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
          distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
          zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
          portal={domnodeRef} // Reference to target container (default=undefined)
          transform // If true, applies matrix3d transformations (default=false)
          sprite // Renders as sprite, but only in transform mode (default=false)
          // calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
          occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
          onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
          {...groupProps} // All THREE.Group props are valid
          {...divProps} // All HTMLDivElement props are valid
        >
          <h1>hello</h1>
          <p>world</p>
        </Html> */}
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
