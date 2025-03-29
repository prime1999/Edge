import { motion } from "framer-motion";
import Slider from "../components/Slider";
import NavBar from "../components/NavBar";

const Cars = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1, ease: "easeInOut" }}
		>
			<NavBar />
			<Slider />
		</motion.div>
	);
};

export default Cars;
