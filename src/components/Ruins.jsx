import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three';

export function Ruins(props) {
  const { mapScale } = useSpring({
    from: {
      mapScale: 0
    },
    to: [{ 
      mapScale: 1,
     }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay: 0,
  });
  const { blocksScale, blocksPosY } = useSpring({
    from: {
      blocksScale: 0,
      blocksPosY: -1,
    },
    to: [{ 
      blocksScale: 0.035,
      blocksPosY: -0.064
     }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay:  3000,
  });
  const { wallScale, wallPosY, sweepPosY } = useSpring({
    from: {
      wallScale: 0,
      wallPosY: 0,
      sweepPosY: 0,
    },
    to: [{ 
      wallScale: 0.035,
      wallPosY: 0.34,
      sweepPosY: 0.217,
     }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay:  3000,
  });
  const { columnScaleY } = useSpring({
    from: {
      columnScaleY: 0,
    },
    to: [{ 
      columnScaleY: 0.035,
     }],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    delay:  3500,
  });

  const { nodes, materials } = useGLTF('/models/ruins.gltf')
  return (
    <animated.group {...props} dispose={null} scale={mapScale}>
      <animated.group position={[-6.934, -0.064, -1.868]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} position-y={blocksPosY} scale={blocksScale}>
        <group position={[5.521, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4.geometry} material={materials['Material.007']} position={[2.553, -2.575, 2.456]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5.geometry} material={materials['Material.007']} position={[-4.673, -2.351, 2.515]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57.geometry} material={materials['Material.007']} position={[-2.541, 2.582, 2.454]} />
          <mesh geometry={nodes.Cube_58.geometry} material={materials['Material.007']} position={[4.673, 2.351, 2.515]} />
          <mesh geometry={nodes.Cube_59.geometry} material={materials['Material.007']} position={[2.512, 2.426, -2.148]} />
          <mesh geometry={nodes.Cube_6.geometry} material={materials['Material.007']} position={[-2.512, -2.426, -2.148]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60.geometry} material={materials['Material.007']} position={[-4.644, 2.203, -1.984]} />
          <mesh geometry={nodes.Cube_7.geometry} material={materials['Material.007']} position={[4.644, -2.203, -1.984]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-8.735, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-22.991, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_2.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_2.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_2.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_2.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_2.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_2.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_2.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_2.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-37.247, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_3.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_3.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_3.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_3.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_3.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_3.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_3.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_3.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-51.503, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_4.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_4.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_4.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_4.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_4.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_4.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_4.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_4.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-65.759, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_5.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_5.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_5.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_5.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_5.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_5.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_5.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_5.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-80.015, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_6.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_6.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_6.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_6.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_6.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_6.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_6.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_6.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-94.271, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_7.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_7.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_7.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_7.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_7.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_7.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_7.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_7.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-108.527, 128.824, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_8.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_8.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_8.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_8.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_8.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_6_instance_8.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_8.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_7_instance_8.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
      </animated.group>
      <animated.group position={[2.41, -0.064, -1.154]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} position-y={blocksPosY} scale={blocksScale}>
        <group rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_2.geometry} material={materials['Material.007']} position={[2.553, -2.575, 2.456]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_2.geometry} material={materials['Material.007']} position={[-2.541, 2.582, 2.454]} />
          <mesh geometry={nodes.Cube_58_2.geometry} material={materials['Material.007']} position={[4.673, 2.351, 2.515]} />
          <mesh geometry={nodes.Cube_59_2.geometry} material={materials['Material.007']} position={[2.512, 2.426, -2.148]} />
          <mesh geometry={nodes.Cube_5_2.geometry} material={materials['Material.007']} position={[-4.673, -2.351, 2.515]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_2.geometry} material={materials['Material.007']} position={[-4.644, 2.203, -1.984]} />
          <mesh geometry={nodes.Cube_6_2.geometry} material={materials['Material.007']} position={[-2.512, -2.426, -2.148]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_2.geometry} material={materials['Material.007']} position={[4.644, -2.203, -1.984]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-14.256, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_9.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_9.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_9.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_9.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_9.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_9.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_9.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_9.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-28.512, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_10.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_10.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_10.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_10.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_10.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_10.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_10.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_10.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-42.768, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_11.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_11.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_11.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_11.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_11.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_11.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_11.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_11.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-57.024, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_12.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_12.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_12.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_12.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_12.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_12.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_12.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_12.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-71.28, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_13.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_13.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_13.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_13.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_13.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_13.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_13.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_13.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-85.536, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_14.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_14.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_14.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_14.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_14.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_14.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_14.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_14.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-99.792, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_15.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_15.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_15.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_15.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_15.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_15.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_15.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_15.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-114.048, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_16.geometry} material={materials['Material.007']} position={[2.635, -2.621, 2.331]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_16.geometry} material={materials['Material.007']} position={[-2.634, 2.612, 2.325]} />
          <mesh geometry={nodes.Cube_58_instance_16.geometry} material={materials['Material.007']} position={[4.649, 2.606, 2.223]} />
          <mesh geometry={nodes.Cube_59_instance_16.geometry} material={materials['Material.007']} position={[2.43, 2.464, -2.278]} />
          <mesh geometry={nodes.Cube_5_instance_16.geometry} material={materials['Material.007']} position={[-4.649, -2.627, 2.223]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_16.geometry} material={materials['Material.007']} position={[-4.668, 2.458, -2.276]} />
          <mesh geometry={nodes.Cube_6_instance_16.geometry} material={materials['Material.007']} position={[-2.43, -2.473, -2.273]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_16.geometry} material={materials['Material.007']} position={[4.668, -2.478, -2.275]} rotation={[0, 0, Math.PI]} />
        </group>
      </animated.group>
      <animated.group position={[1.91, -0.064, -3.058]} rotation={[Math.PI / 2, 0, 0]} position-y={blocksPosY} scale={blocksScale}>
        <group rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_3.geometry} material={materials['Material.007']} position={[2.553, -2.575, 2.456]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_3.geometry} material={materials['Material.007']} position={[-2.541, 2.582, 2.454]} />
          <mesh geometry={nodes.Cube_58_3.geometry} material={materials['Material.007']} position={[4.673, 2.351, 2.515]} />
          <mesh geometry={nodes.Cube_59_3.geometry} material={materials['Material.007']} position={[2.512, 2.426, -2.148]} />
          <mesh geometry={nodes.Cube_5_3.geometry} material={materials['Material.007']} position={[-4.673, -2.351, 2.515]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_3.geometry} material={materials['Material.007']} position={[-4.644, 2.203, -1.984]} />
          <mesh geometry={nodes.Cube_6_3.geometry} material={materials['Material.007']} position={[-2.512, -2.426, -2.148]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_3.geometry} material={materials['Material.007']} position={[4.644, -2.203, -1.984]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-14.256, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_17.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_17.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_17.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_17.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_17.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_17.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_17.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_17.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-28.512, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_18.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_18.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_18.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_18.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_18.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_18.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_18.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_18.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-42.768, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_19.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_19.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_19.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_19.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_19.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_19.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_19.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_19.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-57.024, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_20.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_20.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_20.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_20.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_20.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_20.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_20.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_20.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-71.28, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_21.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_21.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_21.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_21.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_21.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_21.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_21.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_21.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-85.536, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_22.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_22.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_22.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_22.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_22.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_22.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_22.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_22.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-99.792, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_23.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_23.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_23.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_23.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_23.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_23.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_23.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_23.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
        <group position={[-114.048, 0, 0]} rotation={[0, 0, -0.035]}>
          <mesh geometry={nodes.Cube_4_instance_24.geometry} material={materials['Material.007']} position={[2.63, -2.621, 2.33]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_57_instance_24.geometry} material={materials['Material.007']} position={[-2.63, 2.612, 2.327]} />
          <mesh geometry={nodes.Cube_58_instance_24.geometry} material={materials['Material.007']} position={[4.659, 2.606, 2.214]} />
          <mesh geometry={nodes.Cube_59_instance_24.geometry} material={materials['Material.007']} position={[2.434, 2.464, -2.277]} />
          <mesh geometry={nodes.Cube_5_instance_24.geometry} material={materials['Material.007']} position={[-4.659, -2.627, 2.233]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_60_instance_24.geometry} material={materials['Material.007']} position={[-4.658, 2.458, -2.285]} />
          <mesh geometry={nodes.Cube_6_instance_24.geometry} material={materials['Material.007']} position={[-2.434, -2.473, -2.274]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_24.geometry} material={materials['Material.007']} position={[4.658, -2.478, -2.266]} rotation={[0, 0, Math.PI]} />
        </group>
      </animated.group>
      <animated.group position={[-1.008, -0.227, 1.732]} rotation={[Math.PI / 2, 0, 0]} scale={0.035}>
        <mesh geometry={nodes.Cube_3_0_instance.geometry} material={materials['Material.007']} position={[0, 15.386, -0.196]} />
      </animated.group>
      <animated.group position={[0.043, 0.34, 2.997]} rotation={[Math.PI / 2, 0, 0]} position-y={wallPosY} scale={wallScale}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.007']} position={[-32.476, 4.559, -14.376]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_10.geometry} material={materials['Material.007']} position={[-31.518, 4.174, 9.406]} />
        <mesh geometry={nodes.Cube_11.geometry} material={materials['Material.007']} position={[-34.412, 4.603, 14.098]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_12.geometry} material={materials['Material.007']} position={[-28.48, 4.759, 14.453]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_13.geometry} material={materials['Material.007']} position={[-34.412, 4.603, 4.57]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_14.geometry} material={materials['Material.007']} position={[-30.234, 4.317, 4.924]} />
        <mesh geometry={nodes.Cube_15.geometry} material={materials['Material.007']} position={[-32.042, -0.782, 8.919]} />
        <mesh geometry={nodes.Cube_16.geometry} material={materials['Material.007']} position={[-29.817, -0.886, 3.97]} />
        <mesh geometry={nodes.Cube_17.geometry} material={materials['Material.007']} position={[-33.873, -1.058, 4.324]} />
        <mesh geometry={nodes.Cube_18.geometry} material={materials['Material.007']} position={[-32.198, -0.864, -0.706]} />
        <mesh geometry={nodes.Cube_19.geometry} material={materials['Material.007']} position={[-53.481, -0.886, -5.55]} />
        <mesh geometry={nodes.Cube_20.geometry} material={materials['Material.007']} position={[-57.777, -0.768, -5.196]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_21.geometry} material={materials['Material.007']} position={[-55.38, -0.493, -10.306]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_22.geometry} material={materials['Material.007']} position={[20.724, -0.832, -15.718]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_23.geometry} material={materials['Material.007']} position={[-29.817, -0.886, -5.55]} />
        <mesh geometry={nodes.Cube_24.geometry} material={materials['Material.007']} position={[-34.112, -0.768, -5.196]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_25.geometry} material={materials['Material.007']} position={[-31.715, -0.493, -10.306]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_26.geometry} material={materials['Material.007']} position={[-1.552, -0.269, -15.232]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_27.geometry} material={materials['Material.007']} position={[-9.217, -0.864, 14.018]} />
        <mesh geometry={nodes.Cube_28.geometry} material={materials['Material.007']} position={[-1.957, -1.058, 14.076]} />
        <mesh geometry={nodes.Cube_29.geometry} material={materials['Material.007']} position={[7.99, -0.697, 14.004]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_30.geometry} material={materials['Material.007']} position={[25.456, -0.78, 13.679]} />
        <mesh geometry={nodes.Cube_31.geometry} material={materials['Material.007']} position={[18.371, -0.368, 13.788]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_32.geometry} material={materials['Material.007']} position={[35.432, -0.878, 13.738]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_33.geometry} material={materials['Material.007']} position={[-4.615, -1.026, -10.089]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_33_2.geometry} material={materials['Material.007']} position={[-18.637, -0.93, 9.35]} />
        <mesh geometry={nodes.Cube_34.geometry} material={materials['Material.007']} position={[-16.954, -1.105, -10.163]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_34_2.geometry} material={materials['Material.007']} position={[-4.153, -1.012, 9.414]} />
        <mesh geometry={nodes.Cube_35.geometry} material={materials['Material.007']} position={[-12.418, -1.128, -10.163]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube_35_2.geometry} material={materials['Material.007']} position={[-11.274, -1.206, 9.577]} />
        <mesh geometry={nodes.Cube_36.geometry} material={materials['Material.007']} position={[-23.372, -1.021, -10.014]} />
        <mesh geometry={nodes.Cube_36_2.geometry} material={materials['Material.007']} position={[-25.691, -1.035, 9.33]} />
        <mesh geometry={nodes.Cube_37.geometry} material={materials['Material.007']} position={[33.388, -1.024, 8.369]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_37_2.geometry} material={materials['Material.007']} position={[-8.52, -1.024, 4.481]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_38.geometry} material={materials['Material.007']} position={[18.904, -0.942, 8.433]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_38_2.geometry} material={materials['Material.007']} position={[-23.003, -0.942, 4.545]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_39.geometry} material={materials['Material.007']} position={[26.026, -0.748, 8.596]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_39_2.geometry} material={materials['Material.007']} position={[-15.882, -0.748, 4.708]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_40.geometry} material={materials['Material.007']} position={[40.443, -0.92, 8.734]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_40_2.geometry} material={materials['Material.007']} position={[-1.465, -0.92, 4.461]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_41.geometry} material={materials['Material.007']} position={[-22.685, -0.93, -5.217]} />
        <mesh geometry={nodes.Cube_41_2.geometry} material={materials['Material.007']} position={[-18.498, -0.93, -0.334]} />
        <mesh geometry={nodes.Cube_42.geometry} material={materials['Material.007']} position={[-11.981, -1.012, -5.105]} />
        <mesh geometry={nodes.Cube_42_2.geometry} material={materials['Material.007']} position={[-4.014, -1.012, -0.27]} />
        <mesh geometry={nodes.Cube_43.geometry} material={materials['Material.007']} position={[23.41, -0.93, 3.554]} />
        <mesh geometry={nodes.Cube_43_2.geometry} material={materials['Material.007']} position={[-11.136, -1.206, -0.107]} />
        <mesh geometry={nodes.Cube_44.geometry} material={materials['Material.007']} position={[-3.419, -1.141, -5.076]} />
        <mesh geometry={nodes.Cube_44_2.geometry} material={materials['Material.007']} position={[-25.553, -1.035, -0.354]} />
        <mesh geometry={nodes.Cube_45.geometry} material={materials['Material.007']} position={[33.228, -1.012, 3.618]} />
        <mesh geometry={nodes.Cube_46.geometry} material={materials['Material.007']} position={[21.957, -1.128, -10.607]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube_47.geometry} material={materials['Material.007']} position={[16.355, -1.035, 3.534]} />
        <mesh geometry={nodes.Cube_48.geometry} material={materials['Material.007']} position={[19.223, -0.93, -1.328]} />
        <mesh geometry={nodes.Cube_49.geometry} material={materials['Material.007']} position={[29.944, -1.021, -1.219]} />
        <mesh geometry={nodes.Cube_4_4.geometry} material={materials['Material.007']} position={[-55.706, -0.782, 8.919]} />
        <mesh geometry={nodes.Cube_4_5.geometry} material={materials['Material.007']} position={[-48.221, -0.782, 13.928]} />
        <mesh geometry={nodes.Cube_50.geometry} material={materials['Material.007']} position={[37.813, -1.109, -1.209]} />
        <mesh geometry={nodes.Cube_51.geometry} material={materials['Material.007']} position={[37.292, -1.024, -6.097]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_52.geometry} material={materials['Material.007']} position={[24.605, -1.11, -5.724]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_53.geometry} material={materials['Material.007']} position={[29.508, -1.087, -5.717]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube_54.geometry} material={materials['Material.007']} position={[18.533, -1.012, -6.137]} />
        <mesh geometry={nodes.Cube_55.geometry} material={materials['Material.007']} position={[29.261, -0.93, -10.579]} />
        <mesh geometry={nodes.Cube_56.geometry} material={materials['Material.007']} position={[17.373, -1.123, -10.591]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_57_4.geometry} material={materials['Material.007']} position={[41.162, 3.731, 14.018]} />
        <mesh geometry={nodes.Cube_58_4.geometry} material={materials['Material.007']} position={[48.422, 3.537, 14.076]} />
        <mesh geometry={nodes.Cube_59_4.geometry} material={materials['Material.007']} position={[46.227, 3.582, 9.414]} />
        <mesh geometry={nodes.Cube_5_4.geometry} material={materials['Material.007']} position={[-59.568, -1.058, 14.076]} />
        <mesh geometry={nodes.Cube_60_4.geometry} material={materials['Material.007']} position={[39.105, 3.388, 9.577]} />
        <mesh geometry={nodes.Cube_61.geometry} material={materials['Material.007']} position={[41.86, 3.57, 4.481]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_62.geometry} material={materials['Material.007']} position={[48.914, 3.675, 4.461]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_63.geometry} material={materials['Material.007']} position={[46.365, 3.582, -0.27]} />
        <mesh geometry={nodes.Cube_64.geometry} material={materials['Material.007']} position={[39.224, 3.678, -0.107]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_65.geometry} material={materials['Material.007']} position={[42.867, -0.92, 13.502]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_66.geometry} material={materials['Material.007']} position={[40.977, 3.57, -5.247]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_67.geometry} material={materials['Material.007']} position={[48.305, 3.756, -5.097]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_68.geometry} material={materials['Material.007']} position={[-8.812, -0.075, -15.174]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_69.geometry} material={materials['Material.007']} position={[-18.759, -0.776, -15.246]} />
        <mesh geometry={nodes.Cube_6_4.geometry} material={materials['Material.007']} position={[-57.538, -1.058, 4.324]} />
        <mesh geometry={nodes.Cube_6_5.geometry} material={materials['Material.007']} position={[-40.858, -1.058, 14.155]} />
        <mesh geometry={nodes.Cube_70.geometry} material={materials['Material.007']} position={[-36.227, -0.351, -15.182]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_71.geometry} material={materials['Material.007']} position={[-29.18, -0.747, -15.152]} />
        <mesh geometry={nodes.Cube_72.geometry} material={materials['Material.007']} position={[-46.05, -0.93, -13.556]} />
        <mesh geometry={nodes.Cube_72_2.geometry} material={materials['Material.007']} position={[-18.498, -0.93, -20.164]} />
        <mesh geometry={nodes.Cube_73.geometry} material={materials['Material.007']} position={[-4.014, -1.012, -20.1]} />
        <mesh geometry={nodes.Cube_74.geometry} material={materials['Material.007']} position={[-11.136, -1.206, -19.937]} />
        <mesh geometry={nodes.Cube_75.geometry} material={materials['Material.007']} position={[-25.553, -1.035, -20.265]} />
        <mesh geometry={nodes.Cube_76.geometry} material={materials['Material.007']} position={[19.223, -0.93, -20.084]} />
        <mesh geometry={nodes.Cube_77.geometry} material={materials['Material.007']} position={[12.208, -0.917, -19.937]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_78.geometry} material={materials['Material.007']} position={[5.246, -0.09, -19.879]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_79.geometry} material={materials['Material.007']} position={[49.898, -1.024, 13.768]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_7_4.geometry} material={materials['Material.007']} position={[-53.441, -0.903, 3.958]} />
        <mesh geometry={nodes.Cube_7_5.geometry} material={materials['Material.007']} position={[-55.235, -0.903, 13.896]} />
        <mesh geometry={nodes.Cube_80.geometry} material={materials['Material.007']} position={[47.502, -1.021, 8.803]} />
        <mesh geometry={nodes.Cube_81.geometry} material={materials['Material.007']} position={[42.818, -0.942, 3.618]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_82.geometry} material={materials['Material.007']} position={[52.699, -1.012, 3.704]} />
        <mesh geometry={nodes.Cube_83.geometry} material={materials['Material.007']} position={[54.485, -0.706, 8.982]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_84.geometry} material={materials['Material.007']} position={[-32.328, 4.656, -0.196]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_85.geometry} material={materials['Material.007']} position={[-32.318, 4.919, -5.06]} />
        <mesh geometry={nodes.Cube_86.geometry} material={materials['Material.007']} position={[-34.855, 4.518, -9.843]} />
        <mesh geometry={nodes.Cube_87.geometry} material={materials['Material.007']} position={[-30.183, 4.518, -9.926]} rotation={[Math.PI, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_88.geometry} material={materials['Material.007']} position={[45.55, -1.687, -1.428]} rotation={[0, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_89.geometry} material={materials['Material.007']} position={[52.878, -1.501, -1.193]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cube_8_2.geometry} material={materials['Material.007']} position={[-55.863, -0.864, -0.706]} />
        <mesh geometry={nodes.Cube_9.geometry} material={materials['Material.007']} position={[-31.493, -0.301, 13.532]} />
        <mesh geometry={nodes.Cube_90.geometry} material={materials['Material.007']} position={[46.692, -1.593, -6.163]} />
        <mesh geometry={nodes.Cube_91.geometry} material={materials['Material.007']} position={[36.352, -1.238, -10.591]} />
        <mesh geometry={nodes.Cube_92.geometry} material={materials['Material.007']} position={[56.594, -1.238, 14.002]} />
      </animated.group>
      <group position={[-1.019, 0.26, 1.85]} rotation={[Math.PI / 2, 0, 0]} scale={0.035} scale-y={columnScaleY}>
        <mesh geometry={nodes.Cube_4_6.geometry} material={materials['Material.007']} position={[0.002, -0.014, -24.444]} rotation={[Math.PI, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_5_5.geometry} material={materials['Material.007']} position={[0, -0.015, -22.749]} rotation={[Math.PI, 0, Math.PI]} />
        <mesh geometry={nodes.Cube_7_6.geometry} material={materials['Material.007']} position={[-0.002, -0.015, 12.343]} />
        <mesh geometry={nodes.Cube_8_3.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.007']} position={[-0.004, 0.087, -5.994]} />
      </group>
      <animated.group position={[-0.507, 0.217, 2.296]} rotation={[Math.PI / 2, 0, 0]}  position-y={sweepPosY} scale={wallScale}>
        <mesh geometry={nodes.Sweep.geometry} material={materials['Material.008']} position={[-28.477, 19.184, -3.601]} />
        <mesh geometry={nodes.Sweep_1.geometry} material={materials['Material.008']} position={[23.431, 19.184, -4.028]} />
      </animated.group>
      <animated.group position={[1.346, 0.103, 0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.035} scale-y={columnScaleY}>
        <group position={[7.164, 51.903, -4.481]}>
          <mesh geometry={nodes.Cube_7_10.geometry} material={materials['Material.007']} position={[-0.002, -0.014, 12.343]} />
          <mesh geometry={nodes.Cube_8_7.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_5.geometry} material={materials['Material.007']} position={[-0.044, 0.167, 5.048]} />
        </group>
        <group position={[7.164, 4.823, -4.481]}>
          <mesh geometry={nodes.Cube_7_8.geometry} material={materials['Material.007']} position={[0, -0.015, 12.343]} />
          <mesh geometry={nodes.Cube_8_5.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Material.007']} position={[0.045, 0.062, 0.885]} />
        </group>
        <group position={[7.164, 28.238, -4.481]}>
          <mesh geometry={nodes.Cube_4_7.geometry} material={materials['Material.007']} position={[0, -0.013, -24.395]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_6.geometry} material={materials['Material.007']} position={[0, -0.015, -22.749]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_9.geometry} material={materials['Material.007']} position={[0, -0.017, 12.294]} />
          <mesh geometry={nodes.Cube_8_6.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_4.geometry} material={materials['Material.007']} position={[0, 0.295, -5.628]} />
        </group>
        <group position={[7.164, -42.54, -4.481]}>
          <mesh geometry={nodes.Cube_4_instance_26.geometry} material={materials['Material.007']} position={[0, -0.013, -24.395]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_26.geometry} material={materials['Material.007']} position={[0, -0.015, -22.749]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_26.geometry} material={materials['Material.007']} position={[0, -0.017, 12.294]} />
          <mesh geometry={nodes.Cube_8_instance_2.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_instance_2.geometry} material={materials['Material.007']} position={[0, 0.295, -5.628]} />
        </group>
        <group position={[7.164, -66.887, -4.481]}>
          <mesh geometry={nodes.Cube_4_instance_25.geometry} material={materials['Material.007']} position={[0.001, -0.014, -24.444]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_5_instance_25.geometry} material={materials['Material.007']} position={[0, -0.015, -22.749]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.Cube_7_instance_25.geometry} material={materials['Material.007']} position={[-0.001, -0.014, 12.343]} />
          <mesh geometry={nodes.Cube_8_instance.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_instance.geometry} material={materials['Material.007']} position={[0, 0.06, -5.97]} />
        </group>
        <group position={[7.164, -19.549, -4.481]}>
          <mesh geometry={nodes.Cube_7_7.geometry} material={materials['Material.007']} position={[0, -0.015, 12.343]} />
          <mesh geometry={nodes.Cube_8_4.geometry} material={materials['Material.007']} position={[0, -0.015, 10.648]} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.007']} position={[0.063, 0.093, -1.637]} />
        </group>
      </animated.group>
      <group position={[1.588, -0.227, 1.732]} rotation={[Math.PI / 2, 0, 0]} scale={0.035}>
        <group position={[0, 15.386, -0.196]}>
          <mesh geometry={nodes.Cube_3_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube_3_1.geometry} material={materials['Material.007']} position={[0, -11.88, 0]} />
          <mesh geometry={nodes.Cube_3_10.geometry} material={materials['Material.007']} position={[0, -118.8, 0]} />
          <mesh geometry={nodes.Cube_3_11.geometry} material={materials['Material.007']} position={[0, -130.68, 0]} />
          <mesh geometry={nodes.Cube_3_2.geometry} material={materials['Material.007']} position={[0, -23.76, 0]} />
          <mesh geometry={nodes.Cube_3_3.geometry} material={materials['Material.007']} position={[0, -35.64, 0]} />
          <mesh geometry={nodes.Cube_3_4.geometry} material={materials['Material.007']} position={[0, -47.52, 0]} />
          <mesh geometry={nodes.Cube_3_5.geometry} material={materials['Material.007']} position={[0, -59.4, 0]} />
          <mesh geometry={nodes.Cube_3_6.geometry} material={materials['Material.007']} position={[0, -71.28, 0]} />
          <mesh geometry={nodes.Cube_3_7.geometry} material={materials['Material.007']} position={[0, -83.16, 0]} />
          <mesh geometry={nodes.Cube_3_8.geometry} material={materials['Material.007']} position={[0, -95.04, 0]} />
          <mesh geometry={nodes.Cube_3_9.geometry} material={materials['Material.007']} position={[0, -106.92, 0]} />
          <mesh geometry={nodes.Cube_3_1001.geometry} material={materials['Material.007']} position={[-74.296, -11.88, 0]} />
          <mesh geometry={nodes.Cube_3_10001.geometry} material={materials['Material.007']} position={[-74.296, -118.8, 0]} />
          <mesh geometry={nodes.Cube_3_11001.geometry} material={materials['Material.007']} position={[-74.296, -130.68, 0]} />
          <mesh geometry={nodes.Cube_3_2001.geometry} material={materials['Material.007']} position={[-74.296, -23.76, 0]} />
          <mesh geometry={nodes.Cube_3_3001.geometry} material={materials['Material.007']} position={[-74.296, -35.64, 0]} />
          <mesh geometry={nodes.Cube_3_4001.geometry} material={materials['Material.007']} position={[-74.296, -47.52, 0]} />
          <mesh geometry={nodes.Cube_3_5001.geometry} material={materials['Material.007']} position={[-74.296, -59.4, 0]} />
          <mesh geometry={nodes.Cube_3_6001.geometry} material={materials['Material.007']} position={[-74.296, -71.28, 0]} />
          <mesh geometry={nodes.Cube_3_7001.geometry} material={materials['Material.007']} position={[-74.296, -83.16, 0]} />
          <mesh geometry={nodes.Cube_3_8001.geometry} material={materials['Material.007']} position={[-74.296, -95.04, 0]} />
          <mesh geometry={nodes.Cube_3_9001.geometry} material={materials['Material.007']} position={[-74.296, -106.92, 0]} />
        </group>
      </group>
      <mesh geometry={nodes.Cube_8.geometry} material={materials['Material.007']} position={[0.009, -0.454, 0.005]} rotation={[Math.PI / 2, 0, 0]} scale={0.035} />
      <group position={[-0.079, -0.495, 0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[0.041, 0.044, 0.035]}>
        <mesh geometry={nodes.Mesh153.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Mesh153_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Mesh153_2.geometry} material={materials['Material.006']} />
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/ruins.gltf')
