<?php

/**
 * Block Name: Career Cta
 *
 * This is the template that displays the career cta block.
 */

// create id attribute for specific styling
$id = 'career-cta-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="career-cta container">

    <div class="career-cta__left">

        <?php
        $left_column = get_field('left_column');
        if( $left_column ): ?>
            <img src="<?php echo esc_url( $left_column['image']); ?>" alt="" />
            <h3><?php echo $left_column['title']; ?></h3>
            <p><?php echo $left_column['subtitle']; ?></p>
            <a href="<?php echo $left_column['button_url']; ?>" class="btn_background-red"><?php echo $left_column['button_text']; ?></a>
        <?php endif; ?>

    </div>

    <div class="career-cta__right">

    <?php
        if( have_rows('right_column') ):
            while( have_rows('right_column') ) : the_row();
                $quote = get_sub_field('quote');
                $quoter = get_sub_field('quoter');
                ?>
                <div class="quote-card">
                    <p class="quote"><?php echo $quote?></p>
                    <p class="minor quoter"><?php echo $quoter?></p>
                </div>
                <?php
            endwhile;
        endif;
        ?>
        
    </div>

</section>