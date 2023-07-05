<?php

/**
 * Block Name: Page Hero
 *
 * This is the template that displays the page hero block.
 */

// create id attribute for specific styling
$id = 'page-hero-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="page-hero">
  <div class="container">
    <div class="monitor-linen-bars"></div>
    <div class="page-hero-wrapper">
        <div class="page-hero-wrapper__left">
            <h1><?php the_field('title'); ?></h1>
            <p><?php the_field('subtitle'); ?></p>
            <?php
            $button = get_field('button');
            if( $button ): ?>
            <div class="btn-wrapper">
            <a href="<?php echo esc_url( $button['url'] ); ?>" class="btn_red"><?php echo $button['text']?></a>
            </div>
            <?php endif; ?>
        </div>

        <div class="page-hero-wrapper__right">
        <?php if( get_field('image') ): ?>
        <img 
        class="desktop-image" 
        src="<?php the_field('image'); ?>" 
        />
        <?php endif; ?>
        <?php if( get_field('mobile_image') ): ?>
        <img class="mobile-image" src="<?php the_field('mobile_image'); ?>" />
        <?php endif; ?>
        </div>
    </div>

  </div>
</section>