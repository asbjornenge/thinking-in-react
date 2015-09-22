var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var ReactTestUtils = require('react-addons-test-utils')
var assert = require('assert')
var render = require('./render')
var products = require('./products.json')

describe('Static version - step 3', function() {

    afterEach(function(done) {
        ReactDOM.unmountComponentAtNode(document.getElementById('react_workshop'))
        process.nextTick(done)
    })

    it('should export a ProductTable, a ProductRow and a ProductCategoryRow', function() {
        assert(Solution.ProductTable != undefined, 'Please use the appropriate component names from step 1.')
        assert(Solution.ProductRow != undefined, 'Please use the appropriate component names from step 1.')
        assert(Solution.ProductCategoryRow != undefined, 'Please use the appropriate component names from step 1.')
    })

    it('should contain a ProductTable', function(done) {
        var _comp = render(function() {
            var _productTable = ReactTestUtils.findRenderedComponentWithType(_comp, Solution.ProductTable)
            assert(_productTable != undefined)
            done()
        })
    })

    it('should contain a ProductRow', function(done) {
        var _comp = render(function() {
            var _productRow = ReactTestUtils.scryRenderedComponentsWithType(_comp, Solution.ProductRow)
            assert(_productRow.length == products.length)
            done()
        })
    })

    it('should contain a ProductCategoryRow', function(done) {
        var _comp = render(function() {
            var _productCategoryRow = ReactTestUtils.scryRenderedComponentsWithType(_comp, Solution.ProductCategoryRow)
            assert(_productCategoryRow.length == 2)
            done()
        })
    })

})
