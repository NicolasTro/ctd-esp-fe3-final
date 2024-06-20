import Home from "./Routes/Home";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { routes } from "./utils/Routes";
import { Routes, Route, Navigate } from "react-router-dom"
import { useContextGlobalDentist } from "./Context/Context";
import Layout from "./Layout/Layout";

function App() {

	const { state } = useContextGlobalDentist()
	const tema = state.theme
	return (
		<div className={`App ${tema === "dark" ? "darkBack" : "lightBack"}`}>
			<Routes>
				<Route element={<Layout />} >
					<Route path={routes.Home} element={<Home />} />
					<Route path={routes.Favs} element={<Favs />} />
					<Route path={routes.Details} element={<Detail />} />
					<Route path={routes.Contact} element={<Contact />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/" element={<Navigate to={routes.Home} />} />
					<Route path="*" element={<h1>Error 404 - Page not found</h1>} />
				</Route>
			</Routes>
		</div>
	);
}
export default App;
