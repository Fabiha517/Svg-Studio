
import {ArrowLeft} from 'lucide-react'

const BackToPromptBtn = ({setView}) => {
  return (
   <div className="inline-flex items-center gap-3 rounded-full bg-[#26c6da] hover:bg-cyan-400 px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,.35)] cursor-pointer" 
   onClick={()=>setView("prompt")}
   >
    <ArrowLeft size={15}/>
   Back To Prompt
   </div>
  )
}

export default BackToPromptBtn
