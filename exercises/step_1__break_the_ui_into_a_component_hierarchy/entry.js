var blessed     = require("blessed"),
    exercise    = require("./exercise"),
    screen      = blessed.screen(),
    progress    = -1,
    box         = blessed.box({
        top     : "center",
        left    : "center",
        width   : 78,
        height  : 29,
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
    progBar     = blessed.box({
        top     : 23,
        left    : 4,
        width   : 70,
        height  : 1,
        tags    : true,
        style   : {
            bg  : "blue"
        }
    }),
    progressed  = blessed.box({
        top     : 23,
        left    : 4,
        width   : 14,
        height  : 1,
        tags    : true,
        style   : {
            bg  : "yellow"
        }
    }),
    percentage  = blessed.box({
        top     : 21,
        left    : "center",
        width   : 4,
        height  : 1,
        tags    : true,
        content : "0%",
        style   : {
            color   : "#fff"
        }
    }),
    navBar      = blessed.box({
        top     : 26,
        left    : 3,
        width   : 71,
        height  : 2,
        tags    : true,
        content : "  {yellow-fg}< PREVIOUS STEP {blue-fg}[UP]{/blue-fg}/{blue-fg}[LEFT]{/blue-fg}               {blue-fg}[DOWN]{/blue-fg}/{blue-fg}[RIGHT]{/blue-fg} NEXT STEP >{/yellow-fg}"
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
                    box.setLine(
                        16,
                        exercise().steps[i].description
                    );
                }
                box.setLine(
                    0,
                    "GUI representation:                      Component tree:"
                );
                box.setLine(
                    1,
                    ""
                );
                progressed.width = 14*(progress+1);
                percentage.content = 20*(progress+1)+"%";
                navBar.content = (progress === -1 || progress === 0) ?
                        "{yellow-fg}                                            {blue-fg}[DOWN]{/blue-fg}/{blue-fg}[RIGHT]{/blue-fg} NEXT STEP >{/yellow-fg}"
                    :
                        "  {yellow-fg}< PREVIOUS STEP {blue-fg}[UP]{/blue-fg}/{blue-fg}[LEFT]{/blue-fg}               {blue-fg}[DOWN]{/blue-fg}/{blue-fg}[RIGHT]{/blue-fg} NEXT STEP >{/yellow-fg}"
                if (progress !== -1) {
                    box.append(progBar);
                }
                box.append(progressed);
                box.append(percentage);
                box.append(navBar);
                screen.render();
            };

        if (direction === "next" && progress < exercise().steps.length-1) {
            progress += 1;
            render()
        } else if (direction === "prev" && progress > 0) {
            progress -= 1;
            render()
        } else if (direction === "prev" && progress === -1) {
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