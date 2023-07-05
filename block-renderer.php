<?php
// Load block parts

add_action('acf/init', 'init_acf_fields');
function init_acf_fields()
{
    // check function exists
    if (function_exists('acf_register_block')) {

        // register hero block
        acf_register_block(array(
            'name'              => 'hero',
            'title'             => __('Hero'),
            'description'       => __('Custom Hero'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('hero', 'masthead'),
        ));

        // register three card row block
        acf_register_block(array(
            'name'              => 'three-card-row',
            'title'             => __('Three Card Row'),
            'description'       => __('Three Card Row'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('three', 'card', 'row'),
        ));

        // register banner block
        acf_register_block(array(
            'name'              => 'banner',
            'title'             => __('Banner'),
            'description'       => __('Banner'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('banner', 'cta'),
        ));

        // register quote cards
        acf_register_block(array(
            'name'              => 'quote-cards',
            'title'             => __('Quote Cards'),
            'description'       => __('Quote Cards'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('quote', 'cards'),
        ));

        // register content quote with image
        acf_register_block(array(
            'name'              => 'content-quote-with-image',
            'title'             => __('Content Quote With Image'),
            'description'       => __('Content Quote With Image on Client Page'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Content Quote With Image', 'content'),
        ));

        // register two column block
        acf_register_block(array(
            'name'              => 'two-column-content',
            'title'             => __('Two Column Content'),
            'description'       => __('Two Column Content'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Two Column Content'),
        ));

        // register card grid block
        acf_register_block(array(
            'name'              => 'card grid',
            'title'             => __('Card Grid'),
            'description'       => __('Card Grid'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Card Grid'),
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
