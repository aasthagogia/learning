import React, { Component } from 'react';
import { Button } from 'react-md';
import footerLogo from '../../../assets/footer_logo.png';
import medium from '../../../assets/medium.png';
import twitter from '../../../assets/twitter.png';
import slack from '../../../assets/slack.png';
import telegram from '../../../assets/telegram.png';

class SignUp extends Component {
    render() {

        return (
            <section id="signup" className="section md-text-center">
                <div className="container">
                    <h2>Sign Up for Updates</h2>
                    <div className="display-flex justify-center">
                        <input type="email" placeholder="Email Address" className="margin" />
                        <Button flat secondary swapTheming className="button margin button-text">
                            Subscribe
                        </Button>
                    </div>
                    <div className="display-flex footer-border">
                        <a><img src={footerLogo} alt="footer_logo" /></a>
                        <div className="display-flex footer-logos">
                            <img src={telegram} alt="footer_logo" />
                            <img src={medium} alt="footer_logo" />
                            <img src={twitter} alt="footer_logo" />
                            <img src={slack} alt="footer_logo" />
                        </div>
                        <Button className="small-button">by mystake.io</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp;