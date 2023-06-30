<?php

/**
 * Block Name: Card Grid
 *
 * This is the template that displays the card grid block.
 */

// create id attribute for specific styling
$id = 'card-grid-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="card-grid container">


<?php if( have_rows('cards') ): ?>
    <?php while( have_rows('cards') ): the_row(); 

        // Get sub field values.
        $image = get_sub_field('image');
        $title = get_sub_field('title');
        $content = get_sub_field('content');

        ?>

        <div class="card">
            <div class="card__top">
                <img src="<?php echo $image; ?>" alt="" />
            </div>

            <div class="card__bottom">
                <h5><?php echo  $title; ?></h5>
                <div><?php echo $content; ?></div>
            </div>

        </div>


    <?php endwhile; ?>
<?php endif; ?>



</section>