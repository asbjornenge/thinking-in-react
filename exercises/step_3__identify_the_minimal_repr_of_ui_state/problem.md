# Introduction

To make your UI interactive you need to be able to trigger changes to your underlying data model. React makes this easy with `state`.

To build your app correctly you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don't Repeat Yourself. Figure out what the absolute minimal representation of the state of your application needs to be and compute everything else you need on-demand.

Go through each piece of data in our application and figure out which one is state by asking three questions about each piece of data:

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it change over time? If not, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it's not state.

# Exercise

In this exercise we will play State Bingo! Let the games begin...

```sh
$ {appname} verify statebingo
```

Pressing `ESC` will return you to your terminal at any point.
