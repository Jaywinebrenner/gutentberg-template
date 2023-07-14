<?php

/**
 * Block Name: Testimonial
 *
 * This is the template that displays the card grid block.
 */

// create id attribute for specific styling
$id = 'testimonial-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="testimonial" style="background-color: <?php the_field('background'); ?>">
    <div class="container">
        <p class="minor testimonial__title"><?php the_field('title'); ?></p>

        <div class="testimonial__slides">
            <?php if (have_rows('testimonials')) : ?>
                <?php while (have_rows('testimonials')) : the_row();
                ?>
                    <div class="testimonial__quote">
                        <h3><?php the_sub_field('quote'); ?></h3>
                        <p class="italic"><?php the_sub_field('name'); ?></p>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>

        <?php $button = get_field('button'); ?>
        <?php if ($button['url']) : ?>
            <a href="<?php echo $button['url']; ?>" class="btn_red"><?php echo $button['text']; ?></a>
        <?php endif; ?>
    </div>
</section>