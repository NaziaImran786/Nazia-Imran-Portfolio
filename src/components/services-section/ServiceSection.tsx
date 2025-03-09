import React from "react";
import styles from "./ServiceSection.module.css";
import { caveatFont, interFont } from "@/fonts";
import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or{" "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}>
        I specialize in designing and developing modern, responsive, and user-friendly websites tailored to meet client needs. With expertise in HTML, CSS, JavaScript, TypeScript, and Next.js, I create visually appealing interfaces that enhance user experience. I also integrate advanced tools like Swiper.js for interactive sliders, Framer Motion for smooth animations, and Shadcn for scalable UI components. Additionally, I leverage Tailwind CSS for efficient styling and maintainability.

Beyond front-end development, I work with Streamlit and UV to build intelligent, data-driven web applications. My focus is on delivering high-performance, accessible, and scalable solutions while staying up-to-date with the latest industry trends.
        </p>

        <div className={styles.servicesCardDiv}>
          <ServicesCard/>
        </div>
      </section>
    </>
  );
}

export default Services;