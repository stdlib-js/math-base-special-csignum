// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabs@esm/index.mjs";function s(s,n,r){var i=e(new t(n,r));return 0===i?(s[0]=n,s[1]=r,s):(s[0]=n/i,s[1]=r/i,s)}function n(t,e,n){return 2===arguments.length?s([0,0],t,e):s(t,e,n)}export{n as default};
//# sourceMappingURL=index.mjs.map
