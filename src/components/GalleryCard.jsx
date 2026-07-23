import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Copy, Download, Trash2 } from "lucide-react";
import { DownloadSvg } from "../utlis/DownloadSvg";
import { CopySvg } from "../utlis/CopySvg";
import { useSvgStore } from "../../store/useSvgStore";

const GalleryCard = ({ id, svg, title, createdAt }) => {
	
	const toggleFav = useSvgStore((state) => state.toggleFav);
	const favourites = useSvgStore((state) => state.favourites);
	const deleteSvg = useSvgStore((state) => state.deleteSvg);
	const isFavourite = favourites.includes(id);
	const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

	return (
		<div className="relative bg-[#0b1015] border border-[#8FFFD4]/15 rounded-2xl overflow-hidden hover:border-[#8FFFD4]/40 transition-all duration-300 group h-[26vh] md:h-[33vh] lg:[39vh] ">
			<button
				onClick={() => toggleFav(id)}
				className="absolute top-4 right-4 z-10 cursor-pointer">
				{isFavourite ? (
					<FaHeart className="text-[#8FFFD4] text-lg" />
				) : (
					<FaRegHeart className="text-white/80 hover:text-[#8FFFD4] transition text-lg" />
				)}
			</button>

			<div
				className=" h-[80%] flex flex-col  items-start justify-end"
				style={{
					backgroundImage: `url("${svgUrl}")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="px-3 pb-2 ">
					<h3 className="text-white font-semibold text-sm md:text-lg line-clamp-2">
						{title}
					</h3>

					<p className="text-gray-500 text-sm">
						{new Date(createdAt).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</p>
				</div>
			</div>


			<div className="border-t border-[#8FFFD4]/10 flex justify-evenly py-2 md:py-3 h-[10%]">
				<button
					onClick={DownloadSvg}
					className="text-white/70 hover:text-[#8FFFD4] transition ">
					<Download size={18} className="cursor-pointer" />
				</button>

				<button
					onClick={()=>CopySvg(svg)}
					className="text-white/70 hover:text-[#8FFFD4] transition">
					<Copy size={18} className="cursor-pointer"/>
				</button>

				<button
					onClick={() => deleteSvg(id)}
					className="text-white/70 hover:text-red-400 transition">
					<Trash2 size={18} className="cursor-pointer"/>
				</button>
			</div>
		</div>
	);
};

export default GalleryCard;
