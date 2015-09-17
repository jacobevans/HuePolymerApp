
		var errors = [];
		window.onerror = function( errorMessage, filePath, lineNumber ) {
			errors.push( errorMessage );
		};
	