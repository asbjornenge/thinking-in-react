var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen();

// Create a box perfectly centered horizontally and vertically.
var box = blessed.form({
  top: 'center',
  left: 'center',
  width: '90%',
  height: '90%',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'blue',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

box.prepend(new blessed.Text({
  left: 2,
  content: 'State bingo'
}));


var bingoboard = blessed.box({
  top: 8,
  left: 'center',
  width: '30%',
  height: '60%',
  tags: true,
  border: {
    type: 'line',
    fg  : '#EF7702'
  },
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
    top  : 1,
    width : 49,
    content: bingologo,
    style: {
      fg: 'red',
    }
}));

var cbs = require('./bingostates.json').map(function(state, index) {
    return blessed.box({
        top     : state.top,
        left    : state.left,
        width   : '30%',
        height  : '30%',
        padding : {
          left : '5%'    
        },
        content : state.state,
        style: {
            bg: 'blue',
        }
    })
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
