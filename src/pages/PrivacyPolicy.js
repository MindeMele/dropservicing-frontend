import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const PrivacyPolicy = () => {
	return (
		<>
			<SEO title='Privatumo Politika' />
			<ColorSwitcher />
			<main className='main-wrapper'>
				<HeaderOne />
				<BreadCrumbOne title='Privatumo Politika' page='Privatumo Politika' />
				<FooterOne parentClass='' />
			</main>
		</>
	);
};

export default PrivacyPolicy;
