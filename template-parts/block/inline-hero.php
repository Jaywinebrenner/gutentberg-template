<?php

/**
 * Block Name: Inline Hero
 *
 * This is the template that displays the Inline Hero block.
 */

// create id attribute for specific styling
$id = 'inline-hero-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="inline-hero container">
  <?php if (get_field('image')) : ?>
    <div class="desktop-image parallax-wrapper">
      <img src="<?php the_field('image'); ?>" alt="">
    </div>
  <?php endif; ?>
  <div class="mobile-image parallax-wrapper">
    <img src="<?php echo get_field('mobile_image') ? get_field('mobile_image') : get_field('image'); ?>" alt="">
  </div>
</section>