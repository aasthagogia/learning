// import React from "react";
// import Helmet from "react-helmet";
// import PageHeader from '../components/Inner/Component/PageHeader';
// import Newsletter from '../components/Home/Newsletter';
// import {newsletter} from '../../data/HomeConfig';
// import {glossary} from '../../data/glossaryConfig';
// import config from "../../data/SiteConfig";

// class Glossary extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 			data: 0,
// 		};
// 		this.collapsed = this.collapsed.bind(this);
// 	}
// 	collapsed(index){
// 		this.setState({
// 			data: index,
// 		})
// 	}
// 	render() {
// 		let title = "GLOSSARY";

// 		return (
// 			<div className="index-container graynewletter">
// 				<Helmet>
// 					<title>{`${title} | ${config.siteTitle}`}</title>
// 					<link rel="canonical" href={`${config.siteUrl}/glossary/`} />
// 				</Helmet>
// 				<PageHeader title="GLOSSARY" />
// 				<div className="container">
// 					<section className='grossaryRow section accordion'>
// 						{glossary.map((question, index) => {
// 							return(
// 								<div className="grossaryCol" key={index}>
// 									{
// 										question.map((que, i)=>{
// 											return(
// 													<Accordion key={i} index={i} collapsed={this.collapsed} data={this.state.data} title={que.title} content={que.des} />
// 											);
// 										})
// 									}
// 								</div>
// 							);
// 						})}
// 					</section>
// 				</div>
// 				<Newsletter data={newsletter} />
// 			</div>
// 		);
// 	}
// }

// export default Glossary;

// class Accordion extends React.Component{
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 			toggle: false,
// 		};
// 		this.collapsed = this.collapsed.bind(this);
// 	}
// 	collapsed(index){
// 		this.setState({
// 			toggle: !this.state.toggle,
// 		})
// 		this.props.collapsed(index);
// 	}
// 	render(){
// 		console.log('accordion');
// 		return(
// 			<div className={this.state.toggle ? 'active accordionlist' : 'accordionlist'}>
// 				<button onClick={()=>this.collapsed(this.props.index)}>{this.props.title}</button>
// 				<div className="accordionContent" dangerouslySetInnerHTML={{ __html: this.props.content }} />
// 			</div>
// 		);
// 	}
// }
