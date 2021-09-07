<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Signum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate the [signum][signum] function of a complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-csignum
```

</section>

<section class="usage">

## Usage

```javascript
var csignum = require( '@stdlib/math-base-special-csignum' );
```

#### csignum( \[out,] re, im )

Evaluates the [signum][signum] function of a `complex` number comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var v = csignum( -4.2, 5.5 );
// returns [ -0.6069136033622302, 0.79476781392673 ]

v = csignum( 0.0, 0.0 );
// returns [ 0.0, 0.0 ]

v = csignum( NaN, NaN );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = csignum( out, -4.2, 5.5 );
// returns <Float64Array>[ -0.6069136033622302, 0.79476781392673 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var csignum = require( '@stdlib/math-base-special-csignum' );

var re;
var im;
var z;
var o;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = csignum( real(z), imag(z) );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'signum(%s) = %s', z.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/signum`][@stdlib/math/base/special/signum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function for a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-csignum.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-csignum

[test-image]: https://github.com/stdlib-js/math-base-special-csignum/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-csignum/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-csignum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-csignum?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-csignum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-csignum/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-csignum/main/LICENSE

[signum]: http://en.wikipedia.org/wiki/Sign_function

<!-- <related-links> -->

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math-base-special-signum

<!-- </related-links> -->

</section>

<!-- /.links -->
