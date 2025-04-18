import React, { useRef } from "react";
import { motion } from "framer-motion";
const TiltGlareCard = ({ onClick, image, title, description }) => {

  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glare = glareRef.current;

    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) /10) ; // Adjust tilt intensity
    const tiltY = ((x - centerX) /10) ;

    const glareX = ((x / rect.width) * 100).toFixed(2);
    const glareY = ((y / rect.height) * 100).toFixed(2);

    // Apply tilt effect
    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    // Apply glare effect
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glare = glareRef.current;

    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (glare) glare.style.background = "none";
  };

  return (
    <motion.div
    initial={{
            opacity:0,
            x:-80
          }}
    whileInView={{
      opacity:1,
      x:0,
    }}
    transition={{
      duration:3
    }}
    viewport={{ once: true }}

      ref={cardRef}
      className="w-full h-96 relative rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 bg-gray-800 dark:bg-[#1E1E1E]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
        
          src={image}
          alt={title || "Card Image"}
          className="w-full h-full object-contain "
        />
      </div>
      {/* Glare Layer */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-lg"
      ></div>
      {/* Card Content */}
      <div className="absolute bottom-4 left-4 text-gray-500 dark:text-white z-10 " onClick={onClick}>
        <motion.h2 
        initial={{
          opacity:0,
          x:-150
        }
        }
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:3,
          delay:0.5
        }}
        viewport={{ once: true }}

        className="text-lg text-gray:400 dark:text-slate-500 font-bold">{title || "Card Title"}</motion.h2>
        <motion.p 
        initial={{
          opacity:0,
          x:-150
        }
        }
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:3,
          delay:1
        }}
        viewport={{ once: true }}

        className="text-sm text-gray-300">{description || "Card description goes here."}</motion.p>
      </div>
    </motion.div>
  );
};

export default TiltGlareCard;
