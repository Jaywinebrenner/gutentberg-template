<?php

/**
 * Block Name: Test
 *
 * This is the template that displays the test block.
 */

// create id attribute for specific styling
$id = 'test-' . $block['id'];
if (isset($block['data']['preview_image'])) : ?>
    <img src="<?php echo get_template_directory_uri() . '/assets/images/block-previews/test.png' ?>" alt="">
<?php return;
endif;
?>

<section id="<?php echo $id; ?>" class="test-wrapper">
    <div class="container">
        <h1><?php the_field('test_title'); ?></h1>
        <h3><?php the_field('subtitle'); ?></h3>
        <img class="mobile" src="<?php the_field('image'); ?>" />

    </div>
</section>


<h1>I am an H1</h1>
<h2>I am an h2</h2>
<h3>I am an h3</h3>
<h4>I am an h4</h1>
<h5>I am an h5</h5>
<h6>I am an h6</h1>
<p>I am an p</h1>
<p class="minor">I am an p minor</p>
<p class="italic">I am an p with the italic class</p>
<ul>
    <li>I am a list item</li>
    <li>I am a list item</li>
    <li>I am a list item</li>
    <li>I am a list item</li>
</ul>