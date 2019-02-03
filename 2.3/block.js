wp.blocks.registerBlockType('tutsplus/coloredbox', {
    title: 'Tuts+ Colored Box',
    icon: 'layout',
    category: 'common',
    attributes: {
        content: {type: 'string'}
    },
    edit: function(props) {
        function changeContent(e) {
            props.setAttributes({content: e.target.value});
        }

        return wp.element.createElement(
            'div',
            {style: {color: 'red'}},
            wp.element.createElement('input', {
                type: 'text',
                value: props.attributes.content,
                onChange: changeContent
            })
        );
    },
    save: function() {

    }
});