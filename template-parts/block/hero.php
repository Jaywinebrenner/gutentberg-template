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
  <div class="hero-container">
    <div class="monitor-white-bars"></div>

    <div class="hero__top">
      <div class="hero__content ">
        <h1><?php the_field('title'); ?></h1>
        <p><?php the_field('subtitle'); ?></p>
        <?php
        $button = get_field('button');
        if( $button ): ?>
        <div class="btn-wrapper">
          <a href="<?php echo esc_url( $button['url'] ); ?>" class="btn"><?php echo $button['text']?></a>
          
        </div>
        <?php endif; ?>
      </div>
    </div>
    <a href="<?php echo esc_url( $button['url'] ); ?>" class="btn_white">TEST</a>
    <a href="<?php echo esc_url( $button['url'] ); ?>" class="btn_red">TESTING ALL THE TIME</a>
    <div class="hero__bottom">
    <?php if( get_field('image') ): ?>
      <img class="desktop-image hide" src="<?php the_field('image'); ?>" />
    <?php endif; ?>
    <?php if( get_field('mobile_image') ): ?>
      <img class="mobile-image hide" src="<?php the_field('mobile_image'); ?>" />
    <?php endif; ?>
    </div>

  </div>
</section>