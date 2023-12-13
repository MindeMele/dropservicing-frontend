import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const TermsOfUse = () => {
	return (
		<>
			<SEO title='Naudojimo sąlygos' />
			<ColorSwitcher />
			<main className='main-wrapper'>
				<HeaderOne />
				<BreadCrumbOne title='Naudojimo sąlygos' page='Naudojimo sąlygos' />
				<FooterOne parentClass='' />
			</main>
		</>
	);
};

export default TermsOfUse;
