import { motion } from "framer-motion";

function Card({ widthClass, text, hover }) {
    return (
      <motion.div whileHover={{backgroundColor: hover && "#7443ff"}} className={`${widthClass} bg-zinc-800 rounded-lg p-3`}>
        <div className="flex flex-col justify-between h-full">
        <motion.div whileHover={{padding:"0px 5px"}} className="flex flex-col gap-6">
          <div className='flex justify-between items-center'>
            <h1 className="text-zinc-200 text-[0.9vw]">{text.sub1}</h1>
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="text-2xl">{text.sub2}</div>
        </motion.div>
        <div>
            {text.footer && <h4 className="text-zinc-300 text-[0.9vw]">{text.footer}</h4>}
            {text.heading 
            &&
            <div>
               <div className="text-7xl tracking-tight">{text.heading}</div>
               <button className="p-2 border-[0.1vw] mt-6 border-zinc-400 rounded-full">Contact us</button>
            </div>}
        </div>

        </div>
      </motion.div>
    )
  }
  
  export default Card;