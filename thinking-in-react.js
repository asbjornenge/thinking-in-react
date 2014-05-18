#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name              : 'thinking-in-react'
  , title             : 'LEARN YOU THE REACT.JS THINKING FOR MUCH WIN(D)!'
  , appDir            : __dirname
  , exerciseDir       : path.join(__dirname, '/exercises/')
  , helpFile          : path.join(__dirname, 'help.txt')
  , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
  , creditsFile       : path.join(__dirname, 'credits.txt')
})