import React, { Component } from 'react';

const List = ['envato', 'designmodo', 'themeforest', 'creative-market'];

class Clients extends Component {
	render() {
		return (
			// CLients
			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						{List.map((item) => {
							return (
								<div className='col-md-3 col-sm-6 my-3'>
									<a href='#!'>
										<img
											className='img-fluid d-block mx-auto'
											src={`assets/img/logos/${item}.jpg`}
											alt=''
										/>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default Clients;
