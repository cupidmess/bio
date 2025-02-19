"use client";
import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";

const sections = ["skills", "education", "experience", "project", "contact"];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home"); // Default to home

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      // Highlight active section
      let foundSection = "home"; // Default is home (Shreya Bhoir button)
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundSection = section;
          }
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Scroll to section when navbar item is clicked
  const handleClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setActiveSection(sectionId); // Set active section on click
  };

  return (
    <div className={`${style.navbar} ${isVisible ? style.show : style.hide}`}>
      {/* "Shreya Bhoir" button with different CSS */}
      <div className={`${style.name} ${activeSection === "home" ? style.activeName : ""}`}>
        <button className={style.but} onClick={() => handleClick("home")}>
          Shreya Bhoir
        </button>
      </div>

      {/* Other navbar sections */}
      {sections.map((section) => (
        <div
          key={section}
          className={`${style[section]} ${activeSection === section ? style.active : ""}`}
          onClick={() => handleClick(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </div>
      ))}

      <div className={style.lineanddot}>
        <div className={style.line}></div>
        <svg width="15" height="50" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="7" fill="transparent" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
