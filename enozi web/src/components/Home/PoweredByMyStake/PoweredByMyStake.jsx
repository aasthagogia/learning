import React, { Component } from 'react';
import SectionHeader from '../Header/SectionHeader/SectionHeader';
import PoweredByCard from './PoweredByCard/PoweredByCard';
import mystake from '../../../assets/mystake.png';

class PoweredByMyStake extends Component {
    render() {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            cards.push(<PoweredByCard key={i}/>);
        }

        const h2 = [`An open source protocol, being written by`,
            <br />,
            <span className="my-stake-span">MyStake</span>,
            ` a leader in the space.`];

        return (
            <section id="poweredbymystake" className="section">
                <div className="container">
                    <div className="mystake-logo">
                        <img src={mystake} alt="mystake"/>
                    </div>
                    <SectionHeader
                        h5="powered by mystake"
                        h2={h2} />
                    <div className="display-flex justify-evenly">
                        {cards}
                    </div>
                </div>
            </section>
        );
    }
}

export default PoweredByMyStake;