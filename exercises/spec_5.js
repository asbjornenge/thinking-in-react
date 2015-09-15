describe('Inverse dataflow', function() {

    afterEach(function(done) {
        React.unmountComponentAtNode(document.body)
        process.nextTick(done)
    })

    it('should update state on FilterableProductTable when modifying inputs', function(done) {
        var _comp = render(function() {
            ReactTestUtils.scryRenderedDOMComponentsWithTag(_comp, 'input').forEach(function(_input) {
                var node = _input.getDOMNode()
                if (node.type !== 'checkbox')     node.value   = 'test'
                if (node.type == 'checkbox') node.checked = true
                ReactTestUtils.Simulate.change(_input)
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
