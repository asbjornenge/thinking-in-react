var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , concat        = require('concat-stream')
  , chalk         = require('chalk')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// exercise = comparestdout(exercise)

exercise.addProcessor(function (mode, callback) {
    if (mode == 'run')    { this.submissionStdout.pipe(concat(function(data) { console.log(data.toString())})) }
    if (mode == 'verify') { callback(null, true) }
})

exercise.addVerifyProcessor(function (callback) {
    console.log('\n'+chalk.yellow('Your submission results compared to the expected:')+'\n')

    var required_passes = 2
    var passes          = 0
    var score = function(matched) {
        passes++
        this.emit('pass', matched+" is correct!")
    }.bind(this)

    var write = concat(function(data) {
        var output = data.toString()
        var passed = new check(output).on_match(score).for('searchtext').or('search text').and('checkbox').found
        if (!passed) {
            this.emit('fail', passes+' found, one or more still missing.')
        }
        if (output.split('\n').length > required_passes+1) {
            this.emit('fail', 'Too many states there mate! DRY...')
            passed = false
        }
        callback(null, passed)
    }.bind(this))
    this.submissionStdout.pipe(write)

})

var check = function(stringData) {
    this.data     = stringData
    this.found    = true
}
check.prototype.on_match = function(fn) {
    this._on_match = fn
    return this
}
check.prototype.for = function(to_match) {
    this.last = to_match
    if (this.data.indexOf(to_match) < 0) this.found = false
    this.check_on_match(to_match)
    return this
    // Sets false if not found
}
check.prototype.or = function(to_match) {
    if (this.found) return this
    if (this.data.indexOf(to_match) >= 0) this.found = true
    this.check_on_match(to_match)
    return this
    // Only check if false
    // Can only turn true if false
}
check.prototype.and = function(to_match) {
    return this.for(to_match)
}
check.prototype.check_on_match = function(to_match) {
    if (typeof this._on_match === 'function' && this.found) this._on_match(to_match)
}

module.exports = exercise