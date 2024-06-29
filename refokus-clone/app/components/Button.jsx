import { BsArrowReturnRight } from "react-icons/bs";

export default function Button({title="Get Started"}){
    return(
        <>
         <div className="h-6 rounded-full p-2 bg-zinc-200 flex justify-between items-center gap-2 text-black text-sm font-light">{title} <i class="ri-corner-down-right-fill"></i></div>
        </>
    )
}