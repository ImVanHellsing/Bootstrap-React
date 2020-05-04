import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Field from '../Common/Field';

const fields = {
	sections: [
		[
			{
				name: 'name',
				elementName: 'input',
				type: 'text',
				id: 'name',
				placeholder: 'Your name',
			},
			{
				name: 'email',
				elementName: 'input',
				type: 'email',
				id: 'email',
				placeholder: 'Your email',
			},
			{
				name: 'phone',
				elementName: 'input',
				type: 'phone',
				id: 'phone',
				placeholder: 'Your phone',
			},
		],
		[
			{
				name: 'message',
				elementName: 'textarea',
				type: 'text',
				id: 'message',
				placeholder: 'Your message',
			},
		],
	],
};

class Contact extends Component {
	render() {
		return (
			// Contact
			<section className='page-section' id='contact'>
				<div className='container'>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase'>Contact Us</h2>
						<h3 className='section-subheading text-muted'>
							Lorem ipsum dolor sit amet consectetur.
						</h3>
					</div>
					<form
						id='contactForm'
						name='sentMessage'
						novalidate='novalidate'
						onSubmit={this.props.handleSubmit}>
						<div className='row align-items-stretch mb-5'>
							{fields.sections.map((section, index) => {
								return (
									<div className='col-md-6' key={index}>
										{section.map((field, i) => {
											return (
												<Field
													{...field}
													key={i}
													values={this.props.values[field.name]}
													name={this.props.name}
													onChange={this.props.handleChange}
													onBlur={this.props.handleBlur}
													touched={this.props.touched[field.name]}
													errors={this.props.errors[field.name]}
												/>
											);
										})}
									</div>
								);
							})}
						</div>
						<div className='text-center'>
							<div id='success'></div>
							<button
								className='btn btn-primary btn-xl text-uppercase'
								id='sendMessageButton'
								type='submit'>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		phone: '',
		message: '',
	}),

	validationSchema: Yup.object().shape({
		name: Yup.string()
			.min(3, 'Your name must be longer than that!')
			.required('You must give us your name!'),

		email: Yup.string()
			.email('We required a valid email!')
			.required('We need your email!'),

		phone: Yup.string()
			.min(10, 'Phone must be at least 10 digit!')
			.max(15, 'Your phone is to long!')
			.required('We need your phone!'),

		message: Yup.string()
			.min(5, 'Please, give us some information!')
			.max(100, 'You need to provide us more detailed information!')
			.required('Please message us something!'),
	}),

	handleSubmit: (values, { setSubmitting }) => {
		alert(`You've submitted the form!`, JSON.stringify(values));
	},
})(Contact);
