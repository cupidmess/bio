import React from 'react'
import style from "./page6.module.css"
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
const page6 = () => {
  return (
    <div>
      <div className = {style.body}>
        <div className = {style.heading}>Get in Touch</div>
        <div className = {style.stit}>Let&apos;s Work Together</div>
        <div className = {style.contactcards}>
          <div className = {style.cc}>
          <Link href = "https://www.linkedin.com/in/shreya-bhoir-969251276/" target='_blank' rel='noopener noreferrer'>
          <div className = {style.logo}><FaLinkedin className={style.log}/> </div>
          <div className = {style.name}>LinkedIn</div>
          <div className = {style.detail}>Shreya Bhoir</div>
          </Link>
          </div>
          <div className = {style.cc}>
          <Link href="mailto:shreyasameerbhoir16@gmail.com"  target='_blank' rel='noopener noreferrer' >
          <div className = {style.logo}><FaEnvelope className={style.log}/> </div>
          <div className = {style.name}>Email</div>
          <div className = {style.detail}>shreyasameerbhoir16@gmail.com</div>
          </Link>
          </div>
          <div className = {style.cc}>
          <Link href = "https://github.com/cupidmess" target='_blank' rel='noopener noreferrer'>
          <div className = {style.logo}><FaGithub className={style.log}/> </div>
          <div className = {style.name}>Github</div>
          <div className = {style.detail}>@cupidmess</div>
          </Link>
          </div>
          <div className = {style.cc}>
          <Link href = "https://www.instagram.com/cupidmess/" target='_blank' rel='noopener noreferrer'>
          <div className = {style.logo}><FaHeart className={style.log}/> </div>
          <div className = {style.name}>Instagram</div>
          <div className = {style.detail}>@cupidmess</div>
          </Link>
          </div>
        </div>
        <div className = {style.shreya}>
          SHREYA BHOIR
        </div>
      </div>
    </div>
  )
}

export default page6
