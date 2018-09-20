import React from 'react';
import axios from 'axios';

export default class Blog extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      postData: '',
    };
		this.recentPost = this.recentPost.bind(this);
  }
	recentPost = () =>{
		const data = 'https://medium.com/feed/enosi';
		axios.get('https://api.rss2json.com/v1/api.json?rss_url=' + data).then(response => {
		    const posts = response.data.items.slice(0, 3);
		    this.setState({
					postData: posts,
				});
		})
	}
  componentDidMount(){
		this.recentPost();
	}
 formatDate(date) {
			let monthNames = [
				"January", "February", "March",
				"April", "May", "June", "July",
				"August", "September", "October",
				"November", "December"
			];
			date = new Date(date.replace(/-/g, "/"));
			let day = date.getDate();
			let monthIndex = date.getMonth();
			let year = date.getFullYear();

			return monthNames[monthIndex] + ' ' + day + ', ' + year;
		}
	render(){
		const data = this.props.data;
		const recentpost = this.state.postData;
		console.log(recentpost);
		return(
			<section className="section blogSection gray-bg md-text-center">
				<div className="container">
					<div className="centerContent">
						<h2><span>OUR BLOG</span>Latest News</h2>
					</div>
					<div className="blogPost">
						{recentpost && recentpost.map((post, index) => {
							return(
								<div className="post" key={index}>
									<a href={post.link} target="_blank">
										{post.thumbnail && <img src={post.thumbnail} alt="post imge" />}
									</a>
									<span className="date">{this.formatDate(post.pubDate)}</span>
									<h4>{post.title}</h4>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
