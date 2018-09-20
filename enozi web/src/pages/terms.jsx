import React from "react";
import Helmet from "react-helmet";
import PageHeader from '../components/Inner/Component/PageHeader';
import Newsletter from '../components/Home/Newsletter';
import {newsletter} from '../../data/HomeConfig';
import {terms} from '../../data/termsConfig';
import config from "../../data/SiteConfig";

class Terms extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
			data: 0,
		};
		this.collapsed = this.collapsed.bind(this);
	}
	collapsed(index){
		this.setState({
			data: index,
		})
	}
	render() {
		let title = "TERMS OF USE";
		return (
			<div className="index-container graynewletter">
				<Helmet>
					<title>{`${title} | ${config.siteTitle}`}</title>
					<link rel="canonical" href={`${config.siteUrl}/terms/`} />
				</Helmet>
				<PageHeader title="TERMS OF USE" />
				<div className="container">
					<section className='section innerpage' dangerouslySetInnerHTML={{ __html: terms }}  />
				</div>
				<Newsletter data={newsletter} />
			</div>
		);
	}
}

export default Terms;
