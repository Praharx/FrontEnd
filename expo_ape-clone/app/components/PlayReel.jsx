import React from 'react'

function PlayReel() {
  return (
      <div className='w-full h-[100vh] bg-black'>
          <div className='flex flex-col gap-10 py-10 relative'>
              <div className='flex justify-center gap-1 items-center text-white'>
                  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex items-center justify-center" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                  <h1>Work in Motion</h1>
              </div>
              <img className="h-[40vh] w-[30vw] mx-auto blur-sm mt-10" src="https://images.unsplash.com/photo-1717310627563-6244fc30dc5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="image"/>
              <div className='z-[4500] absolute sm:top-[25vh] left-[50%] -translate-x-[50%] text-white sm:text-9xl flex justify-between sm:gap-[20vw] items-center'>
                <div>
                    Play
                </div>
                <div>
                    Reel
                </div>
              </div>
              <p className='text-white text-center text-xl sm:text-sm font-medium sm:mt-24'>Our work is best experienced in motion.Don't<br />forget to put on your headphones.</p>
          </div>
      </div>
  )
}

export default PlayReel