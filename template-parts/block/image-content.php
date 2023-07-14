<?php

/**
 * Block Name: Image Content
 *
 * This is the template that displays the Image Content block.
 */

// create id attribute for specific styling
$id = 'image-content-' . $block['id'];


?>

<section 
id="<?php echo $id; ?>" 
class="image-content container <?php echo get_field('reverse_columns') ? "flip-on-mobile" : "" ?>"
>
    <div 
    class="image-content__left"
    style='order: <?php echo the_field('reverse_columns') ? "1" : "" ?>'
    >
        <InnerBlocks />
    </div>

    <div class="image-content__right">
        <?php if (get_field('right_column')) : ?>
            <div class="image-wrapper-desktop parallax-wrapper">
                <img src="<?php the_field('right_column'); ?>" alt="">
            </div>
        <?php endif; ?>
        <?php if (get_field('mobile_image')) { ?>
        <div class="image-wrapper-mobile">
          <img src="<?php the_field('mobile_image'); ?>" alt="">
        </div>
      <?php } ?>
    </div>

</section>