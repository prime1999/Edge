import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="flex justify-between w-11/12 mx-auto mb-2 pt-3 text-gray-500 relative md:w-10/12">
			<NavLink to="/">
				<h1 className="text-5xl font-main font-extrabold text-yellow-500">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn" }}
					>
						E
					</motion.span>
					<motion.span
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
					>
						D
					</motion.span>
					<motion.span
						initial={{ x: -40, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }}
					>
						G
					</motion.span>
					<motion.span
						initial={{ x: -60, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn", delay: 0.9 }}
					>
						E
					</motion.span>
				</h1>
			</NavLink>
			<div className="w-1/2 lg:w-1/4">
				{/* ------------------------------------- list ------------------------------- */}
				<ul className="flex justify-between">
					{/* ------------------------------------- home ------------------------------- */}
					<motion.li
						className="relative"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn" }}
						whileHover="hover"
					>
						<NavLink to="/" className="relative z-10">
							Home
						</NavLink>
						<motion.span
							className="absolute bottom-0 left-0 w-1/4 h-[2px] bg-gray-500"
							variants={{
								hover: { width: "100%" },
							}}
							transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
						/>
					</motion.li>
					{/* ------------------------------------- cars ------------------------------- */}
					<motion.li
						className="relative"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
						whileHover="hover"
					>
						<NavLink to="/cars" className="relative z-10">
							Cars
						</NavLink>
						<motion.span
							className="absolute bottom-0 left-0 w-1/4 h-[2px] bg-gray-500"
							variants={{
								hover: { width: "100%" },
							}}
							transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
						/>
					</motion.li>
					{/* ------------------------------------- contact ------------------------------- */}
					<motion.li
						className="relative"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }}
						whileHover="hover"
					>
						<NavLink to="/contact" className="relative z-10">
							Contact
						</NavLink>
						<motion.span
							className="absolute bottom-0 left-0 w-1/4 h-[2px] bg-gray-500"
							variants={{
								hover: { width: "100%" },
							}}
							transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
						/>
					</motion.li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
