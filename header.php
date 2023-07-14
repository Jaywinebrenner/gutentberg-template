<?php
/**
 * The Header for our theme.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/style.css'?>">
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >


<!-- DESKTOP -->
<div class="navigation-menu-wrapper">
	<div 
	class="background-color-band"
	style="<?php echo is_front_page() ? 'background-color: #F7F4F0;' : 'background-color:#FFF'; ?>"
	></div>
	<a href="<?php echo site_url('/'); ?>">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/logo.svg"/>
	</a>
	<?php
	wp_nav_menu(array(
		'menu' => 'navigation',
		'theme_location' => 'navigation',
		'menu_class' => 'navigation-menu',
		'sort_order' => 'DESC' 
	));
	?>
</div>

<!-- MOBILE -->
<div class="navigation-menu-wrapper-mobile">
	<div 
	class="background-color-band-mobile"
	style="<?php echo is_front_page() ? 'background-color: #F7F4F0;' : 'background-color:#FFF'; ?>"
	></div>
	<div class="mobile-container">
		<div class="hamburger-and-image-wrapper">
			<a href="<?php echo site_url('/'); ?>">
				<img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/logo.svg"/>
			</a>
			<div id="myBtn" class="hamburger">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<?php
		wp_nav_menu(array(
			'menu' => 'navigation',
			'theme_location' => 'navigation',
			'menu_class' => 'navigation-menu',
			'sort_order' => 'DESC' 
		));
		?>
	</div>
</div>

<div id="page" class="hfeed site">

	<main id="main" class="site-main wrap" role="main">

