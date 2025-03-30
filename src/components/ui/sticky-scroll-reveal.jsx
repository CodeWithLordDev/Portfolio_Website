
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import "../../App.css"
export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const middleLineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  
  return (
    (<motion.div
      
      className="h-[30rem] font-crimsonText overflow-y-auto about flex justify-evenly relative space-x-10 rounded-md p-10"
      ref={ref}>
      <div className="div relative flex items-start px-4">
        <motion.div 
        initial={{ opacity: 0,x: -50  }}
        whileInView={{ opacity: 1,x:0}}
        transition={{ duration: 0.8 }}
        className="w-full">
          {content.map((item, index) => (
            <motion.div key={item.title + index} 
            
            className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                  x:-50
                }}
                whileInView={{opacity:1, x:0}}
                transition={{ duration: 0.8,delay:0.5 }}
                // animate={{
                //   opacity: activeCard === index ? 1 : 0.3,
                // }}
                className="text-2xl font-bold text-gray-700 dark:text-slate-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  x:-50
                }}
                whileInView={{ opacity: 1,x:0}}
                transition={{ duration: 0.8,delay:1 }}
                // animate={{
                //   opacity: activeCard === index ? 1 : 0.3,
                // }}
                className="text-kg text-gray-600 dark:text-slate-300 max-w-sm mt-10">
                {item.description}
              </motion.p>
            </motion.div>
          ))}
          <div className="h-40" />
        </motion.div>
      </div>
      {/* <div ref={middleLineRef} className="hidden lg:block h-full w-px bg-gray-300" /> */}
      <div
        className={cn(
          "hidden lg:block h-[20rem] w-[35rem] rounded-md  sticky top-10 overflow-hidden",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>)
  );
};
