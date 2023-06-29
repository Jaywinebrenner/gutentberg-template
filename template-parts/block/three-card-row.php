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
      <h1 class="title"><?php the_field('eyebrow'); ?></h1>

    </div>

  
  </div>
</section>