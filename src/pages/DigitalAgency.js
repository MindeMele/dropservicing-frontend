import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BannerOne from "../component/banner/BannerOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

import useFetch from "../hooks/useFetch";

const DigitalAgency = () => {
	const { data } = useFetch({ url: "http://localhost:1337/api/main-texts" });

	if (!data) {
		return <div>Loading...</div>;
	}

	const servicesTitle = data.filter((item) => item.attributes.content_type === "services_title");

	return (
		<>
			<SEO title='Everything You Need!' />
			<ColorSwitcher />
			<main className='main-wrapper'>
				<HeaderOne />
				<BannerOne />
				<div className='section section-padding-2 bg-color-dark'>
					<div className='container'>
						<SectionTitle
							subtitle='Ką Mes Galime Padaryti Dėl Jūsų'
							title={servicesTitle.length > 0 && servicesTitle[0].attributes.content}
							textAlignment='heading-light-left'
							textColor=''
						/>
						<div className='row'>
							<ServicePropOne colSize='col-xl-4 col-md-6' serviceStyle='' itemShow='6' />
						</div>
					</div>
					<ul className='list-unstyled shape-group-10'>
						<li className='shape shape-1'>
							<img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt='Circle' />
						</li>
						<li className='shape shape-2'>
							<img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt='Circle' />
						</li>
						<li className='shape shape-3'>
							<img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt='Circle' />
						</li>
					</ul>
				</div>
				{/* <AboutOne /> */}
				<ProjectOne />
				<CounterUpOne />
				<TestimonialOne />
				<CtaLayoutOne />
				<FooterOne parentClass='' />
			</main>
		</>
	);
};

export default DigitalAgency;
