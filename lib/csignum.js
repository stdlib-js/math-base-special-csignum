/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var cabs = require( '@stdlib/math-base-special-cabs' );


// MAIN //

/**
* Evaluates the signum function of a complex number.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} function result
*
* @example
* var out = new Array( 2 );
*
* var v = csignum( out, -4.2, 5.5 );
* // returns [ -0.6069136033622302, 0.79476781392673 ]
*
* var bool = ( v === out );
* // returns true
*
* @example
* var out = new Array( 2 );
* var v = csignum( out, 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var out = new Array( 2 );
* var v = csignum( out, NaN, NaN );
* // returns [ NaN, NaN ]
*/
function csignum( out, re, im ) {
	var az = cabs( re, im );
	if ( az === 0.0 ) {
		out[ 0 ] = re;
		out[ 1 ] = im;
		return out;
	}
	out[ 0 ] = re / az;
	out[ 1 ] = im / az;
	return out;
}


// EXPORTS //

module.exports = csignum;
