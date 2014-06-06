var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , wrappedexec   = require('workshopper-wrappedexec')
  , printer       = require('workshopper/print-text')
  , path          = require('path')
  , jsdom         = require('jsdom').jsdom
  , Mocha         = require('mocha')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// Setup
exercise.addSetup(function (mode, callback) {
    global.document    = jsdom('<html><body></body></html>')
    global.window      = document.createWindow()
    global.navigator   = window.navigator
    global.HTMLElement = window.HTMLElement
    global.Solution    = require(path.resolve(process.cwd(), process.argv[3]))

    if (typeof Solution != 'function')
      return console.log(file, 'does not export a function. HINT: Use module.exports = ReactComponent to export your component.')

    var mocha = new Mocha()
    mocha.ui('bdd')
    mocha.addFile(__dirname+'/spec.js')
    mocha.run(function(failures) {
        this.failures = failures
        callback()
    }.bind(this))
})

// Verify
exercise.addVerifyProcessor(function (callback) {
    var exercise = this
    var passed = this.failures == 0
    if (passed) this.emit('pass', 'Looks good!')
    else this.emit('fail', "Tests don't pass")
    callback(null, passed)
})

exercise.addCleanup(function (mode, passed, callback) {
    printer.file(this.workshopper.appName, this.workshopper.appDir, this.workshopper.appDir+'/exercises/final_words.md')
})

module.exports = exercise