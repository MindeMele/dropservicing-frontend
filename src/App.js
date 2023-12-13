import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import DigitalAgency from "./pages/DigitalAgency";

// Service
import ServiceTwo from "./pages/ServiceTwo";
import ServiceDetails from "./pages/ServiceDetails";

// Project
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Css Import
import "./assets/scss/app.scss";
import FacebookMsg from "./component/facebook/FacebookMsg";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path={process.env.PUBLIC_URL + "/"} element={<DigitalAgency />} />

						{/* Service */}
						<Route path={process.env.PUBLIC_URL + "/services/"} element={<ServiceTwo />} />
						<Route
							path={process.env.PUBLIC_URL + "/service-details/:slug"}
							element={<ServiceDetails />}
						/>

						{/* Project  */}
						<Route
							path={process.env.PUBLIC_URL + "/project-grid-one"}
							element={<ProjectGridOne />}
						/>
						<Route
							path={process.env.PUBLIC_URL + "/project-details/:slug"}
							element={<ProjectDetails />}
						/>

						{/* Pages  */}
						<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />} />
						<Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />} />
						<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />} />
						<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />} />
						<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />} />
						<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />} />
					</Routes>
				</ScrollToTop>
			</Router>
			<FacebookMsg />
		</>
	);
};

export default App;
