import React, { Component } from 'react';

class Field extends Component {
	render() {
		return (
			<div className='form-group'>
				{this.props.elementName === 'input' ? (
					<input
						className='form-control'
						id={this.props.id}
						type={this.props.type}
						placeholder={`${this.props.placeholder} *`}
						required='required'
						data-validation-required-message='Please enter your name.'
						name={this.props.name}
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
					/>
				) : (
					<textarea
						className='form-control'
						id={this.props.id}
						placeholder={`${this.props.placeholder} *`}
						required='required'
						data-validation-required-message='Please enter your name.'
						name={this.props.name}
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
					/>
				)}
				{this.props.touched && this.props.errors && (
					<p className='help-block text-danger'>
						<span>{this.props.errors}</span>
					</p>
				)}
			</div>
		);
	}
}

export default Field;
