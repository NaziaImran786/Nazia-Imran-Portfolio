// src\components\contact-section\ContactSection.tsx
'use client'
import React, { useState } from 'react'
import styles from './ContactSection.module.css'
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { caveatFont, interFont } from '@/fonts';
import { sendEmail } from '@/utils/emailService';

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();

    const templateParams = {
      to_name: "Nazia Imran",
      from_name: name,
      from_email: email,
      message: message
    };

    try{
        await sendEmail(templateParams);
        alert("Email sent successfully");
        setName('');
        setEmail('');
        setMessage('');
    }
    catch (error){
      console.error('EmailJs Error',error);
      alert("Failed to send email");
    }
  }

  
  return (
    <>
      <section id='contact' className={`${styles.contactUs} ${interFont.className} `}>
        <h1 className={caveatFont.className}>
          <span>C</span>ontact {" "}
          <span>M</span>e
        </h1>

        <p>Have a project in mind or need a modern, high-performing website? I’m here to help! Whether it&apos;s web design, front-end development, Next.js integration, or system architecture, I bring creativity and technical expertise to craft seamless digital experiences. Let&apos;s collaborate and bring your ideas to life.</p>


        <div className={styles.contactUsBottomDiv}>
          <div className={styles.contactLeftDiv}>
            <div className={styles.contactLeftDivContainer}>
              <IoIosMail size={24} color={"var(--logo-color)"}/>
              <div className={styles.contactLeftDivText}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <h6>Email me at naziaimran.4df@gmail.com</h6>
              </div>
            </div>

            <div className={styles.contactLeftDivContainer}>
              <FaMapMarkerAlt size={24} color={"var(--logo-color)"}/>
              <div className={styles.contactLeftDivText}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>serving clients worldwide</h6>
              </div>
            </div>
          </div>

          <div className={styles.contactRightDiv}>
            <form onSubmit={handleSubmit}>
              <div className={styles.topInputDiv}>
               
                <input type="text" placeholder='Your name' className={styles.inputDetails} name='name' value={name} onChange={(e)=>setName(e.target.value)}/>

                <input type="text" placeholder='Your email' className={styles.inputDetails} name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <input type="text" placeholder='Subject' className={styles.inputDetails} style={{width: "100%"}}/>

              <textarea placeholder='Your message' className={styles.inputDetails} style={{height: "224px"}} name='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

              <input type="submit" className={styles.inputBtn} value={"Send message"}/>
            </form>
          </div>
        
        </div>

      </section>
    </>
  )
}

export default ContactUs
