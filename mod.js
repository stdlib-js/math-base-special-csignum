// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,u=n,e=t;var a=function(r){return r===u||r===e},f=Math.sqrt,i=r,o=a,I=n,N=f;var c=function(r,n){var t;return i(r)||i(n)?NaN:o(r)||o(n)?I:(r<0&&(r=-r),n<0&&(n=-n),r<n&&(t=n,n=r,r=t),0===r?0:r*N(1+(n/=r)*n))},v=function(r){return r.re},T=function(r){return r.im};var m=function(r){return c(v(r),T(r))};var E=function(r,n,t){var u=m(n);return 0===u?(r[0]=n,r[1]=t,r):(r[0]=n/u,r[1]=t/u,r)};var b=function(r,n,t){return 2===arguments.length?E([0,0],r,n):E(r,n,t)};export{b as default};
//# sourceMappingURL=mod.js.map
