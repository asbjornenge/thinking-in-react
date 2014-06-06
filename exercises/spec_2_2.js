describe('Static version - step 2', function() {

    afterEach(function(done) {
        React.unmountComponentAtNode(document.body)
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
