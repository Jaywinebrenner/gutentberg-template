<?php

/**
 * Block Name: Info Cards
 *
 * This is the template that displays the hero block.
 */

// create id attribute for specific styling
$id = 'info-cards-' . $block['id'];
if (isset($block['data']['preview_image'])) : ?>
  <img src="<?php echo get_template_directory_uri() . '/assets/images/block-previews/info-cards.png' ?>" alt="">
<?php return; endif;
?>

<section id="<?php echo $id; ?>" class="info-cards container <?php echo $block['className']; ?>">

  <?php if (have_rows('cards')) : ?>
    <div class="info-cards__cards">
      <?php while (have_rows('cards')) : the_row(); ?>
        <div class="info-cards__card" style="background-color: <?php the_field('card_color'); ?>">
          <div class="info-cards__content">
            <img src="<?php the_sub_field('icon'); ?>" alt="">
            <h5><?php the_sub_field('title'); ?></h5>
            <p class="minor"><?php the_sub_field('copy') ?></p>
          </div>



          <?php if (get_sub_field('add_cta_button')) : ?>
            <hr>
            <div class="info-cards__cta-wrapper">
              <?php $cta_data = get_sub_field('cta'); ?>
              <p class="minor quote"><strong>
                  <?php echo $cta_data['quote']; ?>
                </strong></p>
              <p class="minor italic">
                <?php echo $cta_data['name']; ?>
              </p>
              <?php if ($cta_data['button_url']) : ?>
                <a href="<?php echo $cta_data['button_url']; ?>" class="btn_red"><?php echo $cta_data['button_text']; ?></a>
              <?php endif; ?>
            </div>
          <?php endif; ?>


          <?php if (get_sub_field('add_quote')) : ?>
            <hr>
            <div class="info-cards__cta-wrapper">
              <?php $add_quote_data = get_sub_field('added_quote'); ?>
              <p class="minor quote"><strong>
                  <?php echo $add_quote_data; ?>
                </strong></p>
            </div>
          <?php endif; ?>






        </div>
      <?php endwhile; ?>
    </div>
  <?php endif; ?>
</section>