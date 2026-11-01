"use strict";var v=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}}};var u=v(function(D,c){"use strict";var y=require("@stdlib/math-base-special-hypot");function m(r,e,i,n,a){var s;return s=y(r,e),s===0?(i[a]=r,i[a+n]=e,i):(i[a]=r/s,i[a+n]=e/s,i)}c.exports=m});var d=v(function(E,g){"use strict";var o=require("@stdlib/complex-float64-ctor"),w=require("@stdlib/array-float64"),h=require("@stdlib/complex-float64-real"),A=require("@stdlib/complex-float64-imag"),C=u(),t=new w(2);function F(r){return C(h(r),A(r),t,1,0),new o(t[0],t[1])}g.exports=F});var x=v(function(G,p){"use strict";var R=u();function b(r,e,i,n,a,s){return R(r[i],r[i+e],n,a,s)}p.exports=b});var l=require("@stdlib/utils-define-nonenumerable-read-only-property"),q=d(),j=u(),k=x();l(q,"assign",j);l(q,"strided",k);module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
