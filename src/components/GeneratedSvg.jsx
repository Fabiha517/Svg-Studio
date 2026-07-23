import BackToPromptBtn from "./BackToPromptBtn";
import { Copy, Download, RefreshCwIcon } from "lucide-react";
import { CopySvg } from "../utlis/CopySvg";
import { DownloadSvg } from "../utlis/DownloadSvg";
import { useSvgStore } from "../../store/useSvgStore";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const GeneratedSvg = ({ handleGenerate }) => {

	const favourites = useSvgStore((state) => state.favourites);
	const toggleFav = useSvgStore((state) => state.toggleFav);
	const setView = useSvgStore((state) => state.setView);
	const svg = useSvgStore((state) => state.currentSvg);
	const svgId = useSvgStore((state) => state.currentSvgId);
	const isFavourite = favourites.includes(svgId);

	return (
		<div className=" flex flex-col w-[60vw] justify-center items-center gap-6 h-[70vh] md:h-[60vh] relative pb-20	">
			<div class="w-fit flex gap-3 pt-20 cursor-pointer">
				<BackToPromptBtn setView={setView} />
			</div>

			<div className="flex flex-col md:flex-row gap-3 w-full h-[40vh] md:h-[80%] ">
				<div class="rounded-2xl bg-[#0b1015] border border-[#8FFFD4]/15  flex flex-col items-center justify-center  w-full md:w-[55%] h-[50%] md:h-full p-3 pl-0 pr-0">
					<div
						className="w-full h-full"
						dangerouslySetInnerHTML={{
							__html: svg,
						}}
					/>
				</div>
				<div className="custom-scrollbar rounded-2xl border border-[#8FFFD4]/15 overflow-x-auto  w-full md:w-[50%] h-[50%] md:h-full  overflow-hidden bg-[#0b1015]">
					<div className=" custom-scrollbar p-6 overflow-auto">
						<div className="text-[#117c75] whitespace-pre-wrap break-all">
							{svg}
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-3 md:flex-row  md:w-[90%] justify-evenly items-center ">

				<div class="flex gap-5 justify-between ">
				<button
					className="action-btn cursor-pointer"
					onClick={() => CopySvg(svg)}>
					Copy SVG
					<span className="glow">
						<Copy />
					</span>
				</button>
				<button
					className="action-btn cursor-pointer"
					onClick={() => DownloadSvg(svg)}>
					Download SVG
					<span className="glow">
						<Download />
					</span>
				</button>
</div>
<div class="flex gap-5 justify-between ">
				<button
					className="glow bg-[#0b1015] p-3  pl-5 pr-5 rounded-2xl  border border-[#8FFFD4]/15  md:w-fit cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[#8FFFD4]/40 "
					onClick={() => toggleFav(svgId)}>
					{isFavourite ? (
						<FaHeart className=" w-14  h-4 md:w-6 md:h-6 text-cyan-600 outline-0" />
					) : (
						<FaRegHeart className="w-14 h-4 md:w-6 md:h-6 text-white hover:text-cyan-800" />
					)}
				</button>
				<button
					className="action-btn cursor-pointer "
					onClick={handleGenerate}>
					Regenerate
					<span className="glow">
						<RefreshCwIcon />{" "}
					</span>
				</button>
				</div>
			</div>
		</div>
	);
};

export default GeneratedSvg;
