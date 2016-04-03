import React, { Component } from 'react';

import _ from 'lodash';
import ControlRow from './ControlRow';

class Controls extends Component {
  constructor() {
    super();

    this.state = {
      yearFilter: () => true,
      jobTitleFilter: () => true,
      stateFilter: () => true,
      year: '*',
      state: '*',
      jobTitle: '*'
    };
  }


  updateYearFilter(year, reset) {
    let filter = (d) => d.submit_date.getFullYear() == year;

    if (reset || !year) {
      filter = () => true;
      year = '*';
    }

    this.setState({yearFilter: fitler, 
                   year: year});
  }

  componentDidUpdate() {
    this.props.updateDataFilter(
      ((filters) => {
        return (d) => filters.yearFilter(d);
      })(this.state)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState);
  }

  render() {
    let getYears = (data) => {
      return _.keys(_.groupBy(data,
                              (d) => d.submit_date.getFullYear()))
                              .map(Number);
    }
    return (
      <div>
        <ControlRow data={this.props.data}
                    getToggleNames={getYears}
                    updateDataFilter={() => true} />
      </div>
    )
  }
}

export default Controls;