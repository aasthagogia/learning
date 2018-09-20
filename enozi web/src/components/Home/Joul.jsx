import React from 'react';

export default class Joul extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section id="token" className="section joulSection gradient-bg md-text-center">
				<div className="container" id="token-container">
					<div className="centerContent">
						<h2>{data.subHeading && <span>{data.subHeading}</span>}{data.h2}</h2>
						<p>{data.p}</p>
					</div>
					<div className="joulContent">
						{data.box.map((col, index) => {
							return(
								<div className="joulCol" key={index}>
									{col.icon && <img src={col.icon} alt="icon" />}
									<h4>{col.h4}</h4>
									<div className="des" dangerouslySetInnerHTML={{ __html: col.content }} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
