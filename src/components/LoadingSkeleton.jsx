import svgSkeleton from "../assets/icons/svgSkeleton.png";
import BackToPromptBtn from "../components/BackToPromptBtn";
const LoadingSkeleton = ({ setView }) => {
	return (
		<div className="flex flex-col w-[60vw] justify-center items-center gap-6 ">
			<div class="w-fit flex gap-3">
				<BackToPromptBtn setView={setView} />
			</div>
			<div class="flex flex-col md:flex-row gap-6 justify-center">
				<div class="rounded-2xl bg-[#101A23] border border-[#8FFFD4]/15 p-6 flex flex-col items-center justify-center  w-full md:w-[65%]  ">
					<img
						src={svgSkeleton}
						className="w-[70%]  h-[90%] animate-pulse opacity-70"
						alt=""
					/>
					<p className="text-white/50 pt-3">
						Your generated svg will appear here
					</p>
				</div>
				<div class=" rounded-2xl w-full md:w-[35%] bg-[#101A23] border border-[#8FFFD4]/15 p-6">
					<div className="space-y-4 animate-pulse">
						<div className="h-4 w-3/4 rounded bg-white/10"></div>

						<div className="h-4 w-full rounded bg-white/10"></div>

						<div className="h-4 w-5/6 rounded bg-white/10"></div>

						<div className="h-4 w-2/3 rounded bg-white/10"></div>

						<div className="h-4 w-full rounded bg-white/10"></div>

						<div className="h-4 w-4/5 rounded bg-white/10"></div>

						<div className="h-4 w-3/5 rounded bg-white/10"></div>

						<div className="h-4 w-full rounded bg-white/10"></div>

						<div className="h-4 w-2/5 rounded bg-white/10"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSkeleton;
