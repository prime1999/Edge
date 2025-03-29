"use client";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import audiJeep from "../assets/images/cars/audi-jeep.png";
import bmwx from "../assets/images/cars/bmw-x-series-x6.png";
import lambo from "../assets/images/cars/lamborghini-revuelto.png";
import bugatti from "../assets/images/cars/bugatti_w16_mistral.png";
import maclernJeep from "../assets/images/cars/maclern_jeep.png";
import maclern from "../assets/images/cars/mclaren.png";

const Slider = () => {
	const sliderRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	const imagesArray = [
		{
			name: "audi jeep",
			description: "The best driver's car",
			image: audiJeep,
			brand: "audi",
			performance: {
				topSpeed: "250",
				mile: "4.2",
				maxPower: "261",
				maxTorque: "500",
			},
		},
		{
			name: "bmw-x6",
			description: "Power meets luxury",
			image: bmwx,
			brand: "bmw",
			performance: {
				topSpeed: "250",
				mile: "4.2",
				maxPower: "617",
				maxTorque: "540",
			},
		},
		{
			name: "lamborghini revuelto",
			description: "Exotic performance",
			image: lambo,
			brand: "lamborghini",
			performance: {
				topSpeed: "350",
				mile: "2.5",
				maxPower: "1015",
				maxTorque: "725",
			},
		},
		{
			name: "bugatti W16",
			description: "Speed redefined",
			image: bugatti,
			brand: "bugatti",
			performance: {
				topSpeed: "400",
				mile: "2.5",
				maxPower: "1001",
				maxTorque: "1600",
			},
		},
		{
			name: "mclaren jeep",
			description: "Style meets power",
			image: maclernJeep,
			brand: "mclaern",
			performance: {
				topSpeed: "332",
				mile: "10.1",
				maxPower: "750",
				maxTorque: "465",
			},
		},
		{
			name: "mclaren",
			description: "Engineered for thrill",
			image: maclern,
			brand: "mclaern",
			performance: {
				topSpeed: "341",
				mile: "10.3",
				maxPower: "720",
				maxTorque: "770",
			},
		},
	];

	// Get correct width for drag constraints
	useEffect(() => {
		if (sliderRef.current) {
			setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
		}
	}, []);

	// Handle Next and Previous Slide
	const nextSlide = () => {
		if (imagesArray.length - 1 === currentIndex) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex((prev) =>
				prev < imagesArray.length - 1 ? prev + 1 : prev
			);
		}
	};

	const prevSlide = () => {
		if (currentIndex === 0) {
			setCurrentIndex(imagesArray.length - 1);
		} else {
			setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
		}
	};

	return (
		<div className="w-screen h-screen flex justify-center items-center overflow-hidden">
			<motion.div
				ref={sliderRef}
				className="flex w-full h-full"
				animate={{ x: `-${currentIndex * 100}vw` }}
				transition={{ type: "spring", stiffness: 200, damping: 30 }}
				drag="x"
				dragConstraints={{ left: -width, right: 0 }}
				onDragEnd={(event, info) => {
					if (info.offset.x < -50 && info.velocity.x < -1) {
						nextSlide();
					} else if (info.offset.x > 50 && info.velocity.x > 1) {
						prevSlide();
					}
				}}
			>
				{imagesArray.map((slide, index) => (
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex} // Ensures animation resets for each new slide
							className="relative min-w-full h-full flex flex-col justify-center items-center p-5 overflow-hidden"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							// exit={{ opacity: 0, scale: 0.8 }} // Smooth transition between slides
							transition={{ duration: 0.5 }}
						>
							<div className="text-center text-black z-10">
								{/* Title Animation */}
								<motion.h1
									className="text-4xl text-slate-300 font-extrabold uppercase lg:text-6xl"
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 1, ease: "easeInOut" }}
								>
									{slide.name}
								</motion.h1>

								{/* Description Animation */}
								<motion.p
									className="text-gray-400 font-semibold text-lg"
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 1 }}
								>
									{slide.description}
								</motion.p>

								<motion.img
									src={slide.image}
									alt={slide.name}
									className="w-3/4 max-h-[70vh] object-contain mx-auto mt-6"
									initial={{ x: 500, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 1, ease: "easeInOut" }}
								/>
							</div>
							<div>
								<ul className="flex justify-between font-poppins">
									<motion.li
										className="py-2 px-6 border-r border-gray-400 flex justify-center items-center align-middle text-center flex-col"
										initial={{ x: -50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<p className="uppercase text-xs text-gray-500">
											maximum speed
										</p>
										<h4 className="font-bold text-3xl mt-2 lg:text-4xl">
											{slide.performance.topSpeed}
											<span className="text-[20px]">s</span>
										</h4>
									</motion.li>
									<motion.li
										className="py-2 px-6 border-r border-gray-400 flex justify-center items-center align-middle text-center flex-col"
										initial={{ x: -50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<p className="uppercase text-xs text-gray-500">
											maximum Power
										</p>
										<h4 className="font-bold text-3xl mt-2 lg:text-4xl">
											{slide.performance.maxPower}
											<span className="text-[20px]">Ps</span>
										</h4>
									</motion.li>
									<motion.li
										className="py-2 px-6 border-r border-gray-400 flex justify-center items-center align-middle text-center flex-col"
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<p className="uppercase text-xs text-gray-500">
											maximum Torque
										</p>
										<h4 className="font-bold text-3xl mt-2 lg:text-4xl">
											{slide.performance.maxTorque}
											<span className="text-[20px]">Nm</span>
										</h4>
									</motion.li>
									<motion.li
										className="py-2 px-6 flex justify-center items-center align-middle text-center flex-col"
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<p className="uppercase text-xs text-gray-500">0-100KPH</p>
										<h4 className="font-bold text-3xl mt-2 lg:text-4xl">
											{slide.performance.mile}
											<span className="text-[20px]">s</span>
										</h4>
									</motion.li>
								</ul>
							</div>
						</motion.div>
					</AnimatePresence>
				))}
			</motion.div>

			{/* Navigation Buttons */}
			<div className="absolute bottom-5 -left-30 border border-gray-300 p-2 rounded-3xl lg:bottom-12 lg:left-20">
				<motion.button
					onClick={prevSlide}
					className="text-black p-1 text-xl lg:text-3xl lg:p-3"
					initial={{ x: 0 }}
					whileHover={{ x: -10 }}
					transition={{ duration: 0.5 }}
				>
					<IoIosArrowBack />
				</motion.button>
				<motion.button
					onClick={nextSlide}
					className="text-black p-1 text-xl lg:text-3xl lg:p-3"
					initial={{ x: 0 }}
					whileHover={{ x: 10 }}
					transition={{ duration: 0.5 }}
				>
					<IoIosArrowForward />
				</motion.button>
			</div>
		</div>
	);
};

export default Slider;
