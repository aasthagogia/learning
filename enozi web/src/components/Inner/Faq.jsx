import React from 'react';
import PageHeader from './Component/PageHeader';
import Newsletter from '../Home/Newsletter';
import {newsletter} from '../../../data/HomeConfig';
import {faq} from '../../../data/FaqConfig';

export default class Faq extends React.Component{
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
	render(){
		console.log(this.state.data);
		const { collapsed } = this.state;
		return(
			<div className="innerpage-wrapper">
				<PageHeader title={faq.pagetitle} />
				<div className="container">
					<div className="faqWrap">
						<div className="faqLeftCol hideMobile accordion">
							{faq.content.map((question, index) => {
								return(
									<div className={this.state.data === index ? 'active accordionlist' : 'accordionlist'} key={index}>
										<button onClick={()=>this.collapsed(index)}>{question.Q}</button>
										<div className="accordionContent" dangerouslySetInnerHTML={{ __html: faq.content[this.state.data].ans }} />
									</div>
								);
							})}
						</div>
						{ faq.content[this.state.data].ans && <div className="Sidecontent" dangerouslySetInnerHTML={{ __html: faq.content[this.state.data].ans }} />}
					</div>
					<div className="accordion visibleMobile">
						{faq.content.map((question, index) => {
							return(
								<Accordion key={index} index={index} data={this.state.data} title={question.Q} content={faq.content[this.state.data].ans} />
							);
						})}
					</div>
				</div>
				<Newsletter data={newsletter} />
			</div>
		);
	}
}
class Accordion extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
			toggle: false,
		};
		this.collapsed = this.collapsed.bind(this);
	}
	collapsed(index){
		this.setState({
			toggle: !this.state.toggle,
		})
	}
	render(){
		return(
			<div className={this.state.toggle ? 'active accordionlist' : 'accordionlist'}>
				<button onClick={()=>this.collapsed(this.props.index)}>{this.props.title}</button>
				<div className="accordionContent" dangerouslySetInnerHTML={{ __html: this.props.content }} />
			</div>
		);
	}
}
