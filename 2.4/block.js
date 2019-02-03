wp.blocks.registerBlockType('tutsplus/coloredbox', {
    title: 'Tuts+ Colored Box',
    icon: 'layout',
    category: 'common',
    attributes: {
        content: {type: 'string'},
        color: {type: 'string'}
    },
    edit: function(props) {
        function changeContent(e) {
            props.setAttributes({content: e.target.value});
        }

        function changeColor(value) {
            props.setAttributes({color: value.hex});
        }

        return wp.element.createElement(
            'div',
            {style: {color: 'red'}},
            wp.element.createElement('input', {
                type: 'text',
                value: props.attributes.content,
                onChange: changeContent
            }),
            wp.element.createElement(wp.components.ColorPicker, {
                onChangeComplete: changeColor,
                color: props.attributes.color
            })
        );
    },
    save: function() {

    }
});