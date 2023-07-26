import React from 'react'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import { LazyMotion, domAnimation, motion, useAnimate, useMotionValue, useTransform } from "framer-motion"
import { useState } from 'react';
import { Reveal } from '../components/Reveal';

export default function Framer({children}) {

  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
  }
  return (
    <>
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
      {children}
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
  )
}
