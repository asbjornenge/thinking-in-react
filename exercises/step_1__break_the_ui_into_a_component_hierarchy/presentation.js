module.exports = function (callback) {

    var blessed     = require("blessed"),
        exercise    = require("./components"),
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
        var _spacer     = "       "
        var navigate    = function(direction) {
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
                            if (progress === 0) {
                                component[i].style.border.fg = "white";
                            } else {
                                component[i].style.border.fg = "yellow";
                            }
                        }
                        component[i].prepend(new blessed.Text({
                            left    : 2,
                            content : exercise().steps[i].title,
                            fg      : "#fff"
                        }));
                        box.append(
                            component[i]
                        );
                        if (progress > 0) {
                            box.setLine(
                                (i*2)-1,
                                spacer+exercise().steps[i].treePrepend[1]+"|"
                            );
                        }
                        if (progress > 0) {
                            box.setLine(
                                (i*2),
                                spacer+exercise().steps[i].treePrepend[0]+exercise().steps[i].title
                            );
                        }
                        box.setLine(
                            16,
                            exercise().steps[i].description
                        );
                        if (progress === 0) {
                            box.append(new blessed.Text({
                                left    : 6,
                                top     : 5,
                                content : " Search...                      ",
                                fg      : "black",
                                bg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 7,
                                content : " Sporting Goods",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 8,
                                content : " Football      $49.99",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 9,
                                content : " Baseball      $9.99",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 10,
                                content : " Basketball    $29.99",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 12,
                                content : " Electronics",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 13,
                                content : " iPod Touch    $99.99",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 14,
                                content : " iPhone 5      $399.99",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 15,
                                content : " Nexus 7       $199.99",
                                fg      : "white"
                            }));
                        } else if (progress === 2 || progress === 3) {
                            box.append(new blessed.Text({
                                left    : 6,
                                top     : 6,
                                content : " Search...                      ",
                                fg      : "black",
                                bg      : "white"
                            }));
                        } else if (progress === 4) {
                            box.append(new blessed.Text({
                                left    : 6,
                                top     : 6,
                                content : " Search...                      ",
                                fg      : "black",
                                bg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 10,
                                content : " Sporting Goods",
                                fg      : "white"
                            }));
                        } else if (progress === 5) {
                            box.append(new blessed.Text({
                                left    : 6,
                                top     : 6,
                                content : " Search...                      ",
                                fg      : "black",
                                bg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 10,
                                content : " Sporting Goods",
                                fg      : "white"
                            }));
                            box.append(new blessed.Text({
                                left    : 7,
                                top     : 13,
                                content : " Football      $49.99",
                                fg      : "white"
                            }));
                        }
                    }
                    box.setLine(
                        0,
                        (progress > 0) ?
                                "GUI representation:                      Component tree:"
                            :
                                "GUI representation:                                     "
                    );
                    box.setLine(
                        1,
                        ""
                    );
                    progressed.width = (progress > 0) ?
                            14*(progress)
                        :
                            1;
                    progressed.style = (progress > 0) ?
                            {
                                bg  : "yellow"
                            }
                        :
                            {
                                bg  : "blue"
                            };
                    percentage.content = 20*(progress)+"%";
                    navBar.content = (progress === -1 || progress === 0) ?
                            "{yellow-fg}                                                   {blue-fg}[RIGHT]{/blue-fg} NEXT STEP >{/yellow-fg}"
                        :
                            (progress !== 5) ?
                                    "  {yellow-fg}< PREVIOUS STEP {blue-fg}[LEFT]{/blue-fg}                           {blue-fg}[RIGHT]{/blue-fg} NEXT STEP >{/yellow-fg}"
                                :
                                    "  {yellow-fg}< PREVIOUS STEP {blue-fg}[LEFT]{/blue-fg}                              {blue-fg}[ENTER]{/blue-fg} FINISH >{/yellow-fg}"
                    if (progress !== -1) {
                        box.append(progBar);
                    }
                    box.append(progressed)
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
            } else if (direction === "next" && progress < exercise().steps.length) {
                // Finishing
                var blanker = blessed.box({
                    width  : '100%',
                    height : '100%',
                    style  : {
                        fg : 'black'
                    }
                })
                blanker.append(new blessed.Text({
                    top     : 10,
                    left    : 'center',
                    content : 'You have successfully completed step 1'
                }))
                var blinker = new blessed.Text({
                    top     : 11,
                    left    : 'center',
                    content : 'CONGRATULATIONS!',
                    style   : {
                        fg : 'green'
                    }
                })
                blanker.append(blinker)

                var colors = ['red','green','blue','magenta','yellow']
                var colorInterval = setInterval(function () {
                    blinker.style.fg = colors[Math.floor(Math.random() * 6)]
                    screen.render()
                },20)
                setTimeout(function () {
                    box.hide(); blanker.hide(); screen.render(); callback(true);
                    screen.render()
                },2000)
                screen.append(blanker)
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
            if (progress > 0) navigate("prev")
        }
    );
    box.key("right", function(
            ch,
            key
        ) {
            if (progress >= 0 && progress < 5) navigate("next")
        }
    );
    box.key("enter", function(
            ch,
            key
        ) {
            if (progress == -1 || progress == 5) navigate("next")
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
}
