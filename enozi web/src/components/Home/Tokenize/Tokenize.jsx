import React, { Component } from 'react';
import SectionHeader from '../Header/SectionHeader/SectionHeader';

class Tokenize extends Component {
render() {
    const para=[`Tokenize your company shares, creating `,
                <br />,
                "ERC-20 tokens that are freely tradeable on",
                <br />,
                `the Ethereum Network.`];
    const h2 =[`Create instant liquidity within `,
                <br />,
                "your company."]
    return(
        <section id="tokenize" className="section">
        <div className="container">
        <SectionHeader p= {para}
                        h5="tokenize"
                        h2={h2} />
        </div>
            
        </section>
    );
}
}

export default Tokenize;