var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var ReactTestUtils = require('react-addons-test-utils')
var assert = require('assert')
var render = require('./render')

describe('Stateful', function() {

    afterEach(function(done) {
        ReactDOM.unmountComponentAtNode(document.getElementById('react_workshop'))
        process.nextTick(done)
    })

    it('state should live at FilterableProductTable', function(done) {
        var _comp = render(function() {
            var _filterableProductTable = ReactTestUtils.findRenderedComponentWithType(_comp, Solution.FilterableProductTable)
            assert(_filterableProductTable.state.filterText != undefined)
            assert(_filterableProductTable.state.inStockOnly != undefined)
            done()
        })
    })

})
