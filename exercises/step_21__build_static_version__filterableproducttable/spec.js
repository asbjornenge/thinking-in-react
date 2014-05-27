var assert         = require('assert')
var React          = require('react')
var ReactAddons    = require('react/addons')
var ReactTestUtils = React.addons.TestUtils

function render(callback) {
    return React.renderComponent(Solution(), document.body, function() {
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

})
