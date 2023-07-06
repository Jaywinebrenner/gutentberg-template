<?php

/**
 * Block Name: Banner
 *
 * This is the template that displays the banner block.
 */

// create id attribute for specific styling
$id = 'banner-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="banner-wrapper">

    <div class="container">
        <?php
        if( get_field('has_image') ) {
        ?>
            <div class="has-image-banner" style="background-color:<?php the_field('background_color'); ?>">
                <div class="left">
                    <img
                    src="<?php the_field('image'); ?>"
                    />
                </div>
                <div class="right">
                    <p class="quote"><?php the_field('quote') ?></p>
                    <p class="quoter"><?php the_field('quoter') ?></p>
                </div>
            </div>
        <?php
        } else { ?>
            <div class="banner" style="background-color:<?php the_field('background_color'); ?>">
                <div class="left">
                    <h4 style="color:<?php echo (get_field('background_color') === '#D64936') ? "#FFF" : "#1D0800";?>" class="quote"><?php the_field('title') ?></h4>
                </div>
                <div class="right">
                <?php
                    $button = get_field('button');
                    if( $button ): ?>
                    <div class="btn-wrapper">
                        <a href="<?php echo esc_url( $button['url'] ); ?>" class="btn_white"><?php echo $button['text']?></a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>


        <?php } ?>



    </div>
</section>