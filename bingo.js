var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen();

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%'
});

var bingoboard = blessed.box({
  top: 8,
  left: 'center',
  width: '80%',
  height: '60%',
  tags: true,
  // border: {
  //   type: 'line',
  //   fg  : '#EF7702'
  // },
  style: {
    fg: 'white',
  }
});

var bingologo = "\
██████╗ ██╗███╗   ██╗ ██████╗  ██████╗ ██╗ \
██╔══██╗██║████╗  ██║██╔════╝ ██╔═══██╗██║ \
██████╔╝██║██╔██╗ ██║██║  ███╗██║   ██║██║ \
██╔══██╗██║██║╚██╗██║██║   ██║██║   ██║╚═╝ \
██████╔╝██║██║ ╚████║╚██████╔╝╚██████╔╝██╗ \
╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝ \
"

box.prepend(new blessed.Text({
    left : 'center',
    width : 49,
    top   : 1,
    content: bingologo,
    style: {
      fg: 'red',
    }
}));

var gridpos = 0
var cbs = require('./bingostates.json').map(function(state, index) {
    if (index > 0 && (index % 3) == 0) gridpos += 1
    console.log((index % 3)*30, gridpos*30)
    return blessed.box({
        top     : ((index % 3) * 30) + 5 +'%',
        left    : (gridpos * 30) + 5 +'%',
        width   : '25%',
        height  : '25%',
        content : state.state,
        style: {
            bg: 'blue',
        }
    })
    return statebox
})

// process.exit(0)

//   return blessed.checkbox({
//     left   : state.left,
//     top    : state.top,
//     width  : 15,
//     height : 3,
//     text   : state.state
//   })
// })
cbs.forEach(function(cb) {
  // cb.key('up', function(ch, key) {
  //   navigate('up')
  // })
  // cb.key('down', function(ch, key) {
  //   navigate('down')
  // })
  bingoboard.append(cb)
})
// var cbc = 0
// var cb  = cbs[0]

// Append our box to the screen.
box.append(bingoboard)
screen.append(box);

// function navigate(direction) {
//   var newcbc = function(dir) {
//     if (dir == 'up' && cbc > 0) return cbc-1
//     if (dir == 'down' && cbc < cbs.length-1) return cbc+1
//     return cbc
//   }
//
//   cbs.forEach(function(cb, index) {
//     cb.style.fg = undefined
//     if (index == newcbc(direction)) {
//       cb.style.fg = 'blue'
//       cb.focus()
//     }
//   })
//   cbc = newcbc(direction)
//   screen.render()
// }

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
// cb.focus();

// Render the screen.
screen.render();
