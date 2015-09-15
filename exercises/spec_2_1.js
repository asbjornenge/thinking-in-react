var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var ReactTestUtils = require('react-addons-test-utils')
var assert = require('assert')
var render = require('./render')

describe('Static version - step 1', function() {

    afterEach(function(done) {
        ReactDOM.unmountComponentAtNode(document.getElementById('react_workshop'))
        process.nextTick(done)
    })

    it('should export a FilterableProductTable', function() {
        assert(Solution.FilterableProductTable != undefined, 'Please use the appropriate component names from step 1.')
    })

    it('should render a FilterableProductTable', function(done) {
        var _comp = render(function() {
            var _filterableProductTable = ReactTestUtils.findRenderedComponentWithType(_comp, Solution.FilterableProductTable)
            assert(_filterableProductTable != undefined)
            done()
        })
    })

})
