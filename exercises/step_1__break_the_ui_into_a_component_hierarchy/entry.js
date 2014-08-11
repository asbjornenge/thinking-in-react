var blessed     = require("blessed"),
    exercise    = require("./exercise"),
    screen      = blessed.screen(),
    progress    = -1,
    box         = blessed.box({
        top     : "center",
        left    : "center",
        width   : 77,
        height  : 30,
        content : exercise().intro,
        tags    : true,
        padding : {
            left    : 3,
            right   : 3,
            top     : 1
        },
        border  : {
            type    : "line"
        },
        style   : {
            border  : {
                fg  : "#fff"
            }
        }
    }),
    component   = [],
    spacer      = "                                        ";
    navigate    = function(direction) {
        var render  = function() {
                var i;

                box.setContent("");
                for (
                    i   = 0;
                    i   < progress+1;
                    i++
                ) {
                    if (i < progress) {
                        component[i].style.border.fg = "blue";
                    } else {
                        component[i].style.border.fg = "yellow";
                    }
                    component[i].prepend(new blessed.Text({
                        left    : 2,
                        content : exercise().steps[i].title,
                        fg      : "#fff"
                    }));
                    box.append(
                        component[i]
                    );
                    box.setLine(
                        (i*2)+1,
                        spacer+exercise().steps[i].treePrepend[1]+"|"
                    );
                    box.setLine(
                        (i*2)+2,
                        spacer+exercise().steps[i].treePrepend[0]+exercise().steps[i].title
                    );
                }
                box.setLine(
                    0,
                    "GUI representation:                   Component tree:"
                );
                box.setLine(
                    1,
                    ""
                );
                box.setLine(
                    16,
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                );
                box.setLine(
                    22,
                    "< PREVIOUS STEP {blue-fg}[UP]{/blue-fg}/{blue-fg}[LEFT]{/blue-fg}                {blue-fg}[DOWN]{/blue-fg}/{blue-fg}[RIGHT]{/blue-fg} NEXT STEP >"
                );
                screen.render();
            };

        if (direction === "next" && progress < exercise().steps.length-1) {
            progress += 1;
            render()
        } else if (direction === "prev" && progress > 0) {
            progress -= 1;
            render()
        } else if (direction === "prev" && progress === 0) {
            box.setContent(exercise().intro);
            screen.render();
        }
    };

exercise().steps.map(function(step) {
   component.push(
       blessed.box({
            top     : step.placement.top,
            left    : step.placement.left,
            width   : step.size.width,
            height  : step.size.height,
            padding : {
                left    : 1,
                right   : 1
            },
            tags    : true,
            border  : {
                type    : "line"
            }
        })
   )
});
box.prepend(new blessed.Text(
    {
        left    : 2,
        content : "Component tree structure breakdown",
        fg      : "#fff"
    })
);
screen.append(box);
box.key("left", function(
        ch,
        key
    ) {
        navigate("prev")
    }
);
box.key("right", function(
        ch,
        key
    ) {
        navigate("next")
    }
);
box.key("up", function(
        ch,
        key
    ) {
        navigate("prev")
    }
);
box.key("down", function(
        ch,
        key
    ) {
        navigate("next")
    }
);
screen.key(
    [
        "escape",
        "q",
        "C-c"
    ],
    function(
        ch,
        key
    ) {
        return process.exit(0);
    }
);
box.focus();
screen.render();
