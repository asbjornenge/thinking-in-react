# Introduction

React is, in my opinion, the premier way to build big, fast Web apps with JavaScript. It's scaled very well for Facebook and Instagram.

One of the many great parts of React is how it makes you think about apps as you build them. In this exercise we will walk through the thought process of building a searchable product data table using React.

# Start with a mock

Imagine that we already have a JSON API and a mock from our designer. Our designer apparently isn't very good because the mock looks like this:

    [--------------------------------]
    | Search                         |
    |--------------------------------|
    | [] Only show products in stock |
    |                                |
    | Name                Price      |
    |   Sporting goods               |
    | Football            $49.99     |
    | Baseball            $9.99      |
    | Basketball          $29.99     |
    |   Electronics                  |
    | iPod Touch          $99.99     |
    | iPhone 5            $399.99    |
    | Nexus 7             $199.99    |
    [--------------------------------]

# Break the UI into a component hierarchy

The first thing you'll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing it should be decomposed into smaller subcomponents.

# Exercise

This first step is more of a guide than an exercise. Start by running the following command:

```sh
$ {appname} verify components
```

Pressing `ESC` will return you to your terminal at any point.
