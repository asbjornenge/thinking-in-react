# Thinking in React

A [workshopper](https://github.com/rvagg/workshopper) module for learning [React](http://facebook.github.io/react/index.html), based on [thinking in react](http://facebook.github.io/react/docs/thinking-in-react.html).  

It will hopefully help you get started with React and help you to get a good workflow from the get-go.

## Install

	$ npm install -g thinking-in-react

## Usage

Just run

	$ thinking-in-react

to play.

## Changelog

### v3.1.1

* Added `react-addons-test-utils` to install instructions
* Using user local `react-addons-test-utils` fixes step 5 

### v3.1.0

* Added support for React v15 (run/verify on step 5 broke previously with React v15)

### v3.0.1

* Fixed a typo via #17 - thanks @brian-stovall

### v3.0.0

* Bumped jsdom to v7

Bumping jsdom introduces a breaking change (major release) since the new version no longer supports node 0.x.
If you see build issues with `contextify` then make sure to upgrade to node 4+ and things should work.
If you don't want to upgrade node feel free to install `thinking-in-react@2.0.0` :smile:

### v2.0.0

* Added support for JSX and ES2015 via Babel - thanks @ThibWeb
* Updated to React v0.14

### v1.0.0

* Using process.cwd() instead of process.env.PWD - improves Windows support
* Also did a non-semver release to get to a proper semver starting point

### v0.1.0

* Introduced blessed UI guide for step 1
* Improved HINTs
* Introduced state bingo!
* Introduced ```thinking-in-react server``` to test your solution in the browser!
