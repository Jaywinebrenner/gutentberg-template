<?php

/**
 * Block Name: Hero
 *
 * This is the template that displays the hero block.
 */

// create id attribute for specific styling
$id = 'hero-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="hero">
  <div class="hero__top">
    <div class="hero__content container">
      <h1><?php the_field('title'); ?></h1>
      <p><?php the_field('subtitle'); ?></p>
      <?php
      $button = get_field('button');
      if( $button ): ?>
      <div class="btn-wrapper">
        <a class="btn"><?php echo $button['text']?></a>
      </div>
      <?php endif; ?>
    </div>
  </div>
  <div class="hero__bottom">
  <?php if( get_field('image') ): ?>
    <img src="<?php the_field('image'); ?>" />
    <?php endif; ?>
  </div>
  </section>