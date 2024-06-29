import React from 'react'

function Landing() {
  return (
    <div className='h-[230vh] w-full relative select-none'>
        <div className='w-full h-full'>
            <img className="h-full w-full object-cover" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="landing-image" />
        </div>
        <div className='p-5 sm:p-28 text-white absolute mt-80 top-0 max-sm:mt-[50vh]'>
            <p className='text-xl'>Global digital design studio partnering with</p>
            <p className='text-xl'>brands and businessesthat create exceptional</p>
            <p className='text-xl'>experiences where people live, work, and unwind.</p>

            <div className='max-sm:text-7xl text-[30vh] mt-24 sm:ml-[-1.2vw] tracking-tighter leading-none max-sm:mt-6'>
            <h1 className=''>Digital</h1>
            <h1 className='max-sm:text-7xl tracking-tighter'>Design</h1>
            <h1 className='max-sm:text-7xl tracking-tighter'>Experience</h1>
            </div>
          <div className='para2 mt-24'>
              <p className="text-xl" >We help experience-driven companies thrive</p>
              <p className="text-xl" >by making their audience feel the refined</p>
              <p className="text-xl" >intricacies of their brand and product in the</p>
              <p className="text-xl" >digital space. Unfogettable journeys start</p>
              <p className="text-xl" >with a click.</p>
          </div>
          <div className="mt-10 border-white border-b w-fit">
             <h4>The Studio</h4>
            </div>
        </div>
    </div>
  )
}

export default Landing