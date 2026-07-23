import { useSvgStore } from "../store/useSvgStore";
import GalleryCard from "../components/GalleryCard";
import NoSvg from "../assets/icons/NoSvg.svg"
import { Link } from "react-router-dom";
import {FiHome} from "react-icons/fi"
const Gallery = () => {
	const gallery = useSvgStore((state) => state.gallery);
	
	return (
		<div>
			{gallery.length === 0 ? (
				<>
					<div className="flex flex-col gap-5 items-center justify-center h-[70vh] text-white/60 p-7">
						<img src={NoSvg} alt="" className="h-[45vh] pt-10"/>
<h1 className="text-2xl md:text-4xl text-white font-bold">No SVGs yet</h1>
<p className="text-center">Generate your first svg and it will appear here</p>
 <Link
    to="/"
    className="inline-flex items-center gap-3 rounded-full bg-[#1d7f8d] hover:bg-cyan-400 px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,.35)]"
  >
    <FiHome size={20} />
    Return Home
  </Link>
					</div>
				</>
			) : (
				<>
        <div class="p-6 ">
        <h1 className="text-5xl text-white font-semibold mb-2 ">Gallery</h1>
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-5 ">
          
					{gallery.map((item) => (
						<GalleryCard key={item.id} {...item}  />
					))}
          </div>
          </div>
				</>
			)}
		</div>
	);
};

export default Gallery;
