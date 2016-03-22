var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// pure fn => fn(d)=v

ReactDOM.render(
  routes,
   document.getElementById('app')
);