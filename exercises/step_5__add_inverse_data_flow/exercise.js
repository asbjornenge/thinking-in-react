var exercise = require('../mocha_exercise')
var printer  = require('workshopper/print-text')

exercise.addCleanup(function (mode, passed, callback) {
    if (mode == 'verify' && passed) printer.file(this.workshopper.appName, this.workshopper.appDir, this.workshopper.appDir+'/exercises/final_words.md')
})

module.exports = exercise