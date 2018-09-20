import React, { Component } from "react";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {footer} from "../../../data/HomeConfig";
import RecentPost from "./RecentPost";
import { Grid, Cell } from 'react-md'
import Logo from "../Navigation/Logo";
import {twitterWidget} from "./twitter-widget.js";

class Footer extends Component {
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    twitterWidget();
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
    const data = footer;
    return (
      <footer className="footer">
        <div className="container">
          <ul className="socialLInk">
            <li className="socialHeading">FOLLOW US</li>
              {data.social.map((icon, index) => {
  							return(
  								<li key={index}>
  									<a target="_blank" href={icon.url}><i className={icon.iconClass} /></a>
  								</li>
  							);
  						})}
          </ul>
          <Grid className="footerContent">
            <Cell size={3} className="footerAboutus">
              <Logo />
              <div dangerouslySetInnerHTML={{ __html: data.col1 }} />
            </Cell>
            <Cell size={3} className="recentPost">
              <h4>Recent Posts</h4>
              <RecentPost />
            </Cell>
            <Cell size={3} className="LinksCol">
              <h4>Useful Links</h4>
              <ul>
                <li><a target="_blank" href="/images/file/whitepaper_24_04_18.pdf">White paper</a></li>
                <li><a target="_blank" href="/images/file/Enosi_Lite_Paper_May_2018.pdf">Lite paper</a></li>
                <li><a href="/images/file/Enosi_Terms_sheet.pdf" target="_blank">Terms of use</a></li>
                <li><a href="/images/file/Enosi_privacypolicy_sheet.pdf" target="_blank">Privacy statement</a></li>
                <li><a target="_blank" href="/images/file/Enosi_FAQ_sheet.pdf">FAQs</a></li>
                <li><a href="/images/file/Enosi_glossary_sheet.pdf" target="_blank">Glossary</a></li>
              </ul>
            </Cell>
            <Cell size={3} className="tweetsCol">
              <h4>Recent Tweets</h4>
              <div className="tweetpost">
                  <a className="twitter-timeline" data-height="237" data-theme="light" data-link-color="#3CB0FC" href="https://twitter.com/Enosi_io?ref_src=twsrc%5Etfw">Tweets by Enosi_io</a>
              </div>
            </Cell>
          </Grid>
          <div className="footerbottom">
            <ul className="footerNav">
              <li><a href="/">Home</a></li>
              <li><Link activeClass="active" to="vision" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Vision</Link></li>
              <li><Link activeClass="active" to="platform" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>The Platform</Link></li>
              <li><Link activeClass="active" to="token-container" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>Token</Link></li>
              <li className="mobileHide"><Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>Roadmap</Link></li>
              <li><Link activeClass="active" to="team" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>The Team</Link></li>
              <li><a href="/images/file/whitepaper_24_04_18.pdf" target="_blank">White Paper</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="copywrite"><strong>ENOSI</strong> © 2018</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
