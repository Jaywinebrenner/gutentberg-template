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

    <div class="hero__bottom">
    <?php if( get_field('image') ): ?>
      <img 
      class="desktop-image" 
      src="<?php the_field('image'); ?>" 
      />
      <!-- <svg width="1301" height="401" viewBox="0 0 1301 401" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7769 0.0488281H1290.78C1296.3 0.0488281 1300.78 4.52599 1300.78 10.0488V285.907C1300.78 288.559 1299.72 291.102 1297.85 292.978L1193.71 397.12C1191.83 398.995 1189.29 400.049 1186.63 400.049H531.252C528.6 400.049 526.057 398.995 524.181 397.12L510.039 382.978C508.164 381.102 505.62 380.049 502.968 380.049H296.967C294.314 380.049 291.771 381.102 289.896 382.978L275.753 397.12C273.878 398.995 271.334 400.049 268.682 400.049H10.7769C5.25403 400.049 0.776855 395.572 0.776855 390.049V10.0488C0.776855 4.52598 5.25403 0.0488281 10.7769 0.0488281Z" fill="white"/>
      </svg> -->

    <?php endif; ?>
    <?php if( get_field('mobile_image') ): ?>
      <img class="mobile-image" src="<?php the_field('mobile_image'); ?>" />
    <?php endif; ?>
    </div>

  </div>
</section>