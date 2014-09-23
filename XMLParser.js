/**
 * jQuery-based XML parser for client side JavaScript.
 */

'use strict';

var XMLParser = (function($) {

	var serializer = new XMLSerializer();
	var parser = {};

	/**
	 *	XML -> jQuery
	 *
	 *	@param xml A well formed XML document string.
	 *	@return A jQuery representation of the XML document.
	 */
	parser.parse = function (xml){
		var dom = $.parseXML(xml);
		var $dom = $(dom);
		return $dom;
	};

	/**
	 * jQuery -> XML
	 *
	 *	@param $xml A jQuery representation of a well formed XML document.
	 *	@return The XML document string.
	 */
	parser.stringify = function ($dom) {
		var dom = $dom.get(0);
		var xml = serializer.serializeToString(dom);
		return xml;
	};

	return parser;

})(jQuery);
