'use client'

import React from 'react'
import Image from 'next/image'
import styles from './HeroSection.module.css'
import { interFont } from '@/fonts'
import Button from '../button/Button'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

function HeroSection() {
  return (
    <>
      <section id='home' className={`${styles.hero} ${interFont.className}`}>
         <h1> Hey! I&apos;m {" "}
            <span>Nazia Imran</span>
            {" "}

            <motion.span style={{fontSize: "3.125rem", display: "inline-block"}} 
            animate={{rotate: [0, 15, -10, 20, -10, 0] }}
            transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
            >
               👋
            </motion.span>

            <br /><span>I</span>&apos;m {" "}
            <Typewriter 
            words={["Frontend Developer", "UI/UX Designer" ]}
            loop={Infinity}
            cursor={true}
            cursorStyle='-'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
            />
         </h1>

         <p>
            I can build user interface for websites and application with {" "}
            <br /><span>React</span> and {" "}
            <span>Next.JS </span> 
            <br /> I love frontend development.
         </p>

         <a href='#contact'><Button text={"Hire Me"} /></a>

         <div className={styles.socialIconsDiv}>
         <a href='https://www.facebook.com/profile.php?id=100001297523230'><FaFacebook size={30} color='black' /></a>
         <a href='https://github.com/NaziaImran786'><FaGithub size={30} color='black' /></a>
         <FaInstagramSquare size={30} color='black' />
         <FaWhatsappSquare size={30} color='black' />
         <a href='www.linkedin.com/in/nazia-imran-588090300'><FaLinkedin size={30} color='black' /></a>
         </div>
         
         <div className={styles.bottomImageDiv}>
            <Image src={"/behance.png"} alt='behance picture' width={156} height={156}>
            </Image>

            <Image src={"/dribble.png"} alt='dribble picture' width={156} height={156}>
            </Image>

            <Image src={"/upwork.png"} alt='upwork picture' width={156} height={156}>
            </Image>

            <Image src={"/freelance.png"} alt='freelance picture' width={156} height={156}>
            </Image>
         
         </div>
      </section>
      
    </>
  )
}

export default HeroSection
