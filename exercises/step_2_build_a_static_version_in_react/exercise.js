var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , wrappedexec   = require('workshopper-wrappedexec')
  , path          = require('path')
  , jsdom         = require('jsdom').jsdom
  , Mocha         = require('mocha')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
// exercise = comparestdout(exercise)

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
// exercise = wrappedexec(exercise)

// set up document and things
exercise.addSetup(function (mode, callback) {
    global.document  = jsdom('<html><body></body></html>')
    global.window    = document.createWindow()
    global.navigator = window.navigator
    global.Solution  = require(path.resolve(process.cwd(), process.argv[3]))

    if (typeof Solution != 'function')
      return console.log(file, 'does not export a function. HINT: Use module.exports')

    var mocha = new Mocha()
    mocha.ui('bdd')
    mocha.addFile(path.resolve(process.cwd(),'exercises/step_2_build_a_static_version_in_react/spec.js'))
    mocha.run(function(failures) {
        this.failures = failures
        callback()
    }.bind(this))
})

// Verify DOM
exercise.addVerifyProcessor(function (callback) {
  var exercise = this
  // console.error(exercise)
  // console.log(exercise.workshopper.appDir,exercise.submission)
  var passed = this.failures == 0
  if (passed) this.emit('pass', 'Looks good!')
  else this.emit('fail', "Tests don't pass")
  callback(null, passed)
})

// cleanup DOM for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'
  // console.log(passed)
  // rimraf(testDir, callback)
})

module.exports = exercise