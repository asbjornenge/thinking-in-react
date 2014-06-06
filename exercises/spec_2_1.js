describe('Static version - step 1', function() {

    afterEach(function(done) {
        React.unmountComponentAtNode(document.body)
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
