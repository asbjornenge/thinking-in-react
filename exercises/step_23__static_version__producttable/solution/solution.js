var React = require('react')

var ProductCategoryRow = React.createClass({
    render: function() {
        return (
            React.DOM.tr({
                className : 'ProductCategoryRow'
            }, [
                React.DOM.th({
                    colSpan : 2
                }, this.props.category)
            ])
        )
    }
});

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            React.DOM.span({
                style : { color : 'red' }
            }, this.props.product.name)
        return (
            React.DOM.tr({
                className : 'ProductRow'
            }, [
                React.DOM.td({}, name),
                React.DOM.td({}, this.props.product.price)
            ])
        );
    }
});

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(ProductCategoryRow({ category : product.category, key : product.category }));
            }
            rows.push(ProductRow({product : product, key : product.name }));
            lastCategory = product.category;
        });
        return (
            React.DOM.table({
                className : 'ProductTable'
            },[
                React.DOM.thead({}, [
                    React.DOM.tr({}, [
                        React.DOM.th({},'Name'),
                        React.DOM.th({},'Price')
                    ])
                ]),
                React.DOM.tbody({}, rows)
            ])
        );
    }
});

var SearchBar = React.createClass({
    render: function() {
        return (
            React.DOM.form({
                className : 'SearchBar'
            }, [
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
            React.DOM.div({
                className :  'FilterableProductTable'
            }, [
                SearchBar(),
                ProductTable({ products : this.props.products })
            ])
        );
    }
});

module.exports = FilterableProductTable