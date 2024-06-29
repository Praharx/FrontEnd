import React from 'react'

function Stripe({val}) {
  return (
    <div className='min-w-[16.66%] flex justify-between p-4 border-zinc-700 border-r-[0.2px] border-b-[0.2px] border-t-[0.2px]'>
       <img src={val.uri} className='p-1 h-8' alt="" />
        <span className='text-zinc-400'>{val.num}</span>
    </div>
  )
}

export default Stripe