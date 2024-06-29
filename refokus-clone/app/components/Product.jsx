import React from 'react'
import Button from './Button'

function Product({val, mover, index}) {
  return (
    <div onMouseEnter={()=> mover(index)} onMouseLeave={()=>{
      if(index === 0 || index === 4){
      mover(null)}
    }} className='mx-auto max-w-6xl flex justify-between p-6 h-[13rem]'> 
        <h1 className='text-5xl'>{val.title}</h1>
        <div className='w-1/3'>
            <p className='text-[0.9vw] leading-none py-3 mb-2'>{val.desc}</p>
            <div className='flex gap-4 py-2'>
           {(val.live) &&  <Button title='Live project' />}
            {(val.case) && <Button title='Case Studies' />}
            </div>
        </div>
    </div>
  )
}

export default Product