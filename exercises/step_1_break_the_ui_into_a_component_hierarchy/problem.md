Break your UI into components

----------------------------------------------------------------------

The first thing you'll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names.

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

But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing it should be decomposed into smaller subcomponents.

# EXERCISE HINT

Output each component to the console. Use TWO spaces to indicate child component:

```js
console.log('FirstComponent')
console.log('  Child')
console.log('  AnotherChild')
console.log('    ChildOfChild')
```

# HINT

Make a Node.js program:

```sh
$ node program.js
```

When you are done, you must run:

```sh
$ {appname} verify program.js
```