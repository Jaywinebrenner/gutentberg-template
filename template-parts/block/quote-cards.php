<?php

/**
 * Block Name: Quote Cards
 *
 * This is the template that displays the quote cards block.
 */

// create id attribute for specific styling
$id = 'quote-cards-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="quote-cards container">
    <p><?php the_field('subtitle'); ?></p>
    <div class="cards-wrapper">
        <div class="left">
        <?php
            $left = get_field('left_card');
            if( $left ): ?>
                <div class="card">
                    <div class="card__top">
                        <img src="<?php echo esc_url( $left['image'] ); ?>" alt="<?php echo esc_attr( $left['image']['alt'] ); ?>" />
                    </div>
                    <div class="card__bottom">
                        <h5><?php echo $left['quote']; ?><h5>
                        <p><?php echo $left['quoter']; ?></p>
                    </div>
                </div>
        <?php endif; ?>

        </div>

        <div class="right">
        <?php
            $right = get_field('right_card');
            if( $right ): ?>
                <div class="card">
                    <div class="card__top">
                        <img src="<?php echo esc_url( $right['image'] ); ?>" alt="<?php echo esc_attr( $right['image']['alt'] ); ?>" />
                    </div>
                    <div class="card__bottom">
                        <h5><?php echo $right['quote']; ?><h5>
                        <p><?php echo $right['quoter']; ?></p>
                    </div>
                </div>
        <?php endif; ?>

        </div>

    </div>

</section>