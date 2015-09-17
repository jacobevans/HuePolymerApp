
		// Call parent when this frame is fully loaded, it will mess with #frame-input
		jQuery( window ).one( "load", function() {
			window.parent.iframeCallback( document );
		});
	