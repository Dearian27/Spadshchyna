import React from 'react'
import { motion } from 'framer-motion';

export default function Box() {
  return (
    <motion.div 
    style={{  height: "80px", width: "80px", backgroundColor: "#dd4ab1"}}
    animate={{x: 500, rotateZ: 360}}
    >
    </motion.div>
  )
}
