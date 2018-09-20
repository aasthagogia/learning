import React from 'react';
import { Grid, Cell } from 'react-md'

export default class Platform extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section id="platform" className="section platformSection md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2>{data.h2}</h2>
						<p>{data.p}</p>
					</div>
					<Grid className="platformContent">
					      <Cell size={7}>
									{data.leftImg && <img src={data.leftImg} alt="platform" />}
								</Cell>
					      <Cell className="md-text-left" size={5} dangerouslySetInnerHTML={{ __html: data.content }} />
					    </Grid>
				</div>
			</section>
		);
	}
}
