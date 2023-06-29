<?php

/**
 * Block Name: Banner
 *
 * This is the template that displays the banner block.
 */

// create id attribute for specific styling
$id = 'banner-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="banner">
    <div class="container">
        <?php
        if( get_field('has_image') ) {
        ?>
            <div class="no-image-banner">

            </div>
        <?php
        }
        ?>
    </div>
</section>