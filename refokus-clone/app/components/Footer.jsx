import React from 'react'

function Footer() {
  return (
    <div className='mx-auto max-w-4xl relative h-[30vh] pt-10 flex justify-between'>
          <div>
              <h1 className='text-[12vh]'>refokus.</h1>
              <div className='flex gap-7 mt-5'>
              <div className='text-[0.8vw] text-zinc-600 flex gap-10'>
                  {
                      ["Privacy Policy","Cookie Policy","Impressum","Terms"].map(item => {
                          return <h3>{item}</h3>
                      })
                  }
              </div>
        </div>

          </div>
        <div className='flex flex-col gap-7'>
            <h3 className='text-[1vw] text-zinc-600'>Socials</h3>
              <div className='text-[1vw] text-zinc-600 flex flex-col gap-2'>
                  {
                      ["Instagram", "Twitter(X)", "LinkedIn"].map(item => {
                          return <div>{item}</div>
                      })
                  }
              </div>
        </div>
        <div className='flex flex-col gap-7'>
            <h3 className='text-[1vw] text-zinc-600'>Sitemap</h3>
              <div className='text-[1vw] text-white flex flex-col gap-2'>
                  {
                      ["Home","Work","Careers","Contact"].map(item => {
                          return <div>{item}</div>
                      })
                  }
              </div>
        </div>
        <div className='w-[13vw] text-sm flex mt-[5vh]'>
            Refokus is a pioneering digital agency driven by design and empowered by technology.
        </div>
        
    </div>
  )
}

export default Footer 