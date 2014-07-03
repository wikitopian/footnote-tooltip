<?php
/*
 * Plugin Name: Footnote Tooltip
 * Plugin URI: http://www.github.com/wikitopian/footnote-tooltip
 * Description: Add a tooltip to WordPress MarkDown footnotes
 * Version: 0.1
 * Author: @wikitopian
 * Author URI: http://www.github.com/wikitopian
 * License: GPLv3
 * */

class Footnote_Tooltip {

	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( &$this, 'do_script' ) );
	}

	public function do_script() {

		wp_register_script(
			'footnote_tooltip',
			plugins_url( '/js/footnote-tooltip.js', __FILE__ ),
			array( 'jquery-ui-tooltip' ),
			false,
			true
		);

		wp_enqueue_script( 'footnote_tooltip' );

		global $wp_scripts;
		wp_enqueue_style(
			'jquery-ui-css',
			'http://ajax.googleapis.com/ajax/libs/jqueryui/'
			. $wp_scripts->registered['jquery-ui-core']->ver
			. '/themes/ui-lightness/jquery-ui.min.css'
		);

		wp_register_style(
			'footnote_tooltip',
			plugins_url( '/css/footnote-tooltip.css', __FILE__ )
		);
		wp_enqueue_style( 'footnote_tooltip' );

	}
}
$footnote_tooltip = new Footnote_Tooltip();
