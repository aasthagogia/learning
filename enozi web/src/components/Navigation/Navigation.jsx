import React, { Component } from "react";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Button } from 'react-md';
import Logo from "./Logo";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      menuOpen: false
    };
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleSetActive(to){
    console.log(to);
  }
  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  render() {
    return (
      <header id="header" className={`${this.state.menuOpen ? 'menuopen header' : 'header'}`}>
        <div className="container">
          <div className="logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <Button icon className="menubtn" iconClassName={`${this.state.menuOpen ? 'windowClose' : 'fas fa-ellipsis-v'}`} onClick={this.toggle} />
          <nav>
            <ul>
              <li>
                <Link activeClass="active" href="/#vision" to="vision" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} onClick={this.toggle}>
                  VISION
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="platform" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} onClick={this.toggle}>
                  THE PLATFORM
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="token-container" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} onClick={this.toggle}>
                  TOKEN
                </Link>
              </li>
              <li className="mobileHide">
                <Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} onClick={this.toggle}>
                  ROADMAP
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive} onClick={this.toggle}>
                  THE TEAM
                </Link>
              </li>
              <li className="parent">
                <a className="tabHide">
                  WHITE PAPER
                </a>
                <ul className="subMenu">
                  <li><a target="_blank" href="/images/file/whitepaper_24_04_18.pdf">White paper (English)</a></li>
                  <li><a target="_blank" href="/images/file/Enosi_Lite_Paper_May_2018.pdf">Lite paper (English)</a></li>
                  <li><a target="_blank" href="/images/file/Enosi_LITEPAPER_May_2018_JP_2.pdf">Lite paper (Japanese)</a></li>
                </ul>
              </li>
              <li className="parent">
                <a className="tabHide">
                  MORE INFO
                </a>
                <ul className="subMenu">
                  <li><a onClick={this.toggle} href="/faq">FAQ</a></li>
                  <li><a onClick={this.toggle} href="/glossary">GLOSSARY</a></li>
                  <li><a onClick={this.toggle} href="/terms">TERMS OF USE</a></li>
                  <li><a onClick={this.toggle} href="/privacy">PRIVACY POLICY</a></li>
                </ul>
              </li>
              <li>
                <a href="/contact" onClick={this.toggle}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    );
  }
}

export default Navigation;
