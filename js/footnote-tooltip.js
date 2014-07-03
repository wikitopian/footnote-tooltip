var footnote_tooltip_footnotes = new Object();

jQuery( document ).ready( function($) {

	$( 'div.footnotes' ).hide();

	$( 'div.footnotes > ol > li' ).each(
		function( i, footnote ) {

			var footnote_html = footnote.innerHTML;
			footnote_html = footnote_html.replace( /<a href="#[^>]+>[\s\S]<\/a>/g, '' );
			footnote_html = footnote_html.replace( /[\s\s]/g, ' ' );

			footnote_tooltip_footnotes[footnote.id] = footnote_html;
		}
	);

	$( 'sup > a[rel="footnote"]' ).each(
		function( i, footnote_link ) {

			var footnote_id = footnote_link.hash.replace( /#/, '' );
			footnote_text = footnote_tooltip_footnotes[footnote_id];

			$( footnote_link ).attr( 'title', footnote_text );
			$( footnote_link ).tooltip();
			console.dir( footnote_link );
		}
	);

});
