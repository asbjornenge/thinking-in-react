# Introduction

So far we've built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it's time to support data flowing the other way: the form components deep in the hierarchy need to update the state in `FilterableProductTable`.

React makes this data flow explicit to make it easy to understand how your program works, but it does require a little more typing than traditional two-way data binding. React provides an add-on called `ReactLink` to make this pattern as convenient as two-way binding, but for the purpose of this exercise we'll keep everything explicit.

If you try to type or check the box in the current version of the example you'll see that React ignores your input. This is intentional, as we've set the value prop of the input to always be equal to the state passed in from `FilterableProductTable`.

Let's think about what we want to happen. We want to make sure that whenever the user changes the form we update the state to reflect the user input. Since components should only update their own state, `FilterableProductTable` can pass a callback to `SearchBar` that will fire whenever the state should be updated. We can use the `onChange` event on the inputs to be notified of it. And the callback passed by `FilterableProductTable` can call `setState()` and the app will be updated.

Though this sounds like a lot it's really just a few lines of code. And it's really explicit how your data is flowing throughout the app. Give it a try!

# Exercise

Create a function on `FilterableProductTable` called `handleUserInput`. Pass that as a `prop` to `SearchBar`. On the `SearchBar`, add an `onChange` handler to the inputs. Use this handler to determine the current state and set the state by invoking `handleUserInput` via `props`.

# HINT(s)

* Inputs might need a `ref`
* `import ReactDOM from 'react-dom'` might come in handy
* You can find a DOM node using `ReactDOM.findDOMNode(this.refs.<ref>)`
