import React, { Component } from 'react';
import logo from '../../../assets/LiquidityProtocol.png';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <a href="#">
                        <img src={logo} alt="oval_logo"></img>
                    </a>
                    <ul className="display-flex nav-items">
                        <li><a href="#home">Developers</a></li>
                        <li><a href="#weoffer">Team</a></li>
                        <li>
                            <a className="md-btn">
                                <span className="md-btn--text">Whitepaper
                                    </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default Header;