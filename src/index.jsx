import React from 'react';
import ReactDOM from 'react-dom';

import H1BGraph from './components/H1BGraph/index.jsx';

require('./style.css');


// Add the ability to capitalize / decapitalize here. No need to add a library.

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function() {
  return this.charAt(0).toLowercase() + this.slice(1);
}

ReactDOM.render(
  <H1BGraph url='/data/h1bs.csv' />,
  document.querySelectorAll('.h1bgraph')[0]
);