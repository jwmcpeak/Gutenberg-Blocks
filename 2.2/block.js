wp.blocks.registerBlockType('tutsplus/coloredbox', {
    title: 'Tuts+ Colored Box',
    icon: 'layout',
    category: 'common',
    edit: function() {
        return wp.element.createElement(
            'div',
            {style: {color: 'red'}},
            'Hello, World'
        );
    },
    save: function() {

    }
});