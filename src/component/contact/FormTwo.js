import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

const Result = () => {
	return (
		<Alert variant='success' className='success-msg'>
			Žinutė buvo sėkmingai išsiųsta!
		</Alert>
	);
};

const FormTwo = () => {
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
				<input type='text' className='form-control' name='contact-name' required />
			</div>
			<div className='form-group'>
				<label>El. Paštas</label>
				<input type='email' className='form-control' name='contact-email' required />
			</div>
			<div className='form-group'>
				<label>Telefono numeris</label>
				<input type='tel' className='form-control' name='contact-phone' required />
			</div>
			<div className='form-group mb--40'>
				<label>Kaip galime jums padėti?</label>
				<textarea className='form-control' name='contact-message' rows='4'></textarea>
			</div>
			<div className='form-group'>
				<button
					type='submit'
					className='axil-btn btn-fill-primary btn-fluid btn-primary'
					name='submit-btn'>
					Siųsti Laišką
				</button>
			</div>
			<div className='form-group'>{result ? <Result /> : null}</div>
		</form>
	);
};

export default FormTwo;
