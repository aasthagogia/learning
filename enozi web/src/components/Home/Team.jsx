import React from 'react';

export default class OurTeam extends React.Component{
	render(){
		const data = this.props.data;
		return(
			<section id="team" className="section ourteam md-text-center">
				<div className="container">
					<h2>{data.subHeading && <span>{data.subHeading}</span>}{data.h2}</h2>
					<div className="teamContent" dangerouslySetInnerHTML={{ __html: data.content }} />
					<div className="teamwrap">
						{data.team.map((teams, index) => {
							return(
								<div className="teamRow" key={index}>
									{teams.category && <h4>{teams.category}</h4>}
									<div className="grid4Col">
										{teams.teamMembers.map((member, index) => {
											return(
												<div className="team" key={index}>
													<div className="userImage">
															{member.image && <img src={member.image} alt={member.name} />}
															{member.linkedin && <a target='_blank' className="overlay" href={member.linkedin}>
																<div className="overlayContent">
																	<div dangerouslySetInnerHTML={{ __html: member.hover }} />
																		<img src='/images/linkedin-icon.svg' alt='linkedin' />
																</div>
															</a>}
													</div>
													{member.name && <h5>{member.name}</h5>}
													{member.designation && <span className="designation">{member.designation}</span>}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
