var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen();

// Create a box perfectly centered horizontally and vertically.
var box = blessed.form({
  top: 'center',
  left: 'center',
  width: '90%',
  height: '90%',
  content: '{center}Lets play STATE BINGO!\nNavigate using UP and DOWN arrow keys.\n{/center}',
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
  content: 'STATE-BINGO'
}));

var states = [
  { 
    state : 'state1',
    top   : '10%',
    left  : '10%'
  },
  { 
    state : 'state2',
    top   : '45%',
    left  : '45%'
  },
  { 
    state : 'state3',
    top   : '25%',
    left  : '30%'
  },
  { 
    state : 'state4',
    top   : '18%',
    left  : '70%'
  },
  { 
    state : 'state5',
    top   : '80%',
    left  : '40%'
  },
  { 
    state : 'state6',
    top   : '80%',
    left  : '70%'
  },
  { 
    state : 'state7',
    top   : '40%',
    left  : '20%'
  },
  { 
    state : 'state8',
    top   : '35%',
    left  : '77%'
  },
  { 
    state : 'state9',
    top   : '67%',
    left  : '7%'
  },
  { 
    state : 'state10',
    top   : '60%',
    left  : '27%'
  }
]

var cbs    = states.map(function(state, index) {
  return blessed.checkbox({
    left   : state.left,
    top    : state.top,
    width  : 15,
    height : 3,
    text   : state.state
  })
})
cbs.forEach(function(cb) {
  cb.key('up', function(ch, key) {
    navigate('up')
  })
  cb.key('down', function(ch, key) {
    navigate('down')
  })
  box.append(cb)
})
var cbc = 0
var cb  = cbs[0]

// Append our box to the screen.
screen.append(box);

function navigate(direction) {
  var newcbc = function(dir) {
    if (dir == 'up' && cbc > 0) return cbc-1
    if (dir == 'down' && cbc < cbs.length-1) return cbc+1
    return cbc
  }

  cbs.forEach(function(cb, index) {
    cb.style.fg = undefined
    if (index == newcbc(direction)) {
      cb.style.fg = 'blue'
      cb.focus()
    }
  })
  cbc = newcbc(direction)
  screen.render()
}

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
cb.focus();

// Render the screen.
screen.render();