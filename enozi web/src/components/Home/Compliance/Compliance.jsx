import React, { Component } from 'react';
import SectionHeader from '../Header/SectionHeader/SectionHeader';
import logo from '../../../assets/Slice_5.png';

class Compliance extends Component {
    render() {
        const para = [`Develop your own shareholder`,
            <br />,
            ` agreements rules such as vesting`,
            <br />,
            ` periods, exercise windows. `];

        const h2 = [`Experience the benefits of tokenized equity,`,
                    <br />,
                    ` whilst still remaining legally compliant`];

        return (
            <section id="compliance" className="section">
            <div className="container">
                <SectionHeader p={para}
                    h5="compliance"
                    h2={h2} />
                <div>
                    <img src={logo} alt="Home logo"/>
                </div>
            </div>               
            </section>
        );
    }
}

export default Compliance;