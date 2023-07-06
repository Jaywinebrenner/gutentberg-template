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
            'category'          => 'text',
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
            'category'          => 'text',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('three', 'card', 'row'),
        ));

        // register info cards
        acf_register_block(array(
            'name'              => 'info-cards',
            'title'             => __('Info Cards'),
            'description'       => __('Row of cards with content and an optional cta'),
            'render_callback'   => 'block_renderer',
            'category'          => 'text',
            'icon'              => 'columns',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('info cards', 'card'),
        ));

        // register quote cards
        acf_register_block(array(
            'name'              => 'quote-cards',
            'title'             => __('Quote Cards'),
            'description'       => __('Quote Cards'),
            'render_callback'   => 'block_renderer',
            'category'          => 'text',
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
            'category'          => 'text',
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
            'category'          => 'text',
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
            'category'          => 'text',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Card Grid'),
        ));

        // register testimonial block
        acf_register_block(array(
            'name'              => 'testimonial',
            'title'             => __('Testimonial Slider'),
            'description'       => __('Horizontal slider displaying testimonials'),
            'render_callback'   => 'block_renderer',
            'category'          => 'text',
            'icon'              => 'testimonial',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('testimonial', 'slider'),
            'enqueue_assets' => function () {
                wp_enqueue_script(
                    'jquery',
                    'https://code.jquery.com/jquery-3.7.0.min.js"
                    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=',
                    ['wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'],
                    22
                );

                wp_enqueue_script(
                    'slick',
                    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
                    ['wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'],
                    22
                );

                wp_enqueue_script(
                    'testimonial',
                    get_template_directory_uri() . '/assets/js/testimonial.js',
                    ['wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'],
                    22
                );
            },
        ));

        // register banner block
        acf_register_block(array(
            'name'              => 'banner',
            'title'             => __('Banner'),
            'description'       => __('Banner'),
            'render_callback'   => 'block_renderer',
            'category'          => 'text',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('banner', 'cta'),
        ));

        // register career cta block
        acf_register_block(array(
            'name'              => 'career cta',
            'title'             => __('Career Cta'),
            'description'       => __('Career Cta'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Career Cta'),
        ));

        // register page hero block
        acf_register_block(array(
            'name'              => 'page hero',
            'title'             => __('Page Hero'),
            'description'       => __('Page Hero'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Page Hero'),
        ));

        // register capability dropdowns block
        acf_register_block(array(
            'name'              => 'capability dropdowns',
            'title'             => __('Capability Dropdowns'),
            'description'       => __('Capability Dropdowns'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Capability Dropdowns'),
            'enqueue_assets' => function () {
                wp_enqueue_script(
                    'jquery',
                    'https://code.jquery.com/jquery-3.7.0.min.js"
                            integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=',
                    ['wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'],
                    22
                );
                wp_enqueue_script(
                    'capability-dropdowns-script',
                    get_template_directory_uri() . '/assets/js/capability-dropdowns.js',
                    ['wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'],
                    22
                );
            },
        ));

        // register source aq cta block
        acf_register_block(array(
            'name'              => 'source aq cta',
            'title'             => __('Source Aq Cta'),
            'description'       => __('Source Aq Cta'),
            'render_callback'   => 'block_renderer',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'align'           => 'full',
            'supports'        => array(
                'align' => array('full'),
            ),
            'keywords'          => array('Source Aq Cta'),
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
