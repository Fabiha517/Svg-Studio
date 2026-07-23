import { useSvgStore } from "../store/useSvgStore";
import GalleryCard from "../components/GalleryCard";
import NoFavSvg from "../assets/icons/NoFavSvg.svg"
import { Link } from "react-router-dom";
import {FiImage} from "react-icons/fi"
const Favourites = () => {
	const gallery = useSvgStore((state) => state.gallery);
	const favourites = useSvgStore((state) => state.favourites);
	const favouriteSvgs = gallery.filter((item) => favourites.includes(item.id));
	return(
<div>

  	{favouriteSvgs.length === 0 ? (
				<>
				<div className="flex flex-col gap-5 items-center justify-center h-[70vh] text-white/60 p-7">
						<img src={NoFavSvg} alt="" className="h-[45vh] pt-10"/>
<h1 className="text-2xl md:text-4xl text-white font-bold">No Favourites yet</h1>
<p className="text-center">Save SVGs you love and they will appear here</p>
	<Link
			to="/gallery"
			className="inline-flex items-center gap-3 rounded-full bg-[#1d7f8d] hover:bg-cyan-400 px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,.35)]"
		>
			<FiImage size={20} />
	Browse Gallery
		</Link>
					</div>
				</>
			) : (
				<>
        <div class="p-6 ">
        <h1 className="text-5xl text-white font-semibold mb-2 ">Favourites</h1>
        <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-5 ">
          
					{favouriteSvgs.map((item) => (
						<GalleryCard key={item.id} {...item}  />
					))}
          </div>
          </div>
				</>
			)}
</div>
 )
}

export default Favourites;
