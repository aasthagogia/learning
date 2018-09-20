import React from "react";
import Helmet from "react-helmet";
import Home from "../components/Home/Index";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div>
        {/* <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet> */}
        <Home />
      </div>
    );
  }
}

export default Index;
