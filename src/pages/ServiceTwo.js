import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServicePropOne from "../component/service/ServicePropOne";
import CounterUpTwo from "../component/counterup/CounterUpTwo";

const ServiceTwo = () => {
	return (
		<>
			<SEO title='Service Two' />

			<ColorSwitcher />
			<main className='main-wrapper'>
				<HeaderOne />
				<BcrumbBannerOne
					title='Geriausi sprendimai jūsų verslui'
					paragraph='Padėk savo verslui augti ir tobulėti. Pradedant svetainės ir dizaino atnaujinimu ar kūrimu, baigiant marketingu.'
					styleClass=''
					mainThumb='/images/banner/banner-thumb-4.png'
				/>
				<CounterUpTwo />
				<div className='section section-padding bg-color-light'>
					<div className='container'>
						<SectionTitle
							subtitle='Ką Mes Galime Jums Pasiūlyti'
							title='Paslaugos kurias <br> teikiame'
							description=''
							textAlignment='heading-left'
							textColor=''
						/>
						<div className='row'>
							<ServicePropOne
								colSize='col-lg-4 col-md-6'
								serviceStyle='service-style-2'
								itemShow='6'
								marginTop='no'
							/>
						</div>
					</div>
				</div>

				{/* <AboutThree /> */}

				<CtaLayoutOne />
				<FooterOne parentClass='' />
			</main>
		</>
	);
};

export default ServiceTwo;
