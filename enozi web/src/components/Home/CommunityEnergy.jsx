import React from 'react';
import { Button } from 'react-md';
import { Grid, Cell } from 'react-md'

export default class CommunitEnergy extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section className="section communityEnergy gradient-bg md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2>{data.subHeading && <span>{data.subHeading}</span>}{data.h2}</h2>
					</div>
					<div className="communityContent">
						{data.content.map((col, index) => {
							return(
								<div className="communityCol" key={index}>
									<div className="heading">{col.heading}</div>
									<p>{col.p}</p>
								</div>
							);
						})}
					</div>
				  {data.whitepaperBtnUrl && <Button href={data.whitepaperBtnUrl} target="_blank" raised primary className="btn-default">DOWNLOAD WHITEPAPER</Button>}
				</div>
			</section>
		);
	}
}
