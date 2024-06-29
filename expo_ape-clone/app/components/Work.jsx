import React from 'react'

function Work() {
  return (
    <div className='py-20 mx-10 relative'>
      <div className='flex gap-1 items-center'>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex items-center justify-center" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
          <h1>Featured Projects</h1>
      </div>
      <h1 className='text-6xl sm:text-9xl my-4'>Work</h1>
      <p className='w-100'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
      <div className='mt-10 flex flex-col gap-3  justify-center items-center'>
            <div>
                <img className="sm:h-80 sm:w-80 sm:object-cover" src="https://images.unsplash.com/photo-1716881765668-5e191e9b284a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D" alt="" />
                <h1 className="font-semibold mt-4 ">Columbia Pictures</h1>
                <h1 className="font-light " >Celebrating a century of Cinema</h1>
            </div>
            <div  >
                <img className="sm:h-80 sm:w-80 sm:object-cover" src="https://images.unsplash.com/photo-1717034231682-96bde6d558f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D" alt="" />
                <h1 className="font-semibold mt-4 ">Rino & Pelle</h1>
                <h1 className="font-light " >Efforless chic lifestyle</h1>
            </div>
            <div>
                <img className="sm:h-80 sm:w-80 sm:object-cover" src="https://images.unsplash.com/photo-1717155737031-d9ea5ecd930e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D" alt="" />
                <h1 className="font-semibold mt-4 ">Aebele Interior</h1>
                <h1 className="font-light " >Luxurious design experience</h1>
            </div>
            <div>
                <img className="sm:h-80 sm:w-80 sm:object-cover" src="https://images.unsplash.com/photo-1715388693694-7339eb3a4e77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D" alt="" />
                <h1 className="font-semibold mt-4 ">Pixelflakes</h1>
                <h1 className="font-light" >Architectural marketing agency</h1>
            </div>
        </div>
    </div>
  )
}

export default Work