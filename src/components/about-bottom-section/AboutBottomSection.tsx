'use client'
import React from 'react'
import styles from './AboutBottomSection.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'


//parent section
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  }
}

//children section

const childVariants = {
  hidden: {opacity: 0, y:20},
  show: {opacity: 1, y:0}   
}
function AboutBottomSection() {
  return (
    <> 
     <h1 className='text-4xl font-bold text-white bg-[#1a1a1a] text-center py-2'>My Skills</h1>     

    <motion.div className={styles.aboutBottomDiv} 
    variants={containerVariants}
    initial="hidden"
    whileInView="show"    
    >
      <motion.div variants={childVariants}><Image src={"/html.png"} alt={"html picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/css.png"} alt={"css picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/typescript.png"} alt={"typescript picture"} width={60} height={60}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/git.png"} alt={"git picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/figma.png"} alt={"figma picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/react.png"} alt={"react picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/node.png"} alt={"node picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/next.png"} alt={"next picture"} width={96} height={96}></Image></motion.div>
      <motion.div variants={childVariants}><Image src={"/python.png"} alt={"python picture"} width={96} height={96}></Image></motion.div>
    </motion.div>      
    </>
  )
}

export default AboutBottomSection
