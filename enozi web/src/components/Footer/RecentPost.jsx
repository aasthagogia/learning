import React from 'react';
import axios from 'axios';

export default class RecentPost extends React.Component{
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
		    const posts = response.data.items.slice(0, 2);
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
	render() {
		const recentpost = this.state.postData;
		return(
			<div className="postlist">
				{recentpost && recentpost.map((post, index) => {
					return(
						<div className="post" key={index}>
							{post.link && <a href={post.link} target="_blank"><p>{post.title}</p>
							<strong>{this.formatDate(post.pubDate)}</strong></a>}
						</div>
					);
				})}
			</div>
		);
	}
}
