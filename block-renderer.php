<?php
// Load block parts

add_action('acf/init', 'init_acf_fields');
function init_acf_fields()
{
    // check function exists
    if (function_exists('acf_register_block')) {

        // register typography block
        acf_register_block(array(
            'name'              => 'typography',
            'title'             => __('Typography'),
            'description'       => __('Typography'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'             => 'full',
            'supports'          => array(
                'align' => array('full'),
                'jsx'   => true,
            ),
            'keywords'          => array('Typography'),
            'enqueue_assets'    => function () {
                wp_enqueue_script(
                    'jquery',
                    'https://code.jquery.com/jquery-3.7.0.min.js',
                    array(),
                    '3.7.0',
                    true
                );
                wp_enqueue_script(
                    'typography',
                    get_template_directory_uri() . '/assets/js/typography.js',
                    array('wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'),
                    '1.0',
                    true
                );
            },
        ));

        // register hero block
        acf_register_block(array(
            'name'              => 'hero',
            'title'             => __('Hero'),
            'description'       => __('Hero'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'             => 'full',
            'supports'          => array(
                'align' => array('full'),
                'jsx'   => true,
            ),
            'keywords'          => array('Hero'),
            'enqueue_assets'    => function () {
                wp_enqueue_script(
                    'jquery',
                    'https://code.jquery.com/jquery-3.7.0.min.js',
                    array(),
                    '3.7.0',
                    true
                );
                wp_enqueue_script(
                    'our-services-script',
                    get_template_directory_uri() . '/assets/js/hero.js',
                    array('wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'),
                    '1.0',
                    true
                );
            },
        ));


    }
}

function block_renderer($block)
{
    // convert name ("acf/testimonial") into path friendly slug ("testimonial")
    $slug = str_replace('acf/', '', $block['name']);

    // include a template part from within the "template-parts/block" folder
    if (file_exists(get_theme_file_path("/template-parts/block/{$slug}.php"))) {
        include(get_theme_file_path("/template-parts/block/{$slug}.php"));
    }
}
