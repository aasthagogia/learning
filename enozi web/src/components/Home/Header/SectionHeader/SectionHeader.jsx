import React, { Component } from 'react';

class SectionHeader extends Component {
render() {
    return(
        <section className="section-header-font">
        <h5 className="section-header-h5">
            {this.props.h5}
        </h5>
        <h2 className="section-header-h2">
            {this.props.h2}
        </h2>
        <p className="section-header-p">
            {this.props.p}
        </p>
        </section>
    );
}
}

export default SectionHeader;