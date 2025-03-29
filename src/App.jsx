import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from "react-router-dom";
import { Home, Cars, Contact } from "./pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.key}>
				<Route path="/" element={<Home />}>
					Home
				</Route>
				<Route path="/cars" element={<Cars />}>
					Design
				</Route>
				<Route path="/contact" element={<Contact />}>
					Contact
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default App;
