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
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(ProductCategoryRow({ category : product.category, key : product.category }));
            }
            rows.push(ProductRow({product : product, key : product.name }));
            lastCategory = product.category;
        }.bind(this));
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
    handleChange : function(e) {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value,
            this.refs.inStockOnlyInput.getDOMNode().checked
        )
    },
    render: function() {
        return (
            React.DOM.form({
                className : 'SearchBar'
            }, [
                React.DOM.input({
                    type        : 'text',
                    placeholder : 'Search...',
                    value       : this.props.filterText,
                    ref         : 'filterTextInput',
                    onChange    : this.handleChange
                }),
                React.DOM.p({},[
                    React.DOM.input({
                        type     : 'checkbox', 
                        value    : this.props.inStockOnly,
                        ref      : 'inStockOnlyInput',
                        onChange : this.handleChange
                    }),
                    'Only show products in stock'
                ])
            ])
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState : function() {
        return {
            filterText  : '',
            inStockOnly : false
        }
    },
    handleUserInput : function(filterText, inStockOnly) {
        this.setState({
            filterText  : filterText,
            inStockOnly : inStockOnly
        })
    },
    render: function() {
        return (
            React.DOM.div({
                className :  'FilterableProductTable'
            }, [
                SearchBar({
                    filterText  : this.state.filterText,
                    inStockOnly : this.state.inStockOnly,
                    onUserInput : this.handleUserInput
                }),
                ProductTable({ 
                    products    : this.props.products,
                    filterText  : this.state.filterText,
                    inStockOnly : this.state.inStockOnly
                })
            ])
        );
    }
});

module.exports = FilterableProductTable