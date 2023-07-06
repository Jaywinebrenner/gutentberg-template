<?php

/**
 * Block Name: Three Card Row
 *
 * This is the template that displays the hero block.
 */

// create id attribute for specific styling
$id = 'three-card-row-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="three-card-row">
  <div class="container">

    <div class="three-card-row__top">
      <h2 class="title"><?php the_field('title'); ?></h2>
      <p class="title"><?php the_field('subtitle'); ?></p>
    </div>
    <div class="cards-wrapper">


      <?php if( have_rows('card') ): ?>
      <?php while( have_rows('card') ): the_row();

        // Get sub field values.
        $title = get_sub_field('title');
        $copy = get_sub_field('copy');
        $image = get_sub_field('image');

        ?>
          <div class="three-card-row__card">
            <div class="three-card-row__card__top">
              <img src="<?php echo $image ?>"/>
            </div>
            <div class="three-card-row__card__bottom">
              <h5><?php echo $title ; ?></h5>
              <p class="minor"><?php echo $copy ; ?></p>
            </div>
          </div>
        <?php endwhile; ?>
        <?php endif; ?>
      </div>
      <?php
        if( get_field('is_button') ) {
          ?>
      <?php
        $button = get_field('button');
      ?>
      <div class="btn-wrapper">
        <a class="btn_red" href="<?php echo esc_url( $button['url'] ); ?>"><?php echo esc_html( $button['text'] ); ?></a>
      </div>
        <?php

        }
      ?>

    </div>
  </div>
</section>