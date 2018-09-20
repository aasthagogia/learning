import React, { Component } from 'react';
import logo from '../../../assets/Block8_logo.png';

class Partners extends Component {
    render() {
        const team= [];
        for (let i = 0; i < 4; i++) {
            team.push(
            <div key={i}>
            <img src={logo} alt="block8_logo" />
            </div>)
        };


        return(
            <section id="partners" className="section md-text-center">
                <div className="container">
                    <h2>Our Partners</h2>
                    <div className="display-flex justify-evenly container">
                        {team}
                    </div>
                </div>
            </section>
        );
    }
}

export default Partners;