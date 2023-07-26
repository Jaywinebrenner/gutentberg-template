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
                <div class="address-wrapper">
                    <p>9115 SW Oleson Rd, Ste 100</p>
                    <p>Portland, OR 97223</p>
                </div>
                <a class="phone">503.726.4545</a>

            </div>
        </div>
        <div class="contact__body">
        <?php
					echo do_shortcode('[gravityform id="2" title="false" ajax="true"]');
					?>
        </div>

    </div>

</section>