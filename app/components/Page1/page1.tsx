import React from 'react'
import style from "./page1.module.css"
import Image from 'next/image'
import profile from "./ABOUT ME-2.png"
const page1 = () => {
  return (
    <div>
      <div className = {style.body}>
        <div className = {style.left}>
        <div className = {style.top}>Hello !!!</div>
        <div className = {style.name}>I&apos;m Shreya Bhoir</div>
        <div className = {style.button}>PROFESSIONAL WEB DEVELOPER</div>
        <div className = {style.content}>
        I turn ideas into sleek, functional, and engaging web experiences. With a knack for Next.js, React, and Django, I craft scalable applications that don&apos;t just work—they <i>flow</i>. 
        </div>
        </div>
        <div className = {style.right}>
          <Image src = {profile} alt = "profile" className = {style.profile}/>
        </div>
      </div>
     
    </div>
  )
}

export default page1
