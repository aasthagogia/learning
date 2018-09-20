import React from 'react';
import { Card, CardTitle, CardText, Slider } from 'react-md';

const style = { maxWidth: 340, marginLeft: 10, marginRight: 10, marginBottom: 10 };

const PoweredByCard = () => (
  <Card style={style} className="md-block-centered">
    <CardTitle title="" subtitle="" />
    <CardText>
      <p>
        The <code>CardText</code> component is really just useful for displaying any
        content with some additional padding.
      </p>
      <div>
        <h4>
          Introducing Liquidity Protocol
        </h4>
        <h5>
          Published on 12 june 2018
        </h5>
      </div>
      {/* <Slider id="example-card-slider" /> */}
    </CardText>
  </Card>
);

export default PoweredByCard;