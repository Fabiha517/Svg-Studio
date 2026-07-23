import { Sparkles } from "lucide-react";
import { useSvgStore } from "../store/useSvgStore";
const PromptSection = ({ handleGenerate }) => {
	const text = useSvgStore((state) => state.text);
	const setText = useSvgStore((state) => state.setText);
	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<p className="text-white/50 text-center">
				Describe what you want to create and let AI generate <br /> scalable
				vector graphics for you
			</p>
			<div
				className="bg-[#101A23] border  border-[#8FFFD4]/15 text-white h-[20vh] md:h-[30vh] w-[75vw] md:w-[60vw]
        rounded-2xl mt-2 mb-2 md:mt-0 md:mb-0 relative overflow-hidden">
				<textarea
					placeholder="A minimal mountain logo with sunset..."
					value={text}
					onChange={handleChange}
					className="w-full h-[65%] resize-none rounded-2xl  
               p-5 text-[#F5F7FA] placeholder:text-[#6F7E8E]
               focus:outline-none focus:border-[#8FFFD4]/40 custom-scrollbar "></textarea>

				<button
					className="absolute bottom-5 right-5 rounded-xl bg-[#8FFFD4] px-2 md:px-5 py-2 text-[#071018] font-semibold hover:bg-[#67daae] transition flex gap-2 items-center justify-center cursor-pointer "
					onClick={() => {
						handleGenerate();
					}}>
					<Sparkles size={18} />
					Generate
				</button>
			</div>
		</div>
	);
};

export default PromptSection;
