import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
	FaXTwitter,
	FaLinkedin,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa6";
import NavBar from "../components/NavBar";

const Contact = () => {
	const phoneNumber = "2347068280718";
	const message = encodeURIComponent("Hello, I’d like to inquire about...");
	const handleClick = () => {
		window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
	};
	return (
		<>
			<NavBar />
			<motion.section
				className="text-slate-300 w-full h-full flex items-center justify-center"
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
			>
				<motion.div
					initial={{ y: -900 }}
					animate={{ y: 0 }}
					transition={{ type: "spring" }}
				>
					<h4 className="text-gray-400 text-2xl my-4 font-extrabold">
						Get in touch
					</h4>
					<div className="font-normal">
						<div className="my-2">
							<h6 className="text-slate-400 font-bold">Visit Us:</h6>
							<p className="text-sm">
								Mellanby Hall, University of Ibadan, Ibadan, Oyo, Nigeria.
							</p>
						</div>
						<div className="my-2">
							<h6 className="text-slate-400 font-bold">Drop a mail:</h6>
							<p className="text-sm">moshoodolabanji22@gmail.com</p>
						</div>
						<div className="my-2">
							<h6 className="text-slate-400 font-bold">Call Us:</h6>
							<p className="text-sm">07068280718</p>
						</div>
						<motion.button
							className="relative px-2 py-2 text-white rounded-md my-8 bg-yellow-500 w-[400px] mx-auto overflow-hidden"
							whileHover="hover"
							onClick={handleClick}
						>
							<motion.span
								className="absolute top-0 left-0 w-full h-full bg-yellow-600"
								initial={{ x: "-100%" }}
								variants={{
									hover: {
										x: "0%",
										transition: { duration: 0.5, ease: "easeInOut" },
									},
								}}
							/>
							<span className="flex justify-center items-center relative z-10">
								<FaWhatsapp /> <p className="text-md ml-2">Chat on whatsApp</p>
							</span>
						</motion.button>
						<div className="text-xl my-4 flex items-center justify-center">
							<motion.NavLink
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.7 }}
							>
								<FaFacebook className="cursor-pointer hover:text-yellow-500" />
							</motion.NavLink>
							<motion.NavLink
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
							>
								<FaInstagram className="mx-4 cursor-pointer hover:text-yellow-500" />
							</motion.NavLink>
							<motion.NavLink
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.3 }}
							>
								<FaLinkedin className="mr-4 cursor-pointer hover:text-yellow-500" />
							</motion.NavLink>
							<motion.NavLink
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.6 }}
							>
								<FaXTwitter className="cursor-pointer hover:text-yellow-500" />
							</motion.NavLink>
						</div>
					</div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default Contact;
