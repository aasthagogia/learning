import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Tokenize from './Tokenize/Tokenize';
import Program from './Program/Program';
import Compliance from './Compliance/Compliance';
import PoweredByMyStake from './PoweredByMyStake/PoweredByMyStake';
import Team from './Team/Team';
import Partners from './Partners/Partners';
import SignUp from './SignUp/SignUp';

export default class Home extends React.Component{
	render(){
		return(
			<div className="Home-Wrapper">
				{/* <Hero  data={hero} />
				<About data={about} />
				<Platform data={platform}  />
				<Joul data={joul} />
				<RoadMap data={roadmap}/>
				<OurTeam data={ourteam} />
				<CommunitEnergy data={community} />
				<Partners data={ourPartner} />
				<TechnologyPartners data={technologyPartner} />
				<CapitalPartners data={capitalPartner} />
				<Media media={media} />
				<Blog />
				<Newsletter data={newsletter} /> */}
				<Header />
				<Hero />
				<Tokenize />
				<Program />
				<Compliance />
				<PoweredByMyStake />
				<Team />
				<Partners />
				<SignUp />
			</div>
		);
	}
}
