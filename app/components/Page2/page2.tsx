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
        <div className = {style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam nec nibh.
        <br></br>
        Aliquam luctus faucibus augue, in porttitor eros imperdiet sit amet. Vivamus vel tortor at risus vestibulum elementum accumsan id ante.</div>
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
