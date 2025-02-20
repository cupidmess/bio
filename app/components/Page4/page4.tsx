"use client";
import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import style from "./page4.module.css"
import Image from 'next/image'
import icon from "./ABOUT ME-6.png"
const items = [
  { id: 1, title: "Papaya, Mumbai", subtitle: "Web Developer 2024-", description: `Spearheaded the development of many dynamic, user-centric web applications, seamlessly integrating frontend and backend functionalities to ensure optimal performance and scalability. \n
  Collaborated closely with design teams to translate creative concepts into responsive, visually compelling user interfaces, achieving a 20% increase in user engagement across platforms.\n
  Engineered and optimized multiple RESTful APIs using Django REST Framework, reducing backend response times by 30% and enhancing data integration efficiency.\n
  Delivered efficient, maintainable, and scalable code, reducing development cycle times by 25% and ensuring alignment with industry standards.` },
  { id: 2, title: "Consennse, Switzerland",subtitle: "Freelancing Web Developer 2024-25",description: ` Leveraged Next.js to build high-performance, server-rendered websites, incorporating multilingual support for English and German, expanding reach to a global audience of hundreds of monthly users \n
  Implemented SEO best practices that improved website visibility, resulting in a 40% increase in organic traffic and higher search engine rankings.\n
  Implemented XML sitemaps for Search Console, which improved website visibility and contributed to a 40% increase in organic traffic.\n
  Designed and integrated user-friendly contact forms, streamlining user interaction and increasing client inquiries by 25%.
  ` },
  { id: 3, title: "Hackathons", subtitle: "Smart India Hackathon, Inter-College 2024", description: `
  Team Leader, Smart India Hackathon (SIH) 2024: Led a cross-functional team of 6 to develop an innovative solution, securing a spot in the national qualification round.\n
Inter-College Hackathons: Consistently advanced to the semi-finals in multiple inter-college hackathons, showcasing problem-solving skills, technical expertise, and the ability to deliver under tight deadlines and working consistently for 36 hours.` },
];

export default function Page4 (){
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <div className = {style.body}>
        <div className = {style.left}>
          <div className = {style.heading}>Experience</div>
          <div className = {style.linesep}></div>
          <div className = {style.experiences}>
            <div className = {style.exp}>
          <ul className = {style.listhere}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`${style.listItem} ${selectedId === item.id ? style.selected : ""}`}
              onClick={() => setSelectedId(item.id)}
            >
              <div className  = {style.imgplus}>
                    <Image src = {icon} alt = "icon" className = {style.icon}/>
              <div className = {style.titles}>
              <div className = {style.tit1}>
              {item.title}
              </div>
              <div className = {style.stit}>
              {item.subtitle}
              </div>
              </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
          </div>
        </div>
        <div className = {style.right}>
          <div className = {style.timeline}>
          2023 -
          </div>
          <AnimatePresence mode="wait">
  {selectedId && (
    <motion.div
      key={selectedId} // Ensures animation applies when switching
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeInOut" } }}
      className={style.text}
     
    >
      {items
        .find((item) => item.id === selectedId)
        ?.description.split("\n")
        .map((line, index) => (
          <p key={index} className={style.paragraph}>{line.trim()}</p>
        ))}
    </motion.div>
  )}
</AnimatePresence>
        </div>
        </div> 
    </div>
  )
}


