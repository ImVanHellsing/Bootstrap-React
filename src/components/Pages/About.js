import React, { Component } from 'react';

//Assets
import Image from '../../components/assets/img/about.jpg';

//Component
import Header from '../Common/Header';
import TimeLine from '../Common/TimeLine';

class About extends Component {
	render() {
		return (
			<div>
				{/* Header */}
				<Header
					title='About us'
					subtitle="IT'S REALLY A GREAT STORY"
					showBtn={false}
					image={Image}
				/>
				{/* About */}
				<TimeLine />
			</div>
		);
	}
}

export default About;
