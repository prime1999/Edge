import { useEffect, useRef } from "react";
import { easeIn, motion } from "framer-motion";
import hero from "../assets/images/hero4.jpg";
import NavBar from "../components/NavBar";
import { UrusSvgLarge, UrusSvgSmall } from "../utilities/UrusSvg";

const Home = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playBackRate = 0.5;
		}
	}, []);
	return (
		<motion.div
			className="bg-cover bg-center bg-no-repeat w-full h-full relative"
			style={{ backgroundImage: `url(${hero})` }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, ease: "easeInOut" }}
		>
			<div
				className="w-full h-full"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
			>
				<NavBar />
				<div className="hidden w-full items-center justify-center text-center mt-8 md:flex">
					<UrusSvgLarge />
				</div>
				<div className="absolute left-20 top-30 md:hidden">
					<UrusSvgSmall />
				</div>
				<div className="absolute -bottom-10 left-12 mx-auto w-11/12 h-1/4 text-white font-poppins font-bold md:bottom-50">
					<div className="flex items-center justify-between w-11/12 mx-auto text-xs md:w-1/2 md:text-sm">
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: easeIn }}
						>
							<h4>Top Speed:</h4>
							<p className="text-gray-300 md:text-gray-500">250Mph</p>
						</motion.div>
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: easeIn, delay: 0.3 }}
						>
							<h4>0-6 Mph:</h4>
							<p className="text-gray-300 md:text-gray-500">2.5 Seconds</p>
						</motion.div>
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: easeIn, delay: 0.6 }}
						>
							<h4>Power:</h4>
							<p className="text-gray-300 md:text-gray-500">887Hp (661Kw)</p>
						</motion.div>
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: easeIn, delay: 0.9 }}
						>
							<h4>Engine:</h4>
							<p className="text-gray-300 md:text-gray-500">
								4.6 Litre v8 Hybrid
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
