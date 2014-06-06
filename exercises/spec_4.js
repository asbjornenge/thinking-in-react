describe('Stateful', function() {

    afterEach(function(done) {
        React.unmountComponentAtNode(document.body)
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
