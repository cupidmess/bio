import React from 'react'
import style from "./page3.module.css"
const page3 = () => {
  return (
    <div>
      <div className={style.body}>
        <div className = {style.left}>
          <div className = {style.heading}>Education</div>
          <div className = {style.linesep}></div>
          <div className = {style.content}>I&apos;m currently pursuing Computer Engineering at Bharati Vidyapeeth College of Engineering, consistently achieving excellent academic results while actively balancing extracurricular projects and tech initiatives. My journey has been a mix of strong technical learning and hands-on experience, allowing me to grow both as a developer and a problem-solver.</div>
        </div>
        <div className = {style.right}>
          <div className = {style.timeline}>2020-2027</div>
          <div className = {style.rightcont}>
            <div>
          <div className = {style.head}>Central Board of Secondary Education</div>
          <div className = {style.subcont}>
            96% in grade 10 (SSC) | 2020 
            <br></br>
            91% in grade 12 (HSC) | 2023
          </div>
          </div>
          <div>
          <div className = {style.head}>Mumbai University</div>
          <div className = {style.subcont}>
            Bharati Vidyapeeth College of Engineering | 2023-2027
            <br></br>
            Bachelor of Engineering | CGPA : 8
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page3
