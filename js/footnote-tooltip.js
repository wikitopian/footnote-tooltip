var footnote_tooltip_footnotes = new Object();

jQuery( document ).ready( function($) {
	$( 'div.footnotes > ol > li' ).each(
		function( i, footnote ) {

			var footnote_html = footnote.innerHTML;
			footnote_html = footnote_html.replace( /<a href="#[^>]+>[\s\S]<\/a>/g, '' );
			footnote_html = footnote_html.replace( /[\s\s]/g, ' ' );

			footnote_tooltip_footnotes[footnote.id] = footnote_html;
		}
	);
});
