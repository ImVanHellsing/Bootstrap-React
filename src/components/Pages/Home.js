import React, { Component } from 'react';

//Assets
import Image from '../../components/assets/img/header-bg.jpg';

//Component-Common
import Team from '../Common/Team';
import Header from '../Common/Header';
import Clients from '../Common/Clients';
import Services from '../Common/Services';
import Portifolio from '../Common/Portifolio';
import TimeLine from '../Common/TimeLine';

class Home extends Component {
	render() {
		return (
			<div>
				{/* Header */}
				<Header
					title='Welcome To Our Studio!'
					subtitle="IT'S NICE TO MEET YOU"
					btnText='TELL ME MORE ABOUT'
					link='/services'
					showBtn={true}
					image={Image}
				/>
				{/* Services */}
				<Services />
				<Portifolio />
				<TimeLine />
				<Team />
				<Clients />
			</div>
		);
	}
}

export default Home;
