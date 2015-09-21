import React from 'react';

export const ProductCategoryRow = React.createClass({
    render() {
        return (
            <tr>
                <th colSpan={2}>{this.props.category}</th>
            </tr>
        );
    },
});

export const ProductRow = React.createClass({
    render() {
        const product = this.props.product;

        const style = {
            color: product.stocked ? null : 'red',
        };

        return (
            <tr>
                <td style={style}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    },
});

export const ProductTable = React.createClass({
    render() {
        const { products, filterText, inStockOnly } = this.props;

        const rows = [];
        let currentCategory;

        products.filter((product) => {
            const stockCond = !inStockOnly || inStockOnly && product.stocked;
            const nameCond = product.name.toLowerCase().indexOf(filterText) !== -1;

            return stockCond && nameCond;
        }).forEach((product) => {
            if (product.category !== currentCategory) {
                currentCategory = product.category;

                rows.push((
                    <ProductCategoryRow
                        key={currentCategory}
                        category={currentCategory}
                    />
                ));
            }

            rows.push((
                <ProductRow key={product.name} product={product}/>
            ));
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    },
});

export const SearchBar = React.createClass({
    render() {
        const { filterText, inStockOnly } = this.props;

        return (
            <form>
                <input type="search" placeholder="Search..." value={filterText}/>
                <label>
                    <input type="checkbox" value={inStockOnly}/>
                    Only show products in stock
                </label>
            </form>
        );
    },
});

export const FilterableProductTable = React.createClass({
    getInitialState() {
        return {
            filterText: '',
            inStockOnly: false,
        };
    },

    render() {
        const products = this.props.products;
        const { filterText, inStockOnly } = this.state;

        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
                <ProductTable
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </div>
        );
    },
});
