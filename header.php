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

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >


<div id="page" class="hfeed site">

	<div class="navigation">
		<div class="container">
			<div class="navigation-wrapper">
				<div class="navigation-wrapper__left">
					<a href="<?php echo site_url('/'); ?>">
						<img src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/logo.svg"/>
					</a>
				</div>
				<div class="navigation-wrapper__right">

					<div class="navigation-wrapper__link-with-submenu" href="#">
						<p class="minor">Why CorSource</p>
						<div class="submenu">
							<a class="submenu__item" href="#">
								<p class="minor">For Clients</p>
							</a>
							<a class="submenu__item" href="#">
								<p class="minor">Consultants</p>
							</a>
						</div>
					</div>

					<a class="navigation-wrapper__link" href="<?php echo site_url('/services'); ?>">
						<p class="minor">Services</p>
					</a>

					<div class="navigation-wrapper__link-with-submenu" href="#">
						<p class="minor">Solutions</p>
						<div class="submenu">
							<a class="submenu__item" href="#">
								<p class="minor">Solutions Submenu</p>
							</a>
							<a class="submenu__item" href="#">
								<p class="minor">Solutions Submenu Two</p>
							</a>
						</div>
					</div>

					<div class="navigation-wrapper__link-with-submenu" href="#">
						<p class="minor">Meet CorSource</p>
						<div class="submenu">
							<a class="submenu__item" href="#">
								<p class="minor">Submenu</p>
							</a>
							<a class="submenu__item" href="#">
								<p class="minor">Longer Submenu</p>
							</a>
						</div>
					</div>


					<a class="navigation-wrapper__link" href="#">
						<p class="minor">The Source AQ</p>
					</a>
					<a class="navigation-wrapper__link btn_red" href="#">
						<p class="minor">Job Seekers</p>
					</a>
				</div>
			</div>

		</div>
	</div>


	<div class="navigation-mobile">
		<div class="container">
			<div class="navigation-mobile-wrapper-top">
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
			<div class="navigation-mobile-wrapper-bottom">

				<div class="has-submenu" href="#">
					<img class="chevron" src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/chevron.svg"/>
					<p class="title mobile-link minor">Why CorSource</p>
					<div class="nav-submenu">
						<a class="submenu__item" href="#">
							<p class="minor">For Clients</p>
						</a>
						<a class="submenu__item" href="#">
							<p class="minor">Consultants</p>
						</a>
					</div>
				</div>

				<a class="navigation-mobile-wrapper__link" href="<?php echo site_url('/services'); ?>">
					<p class="title minor">Services</p>
				</a>

				<div class="has-submenu" href="#">
					<img class="chevron" src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/chevron.svg"/>
					<p class="title mobile-link minor">Solutions</p>
					<div class="nav-submenu">
						<a class="submenu__item" href="#">
							<p class="minor">For Clients</p>
						</a>
						<a class="submenu__item" href="#">
							<p class="minor">Consultants</p>
						</a>
					</div>
				</div>

				<div class="has-submenu" href="#">
					<img class="chevron" src="<?php echo get_stylesheet_directory_uri();?>/assets/images/navigation/chevron.svg"/>
					<p class="title mobile-link minor">Meet CorSource</p>
					<div class="nav-submenu">
						<a class="submenu__item" href="#">
							<p class="minor">Submenu</p>
						</a>
						<a class="submenu__item" href="#">
							<p class="minor">Longer Submenu</p>
						</a>
					</div>
				</div>

				<a class="navigation-mobile-wrapper__link" href="#">
					<p class="title minor">The Source AQ</p>
				</a>
				<a class="btn_red" href="#">
					Job Seekers
				</a>

			</div>

		</div>
	</div>

	<main id="main" class="site-main wrap" role="main">

