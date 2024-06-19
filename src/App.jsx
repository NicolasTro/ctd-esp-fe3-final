import Home from "./Routes/Home";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { routes } from "./utils/Routes";
import {Routes, Route, Navigate} from "react-router-dom"
import { useContextGlobalDentist } from "./Context/Context";

function App() {

	const {state} = useContextGlobalDentist()
	const tema = state.theme 
	return (
		<div className={`App ${tema==="dark"? "darkBack": ""}`}>
			<Navbar />
			<Routes>
				<Route path={routes.Home} element={<Home />} />
				<Route path={routes.Favs} element={<Favs />} />
				<Route path={routes.Details} element={<Detail />} />
				<Route path={routes.Contact} element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/" element={<Navigate to={routes.Home} />} />
				<Route path="*" element={<h1>Error 404 - Page not found</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
