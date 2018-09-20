import React from 'react';
import Slider from 'react-slick';

export default class RoadMap extends React.Component{
	render(){
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
			adaptiveHeight: false,
			responsive: [
				{
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
				{
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
			],
		};
		const data = this.props.data;
		return(
			<section id="roadmap" className="section roadmap md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2>{data.h2}</h2>
						<p dangerouslySetInnerHTML={{ __html: data.p }} />
					</div>
					<Slider {...settings}
						className="roadmapCarousel">
							{data.roadmapSlide.map((slide, index) => {
								return(
									<div className={slide.color + ' item'} key={index}>
										<ul>
											{
												slide.name.map((list, index) =>{
													return(
														<li key={index}>{list}</li>
													)
												})
											}
										</ul>
										<div className="bar" />
										<h6>{slide.year}</h6>
									</div>
								);
							})}
					</Slider>
				</div>
			</section>
		);
	}
}
