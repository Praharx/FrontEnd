import React from 'react'

function Spread() {
  return (
    <div className='w-full h-[40vh] bg-white py-20'>
        <div className='max-w-screen-2xl mx-autobg-red-600 px-5 sm:px-10 flex justify-center items-center flex-col gap-4'>
        <div className='flex justify-center gap-1 items-center'>
                  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex items-center justify-center" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                  <h1>Work in Motion</h1>
              </div>
            <div className='heading'>
                <h1 className='capitalize text-6xl tracking-tighter text-center '>Spread</h1>
                <h1 className='capitalize text-6xl tracking-tighter '>the News</h1>
            </div>
            <div>
            <p className='text-center text-xl sm:text-sm font-medium sm:mt-24'>Our work is best experienced in motion.Don't<br />forget to put on your headphones.</p>
            
            </div>
            <a href="#" className='mx-auto border border-b-black text-center mb-10'>Browse all projects</a>
        </div>
    </div>
  )
}

export default Spread