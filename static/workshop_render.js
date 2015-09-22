var React = require('react');
var ReactDOM = require('react-dom');
var path = require('path');
var products = require('../exercises/products.json');
var Solution  = require('./solution_tmp.js');

ReactDOM.render(React.createElement(Solution.FilterableProductTable, {products:products}), document.getElementById('react_workshop'));
