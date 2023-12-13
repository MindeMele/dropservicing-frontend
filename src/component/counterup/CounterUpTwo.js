import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "./CounterUp";

const CounterUpTwo = () => {
	return (
		<div className='section section-padding expert-counterup-area'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-5'>
						<div className='section-heading heading-left'>
							<span className='subtitle'>Sričių ekspertai</span>
							<h2>Kas padaro mus ypatingais?</h2>
							<p className='mb--50'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book
							</p>
							<Link
								to={process.env.PUBLIC_URL + "/contact"}
								className='axil-btn btn-large btn-fill-primary'>
								Susisiekti
							</Link>
						</div>
					</div>
					<div className='col-lg-6 offset-xl-1'>
						<div className='row'>
							<CounterUp colSize='col-sm-6' layoutStyle='counterup-style-2' evenTopMargin='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CounterUpTwo;
