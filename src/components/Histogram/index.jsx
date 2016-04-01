import React, { Component } from 'react';
import d3 from 'd3';

class Histogram extends Component {
  constructor(props) {
    super();

    this.histogram = d3.layout.histogram();
    this.widthScale = d3.scale.linear();
    this.yScale = d3.scale.linear();

    this.update_d3(props);
  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps)
  }

  update_d3(props) {
    
  }
  render() {
    let translate = 'translate(0, ${this.props.topMargin})';

    return (
      <g className='histogram' transform={translate}>
      </g>
    );
  }
}

export default Histogram;