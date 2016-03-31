import React, { Component } from 'react';

import d3 from 'd3';

class H1BGraph extends Component {
  constructor() {
    super();

    this.state = {
      rawData: []
    };
  }
  componentWillMount() {
    this.loadRawData();
  }

  loadRawData() {
    d3.csv(this.props.url)
      .get((error, rows) => {
        if (error) {
          console.error(error);
          console.error(error.stack);
        } else {
          this.setState({rawData: rows});
        }
      });
  }
  render() {
  return (
    <div>
      <p> </p>
      <svg>
      </svg>
    </div>
  );
  }
}

export default H1BGraph;