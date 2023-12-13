import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import AboutFive from "../component/about/AboutFive";

const AboutUs = () => {
	return (
		<>
			<SEO title='About us' />
			<ColorSwitcher />
			<main className='main-wrapper'>
				<HeaderOne />
				<BcrumbBannerOne
					title='Viena iš greičiausiai augančių agentūrų'
					paragraph='Mes padedame klientams išpildyti jų idėjas įgyvendinant verslo planus.'
					styleClass='thumbnail-4'
					mainThumb='/images/banner/banner-thumb-3.png'
				/>
				{/* <AboutThree /> */}
				<AboutFive />
				{/* <ProcessOne /> */}
				<CtaLayoutOne />
				<FooterOne parentClass='' />
			</main>
		</>
	);
};

export default AboutUs;
