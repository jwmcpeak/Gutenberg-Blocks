<?php

/*
Plugin Name: Tuts+ Colored Box Gutenberg Block
Author: Jeremy
Version: 1.0
*/


function registerResources() {
    wp_enqueue_script(
        'tutplus-colored-box',
        plugins_url('block.js', __FILE__),
        ['wp-blocks', 'wp-element'],
        false,
        true
    );
}

add_action('enqueue_block_editor_assets', 'registerResources');