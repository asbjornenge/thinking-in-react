# Introduction

Now that you have your component hierarchy it's time to start implementing your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It's easiest to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We'll see why.

To build a static version of your app that renders your data model you'll want to build components that reuse other components and pass data using `props`. `props` are a way of passing data from parent to child. If you're familiar with the concept of `state`, `don't use state at all` to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app you don't need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with `FilterableProductTable`) or with the ones lower in it (`ProductRow`). In simpler examples it's usually easier to go top-down and on larger projects it's easier to go bottom-up and write tests as you build.

# Exercise

Let's build top-down. Build the top level component; `FilterableProductTable`.

# HINT(s)

You are going to need reactjs for this exercise. Install it using npm.

```sh
$ npm install react
```

If you are unfamiliar with the commonjs format, here is how you can import the react library into your solution.

```js
var React = require('react')
```

Here is what a really basic React component looks like (JSX syntax is optional, I prefer not to use it).

```js
var AComponent = React.createClass({
    render: function() {
        return (
            React.DOM.div({}, [])
        );
    }
});
```

So that I can verify your solution you need to export it.

```js
module.exports = AComponent
```