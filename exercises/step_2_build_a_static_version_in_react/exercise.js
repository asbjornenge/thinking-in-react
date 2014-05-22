var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , wrappedexec   = require('workshopper-wrappedexec')
  , React         = require('react')
  , jsdom         = require('jsdom').jsdom

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
// exercise = wrappedexec(exercise)

// set up react and things
exercise.addSetup(function (mode, callback) {
    global.React    = React
    global.document = jsdom('<html><body></body></html>')
    global.window   = document.createWindow()
})

// verify DOM
exercise.addVerifyProcessor(function (callback) {
  var exercise = this
  var passed   = false
  this.emit('fail', 'Used synchronous method: fs. ()')
  callback(null, passed)
})

// cleanup DOM for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'
  console.log(passed)
  // rimraf(testDir, callback)
})

module.exports = exercise