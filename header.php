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
	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/favicon/safari-pinned-tab.svg" color="#D64936">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#F7F4F0">
	<!-- end favicon -->
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/style.css' ?>">
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>



	<?php wp_head(); ?>
</head>

<body <?php body_class('fade'); ?>>
	<!-- Google Tag Manager (noscript) -->
	<!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWDLML2C" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
	<!-- End Google Tag Manager (noscript) -->

	<noscript>
		<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1927161&fmt=gif" />
	</noscript>

	<!-- DESKTOP -->
	<section class="navigation">
    <div class="navigation__top container">
      <div class="text-logo-wrapper">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/navigation/text-logo.svg" />
      </div>
      <h1>HEADER</h1>
        <?php
          wp_nav_menu(array(
            'menu' => 'navigation',
            'theme_location' => 'navigation',
            'menu_class' => 'navigation-menu',
            'sort_order' => 'DESC'
          ));
          ?>
    </div>
	</section>



	<div id="page" class="hfeed site">

		<main id="main" class="site-main wrap" role="main">