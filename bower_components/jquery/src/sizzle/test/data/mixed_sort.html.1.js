
		var doc = parent.document,
			unframed = [ doc.getElementById( "qunit-fixture" ), doc.body, doc.documentElement ],
			framed = Sizzle( "*" );

		window.parent.iframeCallback(
			Sizzle.uniqueSort( unframed.concat( framed ) ),
			framed.concat( unframed.reverse() ),
			"Mixed array was sorted correctly"
		);
	