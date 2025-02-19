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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam nec nibh. 
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
