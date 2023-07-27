<?php

/**
 * Block Name: Graphic Cards
 *
 * This is the template that displays the Graphic Cards block.
 */

// create id attribute for specific styling
$id = 'graphic-cards-' . $block['id'];
if (isset($block['data']['preview_image'])) : ?>
    <img src="<?php echo get_template_directory_uri() . '/assets/images/block-previews/graphic-cards.png' ?>" alt="">
<?php return;
endif;
?>

<section id="<?php echo $id; ?>" class="graphic-cards container">
    <div class="cards-wrapper">
        <?php
        if (have_rows('card')) :
            while (have_rows('card')) : the_row();
                $image = get_sub_field('image');
                $title = get_sub_field('title');
                $subtitle = get_sub_field('subtitle');
        ?>
                <div class="card">
                    <div class="card__top">
                        <img class="desktop-image" src="<?php echo $image; ?>" />
                        <?php if (get_field('mobile_image')) { ?>
                            <img src="<?php echo get_field('mobile_image') ? get_field('mobile_image') : get_field('image'); ?>" alt="">
                        <?php } ?>
                    </div>
                    <div class="card__bottom">
                        <h5><?php echo $title; ?></h5>
                        <p><?php echo $subtitle; ?></p>
                    </div>
                </div>
        <?php
            endwhile;
        endif;
        ?>
    </div>
</section>