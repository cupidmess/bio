import React from 'react'
import style from "./page3.module.css"
const page3 = () => {
  return (
    <div>
      <div className={style.body}>
        <div className = {style.left}>
          <div className = {style.heading}>Education</div>
          <div className = {style.linesep}></div>
          <div className = {style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet massa sed leo molestie ultrices in non mi. Suspendisse mollis nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam nec nibh.</div>
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
