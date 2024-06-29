"use client"

import React from 'react';
import Button from './Button';
import { useState } from 'react';

function Navbar() {
    const [index, setIndex] = useState(0);
  return (
    <div className="max-w-5xl mx-auto h-14  border-b-[1px] border-b-zinc-600 flex justify-between items-center">
          <div className='flex gap-24 py-8'>
              <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
              <div className="flex gap-14 font-extralight text-sm">
                  {
                      ["Home", "Work", "Culture","", "News"].map((e,ind) => {
                        return(
                            <>
                                <div className="flex justify-center items-center gap-1 hover:cursor-pointer" onClick={() => setIndex(ind)}>
                                    {(ind === index) && <div className='h-2 w-2 rounded-full  bg-green-600'></div>}
                                    <a className=''>{e}</a>
                                    {(e.length === 0)? <div className='w-[0.2px] h-10 bg-zinc-600'></div>: null}
                                </div> 
                            </>   
                        )
                      })
                  }
              </div>
          </div>
          <div>
            <Button />
          </div>
    </div>
  )
}

export default Navbar