import React from 'react'
import style from "./footer.module.css"
const Footer = () => {
  return (
    <div>
       <div className = {style.lineanddot}>
        <svg width="15" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="7" fill="transparent" />
    </svg>
    <div className = {style.line}>
        </div>
        <div className = {style.portfolio}>
          Portfolio 2025
        </div>
      </div>
    </div>
  )
}

export default Footer
