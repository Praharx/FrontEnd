import React from 'react'
import { motion } from 'framer-motion'

function Marquee({img, direction}) {
  return (
    <div className='flex overflow-hidden whitespace-nowrap mt-20'>
        
        <motion.div 
        initial={{ x:direction === "left"? "0%": "-100%"}}
        animate={{x:direction === "left"? "-100%": "0%"}}
        transition={{ease:"linear", duration: 10, repeat: Infinity}}
        className='flex py-10 gap-16 justify-center flex-shrink-0 mr-10'>
        {img.map(e => 
         <div> <img className="" src={e} alt='img'/></div>
         )}
        </motion.div>
        <motion.div 
        initial={{ x:direction === "left"? "0%": "-100%"}}
        animate={{x:direction === "left"? "-100%": "0%"}}
        transition={{ease:"linear", duration: 10, repeat: Infinity}}
        className='flex py-10 gap-16 justify-center flex-shrink-0'>
        {img.map(e => 
         <div> <img className="" src={e} alt='img'/></div>
         )}
        </motion.div>
        
    </div>
  )
}

export default Marquee

