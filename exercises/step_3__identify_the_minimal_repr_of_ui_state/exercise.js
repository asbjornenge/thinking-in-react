var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , concat        = require('concat-stream')
  , chalk         = require('chalk')
  , bingo         = require('./bingo')

// checks that the submission file actually exists
// exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// exercise = comparestdout(exercise)

exercise.addProcessor(function (mode, callback) {
    bingo(function (passed) {
        callback(null, passed)
    })
    // if (mode == 'run')    { this.submissionStdout.pipe(concat(function(data) { console.log(data.toString())})) }
    // if (mode == 'verify') { callback(null, true) }
})

// exercise.addVerifyProcessor(function (callback) {
//     console.log('\n'+chalk.yellow('Your submission results compared to the expected:')+'\n')
//
//     var required_passes = 2
//     var passes          = 0
//     var score = function(matched) {
//         passes++
//         this.emit('pass', matched+" is correct!")
//     }.bind(this)
//
//     var write = concat(function(data) {
//         var output = data.toString()
//         if (!passed) {
//             this.emit('fail', passes+' found, one or more still missing.')
//         }
//         if (output.split('\n').length > required_passes+1) {
//             this.emit('fail', 'Too many states there mate! DRY...')
//             passed = false
//         }
//         callback(null, passed)
//     }.bind(this))
//     this.submissionStdout.pipe(write)
//
// })

exercise.addCleanup(function (mode, passed, callback) {
    console.log(chalk.green('Press ESC to return to your terminal.'))
    // if (mode == 'verify' && passed) printer.file(this.workshopper.appName, this.workshopper.appDir, this.workshopper.appDir+'/exercises/final_words.md')
})

module.exports = exercise
