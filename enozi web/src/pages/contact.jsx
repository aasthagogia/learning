import React from "react";
import Helmet from "react-helmet";
import PageHeader from '../components/Inner/Component/PageHeader';
import Newsletter from '../components/Home/Newsletter';
import {newsletter} from '../../data/HomeConfig';
import config from "../../data/SiteConfig";

class ContactPage extends React.Component {
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
		let title = "CONTACT US";
		return (
			<div className="index-container graynewletter">
				<Helmet>
					<title>{`${title} | ${config.siteTitle}`}</title>
					<link rel="canonical" href={`${config.siteUrl}/contact/`} />
				</Helmet>
				<PageHeader title="CONTACT US" />
				<div className="container">
					<div className="contactpage">
						<address>
							Level 36, 1 Farrer Place, (GPO Box 669)<br />
							Sydney NSW 2001<br />
							<a href="mailto:info@enosi.com">info@enosi.com</a>
						</address>
						<div className="mapWrap">
							<iframe width="100%" height="550" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Level%2036%2C%201%20Farrer%20Place%2C%20(GPO%20Box%20669)%20Sydney%20NSW%202001+(enosi)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a href="https://www.maps.ie/create-google-map/">Embed Google Map</a>
							</iframe>
						</div>
					</div>
				</div>
				<Newsletter data={newsletter} />
			</div>
		);
	}
}

export default ContactPage;
