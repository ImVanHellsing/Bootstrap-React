import React, { Component } from 'react';

import Teamitem from './TeamItem';

const team = [
	{ name: 'Kay Garland', occupation: 'Lead Designer', index: '1' },
	{ name: 'Larry Parker', occupation: 'Lead Marketer', index: '2' },
	{ name: 'Diana Petersen', occupation: 'Lead Develiper', index: '3' },
];

class Team extends Component {
	render() {
		return (
			// Team
			<section className='page-section bg-light' id='team'>
				<div className='container'>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase'>
							Our Amazing Team
						</h2>
						<h3 className='section-subheading text-muted'>
							Lorem ipsum dolor sit amet consectetur.
						</h3>
					</div>
					<div className='row'>
						{team.map((member, i) => {
							return <Teamitem {...member} key={i} />;
						})}
					</div>
					<div className='row'>
						<div className='col-lg-8 mx-auto text-center'>
							<p className='large text-muted'>
								Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Aut eaque, laboriosam veritatis, quos non quis ad
								perspiciatis, totam corporis ea, alias ut unde.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Team;
