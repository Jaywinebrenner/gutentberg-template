<footer id="colophon" class="site-footer wrap" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">


	<section class="footer">
		<div class="container">
		<h1>FOOTER</h1>
		<?php
          wp_nav_menu(array(
            'menu' => 'footer',
            'theme_location' => 'navigation',
            'menu_class' => 'navigation-menu',
            'sort_order' => 'DESC'
          ));
          ?>

		</div>
	</section>

</footer>



</div>

</div>

<?php wp_footer(); ?>

</body>

</html>