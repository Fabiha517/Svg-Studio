import {  CodeXml, Pencil, Heart, Zap } from "lucide-react";


const FeatureCards = () => {
  return (
    	<div className="flex flex-col md:flex-row gap-3  w-[70vw] md:w-[55vw] ">
				<div class="flex gap-5 justify-between	">
					<div className="feature-card w-[60vw] h-[15vh] md:w-[13vw] md:h-[18vh]">
						<div className="flex flex-col items-center gap-1 ">
							<Zap size={15} className="glow " />
							<p className="glow">Fast</p>
						</div>
						<p className="text-sm text-white/50 text-center h-[50%] pt-3">
							Generate in <br /> seconds
						</p>
					</div>
					<div className="feature-card w-[60vw] h-[15vh] md:w-[13vw] md:h-[18vh]">
						<div className="flex flex-col items-center gap-1 ">
							<Pencil size={15} className="glow " />
							<p className="glow"> Editable</p>
						</div>

						<p className="text-sm text-white/50 text-center h-[50%] pt-3 ">
							Customise your SVGs
						</p>
					</div>
					</div>
						<div class="flex gap-5 justify-between">
					<div className="feature-card w-[60vw] h-[15vh] md:w-[13vw] md:h-[18vh] ">
						<div className="flex flex-col items-center gap-1  ">
							<CodeXml size={15} className="glow  " />
							<p className="glow ">Copy code </p>
						</div>

						<p className="text-sm text-white/50 text-center h-[50%] pt-3 ">
							Get clean svg code instantly
						</p>
					</div>
					<div className="feature-card w-[60vw] h-[15vh] md:w-[13vw] md:h-[18vh] pt-4">
						<div className="flex flex-col items-center gap-1 ">
							<Heart size={15} className="glow " />
							<p className="glow"> Favourites</p>
						</div>

						<p className="text-sm text-white/50 text-center h-[50%] pt-3 ">
							Save your favourites
						</p>
					</div>
					</div>
				</div>
			
  )
}

export default FeatureCards
