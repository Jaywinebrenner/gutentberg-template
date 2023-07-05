<?php

/**
 * Block Name: Content Quote With Image
 *
 * This is the template that displays the Content Quote With Image block.
 */

// create id attribute for specific styling
$id = 'content-quote-with-image-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="content-quote-with-image container">
    <div class="content-quote-with-image__left">
    <?php if( get_field('image') ): ?>
      <img 
        src="<?php the_field('image'); ?>" 
      />
    <?php endif; ?>
    </div>
    <div class="content-quote-with-image__right">
        <div class="top">
            <h4><?php the_field('title'); ?></h4>
            <p><?php the_field('subtitle'); ?></p>

        </div>
        <div class="bottom">
            <p class="quote"><?php the_field('quote'); ?></p>
            <p class="quoter"><?php the_field('quoter'); ?></p>
        </div>
    </div>

</section>