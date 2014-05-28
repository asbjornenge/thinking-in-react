# Step 3: Identify the minimal (but complete) representation of UI state

To make your UI interactive you need to be able to trigger changes to your underlying data model. React makes this easy with state.

To build your app correctly you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out what the absolute minimal representation of the state of your application needs to be and compute everything else you need on-demand. For example, if you're building a TODO list, just keep an array of the TODO items around; don't keep a separate state variable for the count. Instead, when you want to render the TODO count simply take the length of the TODO items array.

Think of all of the pieces of data in our example application. We have:

* The original list of products
* The search text the user has entered
* The value of the checkbox
* The filtered list of products

Let's go through each one and figure out which one is state. Simply ask three questions about each piece of data

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it change over time? If not, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it's not state.

When you have identified the states, output them to the console. 1 state pr. line.

    console.log('The something something')
    console.log('That other thing')
    console.log('And also the blah')