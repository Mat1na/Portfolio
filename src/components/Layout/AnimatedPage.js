import React from 'react'
import { motion ,useIsPresent} from "framer-motion"

function AnimatedPage({children ,isVisible}) {
    const isPresent = useIsPresent();
  return (
    
   
    <motion.div  initial={{ scaleX: 2}}
    animate={{ scaleX: 0, transition: { duration: 2, ease: "circOut" } }}
    exit={{ scaleX: 1, transition: { duration: 2, ease: "circIn" } }}
    style={{ originX: isPresent ? 0 : 1 }}
    className="privacy-screen">
        {children}
    </motion.div> 
      
  )
}

export default AnimatedPage