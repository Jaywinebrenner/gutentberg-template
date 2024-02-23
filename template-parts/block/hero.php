<?php

/**
 * Block Name: Hero
 *
 * This is the template that displays the test block.
 */

// create id attribute for specific styling
$id = 'test-' . $block['id'];
if (isset($block['data']['preview_image'])) : ?>
    <img src="<?php echo get_template_directory_uri() . '/assets/images/block-previews/test.png' ?>" alt="">
<?php return;
endif;
?>

<section id="<?php echo $id; ?>" class="hero">
    <div class="container">
        <h1>Hero</h1>


    </div>
</section>


