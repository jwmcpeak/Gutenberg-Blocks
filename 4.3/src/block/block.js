/**
 * BLOCK: colored-box2
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import {PanelTitleSettings} from './components/PanelTitleSettings';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { ColorPalette } = wp.components;
const { RichText, InspectorControls, PanelColorSettings, BlockControls } = wp.editor;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

 //wp-block-tutsplus-colored-box2
registerBlockType( 'tutsplus/colored-box2', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Tuts+ Colored Box 2' ), // Block title.
	icon: 'layout', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		content: {source: 'html', selector: '.colored-box2-content'},
		backgroundColor: {type: 'string'},
		borderColor: {type: 'string', default: 'transparent'},
		textColor: {type: 'string'},
		title: {type: 'string'}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit( {attributes, className, setAttributes} ) {
		// Creates a <p class='wp-block-cgb-block-colored-box2'></p>.
		let {backgroundColor, textColor, borderColor, title } = attributes;
		let styleObject = {
			backgroundColor,
			borderColor,
			borderWidth: '2px',
			borderStyle: 'solid',
			color: textColor
		};

		return (
			<Fragment>
				<div className={ className } style={styleObject}>
					<RichText 
						value={attributes.content} 
						onChange={(content) => setAttributes({content})}
					/>
				</div>
				<InspectorControls>
					<PanelColorSettings 
						title={ __('Color Settings')}
						colorSettings={[{
							label: __('Background Color'),
							value: backgroundColor,
							onChange: (backgroundColor) => setAttributes({backgroundColor})
						}, {
							label: __('Border Color'),
							value: borderColor,
							onChange: (borderColor) => setAttributes({borderColor})
						}, {
							label: __('Text Color'),
							value: textColor,
							onChange: (textColor) => setAttributes({textColor})
						},
					]}
					/>

					<PanelTitleSettings
						value={title}
						onChange={(title) => setAttributes({title})}
					/>
				</InspectorControls>
				<BlockControls>
					<div className="color-palette-toolbar">
						<ColorPalette
							value={backgroundColor}
							onChange={(backgroundColor) => setAttributes({backgroundColor})} 
						/>
					</div>
				</BlockControls>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( {attributes} ) {
		let {backgroundColor, textColor, borderColor, content } = attributes;
		
		let styleObject = {
			backgroundColor,
			borderColor,
			borderWidth: '2px',
			borderStyle: 'solid',
			color: textColor
		};

		return (
			<div style={styleObject} className="colored-box2-content">
				<RichText.Content value={content} />
			</div>
		);
	},
} );
