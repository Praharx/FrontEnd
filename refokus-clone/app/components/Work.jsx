import { motion, useScroll } from "framer-motion";
import { useState } from "react";

export default function Work(){
    const [images, setImages] = useState([
        {uri:"https://images.unsplash.com/photo-1716270062457-adda195eeff2?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,top:'50%',left:'50%',isActive: false},
        {uri:"https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=3018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,top:'56%',left:'44%',isActive: false},
        {uri:"https://images.unsplash.com/photo-1706562018185-8b60653f4263?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" ,top:'53%',left:'45%',isActive: false},
        {uri:"https://images.unsplash.com/photo-1708388001157-25e7d411cc8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" ,top:'60%',left:'53%',isActive: false},
        {uri:"https://images.unsplash.com/photo-1716467175711-2e9321925230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" ,top:'55%',left:'56%',isActive: false},
        {uri:"https://images.unsplash.com/photo-1646974708582-3dced57e0a25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" ,top:'65%',left:'55%',isActive: false}
    ]);

    const { scrollYProgress } = useScroll();
    scrollYProgress.on("change",(data)=>{
         function showImages(arr){
             setImages(prev =>(
                prev.map((item, index)=>{
                   return (
                     arr.indexOf(index) === -1?
                     {
                        ...item,isActive: false
                     }:
                     {
                        ...item,isActive: true
                     }
                   )  
                }))
             )
         }
          switch (Math.floor(data*100)){
              case 0:
                  showImages([])
                  break
              case 2:
                  showImages([0])
                  break
              case 8:
                  showImages([0, 1])
                  break
              case 13:
                  showImages([0, 1, 2])
                  break
              case 16:
                  showImages([0, 1, 2, 3])
                  break
              case 20:
                  showImages([0, 1, 2, 3, 4])
                  break
              case 24:
                  showImages([0, 1, 2, 3, 4, 5])
                  break
          }
          
    });

   
    

    return(
        <div className="w-full">
            <div className="max-w-5xl mx-auto">
                <div className="relative">
                    <h1 className="text-[28vw] font-sans font-medium text-center -mt-14">work</h1>
                    <div className="absolute h-full w-full top-0">
                      {
                        images.map(e =>{
                            return e.isActive && <img className="absolute rounded-lg w-60 h-40" src={e.uri} alt="" style={{top:e.top, left:e.left}}/>
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
    )
};