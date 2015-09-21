var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var ReactTestUtils = require('react-addons-test-utils')
var assert = require('assert')
var render = require('./render')

describe('Static version - step 2', function() {

    afterEach(function(done) {
        ReactDOM.unmountComponentAtNode(document.getElementById('react_workshop'))
        process.nextTick(done)
    })

    it('should export a SearchBar', function() {
        assert(Solution.SearchBar != undefined, 'Please use the appropriate component names from step 1.')
    })

    it('should render a SearchBar', function(done) {
        var _comp = render(function() {
            var _searchBar = ReactTestUtils.findRenderedComponentWithType(_comp, Solution.SearchBar)
            assert(_searchBar != undefined)
            done()
        })
    })

})
