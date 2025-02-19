"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Keeps triggering on scroll
    threshold: 0.2, // Element is visible at 20% visibility
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Fade in when in view
    } else {
      controls.start("hidden"); // Fade out when out of view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="hidden" // Ensure fade-out when navigating away
      variants={{
        hidden: { opacity: 0, y: 30, transition: { duration: 0.5, ease: "easeInOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
