import React from 'react';
import { Card, CardTitle, CardText, Slider } from 'react-md';

const style = { maxWidth: 340, height: 417, marginLeft: 10, marginRight: 10, marginBottom: 10 };

const ProgramCard = () => (
  <Card style={style} className="md-block-centered">
    <CardTitle title="Using CardTitle" subtitle="With CardText" />
    <CardText>
      <p>
        The <code>CardText</code> component is really just useful for displaying any
        content with some additional padding.
      </p>
      {/* <Slider id="example-card-slider" /> */}
    </CardText>
  </Card>
);

export default ProgramCard;