/** @jsx React.DOM */

var React = require('react')

// var ProductCategoryRow = React.createClass({
//     render: function() {
//         return (<tr><th colSpan="2">{this.props.category}</th></tr>);
//     }
// });

// var ProductRow = React.createClass({
//     render: function() {
//         var name = this.props.product.stocked ?
//             this.props.product.name :
//             <span style={{color: 'red'}}>
//                 {this.props.product.name}
//             </span>;
//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{this.props.product.price}</td>
//             </tr>
//         );
//     }
// });

// var ProductTable = React.createClass({
//     render: function() {
//         var rows = [];
//         var lastCategory = null;
//         this.props.products.forEach(function(product) {
//             if (product.category !== lastCategory) {
//                 rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//             }
//             rows.push(<ProductRow product={product} key={product.name} />);
//             lastCategory = product.category;
//         });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// });

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
            React.DOM.div({
                className :  'FilterableProductTable'
            }, [
                SearchBar()
            ])
        );
    }
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

module.exports = FilterableProductTable
// React.renderComponent(<FilterableProductTable products={PRODUCTS} />, document.body);