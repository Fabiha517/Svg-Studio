		import PromptSection from "../components/PromptSection";
		import FeatureCards from "../components/FeatureCards";
		import LoadingSkeleton from "../components/LoadingSkeleton";
		import GeneratedSvg from "../components/GeneratedSvg";
		import { useSvgStore } from "../../store/useSvgStore";
		import { generateSvg } from "../services/gemini";
		const Home = () => {

			const addSvg = useSvgStore((state) => state.addSvg);
			const view = useSvgStore((state) => state.view);
			const setView = useSvgStore((state) => state.setView);
			const setCurrentSvg = useSvgStore((state) => state.setCurrentSvg);
			const setCurrentSvgId = useSvgStore((state) => state.setCurrentSvgId);
			const text = useSvgStore((state) => state.text);
			
			const handleGenerate = async () => {
				
				if (!text.trim()){
		
					return;
				}
				
				setView("loading");
				
				const { title, svg } = await generateSvg(text);
				const responsiveSvg = svg
					.replace(/width="[^"]*"/, 'width="100%"')
					.replace(/height="[^"]*"/, 'height="100%"');
				const svgObject = {
					id: crypto.randomUUID(),
					title,
					svg: responsiveSvg,
					createdAt: Date.now(),
				};
				setCurrentSvg(svgObject.svg);
				setCurrentSvgId(svgObject.id);
				addSvg(svgObject);
				setView("result");
			};

			return (
				<section className="flex items-center justify-center min-h-[calc(100vh-80px)] p-3  md:pb-0 ">
					<div className="flex flex-col gap-6 items-center justify-center ">
						<h1 className="font-bold text-4xl text-white text-center">
							Create beautiful <span className="text-cyan-500">SVGs</span> <br />
							<span className="font-medium text-2xl ">	
								from simple text prompts
							</span>
						</h1>

						{view === "prompt" && (
							<>
								<PromptSection handleGenerate={handleGenerate}/>
								<FeatureCards />
							</>
						)}
						{view === "loading" && <LoadingSkeleton setView={setView} />}
						{view === "result" && (
							<GeneratedSvg  handleGenerate={handleGenerate}/>
						)}
					</div>
				</section>
			);
		};

		export default Home;
