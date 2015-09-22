import React from 'react';

export const SearchBar = React.createClass({
    render() {
        return (
            <form>
                <input type="search" placeholder="Search..."/>
                <label>
                    <input type="checkbox"/>
                    Only show products in stock
                </label>
            </form>
        );
    },
});

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <SearchBar/>
        );
    },
});
