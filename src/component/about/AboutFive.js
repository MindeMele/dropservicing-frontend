import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
	return (
		<div className='section-padding-equal'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-7'>
						<div className='about-team'>
							<div className='thumbnail'>
								<img src={process.env.PUBLIC_URL + "/images/about/about-2.jpg"} alt='thumbnail' />
							</div>
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='about-team'>
							<div className='section-heading heading-left'>
								<span className='subtitle'>Mūsų Komanda</span>
								<h2>Vieni padarome mažai; Susivieniję įvykdome daug.</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book.
								</p>
								<Link to='/contact' className='axil-btn btn-large btn-fill-primary'>
									Susisiekti
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutFive;
