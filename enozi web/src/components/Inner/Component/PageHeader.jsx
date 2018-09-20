import React from 'react';

export default class PageHeader extends React.Component{
	render(){
		return(
			<div className="pageheader">
				<div className="container">
					<h1>{this.props.title}</h1>
				</div>
			</div>
		);
	}
}
