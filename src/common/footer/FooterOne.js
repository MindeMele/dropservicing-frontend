import React from "react";
import { Link } from "react-router-dom";
import {
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
	FaLinkedin,
	FaInstagram,
	FaVimeoV,
	FaDribbble,
	FaBehance,
	FaTiktok,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
	return (
		<footer className={`footer-area ${parentClass}`}>
			<div className='container'>
				<div className='footer-top'>
					<div className='footer-social-link'>
						<ul className='list-unstyled'>
							<li>
								<Link to='https://facebook.com/'>
									<FaFacebookF />
								</Link>
							</li>
							<li>
								<Link to='https://twitter.com/'>
									<FaTwitter />
								</Link>
							</li>
							<li>
								<Link to='https://www.pinterest.com/'>
									<FaPinterestP />
								</Link>
							</li>
							<li>
								<Link to='https://www.linkedin.com/'>
									<FaLinkedin />
								</Link>
							</li>
							<li>
								<Link to='https://www.instagram.com/'>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link to='https://vimeo.com/'>
									<FaVimeoV />
								</Link>
							</li>
							<li>
								<Link to='https://dribbble.com/'>
									<FaDribbble />
								</Link>
							</li>
							<li>
								<Link to='https://www.behance.net/'>
									<FaBehance />
								</Link>
							</li>
							<li>
								<Link to='https://www.tiktok.com/en/'>
									<FaTiktok />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-main'>
					<div className='row'>
						<div className='col-xl-6 col-lg-5 d-flex align-items-center'>
							<div className='footer-widget border-end'>
								<div className='footer-newsletter'>
									<h2 className='title'>Susisiekite su mumis!</h2>
									<p>Greitas ir patogus būdas įgyvendinti savo projektą jau dabar!</p>
								</div>
							</div>
						</div>
						<div className='col-xl-6 col-lg-7'>
							<div className='row'>
								<div className='col-sm-6'>
									<div className='footer-widget'>
										<h6 className='widget-title'>Paslaugos</h6>
										<div className='footer-menu-link'>
											<ul className='list-unstyled'>
												{getServiceData.slice(0, 6).map((data, index) => (
													<li key={index}>
														<Link
															to={
																process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`
															}>
															{data.title}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className='col-sm-6'>
									<div className='footer-widget'>
										<h6 className='widget-title'>Pagalba</h6>
										<div className='footer-menu-link'>
											<ul className='list-unstyled'>
												<li>
													<Link to={process.env.PUBLIC_URL + "/contact"}>Kontaktai</Link>
												</li>
												<li>
													{" "}
													<Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
														Privatumo Politika
													</Link>
												</li>
												<li>
													<Link to={process.env.PUBLIC_URL + "/terms-use"}>Naudojimo sąlygos</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='footer-copyright'>
								<span className='copyright-text'>
									© {new Date().getFullYear()}. All rights reserved by{" "}
									<a href='https://devocode.lt/'>DevCode</a>.
								</span>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='footer-bottom-link'>
								<ul className='list-unstyled'>
									<li>
										<Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privatumo Politika</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/terms-use"}>Naudojimo sąlygos</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterOne;
