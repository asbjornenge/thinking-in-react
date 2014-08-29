var React = require('react');
var path = require('path');
var prods = require('../exercises/products.json');
var Solution  = require('./solution_tmp.js');




React.renderComponent(Solution.FilterableProductTable({products:prods}), document.getElementById('react_workshop'));