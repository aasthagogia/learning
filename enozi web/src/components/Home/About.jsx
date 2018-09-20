import React from 'react';

export default class About extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section className="section aboutSection">
				<div className="container md-text-center">
						<div className="centerContent">
							<h2>{data.h2}</h2>
							<p>{data.p}</p>
						</div>
				</div>
				<div className="video gradient-bg">
					<div className="container">
						<iframe width="854" height="480" src="https://www.youtube.com/embed/e51L9KCIct0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
					</div>
				</div>
			</section>
		);
	}
}
