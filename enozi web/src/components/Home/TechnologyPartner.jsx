import React from 'react';

export default class TechnologyPartners extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section className="section partners technologyPartner md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2>{data.h2}</h2>
						<div className="teamContent" dangerouslySetInnerHTML={{ __html: data.content }} />
					</div>
					<div className="grid4Col">
						{data.partnerLogo.map((partner, index) => {
							return(
								<div className="logo" key={index}>
									{partner.imgUrl && <a href={partner.url} target="_blank"><img src={partner.imgUrl} alt='logo' /></a>}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
