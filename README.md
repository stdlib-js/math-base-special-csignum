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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# csignum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [signum][signum] function of a double-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import csignum from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-csignum@esm/index.mjs';
```

#### csignum( z )

Evaluates the [signum][signum] function of a double-precision complex floating-point number.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';

var v = csignum( new Complex128( -4.2, 5.5 ) );
// returns <Complex128>[ -0.6069136033622302, 0.79476781392673 ]

v = csignum( new Complex128( 0.0, 0.0 ) );
// returns <Complex128>[ 0.0, 0.0 ]

v = csignum( new Complex128( NaN, NaN ) );
// returns <Complex128>[ NaN, NaN ]
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';
import csignum from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-csignum@esm/index.mjs';

var rand = uniform( -50.0, 50.0 );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( rand(), rand() );
    console.log( 'csignum(%s) = %s', z, csignum( z ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/signum`][@stdlib/math/base/special/signum]</span><span class="delimiter">: </span><span class="description">evaluate the signum function for a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-csignum.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-csignum

[test-image]: https://github.com/stdlib-js/math-base-special-csignum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-csignum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-csignum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-csignum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-csignum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-csignum/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-csignum/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-csignum/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-csignum/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-csignum/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-csignum/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-csignum/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-csignum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-csignum/main/LICENSE

[signum]: https://en.wikipedia.org/wiki/Sign_function

<!-- <related-links> -->

[@stdlib/math/base/special/signum]: https://github.com/stdlib-js/math-base-special-signum/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
