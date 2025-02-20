import React from 'react'
import style from "./page5.module.css"
import Image from 'next/image'
import laptop from "./Simple Design-2.png"
import freelance from "./Untitled design.svg"
import django from "./Untitled design.png"
import phone from "./Simple Design-3.png"
import ss from "./Screenshot 2025-02-20 at 1.42.32 PM.png"
import ss2 from "./Screenshot 2025-02-20 at 1.43.26 PM.png"
import ss3 from "./Screenshot 2025-02-20 at 1.42.47 PM.png" 
import phone2 from "./Simple Design-4.png"
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
const page5 = () => {
  return (
    <div>
      <div className = {style.body}>
        <div className = {style.heading}>My Work</div>
        <div className = {style.linesep}></div>
        <div className = {style.threeboxes}>
          <div className = {style.box1}>
            <div className = {style.img1}>
              <Image src = {laptop} alt = "laptop" className = {style.laptop}/>
            </div>
            <div className = {style.titles}>
              Web <br/> Development
            </div>
          <div className = {style.img2}>
            <div className = {style.phntxt}>01</div>
            <Image src = {phone} alt = "phone" className = {style.phone1}/>
          </div>
          </div>
          <div className = {style.box2}>
            <div className = {style.images}>
              <Image src = {ss} alt = "ss" className = {style.ss}/>
              <Image src = {ss2} alt = "ss2" className = {style.ss2}/>
              <div className = {style.img3}>
                <div className = {style.txt2}>02</div>
              <Image src = {ss3} alt = "ss3" className = {style.ss3}/> </div>
            </div>
            <div className = {style.content}>Delivered a high-performing, <b>multilingual</b> website with a scalable backend, ensuring seamless functionality and improved search engine rankings. <br/>The project successfully met client goals, resulting in a <b>30% increase</b> in user engagement and positive feedback from users.</div>
            <div className = {style.subcont}>
              <div className = {style.icon}>
              <Link href="https://github.com/consennse/Consennse_website_2025" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
                </Link>
                 </div>
              <div className = {style.sc1}>
              REST API </div> | <div className = {style.sc2}> Django </div>| <div className = {style.sc3}> NextJS </div>
            </div>
          </div>
          <div className = {style.box3}>
            <div className = {style.bcont}>Boosted site engagements, enabled seamless backend integrations and efficient API management. </div>
            <div className = {style.image3}>
              <div className = {style.imgtxt3}>03</div>
              <Image src = {phone2} alt = "phone2" className = {style.phon2}/>
            </div>
          </div>
        </div>
        <div className ={style.miniprojects}>
        <div className = {style.project2}>
        <div className = {style.rightp1}>
      <Image src = {freelance} alt = "bandd" className = {style.freelance}/>
        </div>
          <div className = {style.leftp1}>
          <div className = {style.ph1}>Featured Projects</div>
          <div className = {style.pname}>B X D (Work Anywhere)</div>
          <div className = {style.pb1}>content goes here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium dicta incidunt aperiam eum. Nobis perspiciatis at non maxime pariatur modi aperiam incidunt quos veniam tempora perferendis repudiandae, animi recusand Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique necessitatibus perspiciatis corporis accusamus,
          loir</div>
          <div className = {style.subcont}>
              <div className = {style.icon}>
              <Link href="https://github.com/cupidmess/current_repo" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
                </Link>
                 </div>
              <div className = {style.sc1}>
              ReactJS </div> | <div className = {style.sc2}> Django </div>| <div className = {style.sc3}> PostgreSQL </div>
            </div>
        </div>
        </div>
        <div className = {style.project3}>
        <div className = {style.rightp1}>
      <Image src = {django} alt = "bandd" className = {style.freelance}/>
        </div>
          <div className = {style.leftp1}>
          <div className = {style.ph1}>Featured Projects</div>
          <div className = {style.pname}>API Management</div>
          <div className = {style.pb1}>content goes here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium dicta incidunt aperiam eum. Nobis perspiciatis at non maxime pariatur modi aperiam incidunt quos veniam tempora perferendis repudiandae, animi recusand Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique necessitatibus perspiciatis corporis accusamus,
          loir</div>
          <div className = {style.subcont}>
              <div className = {style.icon}>
              <Link href="https://github.com/cupidmess/current_repo" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
                </Link>
                 </div>
              <div className = {style.sc1}>
              Flask </div> | <div className = {style.sc2}> Django </div>| <div className = {style.sc3}> SQLite3 </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default page5
