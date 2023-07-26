<?php

/**
 * Block Name: Contact
 *
 * This is the template that displays the contact block.
 */

// create id attribute for specific styling
$id = 'contact-' . $block['id'];
?>

<section id="<?php echo $id; ?>" class="contact">
    <div class="container">
        <div class="contact__top">
            <div class="top-left">
                <h1>Contact Us</h1>
                <p>Tell us a little bit about yourself and what you would like to discuss.</p>
            </div>
            <div class="top-right">
                <p class="bold">Headquarters</p>
                <a class="address-wrapper" target="_blank" href="http://maps.google.com/?q=9115 SW Oleson Rd, Ste 105, Portland, OR 97223">
                    <p>9115 SW Oleson Rd, Ste 105</p>
                    <p>Portland, OR 97223</p>
                </a>
                <a class="phone" href="tel:5037264545">503.726.4545</a>

            </div>
        </div>
        <div class="contact__body">
            <p class="tell-us">Tell us a little bit about yourself and what you would like to discuss.</p>
        <?php
            echo do_shortcode('[gravityform id="2" title="false" ajax="true"]');
            ?>
            <p class="we-will-be-in-touch">
                We will be in touch within one business day
            </p>
        </div>
    </div>

</section>