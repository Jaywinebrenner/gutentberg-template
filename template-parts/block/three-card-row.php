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
      <h1 class="title"><?php the_field('title'); ?></h1>
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
        <div class="card">
          <div class="card__top">
            <img src="<?php echo $image ?>"/>
          </div>
          <div class="card__bottom">
            <h5><?php echo $title ; ?></h5>
            <p class="minor"><?php echo $copy ; ?></p>
          </div>
        </div>



          <?php endwhile; ?>
      <?php endif; ?>


    </div>
  </div>
</section>