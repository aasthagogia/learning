import React, { Component } from 'react';
import teammembers from './TeamMembers';
import TeamMember from './TeamMember';
import { Button } from 'react-md';

class Team extends Component {
    render() {
        const team= [];
        teammembers.map(member => {
            team.push(<TeamMember name={member.name} img={member.img} role={member.role} key={member.name}/>)
        })


        return(
            <section id="team" className="section md-text-center">
                <div className="container">
                    <h2>Our Team</h2>
                    <div className="display-flex justify-evenly">
                        {team}
                    </div>
                    <Button flat className="button-text view-button">VIEW ALL</Button>
                </div>
            </section>
        );
    }
}

export default Team;