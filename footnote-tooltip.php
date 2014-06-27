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

	}
}
$footnote_tooltip = new Footnote_Tooltip();
