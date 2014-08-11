var exercise    = function() {
        return(
            {
                intro   : "In this exercise, you will...",
                steps   :
                    [
                        {
                            title       : "FilterableProductTable",
                            description : "This is our topmost component...",
                            treePrepend : [
                                "",
                                " "
                            ],
                            size        : {
                                width   : 36,
                                height  : 13
                            },
                            placement   : {
                                left    : 4,
                                top     : 4
                            }
                        },
                        {
                            title       : "SearchBar",
                            description : "Blah blah...",
                            treePrepend : [
                                " |---",
                                " "
                            ],
                            size        : {
                                width   : 34,
                                height  : 3
                            },
                            placement   : {
                                left    : 5,
                                top     : 5
                            }
                        },
                        {
                            title       : "ProductTable",
                            description : "Blah blah...",
                            treePrepend : [
                                " |---",
                                " "
                            ],
                            size        : {
                                width   : 34,
                                height  : 8
                            },
                            placement   : {
                                left    : 5,
                                top     : 8
                            }
                        },
                        {
                            title       : "ProductCategoryRow",
                            description : "Blah blah...",
                            treePrepend : [
                                "      |---",
                                "      "
                            ],
                            size        : {
                                width   : 32,
                                height  : 3
                            },
                            placement   : {
                                left    : 6,
                                top     : 9
                            }
                        },
                        {
                            title       : "ProductRow",
                            description : "Blah blah...",
                            treePrepend : [
                                "      |---",
                                "      "
                            ],
                            size        : {
                                width   : 32,
                                height  : 3
                            },
                            placement   : {
                                left    : 6,
                                top     : 12
                            }
                        }
                    ]
            }
        )
    };

module.exports = exercise;