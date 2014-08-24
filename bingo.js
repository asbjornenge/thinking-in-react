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

// Create a bingoboard
var bingoboard = blessed.box({
  top: 10,
  left: 'center',
  width: '80%',
  height: '60%',
  tags: true,
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

// Append states
var gridpos = 0
var cbs = require('./bingostates.json').map(function(state, index) {
    if (index > 0 && (index % 3) == 0) gridpos += 1
    // console.log((index % 3)*30, gridpos*30)
    var bgcolor  = index == 0 ? 'red' : 'blue'
    var statebox =  blessed.box({
        top     : ((index % 3) * 30) + 5 +'%',
        left    : (gridpos * 30) + 5 +'%',
        width   : '25%',
        height  : '25%',
        style: {
            bg: bgcolor,
        }
    })
    statebox.prepend(new blessed.Text({
        top  : 'center',
        left : 'center',
        content: state.state
    }))
    return statebox
})

// Initialize
cbs.forEach(function(cb) {
    ['up','down','left','right'].forEach(function(dir) {
        cb.key(dir, function(ch, key) { navigate(dir) })
    })
    cb.key('space', function(ch, key) {
        if (cb.selected) cb.selected = false
        else cb.selected = true
        navigate('select')
    })
    cb.key('enter', function(ch, key) {
        finish()
    })
  bingoboard.append(cb)
})
var cbc = 0
var cb  = cbs[0]

// Navigation
function navigate(direction) {
  var newcbc = function(dir) {
    if (dir == 'up'    && cbc > 0) return cbc-1
    if (dir == 'left'  && cbc >= 3) return cbc-3
    if (dir == 'down'  && cbc < cbs.length-1) return cbc+1
    if (dir == 'right' && cbc < cbs.length-3) return cbc+3
    return cbc
  }

  cbs.forEach(function(cb, index) {
    cb.style.bg = 'blue'
    if (cb.selected) {
        cb.style.bg = '#EF7702'
    }
    if (index == newcbc(direction)) {
      cb.style.bg = cb.selected ? 'magenta' : 'red'
      cb.focus()
    }
  })
  cbc = newcbc(direction)
  screen.render()
}

// Evaluate score
function finish() {
    cbs.forEach(function (cb) {
        console.log(cb.selected, cb.children[0].content)
    })
}

// Append our box to the screen.
box.append(bingoboard)
screen.append(box);

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
cb.focus();

// Render the screen.
screen.render();
