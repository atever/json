/**
*
*	VALIDATE: json
*
*
*	DESCRIPTION:
*		- Validates if a value is a parseable JSON string.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' );

// REGEXP //

var re = /^\{[\s\S]*\}$|^\[[\s\S]*\]$/;
/**
* REGEX
*	^\{
		- match a '{' literal which is the first character
*	[\s\S]*
		- match any whitespace and non-whitespace characters which occur 0 or more times
*	\}$
		- match a '}' literal which is the last character
*	|
		- alternatively
*	^\[
		- match a '[' literal which is the first character
*	[\s\S]*
		- match any whitespace and non-whitespace characters which occur 0 or more times
*	\]$
		- match a ']' literal which is the last character
*
*	e.g.,
*		'{}'
*		'[]'
*		'{adjlkfaj3743.,><\n\t\rdf}'
*		'[adjlkfaj3743.,><\n\t\rdf]'
*		'{"a":5}'
*/

// ISJSON //

/**
* FUNCTION: isJSON( value )
*	Validates if a value is a parseable JSON string.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a parseable JSON string
*/
function isJSON( value ) {
	if ( !isString( value ) ) {
		return false;
	}
	if ( !re.test( value ) ) {
		return false;
	}
	try {
		JSON.parse( value );
	} catch ( err ) {
		return false;
	}
	return true;
} // end FUNCTION isJSON()


// EXPORTS //

module.exports = isJSON;
