import React from "react";
import Helmet from "react-helmet";
import Faq from "../components/inner/Faq";
import config from "../../data/SiteConfig";

class FaqPage extends React.Component {
	render() {
		let title = "FAQs"
		return (
			<div className="index-container">
				<Helmet>
					<title>{`${title} | ${config.siteTitle}`}</title>
					<link rel="canonical" href={`${config.siteUrl}/faq/`} />
				</Helmet>
				<Faq />
			</div>
		);
	}
}

export default Faq;
