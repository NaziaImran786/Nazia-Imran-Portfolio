import React from 'react'
import styles from './PortfolioSection.module.css'
import { caveatFont, interFont } from '@/fonts'
import PortfolioCard from './portfolio-cards/PortfolioCard'

function PortfolioSection() {
  return (
    <>
    <section id='portfolio' className={styles.portfolio}>
      <h1 className={caveatFont.className}>
      <span>M</span>y 
      <span>L</span>ast 
      <span>W</span>ork
      </h1>

      <p className={interFont.className}>
      In my most recent project, I designed and developed a modern, responsive web application using Next.js, TypeScript, and Tailwind CSS to ensure a seamless user experience across all devices. I integrated Framer Motion for smooth animations, Swiper.js for interactive carousels, and Shadcn for scalable UI components.

To enhance content management, I implemented Sanity CMS, allowing for dynamic and structured content updates. Additionally, I optimized performance, accessibility, and SEO to improve user engagement and search engine visibility.
      </p>

      <div className={styles.myWork}>
        <PortfolioCard />
      </div>
    </section>
      
    </>
  )
}

export default PortfolioSection
