var React    = require(process.cwd()+'/node_modules/react')
var ReactDOM = require(process.cwd()+'/node_modules/react-dom')
var products = require('./products.json')

module.exports = function render(callback) {
    return ReactDOM.render(React.createElement(Solution.FilterableProductTable, {products:products}), document.getElementById('react_workshop'), function() {
        process.nextTick(callback)
    })
}
