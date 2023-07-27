import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lights from '../../components/Lights';
import { Background } from '../../components/Background';
import { Eggscene } from '../../components/Eggscene';
import { useSpring, animated } from '@react-spring/three';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import {Reveal} from '../../components/framer/Reveal';
import { Portal } from '../../components/framer/Portal';

const KolomuyaScene = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: "none",
  }

  return (
    <>
      <div style={{ position: 'fixed', height: '100vh', width: '100%' }}>
        <Canvas shadows camera={{ position: [0, 10, 15], fov: 30 }}>
          <Background />
          <ambientLight intensity={0.4} />
          <Lights />

          <OrbitControls
            enableZoom={false}
            makeDefault
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            // minDistance={7}
            // maxDistance={20}
          />
          {/* <PointerLockControls /> */}
          <Eggscene position={[1, 0, -2]} rotation-y={(2 * Math.PI) / 6} />
        </Canvas>
      </div>
      <Fullpage>
        <FullpageNavigation style={{zIndex: 10001}} />
        <FullPageSections>
          {/* first slide */}
          <FullpageSection style={SectionStyle}>
            <Reveal>
            <h1 style={{fontFamily: "Fixel", textTransform: 'uppercase', fontSize: 45}}>
              Музей Писанки
            </h1>
            </Reveal>
            <Portal>
            <h1 style={{fontFamily: "Fixel", textTransform: 'uppercase'}}>
              Музей Писанки
            </h1>
            </Portal>
            <Portal>
            <h1 style={{fontFamily: "Fixel", textTransform: 'uppercase'}}>
              Музей Писанки
            </h1>
            </Portal>
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
          <Reveal>
            <h3 style={{fontFamily: "Fixel"}}>
              This is the 1st screen.
            </h3>
            </Reveal>
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
          <Reveal>
            <h3 style={{fontFamily: "Fixel"}}>
              This is the 1st screen.
            </h3>
          </Reveal>
          <Reveal delay={0.45}>
            <h2> some description</h2>
          </Reveal>
          <Reveal delay={0.60}>
            <span>Lorem ispum dolor and something like that</span>
          </Reveal>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default KolomuyaScene;
