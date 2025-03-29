import { motion } from "framer-motion";

const UrusSvgLarge = () => {
	return (
		<svg width="800" height="200" viewBox="0 0 800 300">
			<motion.text
				x="0"
				y="50%"
				dominantBaseline="middle"
				textAnchor="start"
				fontSize="120"
				fontWeight="bold"
				fill="transparent"
				stroke="#eab308"
				strokeWidth="2"
				className="font-main"
				initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
				animate={{ strokeDashoffset: 0 }}
				transition={{ duration: 5, ease: "easeInOut" }}
			>
				STYLE MEETS SPEED
			</motion.text>
		</svg>
	);
};

const UrusSvgSmall = () => {
	return (
		<svg width="800" height="200" viewBox="0 0 800 200">
			<motion.text
				x="0"
				y="50%"
				dominantBaseline="middle"
				textAnchor="start"
				fontSize="50"
				fontWeight="bold"
				fill="transparent"
				stroke="#eab308"
				strokeWidth="1"
				className="font-main"
				initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
				animate={{ strokeDashoffset: 0 }}
				transition={{ duration: 5, ease: "easeInOut" }}
			>
				STYLE MEETS SPEED
			</motion.text>
		</svg>
	);
};

export { UrusSvgLarge, UrusSvgSmall };
