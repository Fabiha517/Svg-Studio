import { useSvgStore } from "../store/useSvgStore";
import GalleryCard from "../components/GalleryCard";
const Favourites = () => {
	const gallery = useSvgStore((state) => state.gallery);
	const favourites = useSvgStore((state) => state.favourites);
	const favouriteSvgs = gallery.filter((item) => favourites.includes(item.id));
	return(
<div>

  	{favouriteSvgs.length === 0 ? (
				<>
					<div className="flex items-center justify-center h-[70vh] text-white/60">
						No Fav SVGs generated yet.
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
