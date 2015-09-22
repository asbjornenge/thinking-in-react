var React = require(process.cwd()+'/node_modules/react/addons')
var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
// Note: in that specific case, we are using refs and as such want to have the same React instance.
// See https://gist.github.com/jimfb/4faa6cbfb1ef476bd105#file-react-refs-must-have-owner-md
// See https://facebook.github.io/react/docs/test-utils.html
var ReactTestUtils = React.addons.TestUtils
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
