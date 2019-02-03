const {PanelBody, PanelRow} = wp.components;


const PanelTitleSettings = (props) => (
    <PanelBody
        title="Box Title"
        initialOpen={false}
    >

        <PanelRow>
            <label className="components-base-control__label">Title</label>
            <input 
                type="text"
                value={props.value}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
        </PanelRow>

    </PanelBody>
);

export {PanelTitleSettings};