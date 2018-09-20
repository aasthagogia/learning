import React, { Component } from 'react';
import Typed from 'react-typed';
import { Button } from 'react-md';

class Hero extends Component {

    render() {

        return (
            <section className="hero-section text-lg">
                <div className="container">
                    <h1 className="white-color">
                        Take control of your shares
                        with &nbsp;
                        <Typed
                            strings={["programmable", "tokenized", "liquid"]}
                            typeSpeed={50}
                            backSpeed={70}
                            contentType={'html'}
                            loop >
                            <span id="hero-repeat-span" />
                        </Typed>
                         equity.
                    </h1>
                    <p>
                        Liquidity is an open source Ethereum Smart<br />
                        Contact Framewrok that allows companies to<br />
                        tokenize the quity within their organisation
                    </p>
                    <Button flat secondary swapTheming className="button button-text">
                    Subscribe for Updates
                    </Button>
                </div>
            </section>
        );
    }
}

export default Hero;