import logo from "../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import profile from "../assets/images/profile.png";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="  sticky top-0 p-4 pl-8 pr-8 flex items-center justify-between max-w-screen h-16 bg-[#071018] z-50 border-b border-[#8FFFD4]/10 ">
			<div className="w-30 pt-4 ">
				<img src={logo} alt="SVG Studio" />
			</div>

			<div class=" hidden md:flex links text-white  gap-10 border-none mr-15">
				<NavLink
					to="/"
					end
					className={({ isActive }) =>
						`pb-1 focus-visible:outline-none ${isActive ? "border-b-2 border-[#53EAFD] LinkGlow" : "text-white hover:text-cyan-300"}`
					}>
					Home
				</NavLink>
				<NavLink
					to="/gallery"
					end
					className={({ isActive }) =>
						`pb-1 focus-visible:outline-none ${isActive ? "border-b-2 border-[#53EAFD] LinkGlow" : "text-white hover:text-cyan-300"}`
					}>
					Gallery
				</NavLink>
				<NavLink
					to="/favourites"
					end
					className={({ isActive }) =>
						`pb-1 focus-visible:outline-none ${isActive ? "border-b-2 border-[#53EAFD] LinkGlow" : "text-white hover:text-cyan-300"}`
					}>
					Favourites
				</NavLink>
			</div>

			<div
				className={`fixed top-0 right-0 h-screen w-[80vw] bg-[#071018] border-l border-[#1F2937]
				z-700 shadow-2xl transition-transform duration-300 ease-in-out
				${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
				<div className="flex justify-between items-center p-6 border-b border-[#1F2937]">
					<button
						onClick={() => setMenuOpen(false)}
						className="text-3xl text-white hover:text-violet-400 transition cursor-pointer">
						<FiX />
					</button>
				</div>
				<div class="flex flex-col mt-6">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							`px-8 py-4 transition text-white ${
								isActive ? "bg-cyan-400 text-white" : "hover:bg-[#1B2332]"
							}`}
							  onClick={() => setMenuOpen(false)}>
						Home
					</NavLink>
					<NavLink
						to="/gallery"
						end
						className={({ isActive }) =>
							`px-8 py-4 transition text-white ${
								isActive ? "bg-cyan-400 text-white" : "hover:bg-[#1B2332]"
							}`}
							  onClick={() => setMenuOpen(false)}>
						Gallery
					</NavLink>
					<NavLink
						to="/favourites"
						end
						className={({ isActive }) =>
							`px-8 py-4 text-white transition ${
								isActive ? "bg-cyan-400 text-white" : "hover:bg-[#1B2332]"
							}`}
							  onClick={() => setMenuOpen(false)}	>
						Favourites
					</NavLink>
				</div>
			</div>
<div class="flex gap-5 items-center">
			<div>

				<img src={profile} alt="profile" className="h-10 " />
			</div>
			<button
				onClick={() => setMenuOpen(true)}
				className="md:hidden text-3xl text-white hover:text-violet-400 transition cursor-pointer  h-fit">
				<FiMenu />
			</button>
			</div>
		</div>
	);
};

export default Navbar;

{
	/*
		
		




			<div
		
			>
			
				

		
				<div className="flex flex-col mt-6">

					<NavLink
						to="/"

						end
						onClick={() => setMenuOpen(false)}
						className={({ isActive }) =>
							`px-8 py-4 transition ${
								isActive
									? "bg-violet-600 text-white"
									: "hover:bg-[#1B2332]"
							}`
						}
					>
						🏠 Home
					</NavLink>

					<NavLink
						to="/movies"
						onClick={() => setMenuOpen(false)}
						className={({ isActive }) =>
							`px-8 py-4 transition ${
								isActive
									? "bg-violet-600 text-white"
									: "hover:bg-[#1B2332]"
							}`
						}
					>
						🎬 Movies
					</NavLink>

					<NavLink
						to="/favorites"
						onClick={() => setMenuOpen(false)}
						className={({ isActive }) =>
							`px-8 py-4 transition ${
								isActive
									? "bg-violet-600 text-white"
									: "hover:bg-[#1B2332]"
							}`
						}
					>
						❤️ Favorites
					</NavLink>
				</div>

			
			</div>
		*/
}
