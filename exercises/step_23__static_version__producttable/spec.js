var assert         = require('assert')
var React          = require('react')
var ReactAddons    = require('react/addons')
var ReactTestUtils = React.addons.TestUtils

var products       = require('../products.json')

function render(callback) {
    return React.renderComponent(Solution({products : products}), document.body, function() {
        process.nextTick(callback)
    })
}

describe('Static version', function() {

    afterEach(function(done) {
        React.unmountComponentAtNode(document.body)
        process.nextTick(done)
    })

    it('should contain a FilterableProductTable', function(done) {
        var _comp = render(function() {
            var _filterableProductTable = ReactTestUtils.scryRenderedDOMComponentsWithClass(_comp, 'FilterableProductTable')
            assert(_filterableProductTable.length, 1)
            done()
        })
    })

    it('should contain a SearchBar', function(done) {
        var _comp = render(function() {
            var _searchBar = ReactTestUtils.scryRenderedDOMComponentsWithClass(_comp, 'SearchBar')
            assert(_searchBar.length, 1)
            done()
        })        
    })

    it('should contain a ProductTable', function(done) {
        var _comp = render(function() {
            var _productTable = ReactTestUtils.scryRenderedDOMComponentsWithClass(_comp, 'ProductTable')
            assert(_productTable.length, 1)
            done()
        })        
    })

    it('should contain a ProductRow', function(done) {
        var _comp = render(function() {
            var _productRow = ReactTestUtils.scryRenderedDOMComponentsWithClass(_comp, 'ProductRow')
            assert(_productRow.length, 1)
            done()
        })        
    })

    it('should contain a ProductCategoryRow', function(done) {
        var _comp = render(function() {
            var _productCategoryRow = ReactTestUtils.scryRenderedDOMComponentsWithClass(_comp, 'ProductCategoryRow')
            assert(_productCategoryRow.length, 1)
            done()
        })        
    })

})
