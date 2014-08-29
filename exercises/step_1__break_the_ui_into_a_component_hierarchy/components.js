var exercise    = function() {
        return(
            {
                intro   : "Press {blue-fg}[ENTER]{/blue-fg} to start",
                steps   :
                    [
                        {
                            title       : "Target layout",
                            description : "1) This layout forms the basis for our component structure. In the next steps we will follow the logical component breakdown.",
                            treePrepend : [],
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
                            title       : "FilterableProductTable",
                            description : "2) This is the outmost component, and contains everything.",
                            treePrepend : [
                                " ",
                                "  "
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
                            description : "3) This component will be used for the search bar.",
                            treePrepend : [
                                "  |---",
                                "  "
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
                            description : "4) This component will contain the table.",
                            treePrepend : [
                                "  |---",
                                "  "
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
                            description : "5) This component will be used for each product category row.",
                            treePrepend : [
                                "       |---",
                                "       "
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
                            description : "6) This component will be used for each product row. That's it!",
                            treePrepend : [
                                "       |---",
                                "       "
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
