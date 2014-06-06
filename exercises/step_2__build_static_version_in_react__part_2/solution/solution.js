var React = require('react')

var SearchBar = React.createClass({
    render: function() {
        return (
            React.DOM.form({}, [
                React.DOM.input({
                    type        : 'text',
                    placeholder : 'Search...'
                }),
                React.DOM.p({},[
                    React.DOM.input({ type : 'checkbox' }),
                    'Only show products in stock'
                ])
            ])
        );
    }
});

var FilterableProductTable = React.createClass({
    render: function() {
        return (
            React.DOM.div({}, [
                SearchBar()
            ])
        );
    }
});

module.exports.FilterableProductTable = FilterableProductTable
module.exports.SearchBar = SearchBar