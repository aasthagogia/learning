import React, { Component } from 'react';

class TeamMember extends Component {
    render() {
        return(
                <div>
                    <img src={this.props.img} alt={this.props.name}/>
                    <h4>{this.props.name}</h4>
                    <div className="role">{this.props.role}</div>
                </div>
        );
    }
}

export default TeamMember;