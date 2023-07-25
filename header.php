<?php

/**
 * The Header for our theme.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/style.css' ?>">
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class('fade'); ?>>

	<!-- DESKTOP -->
	<div 
	class="background-color-band"
	style="background-color: <?php the_field('header_background_color') ?>"
	>
		<div class="navigation-menu-wrapper">
			<a class="nav-icon" href="<?php echo site_url('/'); ?>">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/navigation/logo.svg" />
			</a>
			<?php
			wp_nav_menu(array(
				'menu' => 'navigation',
				'theme_location' => 'navigation',
				'menu_class' => 'navigation-menu',
				'sort_order' => 'DESC'
			));
			?>
			<a href="<?php echo home_url() . '/employee-login'; ?>" class="btn_red nav-button">Employee Login</a>
		</div>

	</div>

	<!-- MOBILE -->
	<div class="navigation-menu-wrapper-mobile <?php echo is_front_page() ? 'linen-bg' : ''; ?>">
		<div class="mobile-container">
			<div class="hamburger-and-image-wrapper">
				<a href="<?php echo site_url('/'); ?>">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/navigation/logo.svg" />
				</a>
				<div id="myBtn" class="hamburger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div class="navigation-menu">
				<?php
				wp_nav_menu(array(
					'menu' => 'navigation',
					'theme_location' => 'navigation',
					'sort_order' => 'DESC'
				));
				?>
				<a href="<?php echo home_url() . '/employee-login'; ?>" class="btn_red">Employee Login</a>

			</div>
		</div>
	</div>

	<div id="page" class="hfeed site">
		<!-- MODAL -->
		<div class="modal" id="modal-one">
			<div class="modal-bg modal-exit"></div>
			<div class="modal-container">
				<div class="modal-container__top">
					<h3>CONTACT US</h3>
					<p class="subtitle">Tell us a little bit about yourself and what you would like to discuss.</p>
				</div>
				<div class="modal-container__body">
					<?php
					echo do_shortcode('[gravityform id="1" title="false"]');
					?>
				</div>

				<button class="modal-close modal-exit">					
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/modal/modal-x.svg" />
				</button>
			</div>
		</div>
		<!-- END MODAL -->

		<main id="main" class="site-main wrap" role="main">