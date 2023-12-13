import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

const Result = () => {
	return (
		<Alert variant='success' className='success-msg'>
			Your Message has been successfully sent.
		</Alert>
	);
};

const FormOne = () => {
	const form = useRef();

	const [result, showresult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_aym30ha", "template_7hkrwa3", form.current, "iQNlnP-wLgaSk3X7j").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
		form.current.reset();
		showresult(true);
	};

	setTimeout(() => {
		showresult(false);
	}, 5000);

	return (
		<form ref={form} onSubmit={sendEmail} className='axil-contact-form'>
			<div className='form-group'>
				<label>Vardas</label>
				<input
					type='text'
					className='form-control'
					name='contact-name'
					placeholder='John Smith'
					required
				/>
			</div>
			<div className='form-group'>
				<label>El. paštas</label>
				<input
					type='email'
					className='form-control'
					name='contact-email'
					placeholder='example@mail.com'
					required
				/>
			</div>
			<div className='form-group mb--40'>
				<label>Tel. numeris</label>
				<input
					type='tel'
					className='form-control'
					name='contact-phone'
					placeholder='+123456789'
					required
				/>
			</div>
			<div className='form-group'>
				<button
					type='submit'
					className='axil-btn btn-fill-primary btn-fluid btn-primary'
					name='submit-btn'>
					Noriu susisiekti su jumis
				</button>
			</div>
			<div className='form-group'>{result ? <Result /> : null}</div>
		</form>
	);
};

export default FormOne;
