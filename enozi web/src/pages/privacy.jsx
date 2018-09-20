import React from "react";
import Helmet from "react-helmet";
import PageHeader from '../components/Inner/Component/PageHeader';
import Newsletter from '../components/Home/Newsletter';
import {newsletter} from '../../data/HomeConfig';
import {privacy} from '../../data/privacy';
import config from "../../data/SiteConfig";

class Privacy extends React.Component {
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
		let title = "PRIVACY POLICY";
		return (
			<div className="index-container graynewletter">
				<Helmet>
					<title>{`${title} | ${config.siteTitle}`}</title>
					<link rel="canonical" href={`${config.siteUrl}/privacy/`} />
				</Helmet>
				<PageHeader title="PRIVACY POLICY" />
				<div className="container">
					<section className='section innerpage' dangerouslySetInnerHTML={{ __html: privacy }}  />
				</div>
				<Newsletter data={newsletter} />
			</div>
		);
	}
}

export default Privacy;
