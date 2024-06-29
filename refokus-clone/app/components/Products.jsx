import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

const arr = [
    {title:"Arqitel", desc:"Lorem ipsum dolor ore nostrum provident aliquam maxime animi rem nihil delectus porro minus.", live: true, case: true},
    {title:"TTR", desc:"Lorem ipsum dolor ore nostrum provident aliquam maxime animi rem nihil delectus porro minus.", live: true, case: true},
    {title:"YIR 2024", desc:"Lorem ipsum dolor ore nostrum provident aliquam maxime animi rem nihil delectus porro minus.", live: true, case: true},
    {title:"Yahoo", desc:"Lorem ipsum dolor ore nostrum provident aliquam maxime animi rem nihil delectus porro minus.", live: true, case: true},
    {title:"Arqitel", desc:"Lorem ipsum dolor ore nostrum provident aliquam maxime animi rem nihil delectus porro minus.", live: true, case: true}
]

function Products() {
  const [pos, setPos] = useState(null);
  const mover = (val) =>{
    if(!(val === null)){
      setPos(val*13)
    }else{
      setPos(null)
    }
  }

  return (
   <div className='mt-40 relative'>
    {
        arr.map((e, index) => <Product val={e} mover={mover} index={index} />)
    }
    <div className='absolute w-full h-full top-0 pointer-events-none'>
      {(pos === null)? null:
      <motion.div 
      transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
      initial={{y:pos, x:"-50%"}} 
      animate={{y:pos+`rem`}}
      className='window absolute h-[13rem] w-80  left-[40%] overflow-hidden'>
          <motion.div animate={{y:-pos+`rem`}}  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='h-full w-full' >
            <img src='https://images.unsplash.com/photo-1716270062457-adda195eeff2?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img' />
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}}  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='h-full w-full  object-cover'>
            <img className="" src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=3018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='h-full w-full ' >
            <img src="https://images.unsplash.com/photo-1706562018185-8b60653f4263?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="img" />
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='h-full w-full' >
            <img src="https://images.unsplash.com/photo-1646974708582-3dced57e0a25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="img" />
          </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} className='h-full w-full' >
            <img src="https://images.unsplash.com/photo-1716467175711-2e9321925230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="img" />
          </motion.div>
      </motion.div>}

    </div>
   </div>
  )
}

export default Products