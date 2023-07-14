<?php

add_theme_support('align-wide');


function register_my_menu() {
    register_nav_menu('navigation', 'Navigation');
  }
  add_action('after_setup_theme', 'register_my_menu');



function cc_mime_types( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter( 'upload_mimes', 'cc_mime_types' );

function hc_enqueue_assets()
{
    wp_enqueue_script(
        'hc-main-js',
        get_template_directory_uri() . '/dist/app.js',
        '',
        22
    );
    wp_enqueue_style(
        'hc-main-style',
        get_template_directory_uri() . '/dist/style.css',
        '',
        22
    );
    wp_enqueue_style(
        'hc-slick-css',
        get_template_directory_uri() . '/assets/css/slick.css',
        '',
        22
    );
    wp_enqueue_style(
        'hc-slick-theme-css',
        get_template_directory_uri() . '/assets/css/slick-theme.css',
        '',
        22
    );
}

add_action('enqueue_block_assets', 'hc_enqueue_assets');

//render blocks
include(get_theme_file_path("/block-renderer.php"));

//update default color palette
function my_theme_add_new_features() {
    // The new colors we are going to add
    $newColorPalette = [
        [
            'name' => esc_attr__('Red', 'default'),
            'slug' => 'red',
            'color' => '#D64936',
        ],
        [
            'name' => esc_attr__('Linen', 'default'),
            'slug' => 'linen',
            'color' => '#F7F4F0',
        ],
    ];
    // Apply the color palette containing the original colors and 2 new colors:
    add_theme_support( 'editor-color-palette', $newColorPalette);
}
add_action( 'after_setup_theme', 'my_theme_add_new_features' );