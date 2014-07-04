var footnote_tooltip_footnotes = new Object();

jQuery( document ).ready( function($) {

	$( 'div.footnotes' ).hide();

	$( 'div.footnotes > ol > li' ).each(
		function( i, footnote ) {

			var footnote_html = footnote.innerHTML;
			footnote_html = footnote_html.replace( /<a href="#[^>]+>[\s\S]<\/a>/g, '' );
			footnote_html = footnote_html.replace( /[\s\s]/g, ' ' );
			footnote_html = footnote_html.replace( /&[^;]+?;/g, ' ' );
			footnote_html = footnote_html.replace( /<[^>]*?>/g, '' );

			footnote_tooltip_footnotes[footnote.id] = footnote_html;
		}
	);

	$( 'sup > a[rel="footnote"]' ).each(
		function( i, footnote_link ) {

			var footnote_id = footnote_link.hash.replace( /#/, '' );
			footnote_text = footnote_tooltip_footnotes[footnote_id];

			$( footnote_link ).attr( 'title', footnote_text );
			$( footnote_link ).tooltip();

			var footnote_dialog = $(
				'<div id="footnote_tooltip_'
				+ footnote_id
				+ '">'
				+footnote_text
				+'</div>'
			).appendTo('body');

			footnote_dialog.hide();

			var footnote_dialog = $( '#footnote_tooltip_' + footnote_id );

			$( footnote_link ).click( function( event ) {
				event.preventDefault();

				var footnote_id = this.hash.replace( /#/, '' );

				var footnote_dialog = $( '#footnote_tooltip_' + footnote_id );

				var footnote_number = footnote_id.replace( /([^-]+?)-([^-]+?)-(.*)/, '$3' );

				footnote_dialog.dialog({
					title: 'Footnote ' + footnote_number,
					modal: true,
				});

			});

		}
	);

});
