import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const AboutTwo = () => {
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='why-choose-us'>
							<div className='section-heading heading-left'>
								<span className='subtitle'>Apie Mus</span>
								<h3 className='title'>Kodėl prekinis ženklas yra svarbus?</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500
								</p>
							</div>
							<Accordion defaultActiveKey='1'>
								<Accordion.Item eventKey='1'>
									<Accordion.Header>
										<FaCompress /> Marketingas
									</Accordion.Header>
									<Accordion.Body>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2'>
									<Accordion.Header>
										<FaCode /> Dizainas
									</Accordion.Header>
									<Accordion.Body>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='3'>
									<Accordion.Header>
										<FaGlobe /> Programavimas
									</Accordion.Header>
									<Accordion.Body>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
										Ipsum has been the industry's standard dummy text ever since the 1500
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
					<div className='col-xl-5 col-lg-6 offset-xl-1'>
						<div className='contact-form-box shadow-box mb--30'>
							<h3 className='title'>Susisiekite jau dabar</h3>
							<FormOne />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutTwo;
