import React from 'react';

export default class mediaSection extends React.Component{
	render(){
		const media = this.props.media;
		return(
			<section className="section mediaSection md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2>{media.h2}</h2>
					</div>
					<div className="grid4Col">
						{media.mediaLogo.map((logo, index) => {
							return(
								<div className="logo" key={index}>
									{logo.logo && <a href={logo.url} target="_blank"><img src={logo.logo} alt='logo' /></a>}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
