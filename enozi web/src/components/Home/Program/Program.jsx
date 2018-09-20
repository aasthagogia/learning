import React, { Component } from 'react';
import SectionHeader from '../Header/SectionHeader/SectionHeader';
import ProgramCard from './ProgramCard';

class Program extends Component {
    render() {
        const para = [`Develop your own shareholder`,
            <br />,
            ` agreements rules such as vesting`,
            <br />,
            ` periods, exercise windows.`];

        const h2 = [`Use the Liquid Protocol framework`,
            <br />,
            ` to define rules and agreements.`];

        const cards = [];
        for (let i = 0; i < 3; i++) {
            cards.push(<ProgramCard key={i}/>);
        }

        return (
            <section id="program" className="section">
            <div className="container">
            <SectionHeader p={para}
                    h5="program"
                    h2={h2} />
                <div className="display-flex justify-evenly">
                    {cards}
                </div>
            </div>
                
                
            </section>
        );
    }
}

export default Program;