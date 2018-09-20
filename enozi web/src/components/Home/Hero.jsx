import React from 'react';
import Slider from 'react-slick';
import { Button, SVGIcon } from 'react-md';
import Ico from './Hero/Ico';
import Telegram from '../icon/Telegram';
import PlatformIcon from '../icon/platform-icon';
import TokenIcon from '../icon/token-icon';
import VisionIcon from '../icon/vision-icon';

export default class Hero extends React.Component{
	render(){
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
			adaptiveHeight: false
		};
		const data = this.props.data;
		return(
			<section id="vision" className="section hero-section">
				<div className="heroContent1">
					<div className="container">
						<div className="heroMainSection">
							<div className="heroCarousel">
								<div className="item">
									<h5>{data.slider.h5}</h5>
									<h1 dangerouslySetInnerHTML={{ __html: data.slider.h1 }} />
									<p>{data.slider.p}</p>
								</div>
								<Button href={data.telegram} target="_blank" raised primary className="btn-default" ><Telegram /> JOIN US ON TELEGRAM</Button>
								<Button href={data.twitter} target="_blank" raised primary className="btn-default" ><i className="fab fa-twitter" /> FOLLOW US ON TWITTER</Button>
							</div>
							<div className="heroMVP-section">
								{
									data.mvp.img && <img src={data.mvp.img} alt="MVP Simulation" />
								}
								{
									data.mvp.btnURL && <Button href={data.mvp.btnURL} target="_blank" raised primary className="btn-default" >TRY OUR MVP</Button>
								}
							</div>
						</div>
						<Ico />
					</div>
				</div>
				<div className="heroContent2">
					<div className="container">
						<div className="services">
							{data.service.map((col, index) => {
								return(
									<div className="serviceItem" key={index}>
										{col.icon == 'VisionIcon' ? <VisionIcon /> : ''}
										{col.icon == 'PlatformIcon' ? <PlatformIcon /> : ''}
										{col.icon == 'TokenIcon' ? <TokenIcon /> : ''}
										<h4>{col.heading}</h4>
										<div className="des" dangerouslySetInnerHTML={{ __html: col.content }} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
