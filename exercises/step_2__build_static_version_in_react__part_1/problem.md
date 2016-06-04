# Introduction

Now that you have your component hierarchy it's time to start implementing your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It's easiest to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We'll see why.

To build a static version of your app that renders your data model you'll want to build components that reuse other components and pass data using `props`. `props` are a way of passing data from parent to child. If you're familiar with the concept of `state`, `don't use state at all` to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app you don't need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with `FilterableProductTable`) or with the ones lower in it (`ProductRow`). In simpler examples it's usually easier to go top-down and on larger projects it's easier to go bottom-up and write tests as you build.

# Exercise

Let's build top-down. Build the top level component; `FilterableProductTable`.

Simply refer to the React docs if you need help executing this step; `http://facebook.github.io/react/docs/getting-started.html`

# HINT(s)

You are going to need react (and the test utils) for this exercise. Install it using npm. 

```sh
$ npm install react@15.1.0 react-dom@15.1.0
$ npm install react-addons-test-utils@15.1.0
```

As of React v15 we also need to install some react test utils in order to make things work.

We are using ES2015 syntax in these exercises. Here is what a really basic React component looks like.

```js
import React from 'react'

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <div></div>
        )
    }
})
```

You might notice we are using HTML in our javascript here. Whaaa? It's called JSX, and it's a central part of React. It let's you keep your markup together with your code.

Remember to `export` your components, so that I can verify your solution.

# GENERAL HINT(s)

Run your solution:

```sh
$ {appname} run solution.js
```

When you are done, verify:

```sh
$ {appname} verify solution.js
```

To view in browser:
```sh
$ {appname} server solution.js
```
and it'll be available (hopefully) on ```http://localhost:3333```
