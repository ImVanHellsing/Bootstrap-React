import React, { Component } from 'react';

import PortfolioItem from './PortifolioItem';

const thumbClasses = [
	'col-lg-4 col-sm-6',
	'col-lg-4 col-sm-6 mb-4',
	'col-lg-4 col-sm-6 mb-4 mb-sm-0',
	'col-lg-4 col-sm-6 mb-4 mb-lg-0',
];
const thumbs = [
	{
		title: 'Threads',
		subtitle: 'Illustration',
		thumbClass: thumbClasses[1],
		index: '1',
	},
	{
		title: 'Explore',
		subtitle: 'Graphic Design',
		thumbClass: thumbClasses[1],
		index: '2',
	},
	{
		title: 'Finish',
		subtitle: 'Identity',
		thumbClass: thumbClasses[1],
		index: '3',
	},
	{
		title: 'Lines',
		subtitle: 'Branding',
		thumbClass: thumbClasses[3],
		index: '4',
	},
	{
		title: 'Southwest',
		subtitle: 'Website Design',
		thumbClass: thumbClasses[2],
		index: '5',
	},
	{
		title: 'Window',
		subtitle: 'Photography',
		thumbClass: thumbClasses[0],
		index: '6',
	},
];
class Portifolio extends Component {
	render() {
		return (
			// Portifolio
			<section className='page-section bg-light' id='portfolio'>
				<div className='container'>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase'>Portfolio</h2>
						<h3 className='section-subheading text-muted'>
							Lorem ipsum dolor sit amet consectetur.
						</h3>
					</div>
					<div className='row'>
						{thumbs.map((thumb, i) => {
							return <PortfolioItem {...thumb} key={i} />;
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default Portifolio;
