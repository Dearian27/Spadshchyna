import { Loader, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import Lights from '../../components/Lights';
import { useSpring, animated } from '@react-spring/three';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';
import { Reveal } from '../../components/framer/Reveal';
import { Portal } from '../../components/framer/Portal';
import React, { Suspense, useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { SlideCheck } from '../../components/framer/SlideCheck';
import { Ruins } from '../../components/Ruins';

const colors = [
  { colorA: '#69f6e5', colorB: '#aa8dee' },
  { colorA: '#fc3bff', colorB: '#9775ff' },
  { colorA: '#47f6a2', colorB: '#71a3ff' },
];

const KhersonesScene = () => {
  const { progress } = useProgress();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (progress === 100) {
      setIsLoaded(true);
    }
  }, [progress]);
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
    backgroundColor: 'none',
    padding: '25px',
  };

  return (
    <>
      <Suspense
        // fallback={<UkraineLoader />}
        fallback={null}>
        <div style={{ position: 'fixed', height: '100vh', width: '100%' }}>
          <Canvas shadows camera={{ position: [0, 10, 15], fov: 30 }}>
            <Background
              colorA={colors[currentScreen].colorA}
              colorB={colors[currentScreen].colorB}
            />
            <ambientLight intensity={0.4} />
            <Lights />
            {/* <Camera /> */}
            <OrbitControls
              enableZoom={true}
              makeDefault
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 3}
              // minDistance={7}
              // maxDistance={20}
            />
            <Ruins
              position={[3, 0, -2]}
              rotation-y={(2 * Math.PI) / 6}
              activeScreen={0}
              currentScreen={currentScreen}
            />
          </Canvas>
        </div>
      </Suspense>
      <Fullpage>
        <FullpageNavigation style={{ zIndex: 10001 }} />
        <FullPageSections>
          {/* first slide */}
          <FullpageSection style={SectionStyle}>
            <SlideCheck index={0} setCurrentScreen={setCurrentScreen} />
            <Reveal isLoaded={isLoaded}>
              <h1
                style={{
                  fontFamily: 'Fixel',
                  textTransform: 'uppercase',
                  fontSize: 45,
                  color: 'white',
                }}>
                Руїни Херсонесу
              </h1>
            </Reveal>
            <Portal isLoaded={isLoaded} bgc={'#aa8dee'}>
              <h1 style={{ fontFamily: 'Fixel', textTransform: 'uppercase', color: 'white' }}>
                Місто: Севастополь
              </h1>
            </Portal>
            <Portal isLoaded={isLoaded} bgc={'#aa8dee'}>
              <h1 style={{ fontFamily: 'Fixel', textTransform: 'uppercase', color: 'white' }}>
                Автономна Республіка Крим
              </h1>
            </Portal>
          </FullpageSection>

          {/* second slide */}
          <FullpageSection style={SectionStyle}>
            <SlideCheck index={1} setCurrentScreen={setCurrentScreen} />
            <Reveal isLoaded={isLoaded}>
              <h3 style={{ fontFamily: 'Fixel', color: 'white' }}>Це другий екран</h3>
            </Reveal>
          </FullpageSection>

          {/* third slide */}
          <FullpageSection style={SectionStyle}>
            <SlideCheck index={2} setCurrentScreen={setCurrentScreen} />
            <Reveal isLoaded={isLoaded}>
              <h3 style={{ fontFamily: 'Fixel', color: 'white' }}>Це третій екран</h3>
            </Reveal>
            <Reveal isLoaded={isLoaded} delay={0.45}>
              <h2>some description</h2>
            </Reveal>
            <Reveal isLoaded={isLoaded} delay={0.6}>
              <span>Lorem ispum dolor and something like that</span>
            </Reveal>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      <Loader style={{ position: 'fixed' }} />
    </>
  );
};

export default KhersonesScene;
