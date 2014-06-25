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
		add_filter( 'the_content', array( &$this, 'do_footnote' ), 0 );
	}
	public function do_footnote( $content = '' ) {



		return $content;
	}
}
$footnote_tooltip = new Footnote_Tooltip();
