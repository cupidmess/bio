import React from 'react'
import style from "./page2.module.css"
import Image from 'next/image'
import profile from "./ABOUT ME-5.png"
const page2 = () => {
  return (
    <div>
     <div className = {style.body}>
      <div className = {style.left}>
        <Image src = {profile} alt = "profile" className = {style.prof}/>
      </div>
      <div className = {style.right}>
        <div className = {style.heading}>My Biography</div>
        <div className = {style.linesep}></div>
        <div className = {style.content}>With expertise in MERN, Django, Next.js, and Flutter, I craft sleek, high-performance web and mobile applications that deliver seamless user experiences. Whether it&apos;s building scalable full-stack platforms or integrating AI-driven features, I love tackling challenges that push the limits of technology.
        <br></br>
        Beyond coding, I thrive on innovation and problem-solving, always looking for ways to make digital experiences smarter and more engaging. If it&apos;s a project that demands a blend of tech, creativity, and impact, count me in! Let&apos;s build something awesome.</div>
        <div className = {style.skills}>Skills & Interests</div>
        <div className = {style.skillsets}>
          <div className = {style.top}>
          <div className = {style.skill}>Django REST</div>
          <div className = {style.skill}>NextJS</div>
          <div className = {style.skill}>ReactJS</div>
          </div>
          <div className = {style.bot}>
          <div className = {style.skill}>PostgreSQL</div>
          <div className = {style.skill}>Flutter</div>
          <div className = {style.skill}>NodeJs</div>
          </div>   
          <div className = {style.bot}>
          <div className = {style.skill}>Express</div>
          <div className = {style.skill}>MongoDB</div>
          <div className = {style.skill}>Native</div>
          </div>      
        </div>
      </div>
     </div>
    </div>
  )
}

export default page2
