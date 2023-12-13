import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import CounterUp from "../../component/counterup/CounterUp";

const CounterUpOne = () => {
	return (
		<div className='section section-padding bg-color-dark'>
			<div className='container'>
				<SectionTitle
					subtitle='Pagrindiniai mūsų darbo rezultatai'
					title='Mūsų Patirtis'
					description=''
					textAlignment='heading-light'
					textColor=''
				/>
				<div className='row'>
					<CounterUp colSize='col-lg-4 col-6' layoutStyle='' evenTopMargin='' />
				</div>
			</div>
		</div>
	);
};

export default CounterUpOne;
