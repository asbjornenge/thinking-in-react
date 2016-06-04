var React = require(process.cwd()+'/node_modules/react')
var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var ReactTestUtils = require(process.cwd()+'/node_modules/react-addons-test-utils') 
var assert = require('assert')
var render = require('./render')

describe('Inverse dataflow', function() {

    afterEach(function(done) {
        ReactDOM.unmountComponentAtNode(document.getElementById('react_workshop'))
        process.nextTick(done)
    })

    it('should update state on FilterableProductTable when modifying inputs', function(done) {
        var _comp = render(function() {
            ReactTestUtils.scryRenderedDOMComponentsWithTag(_comp, 'input').forEach(function(node) {
                if (node.type !== 'checkbox') node.value   = 'test'
                if (node.type == 'checkbox') node.checked = true
                ReactTestUtils.Simulate.change(node)
            })
            process.nextTick(function() {
                var _filterableProductTable = ReactTestUtils.findRenderedComponentWithType(_comp, Solution.FilterableProductTable)
                assert(_filterableProductTable.state.filterText  == 'test')
                assert(_filterableProductTable.state.inStockOnly == true)
                done()
            })
        })
    })

})
