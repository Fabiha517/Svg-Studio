import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSvgStore = create(
	persist(
		(set) => ({
			gallery: [],
			favourites: [],
			view: "prompt",
			currentSvg: "",
			currentSvgId: null,
			text: "",

			setView: (view) => set({ view }),
			setCurrentSvg: (svg) => set({ currentSvg: svg }),
			setCurrentSvgId: (id) => set({ currentSvgId: id }),
			setText: (text) => set({ text }),
			addSvg: (svg) =>
				set((state) => ({
					gallery: [...state.gallery, svg],
				})),

			deleteSvg: (id) =>
				set((state) => ({
					gallery: state.gallery.filter((item) => item.id !== id),
					favourites: state.favourites.filter((favId) => favId !== id),
				})),

			toggleFav: (id) =>
				set((state) => ({
					favourites: state.favourites.includes(id)
						? state.favourites.filter((fav) => fav !== id)
						: [...state.favourites, id],
				})),
		}),
		{
			name: "svg-studio-storage",
		},
	),
);
