var footnote_tooltip_footnotes = new Object();

jQuery( document ).ready( function($) {
	$( 'div.footnotes > ol > li' ).each(
		function( i, footnote ) {
			footnote_tooltip_footnotes[footnote.id] = footnote.innerHTML;
		}
	);
});
