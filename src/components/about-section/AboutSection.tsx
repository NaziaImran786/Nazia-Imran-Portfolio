'use client'
import React from 'react'
import Image from 'next/image'
import Styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/fonts'
import Button from '../button/Button'
import { motion } from 'framer-motion'
function AboutSection() {
  return (
    <>
    <section id='about' className={Styles.about}>
      <motion.div className={Styles.aboutLeftDiv}
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5, type: "spring"}}
      >          
          <h1 className={ caveatFont.className}>Nazia Imran</h1>
          <p className={ caveatFont.className}>Freelance Web Developer</p>

          <h3 className={`${Styles.detailText} ${interFont.className}`}>
          Creative and detail-oriented web designer with a strong passion for crafting visually appealing and user-friendly websites. Proficient in modern web design tools, including HTML, CSS,Typescript, JavaScript, Python, Tailwind CSS, and frameworks like Next.js. Adept at developing responsive layouts that enhance user experience across various devices and platforms. Experienced in UI/UX design principles, ensuring seamless navigation and intuitive interfaces. Proficient in version control using Git, enabling efficient collaboration and project management.

Recently pursuing Agentic AI Development, exploring the intersection of Python, Streamlit, and UV to build intelligent web applications. Hands-on experience with modern libraries and tools like Swiper.js for interactive carousels, Framer Motion for smooth animations, and Shadcn for building accessible, customizable components. Familiar with Sanity CMS for managing structured content and integrating databases to develop dynamic, data-driven websites. Dedicated to continuous learning and staying updated with the latest industry trends and best practices..</h3>

          <a href={"#contact"}><Button text={"Contact Me"} /></a>
      </motion.div >

      <motion.div className={Styles.aboutRightDiv}
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5, type: "spring"}}
      >
        <Image src={"/pic1.jpg"} alt={"profile picture"} width={400} height={400} className='px-2'></Image>
      </motion.div>
    </section>
    </>
  )
}

export default AboutSection
