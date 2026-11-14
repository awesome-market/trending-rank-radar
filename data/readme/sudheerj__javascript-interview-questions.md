# JavaScript Interview Questions & Answers

> Click :star:if you like the project and follow [@SudheerJonna](https://twitter.com/SudheerJonna) for more updates. Coding questions available [here](#coding-exercise). Check [DataStructures and Algorithms](https://github.com/sudheerj/datastructures-algorithms) for DSA related questions and [ECMAScript](https://github.com/sudheerj/ECMAScript-features) for all ES features.)

---

<div>
<p align="center">
  <a href="https://www.greatfrontend.com/questions/formats/javascript-functions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-js&fpr=sudheerj&gnrs=sudheerj">
    <img src="./images/collab/greatfrontend-js.gif" alt="GreatFrontEnd JavaScript Interview Questions" width="100%">
  </a>
</p>
</div>

> Practice 280+ JavaScript coding interview questions in-browser. Built by ex-FAANG interviewers. No AI-generated fluff. No fake reviews. [Try GreatFrontEnd →](https://www.greatfrontend.com/questions/formats/javascript-functions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-js&fpr=sudheerj&gnrs=sudheerj) 💡


<div>
<p align="center">
  <a href="https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions">
    <img src="./images/collab/ztm.gif" alt="ZTM Logo" width="100%" />
  </a>
</p>
</div>

> I recommend this [JavaScript Projects courses](https://zerotomastery.io/courses/javascript-projects/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions) and this [Advanced JavaScript Course](https://zerotomastery.io/courses/advanced-javascript-concepts/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions) to become top 10% at JS and [this coding interview bootcamp](https://zerotomastery.io/courses/learn-data-structures-and-algorithms/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions) to ace your coding interview and actually get hired.

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
| 2 | [What is a prototype chain](#what-is-a-prototype-chain) |
| 3 | [What is the Difference Between `call`, `apply`, and `bind`](#what-is-the-difference-between-call-apply-and-bind) |
| 4 | [What is JSON and its common operations](#what-is-json-and-its-common-operations) |
| 5 | [What is the purpose of the array slice method](#what-is-the-purpose-of-the-array-slice-method) |
| 6 | [What is the purpose of the array splice method](#what-is-the-purpose-of-the-array-splice-method) |
| 7 | [What is the difference between slice and splice](#what-is-the-difference-between-slice-and-splice) |
| 8 | [How do you compare Object and Map](#how-do-you-compare-object-and-map) |
| 9 | [What is the difference between == and === operators](#what-is-the-difference-between--and--operators) |
| 10 | [What are lambda expressions or arrow functions](#what-are-lambda-expressions-or-arrow-functions) |
| 11 | [What is a first class function](#what-is-a-first-class-function) |
| 12 | [What is a first order function](#what-is-a-first-order-function) |
| 13 | [What is a higher order function](#what-is-a-higher-order-function) |
| 14 | [What is a unary function](#what-is-a-unary-function) |
| 15 | [What is the currying function](#what-is-the-currying-function) |
| 16 | [What is a pure function](#what-is-a-pure-function) |
| 17 | [What are the benefits of pure functions](#what-are-the-benefits-of-pure-functions) |
| 18 | [What is the purpose of the let keyword](#what-is-the-purpose-of-the-let-keyword) |
| 19 | [What is the difference between let and var](#what-is-the-difference-between-let-and-var) |
| 20 | [What is the reason to choose the name let as a keyword](#what-is-the-reason-to-choose-the-name-let-as-a-keyword) |
| 21 | [How do you redeclare variables in a switch block without an error](#how-do-you-redeclare-variables-in-a-switch-block-without-an-error) |
| 22 | [What is the Temporal Dead Zone](#what-is-the-temporal-dead-zone) |
| 23 | [What is an IIFE (Immediately Invoked Function Expression)](#what-is-an-iife-immediately-invoked-function-expression) |
| 24 | [How do you decode or encode a URL in JavaScript?](#how-do-you-decode-or-encode-a-url-in-javascript) |
| 25 | [What is memoization](#what-is-memoization) |
| 26 | [What is Hoisting](#what-is-hoisting) |
| 27 | [What are classes in ES6](#what-are-classes-in-es6) |
| 28 | [What are closures](#what-are-closures) |
| 29 | [What are modules](#what-are-modules) |
| 30 | [Why do you need modules](#why-do-you-need-modules) |
| 31 | [What is scope in javascript](#what-is-scope-in-javascript) |
| 32 | [What is a service worker](#what-is-a-service-worker) |
| 33 | [How do you manipulate DOM using a service worker](#how-do-you-manipulate-dom-using-a-service-worker) |
| 34 | [How do you reuse information across service worker restarts](#how-do-you-reuse-information-across-service-worker-restarts) |
| 35 | [What is IndexedDB](#what-is-indexeddb) |
| 36 | [What is web storage](#what-is-web-storage) |
| 37 | [What is a post message](#what-is-a-post-message) |
| 38 | [What is a Cookie](#what-is-a-cookie) |
| 39 | [Why do you need a Cookie](#why-do-you-need-a-cookie) |
| 40 | [What are the options in a cookie](#what-are-the-options-in-a-cookie) |
| 41 | [How do you delete a cookie](#how-do-you-delete-a-cookie) |
| 42 | [What are the differences between cookie, local storage and session storage](#what-are-the-differences-between-cookie-local-storage-and-session-storage) |
| 43 | [What is the main difference between localStorage and sessionStorage](#what-is-the-main-difference-between-localstorage-and-sessionstorage) |
| 44 | [How do you access web storage](#how-do-you-access-web-storage) |
| 45 | [What are the methods available on session storage](#what-are-the-methods-available-on-session-storage) |
| 46 | [What is a storage event and its event handler](#what-is-a-storage-event-and-its-event-handler) |
| 47 | [Why do you need web storage](#why-do-you-need-web-storage) |
| 48 | [How do you check web storage browser support](#how-do-you-check-web-storage-browser-support) |
| 49 | [How do you check web workers browser support](#how-do-you-check-web-workers-browser-support) |
| 50 | [Give an example of a web worker](#give-an-example-of-a-web-worker) |
| 51 | [What are the restrictions of web workers on DOM](#what-are-the-restrictions-of-web-workers-on-dom) |
| 52 | [What is a promise](#what-is-a-promise) |
| 53 | [Why do you need a promise](#why-do-you-need-a-promise) |
| 54 | [Explain the three states of promise](#explain-the-three-states-of-promise) |
| 55 | [What is a callback function](#what-is-a-callback-function) |
| 56 | [Why do we need callbacks](#why-do-we-need-callbacks) |
| 57 | [What is a callback hell](#what-is-a-callback-hell) |
| 58 | [What are server-sent events](#what-are-server-sent-events) |
| 59 | [How do you receive server-sent event notifications](#how-do-you-receive-server-sent-event-notifications) |
| 60 | [How do you check browser support for server-sent events](#how-do-you-check-browser-support-for-server-sent-events) |
| 61 | [What are the events available for server sent events](#what-are-the-events-available-for-server-sent-events) |
| 62 | [What are the main rules of promise](#what-are-the-main-rules-of-promise) |
| 63 | [What is callback in callback](#what-is-callback-in-callback) |
| 64 | [What is promise chaining](#what-is-promise-chaining) |
| 65 | [What is promise.all](#what-is-promiseall) |
| 66 | [Does Promise.all() cancel the other Promises?](#does-promiseall-cancel-the-other-promises) |
| 67 | [What is the purpose of the race method in promise](#what-is-the-purpose-of-the-race-method-in-promise) |
| 68 | [What is a strict mode in javascript](#what-is-a-strict-mode-in-javascript) |
| 69 | [Why do you need strict mode](#why-do-you-need-strict-mode) |
| 70 | [How do you declare strict mode](#how-do-you-declare-strict-mode) |
| 71 | [What is the purpose of double exclamation](#what-is-the-purpose-of-double-exclamation) |
| 72 | [What is the purpose of the delete operator](#what-is-the-purpose-of-the-delete-operator) |
| 73 | [What is typeof operator](#what-is-typeof-operator) |
| 74 | [What is undefined property](#what-is-undefined-property) |
| 75 | [What is null value](#what-is-null-value) |
| 76 | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined) |
| 77 | [What is eval](#what-is-eval) |
| 78 | [What is the difference between window and document](#what-is-the-difference-between-window-and-document) |
| 79 | [How do you access history in javascript](#how-do-you-access-history-in-javascript) |
| 80 | [How do you detect caps lock key turned on or not](#how-do-you-detect-caps-lock-key-turned-on-or-not) |
| 81 | [What is isNaN](#what-is-isnan) |
| 82 | [What are the differences between undeclared and undefined variables](#what-are-the-differences-between-undeclared-and-undefined-variables) |
| 83 | [What are global variables](#what-are-global-variables) |
| 84 | [What are the problems with global variables](#what-are-the-problems-with-global-variables) |
| 85 | [What is NaN property](#what-is-nan-property) |
| 86 | [What is the purpose of isFinite function](#what-is-the-purpose-of-isfinite-function) |
| 87 | [What is an event flow](#what-is-an-event-flow) |
| 88 | [What is event capturing](#what-is-event-capturing) |
| 89 | [What is event bubbling](#what-is-event-bubbling) |
| 90 | [How do you submit a form using JavaScript](#how-do-you-submit-a-form-using-javascript) |
| 91 | [How do you find operating system details](#how-do-you-find-operating-system-details) |
| 92 | [What is the difference between document load and DOMContentLoaded events](#what-is-the-difference-between-document-load-and-domcontentloaded-events) |
| 93 | [What is the difference between native, host and user objects](#what-is-the-difference-between-native-host-and-user-objects) |
| 94 | [What are the tools or techniques used for debugging JavaScript code](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code) |
| 95 | [What are the pros and cons of promises over callbacks](#what-are-the-pros-and-cons-of-promises-over-callbacks) |
| 96 | [What is the difference between an attribute and a property](#what-is-the-difference-between-an-attribute-and-a-property) |
| 97 | [What is same-origin policy](#what-is-same-origin-policy) |
| 98 | [What is the purpose of void 0](#what-is-the-purpose-of-void-0) |
| 99 | [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language) |
| 100 | [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language) |
| 101 | [Is there any relation between Java and JavaScript](#is-there-any-relation-between-java-and-javascript) |
| 102 | [What are events](#what-are-events) |
| 103 | [Who created javascript](#who-created-javascript) |
| 104 | [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method) |
| 105 | [What is the use of stopPropagation method](#what-is-the-use-of-stoppropagation-method) |
| 106 | [What are the steps involved in return false usage](#what-are-the-steps-involved-in-return-false-usage) |
| 107 | [What is BOM](#what-is-bom) |
| 108 | [What is the use of setTimeout](#what-is-the-use-of-settimeout) |
| 109 | [What is the use of setInterval](#what-is-the-use-of-setinterval) |
| 110 | [Why is JavaScript treated as Single threaded](#why-is-javascript-treated-as-single-threaded) |
| 111 | [What is an event delegation](#what-is-an-event-delegation) |
| 112 | [What is ECMAScript](#what-is-ecmascript) |
| 113 | [What is JSON](#what-is-json) |
| 114 | [What are the syntax rules of JSON](#what-are-the-syntax-rules-of-json) |
| 115 | [What is the purpose JSON stringify](#what-is-the-purpose-json-stringify) |
| 116 | [How do you parse JSON string](#how-do-you-parse-json-string) |
| 117 | [Why do you need JSON](#why-do-you-need-json) |
| 118 | [What are PWAs](#what-are-pwas) |
| 119 | [What is the purpose of clearTimeout method](#what-is-the-purpose-of-cleartimeout-method) |
| 120 | [What is the purpose of clearInterval method](#what-is-the-purpose-of-clearinterval-method) |
| 121 | [How do you redirect new page in javascript](#how-do-you-redirect-new-page-in-javascript) |
| 122 | [How do you check whether a string contains a substring](#how-do-you-check-whether-a-string-contains-a-substring) |
| 123 | [How do you validate an email in javascript](#how-do-you-validate-an-email-in-javascript) |
| 124 | [How do you get the current url with javascript](#how-do-you-get-the-current-url-with-javascript) |
| 125 | [What are the various url properties of location object](#what-are-the-various-url-properties-of-location-object) |
| 126 | [How do you get query string values in javascript](#how-do-you-get-query-string-values-in-javascript) |
| 127 | [How do you check if a key exists in an object](#how-do-you-check-if-a-key-exists-in-an-object) |
| 128 | [How do you loop through or enumerate javascript object](#how-do-you-loop-through-or-enumerate-javascript-object) |
| 129 | [How do you test for an empty object](#how-do-you-test-for-an-empty-object) |
| 130 | [What is an arguments object](#what-is-an-arguments-object) |
| 131 | [How do you make first letter of the string in an uppercase](#how-do-you-make-first-letter-of-the-string-in-an-uppercase) |
| 132 | [What are the pros and cons of for loops](#what-are-the-pros-and-cons-of-for-loops) |
| 133 | [How do you display the current date in javascript](#how-do-you-display-the-current-date-in-javascript) |
| 134 | [How do you compare two date objects](#how-do-you-compare-two-date-objects) |
| 135 | [How do you check if a string starts with another string](#how-do-you-check-if-a-string-starts-with-another-string) |
| 136 | [How do you trim a string in javascript](#how-do-you-trim-a-string-in-javascript) |
| 137 | [How do you add a key value pair in javascript](#how-do-you-add-a-key-value-pair-in-javascript) |
| 138 | [Is the !-- notation represents a special operator](#is-the----notation-represents-a-special-operator) |
| 139 | [How do you assign default values to variables](#how-do-you-assign-default-values-to-variables) |
| 140 | [How do you define multiline strings](#how-do-you-define-multiline-strings) |
| 141 | [What is an app shell model](#what-is-an-app-shell-model) |
| 142 | [Can we define properties for functions](#can-we-define-properties-for-functions) |
| 143 | [What is the way to find the number of parameters expected by a function](#what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function) |
| 144 | [What is a polyfill](#what-is-a-polyfill) |
| 145 | [What are break and continue statements](#what-are-break-and-continue-statements) |
| 146 | [What are js labels](#what-are-js-labels) |
| 147 | [What are the benefits of keeping declarations at the top](#what-are-the-benefits-of-keeping-declarations-at-the-top) |
| 148 | [What are the benefits of initializing variables](#what-are-the-benefits-of-initializing-variables) |
| 149 | [What are the recommendations to create new object](#what-are-the-recommendations-to-create-new-object) |
| 150 | [How do you define JSON arrays](#how-do-you-define-json-arrays) |
| 151 | [How do you generate random integers](#how-do-you-generate-random-integers) |
| 152 | [Can you write a random integers function to print integers within a range](#can-you-write-a-random-integers-function-to-print-integers-within-a-range) |
| 153 | [What is tree shaking](#what-is-tree-shaking) |
| 154 | [What is the need of tree shaking](#what-is-the-need-of-tree-shaking) |
| 155 | [Is it recommended to use eval](#is-it-recommended-to-use-eval) |
| 156 | [What is a Regular Expression](#what-is-a-regular-expression) |
| 157 | [What are the string methods that accept Regular expression](#what-are-the-string-methods-that-accept-regular-expression) |
| 158 | [What are modifiers in regular expression](#what-are-modifiers-in-regular-expression) |
| 159 | [What are regular expression patterns](#what-are-regular-expression-patterns) |
| 160 | [What is a RegExp object](#what-is-a-regexp-object) |
| 161 | [How do you search a string for a pattern](#how-do-you-search-a-string-for-a-pattern) |
| 162 | [What is the purpose of exec method](#what-is-the-purpose-of-exec-method) |
| 163 | [How do you change the style of a HTML element](#how-do-you-change-the-style-of-a-html-element) |
| 164 | [What would be the result of 1+2+'3'](#what-would-be-the-result-of-123) |
| 165 | [What is a debugger statement](#what-is-a-debugger-statement) |
| 166 | [What is the purpose of breakpoints in debugging](#what-is-the-purpose-of-breakpoints-in-debugging) |
| 167 | [Can I use reserved words as identifiers](#can-i-use-reserved-words-as-identifiers) |
| 168 | [How do you detect a mobile browser](#how-do-you-detect-a-mobile-browser) |
| 169 | [How do you detect a mobile browser without regexp](#how-do-you-detect-a-mobile-browser-without-regexp) |
| 170 | [How do you get the image width and height using JS](#how-do-you-get-the-image-width-and-height-using-js) |
| 171 | [How do you make synchronous HTTP request](#how-do-you-make-synchronous-http-request) |
| 172 | [How do you make asynchronous HTTP request](#how-do-you-make-asynchronous-http-request) |
| 173 | [How do you convert date to another timezone in javascript](#how-do-you-convert-date-to-another-timezone-in-javascript) |
| 174 | [What are the properties used to get size of window](#what-are-the-properties-used-to-get-size-of-window) |
| 175 | [What is a conditional operator in javascript](#what-is-a-conditional-operator-in-javascript) |
| 176 | [Can you apply chaining on conditional operator](#can-you-apply-chaining-on-conditional-operator) |
| 177 | [What are the ways to execute javascript after a page load](#what-are-the-ways-to-execute-javascript-after-a-page-load) |
| 178 | [What is the difference between proto and prototype](#what-is-the-difference-between-proto-and-prototype) |
| 179 | [Can you give an example of when you really need a semicolon](#can-you-give-an-example-of-when-you-really-need-a-semicolon) |
| 180 | [What is the freeze method](#what-is-the-freeze-method) |
| 181 | [What is the purpose of the freeze method](#what-is-the-purpose-of-the-freeze-method) |
| 182 | [Why do I need to use the freeze method](#why-do-i-need-to-use-the-freeze-method) |
| 183 | [How do you detect a browser language preference](#how-do-you-detect-a-browser-language-preference) |
| 184 | [How to convert a string to title case with javascript](#how-to-convert-a-string-to-title-case-with-javascript) |
| 185 | [How do you detect if javascript is disabled on the page](#how-do-you-detect-if-javascript-is-disabled-on-the-page) |
| 186 | [What are various operators supported by javascript](#what-are-various-operators-supported-by-javascript) |
| 187 | [What is a rest parameter](#what-is-a-rest-parameter) |
| 188 | [What happens if you do not use rest parameter as a last argument](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument) |
| 189 | [What are the bitwise operators available in javascript](#what-are-the-bitwise-operators-available-in-javascript) |
| 190 | [What is a spread operator](#what-is-a-spread-operator) |
| 191 | [How do you determine whether object is frozen or not](#how-do-you-determine-whether-object-is-frozen-or-not) |
| 192 | [How do you determine two values same or not using object](#how-do-you-determine-two-values-same-or-not-using-object) |
| 193 | [What is the purpose of using object is method](#what-is-the-purpose-of-using-object-is-method) |
| 194 | [How do you copy properties from one object to other](#how-do-you-copy-properties-from-one-object-to-other) |
| 195 | [What are the applications of the assign method](#what-are-the-applications-of-the-assign-method) |
| 196 | [What is a proxy object](#what-is-a-proxy-object) |
| 197 | [What is the purpose of the seal method](#what-is-the-purpose-of-the-seal-method) |
| 198 | [What are the applications of the seal method](#what-are-the-applications-of-the-seal-method) |
| 199 | [What are the differences between the freeze and seal methods](#what-are-the-differences-between-the-freeze-and-seal-methods) |
| 200 | [How do you determine if an object is sealed or not](#how-do-you-determine-if-an-object-is-sealed-or-not) |
| 201 | [How do you get enumerable key and value pairs](#how-do-you-get-enumerable-key-and-value-pairs) |
| 202 | [What is the main difference between Object.values and Object.entries method](#what-is-the-main-difference-between-objectvalues-and-objectentries-method) |
| 203 | [How can you get the list of keys of any object](#how-can-you-get-the-list-of-keys-of-any-object) |
| 204 | [How do you create an object with a prototype](#how-do-you-create-an-object-with-a-prototype) |
| 205 | [What is a WeakSet](#what-is-a-weakset) |
| 206 | [What are the differences between WeakSet and Set](#what-are-the-differences-between-weakset-and-set) |
| 207 | [List down the collection of methods available on WeakSet](#list-down-the-collection-of-methods-available-on-weakset) |
| 208 | [What is a WeakMap](#what-is-a-weakmap) |
| 209 | [What are the differences between WeakMap and Map](#what-are-the-differences-between-weakmap-and-map) |
| 210 | [List down the collection of methods available on WeakMap](#list-down-the-collection-of-methods-available-on-weakmap) |
| 211 | [What is the purpose of uneval](#what-is-the-purpose-of-uneval) |
| 212 | [How do you encode an URL](#how-do-you-encode-an-url) |
| 213 | [How do you decode an URL](#how-do-you-decode-an-url) |
| 214 | [How do you print the contents of web page](#how-do-you-print-the-contents-of-web-page) |
| 215 | [What is the difference between uneval and eval](#what-is-the-difference-between-uneval-and-eval) |
| 216 | [What is an anonymous function](#what-is-an-anonymous-function) |
| 217 | [What is the precedence order between local and global variables](#what-is-the-precedence-order-between-local-and-global-variables) |
| 218 | [What are javascript accessors](#what-are-javascript-accessors) |
| 219 | [How do you define property on Object constructor](#how-do-you-define-property-on-object-constructor) |
| 220 | [What is the difference between get and defineProperty](#what-is-the-difference-between-get-and-defineproperty) |
| 221 | [What are the advantages of Getters and Setters](#what-are-the-advantages-of-getters-and-setters) |
| 222 | [Can I add getters and setters using defineProperty method](#can-i-add-getters-and-setters-using-defineproperty-method) |
| 223 | [What is the purpose of switch-case](#what-is-the-purpose-of-switch-case) |
| 224 | [What are the conventions to be followed for the usage of switch case](#what-are-the-conventions-to-be-followed-for-the-usage-of-switch-case) |
| 225 | [What are primitive data types](#what-are-primitive-data-types) |
| 226 | [What are the different ways to access object properties](#what-are-the-different-ways-to-access-object-properties) |
| 227 | [What are the function parameter rules](#what-are-the-function-parameter-rules) |
| 228 | [What is an error object](#what-is-an-error-object) |
| 229 | [When do you get a syntax error](#when-do-you-get-a-syntax-error) |
| 230 | [What are the different error names from error object](#what-are-the-different-error-names-from-error-object) |
| 231 | [What are the various statements in error handling](#what-are-the-various-statements-in-error-handling) |
| 232 | [What are the two types of loops in javascript](#what-are-the-two-types-of-loops-in-javascript) |
| 233 | [What is nodejs](#what-is-nodejs) |
| 234 | [What is the Intl object](#what-is-the-intl-object) |
| 235 | [How do you perform language specific date and time formatting](#how-do-you-perform-language-specific-date-and-time-formatting) |
| 236 | [What is an Iterator](#what-is-an-iterator) |
| 237 | [How does synchronous iteration works](#how-does-synchronous-iteration-works) |
| 238 | [What is the event loop](#what-is-the-event-loop) |
| 239 | [What is the call stack](#what-is-the-call-stack) |
| 240 | [What is the event queue](#what-is-the-event-queue) |
| 241 | [What is a decorator](#what-is-a-decorator) |
| 242 | [What are the properties of the Intl object](#what-are-the-properties-of-the-intl-object) |
| 243 | [What is an Unary operator](#what-is-an-unary-operator) |
| 244 | [How do you sort elements in an array](#how-do-you-sort-elements-in-an-array) |
| 245 | [What is the purpose of compareFunction while sorting arrays](#what-is-the-purpose-of-comparefunction-while-sorting-arrays) |
| 246 | [How do you reverse an array](#how-do-you-reverse-an-array) |
| 247 | [How do you find the min and max values in an array](#how-do-you-find-the-min-and-max-values-in-an-array) |
| 248 | [How do you find the min and max values without Math functions](#how-do-you-find-the-min-and-max-values-without-math-functions) |
| 249 | [What is an empty statement and purpose of it](#what-is-an-empty-statement-and-purpose-of-it) |
| 250 | [How do you get the metadata of a module](#how-do-you-get-the-metadata-of-a-module) |
| 251 | [What is the comma operator](#what-is-the-comma-operator) |
| 252 | [What is the advantage of the comma operator](#what-is-the-advantage-of-the-comma-operator) |
| 253 | [What is typescript](#what-is-typescript) |
| 254 | [What are the differences between javascript and typescript](#what-are-the-differences-between-javascript-and-typescript) |
| 255 | [What are the advantages of typescript over javascript](#what-are-the-advantages-of-typescript-over-javascript) |
| 256 | [What is an object initializer](#what-is-an-object-initializer) |
| 257 | [What is a constructor method](#what-is-a-constructor-method) |
| 258 | [What happens if you write constructor more than once in a class](#what-happens-if-you-write-constructor-more-than-once-in-a-class) |
| 259 | [How do you call the constructor of a parent class](#how-do-you-call-the-constructor-of-a-parent-class) |
| 260 | [How do you get the prototype of an object](#how-do-you-get-the-prototype-of-an-object) |
| 261 | [What happens If I pass string type for getPrototype method](#what-happens-if-i-pass-string-type-for-getprototype-method) |
| 262 | [How do you set the prototype of one object to another](#how-do-you-set-the-prototype-of-one-object-to-another) |
| 263 | [How do you check whether an object can be extended or not](#how-do-you-check-whether-an-object-can-be-extended-or-not) |
| 264 | [How do you prevent an object from being extend](#how-do-you-prevent-an-object-from-being-extend) |
| 265 | [What are the different ways to make an object non-extensible](#what-are-the-different-ways-to-make-an-object-non-extensible) |
| 266 | [How do you define multiple properties on an object](#how-do-you-define-multiple-properties-on-an-object) |
| 267 | [What is the MEAN stack](#what-is-the-mean-stack) |
| 268 | [What is obfuscation in javascript](#what-is-obfuscation-in-javascript) |
| 269 | [Why do you need Obfuscation](#why-do-you-need-obfuscation) |
| 270 | [What is Minification](#what-is-minification) |
| 271 | [What are the advantages of minification](#what-are-the-advantages-of-minification) |
| 272 | [What are the differences between obfuscation and Encryption](#what-are-the-differences-between-obfuscation-and-encryption) |
| 273 | [What are the common tools used for minification](#what-are-the-common-tools-used-for-minification) |
| 274 | [How do you perform form validation using javascript](#how-do-you-perform-form-validation-using-javascript) |
| 275 | [How do you perform form validation without javascript](#how-do-you-perform-form-validation-without-javascript) |
| 276 | [What are the DOM methods available for constraint validation](#what-are-the-dom-methods-available-for-constraint-validation) |
| 277 | [What are the available constraint validation DOM properties](#what-are-the-available-constraint-validation-dom-properties) |
| 278 | [What are the validity properties](#what-are-the-validity-properties) |
| 279 | [Give an example usage of the rangeOverflow property](#give-an-example-usage-of-the-rangeoverflow-property) |
| 280 | [Are enums available in javascript](#are-enums-available-in-javascript) |
| 281 | [What is an enum](#what-is-an-enum) |
| 282 | [How do you list all properties of an object](#how-do-you-list-all-properties-of-an-object) |
| 283 | [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object) |
| 284 | [What are the attributes provided by a property descriptor](#what-are-the-attributes-provided-by-a-property-descriptor) |
| 285 | [How do you extend classes](#how-do-you-extend-classes) |
| 286 | [How do I modify the url without reloading the page](#how-do-i-modify-the-url-without-reloading-the-page) |
| 287 | [How do you check whether or not an array includes a particular value](#how-do-you-check-whether-or-not-an-array-includes-a-particular-value) |
| 288 | [How do you compare scalar arrays](#how-do-you-compare-scalar-arrays) |
| 289 | [How to get the value from get parameters](#how-to-get-the-value-from-get-parameters) |
| 290 | [How do you print numbers with commas as thousand separators](#how-do-you-print-numbers-with-commas-as-thousand-separators) |
| 291 | [What is the difference between java and javascript](#what-is-the-difference-between-java-and-javascript) |
| 292 | [Does JavaScript support namespaces](#does-javascript-support-namespaces) |
| 293 | [How do you declare a namespace](#how-do-you-declare-a-namespace) |
| 294 | [How do you invoke javascript code in an iframe from the parent page](#how-do-you-invoke-javascript-code-in-an-iframe-from-the-parent-page) |
| 295 | [How do you get the timezone offset of a date object](#how-do-you-get-the-timezone-offset-of-a-date-object) |
| 296 | [How do you load CSS and JS files dynamically](#how-do-you-load-css-and-js-files-dynamically) |
| 297 | [What are the different methods to find HTML elements in DOM](#what-are-the-different-methods-to-find-html-elements-in-dom) |
| 298 | [What is jQuery](#what-is-jquery) |
| 299 | [What is V8 JavaScript engine](#what-is-v8-javascript-engine) |
| 300 | [Why do we call javascript as dynamic language](#why-do-we-call-javascript-as-dynamic-language) |
| 301 | [What is a void operator](#what-is-a-void-operator) |
| 302 | [How to set the cursor to wait](#how-to-set-the-cursor-to-wait) |
| 303 | [How do you create an infinite loop](#how-do-you-create-an-infinite-loop) |
| 304 | [Why do you need to avoid with statement](#why-do-you-need-to-avoid-with-statement) |
| 305 | [What is the output of the following for loops](#what-is-the-output-of-the-following-for-loops) |
| 306 | [List down some of the features of ES6](#list-down-some-of-the-features-of-es6) |
| 307 | [What is ES6](#what-is-es6) |
| 308 | [Can I redeclare let and const variables](#can-i-redeclare-let-and-const-variables) |
| 309 | [Does the `const` variable make the value immutable](#does-the-const-variable-make-the-value-immutable) |
| 310 | [What are default parameters](#what-are-default-parameters) |
| 311 | [What are template literals](#what-are-template-literals) |
| 312 | [How do you write multi-line strings in template literals](#how-do-you-write-multi-line-strings-in-template-literals) |
| 313 | [What are nesting templates](#what-are-nesting-templates) |
| 314 | [What are tagged templates](#what-are-tagged-templates) |
| 315 | [What are raw strings](#what-are-raw-strings) |
| 316 | [What is destructuring assignment](#what-is-destructuring-assignment) |
| 317 | [What are default values in destructuring assignment](#what-are-default-values-in-destructuring-assignment) |
| 318 | [How do you swap variables in destructuring assignment](#how-do-you-swap-variables-in-destructuring-assignment) |
| 319 | [What are enhanced object literals](#what-are-enhanced-object-literals) |
| 320 | [What are dynamic imports](#what-are-dynamic-imports) |
| 321 | [What are the use cases for dynamic imports](#what-are-the-use-cases-for-dynamic-imports) |
| 322 | [What are typed arrays](#what-are-typed-arrays) |
| 323 | [What are the advantages of module loaders](#what-are-the-advantages-of-module-loaders) |
| 324 | [What is collation](#what-is-collation) |
| 325 | [What is for...of statement](#what-is-forof-statement) |
| 326 | [What is the output of below spread operator array](#what-is-the-output-of-below-spread-operator-array) |
| 327 | [Is PostMessage secure](#is-postmessage-secure) |
| 328 | [What are the problems with postmessage target origin as wildcard](#what-are-the-problems-with-postmessage-target-origin-as-wildcard) |
| 329 | [How do you avoid receiving postMessages from attackers](#how-do-you-avoid-receiving-postmessages-from-attackers) |
| 330 | [Can I avoid using postMessages completely](#can-i-avoid-using-postmessages-completely) |
| 331 | [Is postMessages synchronous](#is-postmessages-synchronous) |
| 332 | [What paradigm is Javascript](#what-paradigm-is-javascript) |
| 333 | [What is the difference between internal and external javascript](#what-is-the-difference-between-internal-and-external-javascript) |
| 334 | [Is JavaScript faster than server side script](#is-javascript-faster-than-server-side-script) |
| 335 | [How do you get the status of a checkbox](#how-do-you-get-the-status-of-a-checkbox) |
| 336 | [What is the purpose of double tilde operator](#what-is-the-purpose-of-double-tilde-operator) |
| 337 | [How do you convert character to ASCII code](#how-do-you-convert-character-to-ascii-code) |
| 338 | [What is ArrayBuffer](#what-is-arraybuffer) |
| 339 | [What is the output of below string expression](#what-is-the-output-of-below-string-expression) |
| 340 | [What is the purpose of Error object](#what-is-the-purpose-of-error-object) |
| 341 | [What is the purpose of EvalError object](#what-is-the-purpose-of-evalerror-object) |
| 342 | [What are the list of cases error thrown from non-strict mode to strict mode](#what-are-the-list-of-cases-error-thrown-from-non-strict-mode-to-strict-mode) |
| 343 | [Do all objects have prototypes](#do-all-objects-have-prototypes) |
| 344 | [What is the difference between a parameter and an argument](#what-is-the-difference-between-a-parameter-and-an-argument) |
| 345 | [What is the purpose of some method in arrays](#what-is-the-purpose-of-some-method-in-arrays) |
| 346 | [How do you combine two or more arrays](#how-do-you-combine-two-or-more-arrays) |
| 347 | [What is the difference between Shallow and Deep copy](#what-is-the-difference-between-shallow-and-deep-copy) |
| 348 | [How do you create specific number of copies of a string](#how-do-you-create-specific-number-of-copies-of-a-string) |
| 349 | [How do you return all matching strings against a regular expression](#how-do-you-return-all-matching-strings-against-a-regular-expression) |
| 350 | [How do you trim a string at the beginning or ending](#how-do-you-trim-a-string-at-the-beginning-or-ending) |
| 351 | [What is the output of below console statement with unary operator](#what-is-the-output-of-below-console-statement-with-unary-operator) |
| 352 | [Does javascript uses mixins](#does-javascript-uses-mixins) |
| 353 | [Mixin Example using Object composition](#mixin-example-using-object-composition) |
| 354 | [Benefits](#benefits) |
| 355 | [What is a thunk function](#what-is-a-thunk-function) |
| 356 | [What are asynchronous thunks](#what-are-asynchronous-thunks) |
| 357 | [What is the output of below function calls](#what-is-the-output-of-below-function-calls) |
| 358 | [How to remove all line breaks from a string](#how-to-remove-all-line-breaks-from-a-string) |
| 359 | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint) |
| 360 | [What happens with negating an array](#what-happens-with-negating-an-array) |
| 361 | [What happens if we add two arrays](#what-happens-if-we-add-two-arrays) |
| 362 | [What is the output of prepend additive operator on falsy values](#what-is-the-output-of-prepend-additive-operator-on-falsy-values) |
| 363 | [How do you create self string using special characters](#how-do-you-create-self-string-using-special-characters) |
| 364 | [How do you remove falsy values from an array](#how-do-you-remove-falsy-values-from-an-array) |
| 365 | [How do you get unique values of an array](#how-do-you-get-unique-values-of-an-array) |
| 366 | [What is destructuring aliases](#what-is-destructuring-aliases) |
| 367 | [How do you map the array values without using map method](#how-do-you-map-the-array-values-without-using-map-method) |
| 368 | [How do you empty an array](#how-do-you-empty-an-array) |
| 369 | [How do you round numbers to certain decimals](#how-do-you-round-numbers-to-certain-decimals) |
| 370 | [What is the easiest way to convert an array to an object](#what-is-the-easiest-way-to-convert-an-array-to-an-object) |
| 371 | [How do you create an array with some data](#how-do-you-create-an-array-with-some-data) |
| 372 | [What are the placeholders from console object](#what-are-the-placeholders-from-console-object) |
| 373 | [Is it possible to add CSS to console messages](#is-it-possible-to-add-css-to-console-messages) |
| 374 | [What is the purpose of dir method of console object](#what-is-the-purpose-of-dir-method-of-console-object) |
| 375 | [Is it possible to debug HTML elements in console](#is-it-possible-to-debug-html-elements-in-console) |
| 376 | [How do you display data in a tabular format using console object](#how-do-you-display-data-in-a-tabular-format-using-console-object) |
| 377 | [How do you verify that an argument is a Number or not](#how-do-you-verify-that-an-argument-is-a-number-or-not) |
| 378 | [How do you create copy to clipboard button](#how-do-you-create-copy-to-clipboard-button) |
| 379 | [What is the shortcut to get timestamp](#what-is-the-shortcut-to-get-timestamp) |
| 380 | [How do you flattening multi dimensional arrays](#how-do-you-flattening-multi-dimensional-arrays) |
| 381 | [What is the easiest multi condition checking](#what-is-the-easiest-multi-condition-checking) |
| 382 | [How do you capture browser back button](#how-do-you-capture-browser-back-button) |
| 383 | [How do you disable right click in the web page](#how-do-you-disable-right-click-in-the-web-page) |
| 384 | [What are wrapper objects](#what-are-wrapper-objects) |
| 385 | [What is AJAX](#what-is-ajax) |
| 386 | [What are the different ways to deal with Asynchronous Code](#what-are-the-different-ways-to-deal-with-asynchronous-code) |
| 387 | [How to cancel a fetch request](#how-to-cancel-a-fetch-request) |
| 388 | [What is web speech API](#what-is-web-speech-api) |
| 389 | [What is minimum timeout throttling](#what-is-minimum-timeout-throttling) |
| 390 | [How do you implement zero timeout in modern browsers](#how-do-you-implement-zero-timeout-in-modern-browsers) |
| 391 | [What are tasks in event loop](#what-are-tasks-in-event-loop) |
| 392 | [What is microtask](#what-is-microtask) |
| 393 | [What are different event loops](#what-are-different-event-loops) |
| 394 | [What is the purpose of queueMicrotask](#what-is-the-purpose-of-queuemicrotask) |
| 395 | [How do you use javascript libraries in typescript file](#how-do-you-use-javascript-libraries-in-typescript-file) |
| 396 | [What are the differences between promises and observables](#what-are-the-differences-between-promises-and-observables) |
| 397 | [What is heap](#what-is-heap) |
| 398 | [What is an event table](#what-is-an-event-table) |
| 399 | [What is a microTask queue](#what-is-a-microtask-queue) |
| 400 | [What is the difference between shim and polyfill](#what-is-the-difference-between-shim-and-polyfill) |
| 401 | [How do you detect primitive or non primitive value type](#how-do-you-detect-primitive-or-non-primitive-value-type) |
| 402 | [What is babel](#what-is-babel) |
| 403 | [Is Node.js completely single threaded](#is-nodejs-completely-single-threaded) |
| 404 | [What are the common use cases of observables](#what-are-the-common-use-cases-of-observables) |
| 405 | [What is RxJS](#what-is-rxjs) |
| 406 | [What is the difference between Function constructor and function declaration](#what-is-the-difference-between-function-constructor-and-function-declaration) |
| 407 | [What is a Short circuit condition](#what-is-a-short-circuit-condition) |
| 408 | [What is the easiest way to resize an array](#what-is-the-easiest-way-to-resize-an-array) |
| 409 | [What is an observable](#what-is-an-observable) |
| 410 | [What is the difference between function and class declarations](#what-is-the-difference-between-function-and-class-declarations) |
| 411 | [What is an async function](#what-is-an-async-function) |
| 412 | [How do you prevent promises swallowing errors](#how-do-you-prevent-promises-swallowing-errors) |
| 413 | [What is deno](#what-is-deno) |
| 414 | [How do you make an object iterable in javascript](#how-do-you-make-an-object-iterable-in-javascript) |
| 415 | [What is a Proper Tail Call](#what-is-a-proper-tail-call) |
| 416 | [How do you check an object is a promise or not](#how-do-you-check-an-object-is-a-promise-or-not) |
| 417 | [How to detect if a function is called as constructor](#how-to-detect-if-a-function-is-called-as-constructor) |
| 418 | [What are the differences between arguments object and rest parameter](#what-are-the-differences-between-arguments-object-and-rest-parameter) |
| 419 | [What are the differences between spread operator and rest parameter](#what-are-the-differences-between-spread-operator-and-rest-parameter) |
| 420 | [What are the different kinds of generators](#what-are-the-different-kinds-of-generators) |
| 421 | [What are the built-in iterables](#what-are-the-built-in-iterables) |
| 422 | [What are the differences between for...of and for...in statements](#what-are-the-differences-between-forof-and-forin-statements) |
| 423 | [How do you define instance and non-instance properties](#how-do-you-define-instance-and-non-instance-properties) |
| 424 | [What is the difference between isNaN and Number.isNaN?](#what-is-the-difference-between-isnan-and-numberisnan) |
| 425 | [How to invoke an IIFE without any extra brackets?](#how-to-invoke-an-iife-without-any-extra-brackets) |
| 426 | [Is that possible to use expressions in switch cases?](#is-that-possible-to-use-expressions-in-switch-cases) |
| 427 | [What is the easiest way to ignore promise errors?](#what-is-the-easiest-way-to-ignore-promise-errors) |
| 428 | [How do style the console output using CSS?](#how-do-style-the-console-output-using-css) |
| 429 | [What is nullish coalescing operator (??)?](#what-is-nullish-coalescing-operator-) |
| 430 | [How do you group and nest console output?](#how-do-you-group-and-nest-console-output) |
| 431 | [What is the difference between dense and sparse arrays?](#what-is-the-difference-between-dense-and-sparse-arrays) |
| 432 | [What are the different ways to create sparse arrays?](#what-are-the-different-ways-to-create-sparse-arrays) |
| 433 | [What is the difference between setTimeout, setImmediate and process.nextTick?](#what-is-the-difference-between-settimeout-setimmediate-and-processnexttick) |
| 434 | [How do you reverse an array without modifying original array?](#how-do-you-reverse-an-array-without-modifying-original-array) |
| 435 | [How do you create custom HTML element?](#how-do-you-create-custom-html-element) |
| 436 | [What is global execution context?](#what-is-global-execution-context) |
| 437 | [What is function execution context?](#what-is-function-execution-context) |
| 438 | [What is debouncing?](#what-is-debouncing) |
| 439 | [What is throttling?](#what-is-throttling) |
| 440 | [What is optional chaining?](#what-is-optional-chaining) |
| 441 | [What is an environment record?](#what-is-an-environment-record) |
| 442 | [How to verify if a variable is an array?](#how-to-verify-if-a-variable-is-an-array) |
| 443 | [What is pass by value and pass by reference?](#what-is-pass-by-value-and-pass-by-reference) |
| 444 | [What are the differences between primitives and non-primitives?](#what-are-the-differences-between-primitives-and-non-primitives) |
| 445 | [How do you create your own bind method using either call or apply method?](#how-do-you-create-your-own-bind-method-using-either-call-or-apply-method) |
| 446 | [What are the differences between pure and impure functions?](#what-are-the-differences-between-pure-and-impure-functions) |
| 447 | [What is referential transparency?](#what-is-referential-transparency) |
| 448 | [What are the possible side-effects in javascript?](#what-are-the-possible-side-effects-in-javascript) |
| 449 | [What are compose and pipe functions?](#what-are-compose-and-pipe-functions) |
| 450 | [What is module pattern?](#what-is-module-pattern) |
| 451 | [What is Function Composition?](#what-is-function-composition) |
| 452 | [How to use await outside of async function prior to ES2022?](#how-to-use-await-outside-of-async-function-prior-to-es2022) |
| 453 | [What is the purpose of the this keyword in JavaScript?](#what-is-the-purpose-of-the-this-keyword-in-javascript) |
| 454 | [What are the uses of closures?](#what-are-the-uses-of-closures) |
| 455 | [What are the phases of execution context?](#what-are-the-phases-of-execution-context) |
| 456 | [What are the possible reasons for memory leaks?](#what-are-the-possible-reasons-for-memory-leaks) |
| 457 | [What are the optimization techniques of V8 engine?](#what-are-the-optimization-techniques-of-v8-engine) |
| 458 | [What are the examples of built-in higher order functions?](#what-are-the-examples-of-built-in-higher-order-functions) |
| 459 | [What are the benefits higher order functions?](#what-are-the-benefits-higher-order-functions) |
| 460 | [How do you create polyfills for map, filter and reduce methods?](#how-do-you-create-polyfills-for-map-filter-and-reduce-methods) |
| 461 | [What is the difference between map and forEach functions?](#what-is-the-difference-between-map-and-foreach-functions) |
| 462 | [Give an example of statements affected by automatic semicolon insertion?](#give-an-example-of-statements-affected-by-automatic-semicolon-insertion) |
| 463 | [What are the event phases of a browser?](#what-are-the-event-phases-of-a-browser) |
| 464 | [What are the real world use cases of proxy?](#what-are-the-real-world-use-cases-of-proxy) |
| 465 | [What are hidden classes?](#what-are-hidden-classes) |
| 466 | [What is inline caching?](#what-is-inline-caching) |
| 467 | [What are the different ways to execute external scripts?](#what-are-the-different-ways-to-execute-external-scripts) |
| 468 | [What is Lexical Scope?](#what-is-lexical-scope) |
| 469 | [How to detect system dark mode in javascript?](#how-to-detect-system-dark-mode-in-javascript) |
| 470 | [What is the purpose of requestAnimationFrame method?](#what-is-the-purpose-of-requestanimationframe-method) |
| 471 | [What is the difference between substring and substr methods?](#what-is-the-difference-between-substring-and-substr-methods) |
| 472 | [How to find the number of parameters expected by a function?](#how-to-find-the-number-of-parameters-expected-by-a-function) |
| 473 | [What is globalThis, and what is the importance of it?](#what-is-globalthis-and-what-is-the-importance-of-it) |
| 474 | [What are the array mutation methods?](#what-are-the-array-mutation-methods) |
| 475 | [What is module scope in JavaScript?](#what-is-module-scope-in-javascript) |
| 476 | [What are shadowing and illegal shadowing?](#what-are-shadowing-and-illegal-shadowing) |
| 477 | [Why is it important to remove event listeners after use?](#why-is-it-important-to-remove-event-listeners-after-use) |
| 478 | [What is structuredClone and how is it used for deep copying objects?](#what-is-structuredclone-and-how-is-it-used-for-deep-copying-objects) |
| 479 | [What is the difference between const and Object.freeze](#what-is-the-difference-between-const-and-objectfreeze) |
| 480 | [What is Promise.any and when should it be used?](#what-is-promiseany-and-when-should-it-be-used) |
| 481 | [What is BigInt and how is it different from Number?](#what-is-bigint-and-how-is-it-different-from-number) |
| 482 | [What are private class fields in JavaScript?](#what-are-private-class-fields-in-javascript) |
| 483 | [What is the Array.prototype.at() method and why is it useful?](#what-is-the-arrayprototypeat-method-and-why-is-it-useful) |
| 484 | [What is top-level await in JavaScript modules?](#what-is-top-level-await-in-javascript-modules) |
| 485 | [What are WeakRef and FinalizationRegistry used for?](#what-are-weakref-and-finalizationregistry-used-for) |
| 486 | [What are logical assignment operators?](#what-are-logical-assignment-operators) |
| 487 | [What is the Temporal API and why is it proposed as a replacement for Date?](#what-is-the-temporal-api-and-why-is-it-proposed-as-a-replacement-for-date) |
| 488 | [What is the difference between for loop and forEach](#what-is-the-difference-between-for-loop-and-foreach) |
| 489 | [What are Symbols and what are their use cases?](#what-are-symbols-and-what-are-their-use-cases) |
| 490 | [What is the difference between Object.create() and Object.assign()?](#what-is-the-difference-between-objectcreate-and-objectassign) |
| 491 | [What are generator functions and how do they work?](#what-are-generator-functions-and-how-do-they-work) |
| 492 | [What is the Reflect API and when should you use it?](#what-is-the-reflect-api-and-when-should-you-use-it) |
| 493 | [How does JavaScript handle floating point precision issues?](#how-does-javascript-handle-floating-point-precision-issues) |
| 494 | [What are tagged template literals and their practical uses?](#what-are-tagged-template-literals-and-their-practical-uses) |
| 495 | [What is the difference between Object.keys(), Object.values(), and Object.entries()?](#what-is-the-difference-between-objectkeys-objectvalues-and-objectentries) |
| 496 | [What is the Intl.NumberFormat API and how is it used?](#what-is-the-intlnumberformat-api-and-how-is-it-used) |
| 497 | [How do you implement method chaining in JavaScript?](#how-do-you-implement-method-chaining-in-javascript) |
| 498 | [What are the differences between Map and Object for storing key-value pairs?](#what-are-the-differences-between-map-and-object-for-storing-key-value-pairs) |
| 499 | [What is the purpose of Symbol.iterator and how do you use it?](#what-is-the-purpose-of-symboliterator-and-how-do-you-use-it) |
| 500 | [How does the Intersection Observer API work?](#how-does-the-intersection-observer-api-work) |
| 501 | [What are async iterators and how are they different from regular iterators?](#what-are-async-iterators-and-how-are-they-different-from-regular-iterators) |
| 502 | [What is the purpose of Object.getOwnPropertyDescriptors()?](#what-is-the-purpose-of-objectgetownpropertydescriptors) |
| 503 | [How does Promise.allSettled() differ from Promise.all()?](#how-does-promiseallsettled-differ-from-promiseall) |
| 504 | [What are the performance implications of using try-catch in JavaScript?](#what-are-the-performance-implications-of-using-try-catch-in-javascript) |
| 505 | [What is the AbortController API and how is it used?](#what-is-the-abortcontroller-api-and-how-is-it-used) |
| 506 | [How do you implement a custom error class in JavaScript?](#how-do-you-implement-a-custom-error-class-in-javascript) |
| 507 | [What is the difference between synchronous and asynchronous generators?](#what-is-the-difference-between-synchronous-and-asynchronous-generators) |
| 508 | [What are Proxy traps and what operations can they intercept?](#what-are-proxy-traps-and-what-operations-can-they-intercept) |
| 509 | [How does the Mutation Observer API work?](#how-does-the-mutation-observer-api-work) |
| 510 | [What is tail call optimization and does JavaScript support it?](#what-is-tail-call-optimization-and-does-javascript-support-it) |
| 511 | [What are the different ways to handle circular references in JSON?](#what-are-the-different-ways-to-handle-circular-references-in-json) |
| 512 | [How do you implement a singleton pattern in JavaScript?](#how-do-you-implement-a-singleton-pattern-in-javascript) |
| 513 | [What is the Performance API and how is it used for measuring performance?](#what-is-the-performance-api-and-how-is-it-used-for-measuring-performance) |
| 514 | [What are the differences between SharedArrayBuffer and ArrayBuffer?](#what-are-the-differences-between-sharedarraybuffer-and-arraybuffer) |
| 515 | [How do you prevent prototype pollution attacks in JavaScript?](#how-do-you-prevent-prototype-pollution-attacks-in-javascript) |
| 516 | [What is the Atomics API and when should it be used?](#what-is-the-atomics-api-and-when-should-it-be-used) |
| 517 | [How do you implement a lazy loading pattern for modules?](#how-do-you-implement-a-lazy-loading-pattern-for-modules) |
| 518 | [What are the best practices for optimizing JavaScript bundle size?](#what-are-the-best-practices-for-optimizing-javascript-bundle-size) |
<!-- TOC_END -->

<!-- QUESTIONS_START -->

1. ### What are the possible ways to create objects in JavaScript

    There are many ways to create objects in javascript as mentioned below:

    1. **Object literal syntax:**

       The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

       ```javascript
       var object = {
         name: "Sudheer",
         age: 34,
       };
       ```

       Object literal property values can be of any data type, including array, function, and nested object.

       **Note:** This is one of the easiest ways to create an object and it's most commonly used for creating simple, ad-hoc objects.

    2. **Object constructor:**

       The simplest way to create an empty object is using the `Object` constructor. Currently this approach is not recommended.

       ```javascript
       var object = new Object();
       ```

       The `Object()` is a built-in constructor function so "new" keyword is not required for creating plain objects. The above code snippet can be re-written as:

       ```javascript
       var object = Object();
       ```
       However, `Object()` can be used to either create a plain object or convert a given value into its corresponding object wrapper, whereas `new Object()` is specifically used to explicitly create a new object instance.
       
    3. **Object's create method:**

       The `create` method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects. In other words, this is useful for setting up **prototypal inheritance**. The second argument is optional and it is used to create properties on a newly created object.

       The following code creates a new empty object whose prototype is null.

       ```javascript
       var object = Object.create(null);
       ```

       The following example creates an object along with additional new properties.

       ```javascript
       let vehicle = {
         wheels: "4",
         fuelType: "Gasoline",
         color: "Green",
       };
       let carProps = {
         type: {
           value: "Volkswagen",
         },
         model: {
           value: "Golf",
         },
       };

       var car = Object.create(vehicle, carProps);
       console.log(car);
       ```

    4. **Function constructor:**

       In this approach, create any function and apply the new operator to create object instances. This was the main way to do constructor-based OOP before ES6 classes.

       ```javascript
       function Person(name) {
         this.name = name;
         this.age = 21;
       }
       var object = new Person("Sudheer");
       ```
    5. **Function constructor with prototype:**

       This is similar to function constructor but it uses prototype for their properties and methods. Using prototype means you're sharing methods/properties across instances, which saves memory and improve performance.

       ```javascript
       function Person() {}
       Person.prototype.name = "Sudheer";
       var object = new Person();
       ```

       This is equivalent to creating an instance with `Object.create` method with a function prototype and then calling that function with an instance and parameters as arguments.

       ```javascript
       function func(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
       }

       var instance = new func(1, 2, 3);
       ```

       **(OR)**

       ```javascript
       function func(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
       }
       // Create a new instance using function prototype.
       var newInstance = Object.create(func.prototype);

       // Call the function
       var result = func.call(newInstance, 1, 2, 3);

       // If the result is a non-null object then use it otherwise just use the new instance.
       console.log(result && typeof result === 'object' ? result : newInstance);
       ```

    6. **Object's assign method:**

       The `Object.assign` method is used to copy all the properties from one or more source objects and stores them into a target object. This is mainly used for cloning and merging

       The following code creates a new staff object by copying properties of his working company and the car he owns.

       ```javascript
       const orgObject = { company: "XYZ Corp" };
       const carObject = { name: "Toyota" };
       const staff = Object.assign({}, orgObject, carObject);
       ```

    7. **ES6 Class syntax:**

       ES6 introduces class feature to create objects. This is syntactic sugar over the prototype-based system.

       ```javascript
       class Person {
         constructor(name) {
           this.name = name;
         }
       }

       var object = new Person("Sudheer");
       ```

    8. **Singleton pattern:**

       A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance. This way one can ensure that they don't accidentally create multiple instances.

        ##### Singleton with Closure (Classic JS Pattern)
        ```javascript
        const Singleton = (function () {
        let instance;

        function createInstance() {
          return { name: "Sudheer" };
        }

        return {
          getInstance: function () {
            if (!instance) {
              instance = createInstance();
            }
            return instance;
          }
        };
        })();

        // Usage
        const obj1 = Singleton.getInstance();
        const obj2 = Singleton.getInstance();

        console.log(obj1 === obj2); // true
        ```
         In modern JavaScript applications, singletons are commonly implemented using ES6 modules for their built-in caching behavior, or closures for encapsulated state management.

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is a prototype chain

    The prototype chain is a core concept in JavaScript’s inheritance model. It allows objects to inherit properties and methods from other objects. When you try to access a property or method on an object, JavaScript first looks for it on that object itself. If it’s not found, the engine looks up the object's internal `[[Prototype]]` reference (accessible via `Object.getPrototypeOf(obj)` or the deprecated `__proto__` property) and continues searching up the chain until it finds the property or reaches the end (usually `null`).

    For objects created via constructor functions, the prototype chain starts with the instance, then refers to the constructor’s `.prototype` object, and continues from there. For example:

    ```javascript
    function Person() {}
    const person1 = new Person();

    console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
    ```

    This mechanism allows for property and method sharing among objects, enabling code reuse and a form of inheritance.

    **Summary:**

    *   The prototype chain enables inheritance in JavaScript.
    *   If a property isn’t found on an object, JavaScript looks up its prototype chain.
    *   The prototype of an object instance can be accessed with `Object.getPrototypeOf(obj)` or `__proto__`.
    *   The prototype of a constructor function is available via `Constructor.prototype`.
    *   The chain ends when the prototype is `null`.

    The prototype chain among objects appears as below, 
    
    ![Screenshot](images/prototype_chain.png)

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is the Difference Between `call`, `apply`, and `bind`

  In JavaScript, `call`, `apply`, and `bind` are methods that allow you to control the context (`this` value) in which a function is executed. While their purposes are similar, they differ in how they handle arguments and when the function is invoked.

  ---

  #### `call`

  - **Description:**  
    The `call()` method invokes a function immediately, allowing you to specify the value of `this` and pass arguments individually (comma-separated).

  - **Syntax:**  
    ```js
    func.call(thisArg, arg1, arg2, ...)
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
    invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `apply`

  - **Description:**  
    The `apply()` method is similar to `call()`, but it takes the function arguments as an array (or array-like object) instead of individual arguments.

  - **Syntax:**  
    ```js
    func.apply(thisArg, [argsArray])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
    invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `bind`

  - **Description:**  
    The `bind()` method creates a new function with a specific `this` value and, optionally, preset initial arguments. Unlike `call` and `apply`, `bind` does **not** immediately invoke the function; instead, it returns a new function that you can call later.

  - **Syntax:**  
    ```js
    var boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);

    inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
    inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### Summary

  | Method | Invokes Function Immediately? | How Arguments Are Passed         | Returns      |
  |--------|-------------------------------|----------------------------------|--------------|
  | `call` | Yes                           | Comma-separated list             | Function's result |
  | `apply`| Yes                           | Array or array-like object       | Function's result |
  | `bind` | No                            | (Optional) preset, then rest     | New function      |

  ---

  ## Key Points

  - **`call`** and **`apply`** are almost interchangeable; both invoke the function immediately, but differ in how arguments are passed.
      - _Tip:_ "Call is for Comma-separated, Apply is for Array."
  - **`bind`** does not execute the function immediately. Instead, it creates a new function with the specified `this` value and optional arguments, which can be called later.

  - Use `call` or `apply` when you want to immediately invoke a function with a specific `this` context. Use `bind` when you want to create a new function with a specific `this` context to be invoked later.
  
  ---

  **[⬆ Back to Top](#table-of-contents)**

4. ### What is JSON and its common operations

    **JSON (JavaScript Object Notation)** is a lightweight, text-based data format that uses JavaScript object syntax for structuring data. It was popularized by Douglas Crockford and is widely used for transmitting data between a server and a client in web applications. JSON files typically have a `.json` extension and use the MIME type `application/json`. 

    #### Common Operations with JSON

    1. **Parsing**: Transforming a JSON-formatted string into a native JavaScript object.
      ```js
      const obj = JSON.parse(jsonString);
      ```
      - Example:  
        ```js
        const jsonString = '{"name":"John","age":30}';
        const obj = JSON.parse(jsonString);  // { name: "John", age: 30 }
        ```

    2. **Stringification**: Converting a JavaScript object into a JSON-formatted string, commonly used for data transmission or storage.
      ```js
      const jsonString = JSON.stringify(object);
      ```
      - Example:  
        ```js
        const obj = { name: "Jane", age: 25 };
        const jsonString = JSON.stringify(obj);  // '{"name":"Jane","age":25}'
        ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the array slice method

    The `slice()` method in JavaScript is used to extract a section of an array, returning a new array containing the selected elements. It does not modify the original array. The method takes two arguments:

    - **start**: The index at which extraction begins (inclusive).
    - **end** (optional): The index before which to end extraction (exclusive). If omitted, extraction continues to the end of the array.

    You can also use negative indices, which count from the end of the array.

    #### Examples:

    ```js
    let arrayIntegers = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegers.slice(0, 2);    // [1, 2]
    let arrayIntegers2 = arrayIntegers.slice(2, 3);    // [3]
    let arrayIntegers3 = arrayIntegers.slice(4);       // [5]
    let arrayIntegers4 = arrayIntegers.slice(-3, -1);  // [3, 4]
    ```

    **Note:**  
    The `slice()` method does **not** mutate (change) the original array; instead, it returns a new array containing the extracted elements.

    **[⬆ Back to Top](#table-of-contents)**

6. ### What is the purpose of the array splice method

    The `splice()` method in JavaScript is used to add, remove, or replace elements within an array. Unlike `slice()`, which creates a shallow copy and does not alter the original array, `splice()` **modifies the original array in place** and returns an array containing the removed elements.

    #### Syntax

    ```javascript
    array.splice(start, deleteCount, item1, item2, ...)
    ```
    - **start:** The index at which to start changing the array.
    - **deleteCount:** (Optional) The number of elements to remove from the array. If omitted, all elements from the start index to the end of the array will be removed.
    - **item1, item2, ...:** (Optional) Elements to add to the array, starting at the start position.

    #### Examples

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    // Remove the first two elements
    let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); 
    // arrayIntegers1: [1, 2]
    // arrayIntegersOriginal1 (after): [3, 4, 5]

    // Remove all elements from index 3 onwards
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3);     
    // arrayIntegers2: [4, 5]
    // arrayIntegersOriginal2 (after): [1, 2, 3]

    // Remove 1 element at index 3, then insert "a", "b", "c" at that position
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
    // arrayIntegers3: [4]
    // arrayIntegersOriginal3 (after): [1, 2, 3, "a", "b", "c", 5]
    ```

    **Note:**  
    - The `splice()` method **modifies the original array**.
    - It returns an array containing the elements that were removed (if any).
    - You can use it both to remove and insert elements in a single operation.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice
   
    Here are the key differences between `slice()` and `splice()` methods in JavaScript arrays:

    | `slice()`                                         | `splice()`                                          |
    | ------------------------------------------------- | --------------------------------------------------- |
    | Does **not** modify the original array (immutable) | Modifies the original array (mutable)               |
    | Returns a **shallow copy** (subset) of selected elements | Returns an array of the **removed** elements           |
    | Used to **extract** elements from an array         | Used to **add**, **remove**, or **replace** elements in an array |
    | Syntax: `array.slice(start, end)`                  | Syntax: `array.splice(start, deleteCount, ...items)`             |

    **Summary:**  
    - Use `slice()` when you want to copy or extract elements without altering the original array.
    - Use `splice()` when you need to add, remove, or replace elements and want to change the original array.

    **[⬆ Back to Top](#table-of-contents)**

8. ### How do you compare Object and Map

    **Objects** and **Maps** both allow you to associate keys with values, retrieve those values, delete keys, and check if a key exists. Historically, Objects have been used as Maps, but there are several key differences that make `Map` a better choice in certain scenarios:

    | Feature                  | Object                                              | Map                                                      |
    |--------------------------|-----------------------------------------------------|----------------------------------------------------------|
    | **Key Types**            | Only strings and symbols are valid keys             | Any value can be used as a key (objects, functions, primitives) |
    | **Key Order**            | Keys are unordered (in practice, insertion order is mostly preserved for string keys, but not guaranteed) | Keys are ordered by insertion; iteration follows insertion order |
    | **Size Property**        | No built-in way to get the number of keys; must use `Object.keys(obj).length` | Use the `.size` property for the number of entries        |
    | **Iterability**          | Not directly iterable; must use `Object.keys`, `Object.values`, or `Object.entries` | Directly iterable with `for...of`, `.keys()`, `.values()`, `.entries()` |
    | **Prototype**            | Has a prototype chain; may have default properties that can collide with custom keys (can be avoided with `Object.create(null)`) | Does not have a prototype, so there are no default keys   |
    | **Performance**          | May be less efficient for frequent additions/removals | Optimized for frequent additions and deletions            |
    | **Serialization**        | Can be easily serialized to JSON                    | Cannot be directly serialized to JSON                     |

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is the difference between == and === operators
    JavaScript provides two types of equality operators:

    - **Loose equality (`==`, `!=`)**: Performs type conversion if the types differ, comparing values after converting them to a common type.
    - **Strict equality (`===`, `!==`)**: Compares both value and type, without any type conversion.

    #### Strict Equality (`===`)
    - Two strings are strictly equal if they have exactly the same sequence of characters and length.
    - Two numbers are strictly equal if they have the same numeric value.
      - **Special cases:**
        - `NaN === NaN` is `false`
        - `+0 === -0` is `true`
    - Two booleans are strictly equal if both are `true` or both are `false`.
    - Two objects are strictly equal if they refer to the **same object** in memory.
    - `null` and `undefined` are **not** strictly equal.

    #### Loose Equality (`==`)
    - Converts operands to the same type before making the comparison.
    - `null == undefined` is `true`.
    - `"1" == 1` is `true` because the string is converted to a number.
    - `0 == false` is `true` because `false` is converted to `0`.

    #### Examples:

    ```javascript
    0 == false            // true      (loose equality, type coercion)
    0 === false           // false     (strict equality, different types)
    1 == "1"              // true      (string converted to number)
    1 === "1"             // false     (different types)
    null == undefined     // true      (special case)
    null === undefined    // false     (different types)
    '0' == false          // true      ('0' is converted to 0)
    '0' === false         // false     (different types)
    NaN == NaN            // false     (NaN is never equal to itself)
    NaN === NaN           // false
    [] == []              // false     (different array objects)
    [] === []             // false
    {} == {}              // false     (different object references)
    {} === {}             // false
    ```
    **[⬆ Back to Top](#table-of-contents)**

10. ### What are lambda expressions or arrow functions

    **Arrow functions** (also known as "lambda expressions") provide a concise syntax for writing function expressions in JavaScript. Introduced in ES6, arrow functions are often shorter and more readable, especially for simple operations or callbacks.

    #### Key Features:
    - Arrow functions do **not** have their own `this`, `arguments`, `super`, or `new.target` bindings. They inherit these from their surrounding (lexical) context.
    - They are best suited for non-method functions, such as callbacks or simple computations.
    - Arrow functions **cannot** be used as constructors and do not have a `prototype` property.
    - They also cannot be used with `new`, `yield`, or as generator functions.

    #### Syntax Examples:

    ```javascript
    const arrowFunc1 = (a, b) => a + b;    // Multiple parameters, returns a + b
    const arrowFunc2 = a => a * 10;        // Single parameter (parentheses optional), returns a * 10
    const arrowFunc3 = () => {};           // No parameters, returns undefined
    const arrowFunc4 = (a, b) => {
      // Multiple statements require curly braces and explicit return
      const sum = a + b;
      return sum * 2;
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

11. ### What is a first class function

    In JavaScript, **first-class functions(first-class citizens)** mean that functions are treated like any other variable. That means:

    1. You can assign a function to a variable.
    2. You can pass a function as an argument to another function.
    3. You can return a function from another function.

    This capability enables powerful patterns like callbacks, higher-order functions, event handling, and functional programming in JavaScript.
    
    For example, the handler function below is assigned to a variable and then passed as an argument to the `addEventListener` method.

    ```javascript
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
    ```

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is a first order function

    A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value. i.e,  It's a regular function that works with primitive or non-function values.

    ```javascript
    const firstOrder = () => console.log("I am a first order function!");
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is a higher order function

    A higher-order function is a function that either accepts another function as an argument, returns a function as its result, or both. This concept is a core part of JavaScript's functional programming capabilities and is widely used for creating modular, reusable, and expressive code.

    The syntactic structure of higher order function will be explained with an example as follows,

      ```javascript
      // First-order function (does not accept or return another function)
      const firstOrderFunc = () => 
        console.log("Hello, I am a first-order function");

      // Higher-order function (accepts a function as an argument)
      const higherOrder = (callback) => callback();

      // Passing the first-order function to the higher-order function
      higherOrder(firstOrderFunc);
      ```

    In this example:

    1. `firstOrderFunc` is a regular (first-order) function.

    2. `higherOrder` is a higher-order function because it takes another function as an argument.

    3. `firstOrderFunc` is also called a **callback function** because it is passed to and executed by another function.

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is a unary function

    A unary function (also known as a **monadic** function) is a function that **accepts exactly one argument**. The term "unary" simply refers to the function's arity—the number of arguments it takes.

    Let us take an example of unary function,

    ```javascript
    const unaryFunction = (a) => console.log(a + 10); // This will add 10 to the input and log the result
    unaryFunction(5); // Output: 15
    ```
    In this example:

    - `unaryFunction` takes a single parameter `a`, making it a unary function.
    - It performs a simple operation: adding 10 to the input and printing the result.

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is the currying function
    
    **Currying** is the process of transforming a function with **multiple arguments** into a sequence of **nested functions**, each accepting **only one argument** at a time.

    This concept is named after mathematician **Haskell Curry**, and is commonly used in functional programming to enhance modularity and reuse.


    ## Before Currying (Normal n-ary Function)

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;

    console.log(multiArgFunction(1, 2, 3)); // Output: 6
    ```
    This is a standard function that takes three arguments at once.

    ## After Currying (Unary Function Chain)
    ```javascript
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

    console.log(curryUnaryFunction(1));       // Returns: function (b) => ...
    console.log(curryUnaryFunction(1)(2));    // Returns: function (c) => ...
    console.log(curryUnaryFunction(1)(2)(3)); // Output: 6

    ```
    Each function in the chain accepts one argument and returns the next function, until all arguments are provided and the final result is computed.

    ## Benefits of Currying
      - Improves code reusability
      → You can partially apply functions with known arguments.

      - Enhances functional composition
      → Easier to compose small, pure functions.

      - Encourages clean, modular code
      → You can split logic into smaller single-responsibility functions.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is a pure function

    A **pure function** is a function whose output depends only on its input arguments and produces no side effects. This means that given the same inputs, a pure function will always return the same output, and it does not modify any external state or data.

    Let's take an example to see the difference between pure and impure functions,

    #### Example: Pure vs. Impure Functions

    ```javascript
    // Impure Function
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);

    // Pure Function
    const pureAddNumber = (number) => (inputArray) =>
      inputArray.concat([number]);

    // Usage
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray);        // returns [6]

    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray);                   // remains [6]
    ```
    - `impureAddNumber` changes the external variable numberArray and returns the new length of the array, making it impure.
    - `pureAddNumber` creates a new array with the added number and does not modify the original array, making it pure.

17. ### What are the benefits of pure functions
    Some of the major benefits of pure functions are listed below,

    - **Easier testing:** Since output depends only on input, pure functions are simple to test.
    - **Predictability:** No hidden side effects make behavior easier to reason about.
    - **Immutability:** Pure functions align with ES6 best practices, such as preferring const over let, supporting safer and more maintainable code.
    - **No side effects:** Reduces bugs related to shared state or mutation.

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the purpose of the let keyword

    The `let` keyword in JavaScript is used to declare a **block-scoped local variable**. This means that variables declared with `let` are only accessible within the block, statement, or expression where they are defined. This is a significant improvement over the older `var` keyword, which is function-scoped (or globally-scoped if declared outside a function), and does not respect block-level scoping.

    #### Key Features of `let`:
    - **Block Scope:** The variable exists only within the nearest enclosing block (e.g., inside an `{}` pair).
    - **No Hoisting Issues:** While `let` declarations are hoisted, they are not initialized until the code defining them is executed. Accessing them before declaration results in a ReferenceError (temporal dead zone).
    - **No Redeclaration:** The same variable cannot be declared twice in the same scope with `let`.

    #### Example:

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // Output: 31 (block-scoped variable inside if-block)
    }
    console.log(counter); // Output: 30 (outer variable, unaffected by inner block)
    ```

    In this example, the `counter` inside the `if` block is a separate variable from the one outside. The `let` keyword ensures that both have their own distinct scope.

    In summary, you need to use `let` when you want variables to be limited to the block in which they are defined, preventing accidental overwrites and bugs related to variable scope.

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is the difference between let and var

    You can list out the differences in a tabular format

    | var                                                            | let                                           |
    | -------------------------------------------------------------- | --------------------------------------------- |
    | It has been available from the beginning of JavaScript         | Introduced as part of ES6                     |
    | It has function scope                                          | It has block scope                            |
    | Variable declaration will be hoisted, initialized as undefined | Hoisted but not initialized                   |
    | It is possible to re-declare the variable in the same scope    | It is not possible to re-declare the variable |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
      if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
      }
      console.log(salary); //10000 (accessible due to function scope)
      console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");
    ```

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the reason to choose the name let as a keyword

    The keyword `let` was chosen because it originates from mathematical notation, where "let" is used to introduce new variables (for example, "let x = 5"). This term was adopted by several early programming languages such as Scheme and BASIC, establishing a tradition in computer science. JavaScript follows this convention by using `let` to declare variables with block scope, providing a modern alternative to `var`. The choice helps make the language more familiar to programmers coming from other languages and aligns with the mathematical practice of variable assignment.

    **[⬆ Back to Top](#table-of-contents)**

21. ### How do you redeclare variables in a switch block without an error

    When you try to redeclare variables using `let` or `const` in multiple `case` clauses of a `switch` statement, you will get a SyntaxError. This happens because, in JavaScript, all `case` clauses within a `switch` statement share the same block scope. For example:
    
    ```javascript
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;
      case 1:
        let name; // SyntaxError: Identifier 'name' has already been declared
        break;
    }
    ```
    
    To avoid this error, you can create a new block scope within each `case` clause by wrapping the code in curly braces `{}`. This way, each `let` or `const` declaration is scoped only to that block, and redeclaration errors are avoided:
    
    ```javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        // code for case 0
        break;
      }
      case 1: {
        let name; // No SyntaxError
        // code for case 1
        break;
      }
    }
    ```
    
    That means, to safely redeclare variables in different cases of a switch statement, wrap each case’s code in its own block using curly braces. This ensures each variable declaration is scoped to its specific case block.
    
    **[⬆ Back to Top](#table-of-contents)**

22. ### What is the Temporal Dead Zone

    The **Temporal Dead Zone (TDZ)** refers to the period between the start of a block and the point where a variable declared with `let` or `const` is initialized. During this time, the variable exists in scope but **cannot be accessed**, and attempting to do so results in a `ReferenceError`.
    
    This behavior is part of **JavaScript's ES6 (ECMAScript 2015)** specification and applies **only to variables declared with `let` and `const`**, not `var`. Variables declared with `var` are **hoisted** and initialized with `undefined`, so accessing them before the declaration does not throw an error, though it can lead to unexpected results.
    
    #### Example
    
    ```javascript
    function someMethod() {
        console.log(counter1); // Output: undefined (due to var hoisting)
        console.log(counter2); // Throws ReferenceError (TDZ for let)
    
        var counter1 = 1;
        let counter2 = 2;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is an IIFE (Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function () {
      // logic here
    })();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error as below,

    ```javascript
    (function () {
      var message = "IIFE";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ```

    **[⬆ Back to Top](#table-of-contents)**

24. ### How do you decode or encode a URL in JavaScript?

    `encodeURI()` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string.
    `decodeURI()` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

    **Note:** If you want to encode characters such as `/ ? : @ & = + $ #` then you need to use `encodeURIComponent()`.

    ```javascript
    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What is memoization

    Memoization is a functional programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizeAddition = () => {
      let cache = {};
      return (value) => {
        if (value in cache) {
          console.log("Fetching from cache");
          return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
          console.log("Calculating result");
          let result = value + 20;
          cache[value] = result;
          return result;
        }
      };
    };
    // returned function from memoizeAddition
    const addition = memoizeAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### What is Hoisting

 
Hoisting is JavaScript's default behavior where **variable and function declarations** are moved to the top of their scope before code execution. This means you can access certain variables and functions even before they are defined in the code.


Example of variable hoisting:

```js
console.log(message); // Output: undefined
var message = "The variable has been hoisted";
```

```js
var message;
console.log(message); // undefined
message = "The variable has been hoisted";
```

Example of function hoisting:

```js
message("Good morning"); // Output: Good morning

function message(name) {
  console.log(name);
}
```

Because of hoisting, functions can be used before they are declared.

    **[⬆ Back to Top](#table-of-contents)**

27. ### What are classes in ES6

    In ES6, JavaScript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ```javascript
    function Bike(model, color) {
      this.model = model;
      this.color = color;
    }

    Bike.prototype.getDetails = function () {
      return this.model + " bike has" + this.color + " color";
    };
    ```

    Whereas ES6 classes can be defined as an alternative

    ```javascript
    class Bike {
      constructor(color, model) {
        this.color = color;
        this.model = model;
      }

      getDetails() {
        return this.model + " bike has" + this.color + " color";
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

28. ### What are closures

    A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. The closure has three scope chains.

    1. Own scope where variables defined between its curly brackets
    2. Outer function's variables
    3. Global variables

    Let's take an example of closure concept,

    ```javascript
    function Welcome(name) {
      var greetingInfo = function (message) {
        console.log(message + " " + name);
      };
      return greetingInfo;
    }
    var myFunction = Welcome("John");
    myFunction("Welcome "); //Output: Welcome John
    myFunction("Hello Mr."); //output: Hello Mr. John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

    **[⬆ Back to Top](#table-of-contents)**

29. ### What are modules

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

    **[⬆ Back to Top](#table-of-contents)**

30. ### Why do you need modules

    Below are the list of benefits using modules in javascript ecosystem

    1. Maintainability
    2. Reusability
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

31. ### What is scope in javascript

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

    **[⬆ Back to Top](#table-of-contents)**

32. ### What is a service worker

    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

    **[⬆ Back to Top](#table-of-contents)**

33. ### How do you manipulate DOM using a service worker

    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.

    **[⬆ Back to Top](#table-of-contents)**

34. ### How do you reuse information across service worker restarts

    The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What is IndexedDB

    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

    **[⬆ Back to Top](#table-of-contents)**

36. ### What is web storage

    Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

    1. **Local storage:** It stores data for current origin with no expiration date.
    2. **Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

    **[⬆ Back to Top](#table-of-contents)**

37. ### What is a post message

    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).

    **[⬆ Back to Top](#table-of-contents)**

38. ### What is a Cookie

    A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
    For example, you can create a cookie named username as below,

    ```javascript
    document.cookie = "username=John";
    ```

    ![Screenshot](images/cookie.png)

    **[⬆ Back to Top](#table-of-contents)**

39. ### Why do you need a Cookie

    Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

    1. When a user visits a web page, the user profile can be stored in a cookie.
    2. Next time the user visits the page, the cookie remembers the user profile.

    **[⬆ Back to Top](#table-of-contents)**

40. ### What are the options in a cookie

    There are few below options available for a cookie,

    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

    ```javascript
    document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
    ```

    2. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

    ```javascript
    document.cookie = "username=John; path=/services";
    ```

    **[⬆ Back to Top](#table-of-contents)**

41. ### How do you delete a cookie

    You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.

    ```javascript
    document.cookie =
      "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
    ```

    **Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.

    **[⬆ Back to Top](#table-of-contents)**

42. ### What are the differences between cookie, local storage and session storage

    Below are some of the differences between cookie, local storage and session storage,

    | Feature                           | Cookie                                                                                                              | Local storage         | Session storage     |
    | --------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- |
    | Accessed on client or server side | Both server-side & client-side. The `set-cookie` HTTP response header is used by server inorder to send it to user. | client-side only      | client-side only    |
    | Expiry                            | Manually configured using Expires option                                                                            | Forever until deleted | until tab is closed |
    | SSL support                       | Supported                                                                                                           | Not supported         | Not supported       |
    | Maximum data size                 | 4KB                                                                                                                 | 5 MB                  | 5MB                 |
    | Accessible from                   | Any window                                                                                                          | Any window            | Same tab            |
    | Sent with requests                | Yes                                                                                                                 | No                    | No                  |

    **[⬆ Back to Top](#table-of-contents)**

43. ### What is the main difference between localStorage and sessionStorage

    LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

    **[⬆ Back to Top](#table-of-contents)**

44. ### How do you access web storage

    The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).
    For example, you can read and write on local storage objects as below

    ```javascript
    localStorage.setItem("logo", document.getElementById("logo").value);
    localStorage.getItem("logo");
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### What are the methods available on session storage

    The session storage provided methods for reading, writing and clearing the session data

    ```javascript
    // Save data to sessionStorage
    sessionStorage.setItem("key", "value");

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem("key");

    // Remove saved data from sessionStorage
    sessionStorage.removeItem("key");

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ```

    **[⬆ Back to Top](#table-of-contents)**

46. ### What is a storage event and its event handler

    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below

    ```javascript
    window.onstorage = functionRef;
    ```

    Let's take the example usage of onstorage event handler which logs the storage key and it's values

    ```javascript
    window.onstorage = function (e) {
      console.log(
        "The " +
          e.key +
          " key has been changed from " +
          e.oldValue +
          " to " +
          e.newValue +
          "."
      );
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

47. ### Why do you need web storage

    Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

    **[⬆ Back to Top](#table-of-contents)**

48. ### How do you check web storage browser support

    You need to check browser support for localStorage and sessionStorage before using web storage,

    ```javascript
    if (typeof Storage !== "undefined") {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

49. ### How do you check web workers browser support

    You need to check browser support for web workers before using it

    ```javascript
    if (typeof Worker !== "undefined") {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

50. ### Give an example of a web worker

    You need to follow below steps to start using web workers for counting example

    1. Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js

    ```javascript
    let i = 0;

    function timedCount() {
      i = i + 1;
      postMessage(i);
      setTimeout("timedCount()", 500);
    }

    timedCount();
    ```

    Here postMessage() method is used to post a message back to the HTML page

    2. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js

    ```javascript
    if (typeof w == "undefined") {
      w = new Worker("counter.js");
    }
    ```

    and we can receive messages from web worker

    ```javascript
    w.onmessage = function (event) {
      document.getElementById("message").innerHTML = event.data;
    };
    ```

    3. Terminate a Web Worker:
       Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.

    ```javascript
    w.terminate();
    ```

    4. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code

    ```javascript
    w = undefined;
    ```

    **[⬆ Back to Top](#table-of-contents)**

51. ### What are the restrictions of web workers on DOM

    WebWorkers don't have access to below javascript objects since they are defined in an external files

    1. Window object
    2. Document object
    3. Parent object

    **[⬆ Back to Top](#table-of-contents)**

52. ### What is a promise
    A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may not be available yet but will be resolved in the future.

    A Promise can be in one of **three states**:
    - `pending`: Initial state, neither fulfilled nor rejected.
    - `fulfilled`: The operation completed successfully.
    - `rejected`: The operation failed (e.g., due to a network error).


    #### Promise Syntax

    ```javascript
    const promise = new Promise(function (resolve, reject) {
      // Perform async operation
    });
    ```
    #### Example: Creating and Using a Promise
    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I'm a Promise!");
      }, 5000);
    });

    promise
      .then((value) => console.log(value)) // Logs after 5 seconds: "I'm a Promise!"
      .catch((error) => console.error(error))  // Handles any rejection
      .finally(() => console.log("Done"));     // Runs regardless of success or failure
    ```
    In the above example:

    *   A `Promise` is created to handle an asynchronous operation with `resolve` and `reject` callbacks.
    *   The `setTimeout` resolves the promise with a value after 5 seconds.
    *   `.then()`, `.catch()`, and `.finally()` are used to handle success, errors, and cleanup respectively.

    The action flow of a promise will be as below,

    ![Screenshot](images/promises.png)

    **[⬆ Back to Top](#table-of-contents)**

53. ### Why do you need a promise
    Promises are **used to handle asynchronous operations**, especially in languages like JavaScript, which often work with non-blocking operations such as network requests, file I/O, and timers. When an operation is asynchronous, it doesn't immediately return a result; instead, it works in the background and provides the result later. Handling this in a clean, organized way can be difficult without a structured approach.

    Promises are used to:

    1.  **Handle asynchronous operations**.
    2.  **Provide a cleaner alternative to callbacks**.
    3.  **Avoid callback hell**.
    4.  **Make code more readable and maintainable**.

    **[⬆ Back to Top](#table-of-contents)**

54. ### Explain the three states of promise

    Promises have three states:

    1. **Pending:** This is an initial state of the Promise before an operation begins
    2. **Fulfilled:** This state indicates that the specified operation was completed.
    3. **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

    **[⬆ Back to Top](#table-of-contents)**

55. ### What is a callback function

    A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
    Let's take a simple example of how to use callback function

    ```javascript
    function callbackFunction(name) {
      console.log("Hello " + name);
    }

    function outerFunction(callback) {
      let name = prompt("Please enter your name.");
      callback(name);
    }

    outerFunction(callbackFunction);
    ```

    **[⬆ Back to Top](#table-of-contents)**

56. ### Why do we need callbacks

    The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response, javascript will keep executing while listening for other events.
    Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

    ```javascript
    function firstFunction() {
      // Simulate a code delay
      setTimeout(function () {
        console.log("First function called");
      }, 1000);
    }
    function secondFunction() {
      console.log("Second function called");
    }
    firstFunction();
    secondFunction();

    // Output:
    // Second function called
    // First function called
    ```

    As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

    **[⬆ Back to Top](#table-of-contents)**

57. ### What is a callback hell

    Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

    ```javascript
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

58. ### What are server-sent events

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter/X updates, stock price updates, news feeds etc.

    **[⬆ Back to Top](#table-of-contents)**

59. ### How do you receive server-sent event notifications

    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,

    ```javascript
    if (typeof EventSource !== "undefined") {
      var source = new EventSource("sse_generator.js");
      source.onmessage = function (event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
      };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

60. ### How do you check browser support for server-sent events

    You can perform browser support for server-sent events before using it as below,

    ```javascript
    if (typeof EventSource !== "undefined") {
      // Server-sent events supported. Let's have some code here!
    } else {
      // No server-sent events supported
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

61. ### What are the events available for server sent events

    Below are the list of events available for server sent events
    | Event | Description |
    |---- | ---------
    | onopen | It is used when a connection to the server is opened |
    | onmessage | This event is used when a message is received |
    | onerror | It happens when an error occurs|

    **[⬆ Back to Top](#table-of-contents)**

62. ### What are the main rules of promise

    A promise must follow a specific set of rules:

    1. A promise is an object that supplies a standard-compliant `.then()` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.

    **[⬆ Back to Top](#table-of-contents)**

63. ### What is callback in callback

    You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks. Beware, too many levels of nesting lead to [Callback hell](https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-a-callback-hell)

    ```javascript
    loadScript("/script1.js", function (script) {
      console.log("first script is loaded");

      loadScript("/script2.js", function (script) {
        console.log("second script is loaded");

        loadScript("/script3.js", function (script) {
          console.log("third script is loaded");
          // after all scripts are loaded
        });
      });
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

64. ### What is promise chaining

    The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,

    ```javascript
    new Promise(function (resolve, reject) {
      setTimeout(() => resolve(1), 1000);
    })
      .then(function (result) {
        console.log(result); // 1
        return result * 2;
      })
      .then(function (result) {
        console.log(result); // 2
        return result * 3;
      })
      .then(function (result) {
        console.log(result); // 6
        return result * 4;
      });
    ```

    In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

    1. The initial promise resolves in 1 second,
    2. After that `.then` handler is called by logging the result(1) and then return a promise with the value of result \* 2.
    3. After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result \* 3.
    4. Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result \* 4.

    **[⬆ Back to Top](#table-of-contents)**

65. ### What is promise.all

    `Promise.all()` is a built-in JavaScript method used to handle multiple asynchronous operations together. It accepts an iterable of promises (usually an array) and returns a single promise that resolves only when all the input promises have successfully resolved.

    If any one of the promises rejects, the whole `Promise.all()` call rejects immediately and the error is passed to the `.catch()` block. The result array contains values in the same order as the input promises, even if they finish at different times.

    ```javascript
    const fetchUser = () => Promise.resolve({ id: 1, name: "John" });
    const fetchOrders = () =>
      new Promise((resolve) => setTimeout(() => resolve([101, 102]), 200));
    const fetchProfile = () => Promise.resolve("active");

    Promise.all([fetchUser(), fetchOrders(), fetchProfile()])
      .then(([user, orders, status]) => {
        console.log(user); // { id: 1, name: 'John' }
        console.log(orders); // [101, 102]
        console.log(status); // 'active'
      })
      .catch((error) => {
        console.log("One of the requests failed:", error);
      });
    ```

    Let's consider a case where one promise rejects:

    ```javascript
    Promise.all([
      Promise.resolve("A"),
      Promise.reject(new Error("Request failed")),
      Promise.resolve("C"),
    ])
      .then((values) => console.log(values))
      .catch((error) => console.log(error.message)); // Request failed
    ```

    **Key points:**

    1. It waits for all promises to resolve.
    2. It rejects as soon as any promise fails.
    3. The output order matches the input order, not the completion order.
    4. Non-promise values are treated as resolved values automatically.

    `Promise.all()` is useful when you need to run multiple independent async tasks concurrently and continue only after all of them are done, such as fetching multiple API endpoints together.

    **[⬆ Back to Top](#table-of-contents)**

66. ### Does Promise.all() cancel the other Promises?

    No. `Promise.all()` does not cancel the other promises. It only waits for all of them to finish, and if any one rejects, the overall `Promise.all()` call rejects immediately.

    A JavaScript promise does not have a built-in cancel API. Once a promise starts, it keeps running unless the underlying async operation supports cancellation on its own. For example, `fetch()` supports cancellation using `AbortController`.

    ```javascript
    const controller = new AbortController();
    const signal = controller.signal;

    const requestA = fetch("/api/a", { signal });
    const requestB = Promise.reject(new Error("Server error"));
    const requestC = fetch("/api/c", { signal });

    Promise.all([requestA, requestB, requestC])
      .then((results) => console.log(results))
      .catch((error) => {
        console.log("Promise.all rejected:", error.message);
        controller.abort(); // Cancels the fetch requests still in progress
      });
    ```

    In the example above, if `requestB` rejects, `Promise.all()` rejects, but `requestA` and `requestC` are not automatically canceled. They continue unless you explicitly abort them using the underlying API or custom logic.

    **How to cancel async work:**

    1. Use an API that supports cancellation, such as `fetch()` with `AbortController`.
    2. For custom promises, you can add a `cancel()` method or a flag to stop work internally.
    3. If the work is not cancelable, the promise cannot be truly canceled from outside.

    **Note:** `Promise.all()` is about aggregation, not cancellation. It waits for all promises to settle, but it does not stop the other async operations by itself.

    **[⬆ Back to Top](#table-of-contents)**

### What is the difference between `return` and `return await` in async functions

    In an `async` function, `return value` simply returns the value or promise. If the value is a rejected promise, the rejection is not caught by a surrounding `try/catch` unless you `await` it first.

    `return await value` pauses the function until the promise settles, so a `try/catch` around it can handle errors properly.

    ```javascript
    async function withoutAwait() {
      try {
        return Promise.reject(new Error("Something failed"));
      } catch (error) {
        console.log("This will not run");
        return "fallback";
      }
    }

    async function withAwait() {
      try {
        return await Promise.reject(new Error("Something failed"));
      } catch (error) {
        console.log("Caught inside the function:", error.message);
        return "fallback";
      }
    }

    withoutAwait().catch((err) => console.log("outside catch:", err.message));
    withAwait().then((value) => console.log("withAwait result:", value));
    ```

    Output:

    ```javascript
    outside catch: Something failed
    Caught inside the function: Something failed
    withAwait result: fallback
    ```

    In short:

    - `return promise` returns the promise without waiting for it.
    - `return await promise` waits for the promise and allows the surrounding `try/catch` to catch errors.

    `return await` is especially useful when you want to clean up or handle the error inside the same async function before it exits.

    **[⬆ Back to Top](#table-of-contents)**

67. ### What is the purpose of the race method in promise

    Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first

    ```javascript
    var promise1 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, "one");
    });
    var promise2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, "two");
    });

    Promise.race([promise1, promise2]).then(function (value) {
      console.log(value); // "two" // Both promises will resolve, but promise2 is faster
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

68. ### What is a strict mode in javascript

    JavaScript’s "use strict" directive is used to opt into a stricter parsing and error-handling mode for your scripts or functions. It helps catch common bugs, makes your code more secure, and prepares it for future versions of JavaScript.

    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict";` instructs the browser to use the javascript code in the Strict mode. This also enables block-scoped variables.

    **[⬆ Back to Top](#table-of-contents)**

69. ### Why do you need strict mode

    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

    **[⬆ Back to Top](#table-of-contents)**

70. ### How do you declare strict mode

    The strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    If declared at the beginning of a script, it has global scope.

    ```javascript
    "use strict";
    x = 3.14; // This will cause an error because x is not declared
    ```

    and if you declare inside a function, it has local scope

    ```javascript
    x = 3.14; // This will not cause an error.
    myFunction();

    function myFunction() {
      "use strict";
      y = 3.14; // This will cause an error
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

71. ### What is the purpose of double exclamation

    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, it will be true.
    For example, you can test IE version using this expression as below,

    ```javascript
    let isIE8 = false;
    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ```

    If you don't use this expression then it returns the original value.

    ```javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null
    ```

    **Note:** The expression !! is not an operator, but it is just twice of ! operator.

    **[⬆ Back to Top](#table-of-contents)**

72. ### What is the purpose of the delete operator

    The delete operator is used to delete the property as well as its value.

    ```javascript
    var user = { firstName: "John", lastName: "Doe", age: 20 };
    delete user.age;

    console.log(user); // {firstName: "John", lastName:"Doe"}
    ```

    **[⬆ Back to Top](#table-of-contents)**

73. ### What is typeof operator

    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

    ```javascript
    typeof "John Abraham"; // Returns "string"
    typeof (1 + 2); // Returns "number"
    typeof [1, 2, 3]; // Returns "object" because all arrays are also objects
    ```

    **[⬆ Back to Top](#table-of-contents)**

74. ### What is undefined property

    The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.

    ```javascript
    var user; // Value is undefined, type is undefined
    console.log(typeof user); //undefined
    ```

    Any variable can be emptied by setting the value to undefined.

    ```javascript
    user = undefined;
    ```

    **[⬆ Back to Top](#table-of-contents)**

75. ### What is null value

    The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object.
    You can empty the variable by setting the value to null.

    ```javascript
    var user = null;
    console.log(typeof user); //object
    ```

    **[⬆ Back to Top](#table-of-contents)**

76. ### What is the difference between null and undefined

    Below are the main differences between null and undefined,

    | Null                                                                                            | Undefined                                                                                               |
    | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object                                                                          | Type of undefined is undefined                                                                          |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
    | Indicates the absence of a value for a variable                                                 | Indicates absence of variable itself                                                                    |
    | Converted to zero (0) while performing primitive operations                                     | Converted to NaN while performing primitive operations                                                  |

    **[⬆ Back to Top](#table-of-contents)**

77. ### What is eval

    The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

    ```javascript
    console.log(eval("1 + 2")); //  3
    ```

    **[⬆ Back to Top](#table-of-contents)**

78. ### What is the difference between window and document

    Below are the main differences between window and document,

    | Window                                                                        | Document                                                                                       |
    | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
    | It is the root level element in any web page                                  | It is the direct child of the window object. This is also known as Document Object Model (DOM) |
    | By default window object is available implicitly in the page                  | You can access it via window.document or document.                                             |
    | It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementsByTagName, createElement etc               |

    **[⬆ Back to Top](#table-of-contents)**

79. ### How do you access history in javascript

    The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.

    ```javascript
    function goBack() {
      window.history.back();
    }
    function goForward() {
      window.history.forward();
    }
    ```

    **Note:** You can also access history without window prefix.

    **[⬆ Back to Top](#table-of-contents)**

80. ### How do you detect caps lock key turned on or not

    The `mouseEvent getModifierState()` is used to return a boolean value that indicates whether the specified modifier key is activated or not. The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.

    Let's take an input element to detect the CapsLock on/off behavior with an example:

    ```html
    <input type="password" onmousedown="enterInput(event)" />

    <p id="feedback"></p>

    <script>
      function enterInput(e) {
        var flag = e.getModifierState("CapsLock");
        if (flag) {
          document.getElementById("feedback").innerHTML = "CapsLock activated";
        } else {
          document.getElementById("feedback").innerHTML =
            "CapsLock not activated";
        }
      }
    </script>
    ```

    **[⬆ Back to Top](#table-of-contents)**

81. ### What is isNaN

    The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

    ```javascript
    isNaN("Hello"); //true
    isNaN("100"); //false
    ```

    **[⬆ Back to Top](#table-of-contents)**

82. ### What are the differences between undeclared and undefined variables

    Below are the major differences between undeclared(not defined) and undefined variables,

    | undeclared                                                                                  | undefined                                                                              |
    | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
    | These variables do not exist in a program and are not declared                              | These variables declared in the program but have not assigned any value                |
    | If you try to read the value of an undeclared variable, then a runtime error is encountered | If you try to read the value of an undefined variable, an undefined value is returned. |

    ```javascript
    var a;
    a; // yields undefined

    b; // Throws runtime error like "Uncaught ReferenceError: b is not defined"
    ```
    This can be confusing, because it says `not defined` instead of `not declared` (Chrome)

    **[⬆ Back to Top](#table-of-contents)**


83. ### What are global variables

    Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

    ```javascript
    msg = "Hello"; // var is missing, it becomes global variable
    ```

    **[⬆ Back to Top](#table-of-contents)**

84. ### What are the problems with global variables

    The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

    **[⬆ Back to Top](#table-of-contents)**

85. ### What is NaN property

    The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases

    ```javascript
    Math.sqrt(-1);
    parseInt("Hello");
    ```

    **[⬆ Back to Top](#table-of-contents)**

86. ### What is the purpose of isFinite function

    The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

    ```javascript
    isFinite(Infinity); // false
    isFinite(NaN); // false
    isFinite(-Infinity); // false

    isFinite(100); // true
    ```

    **[⬆ Back to Top](#table-of-contents)**

87. ### What is an event flow

    Event flow refers to the order in which events are handled in the browser when a user interacts with elements on a webpage like clicking, typing, hovering, etc.

    When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.

    Hence, there are three phases in JavaScript’s event flow:

    1. Event Capturing(Top to Bottom): The event starts from the window/document and moves down the DOM tree toward the target element.
    2. Target phase: The event reaches the target element — the element that was actually interacted with.
    3. Event Bubbling(Bottom to Top): The event then bubbles back up from the target element to the root.

    **[⬆ Back to Top](#table-of-contents)**

88. ### What is event capturing

    Event capturing is a phase of event propagation in which an event is first intercepted by the outermost ancestor element, then travels downward through the DOM hierarchy until it reaches the target (innermost) element.

    To handle events during the capturing phase, you need to pass `true` as the third argument to the `addEventListener` method.

     ```javascript
      <div>
        <button class="child">Hello</button>
      </div>

      <script>
        const parent = document.querySelector("div");
        const child = document.querySelector(".child");

        // Capturing phase: parent listener (runs first)
        parent.addEventListener("click", function () {
          console.log("Parent (capturing)");
        }, true); // `true` enables capturing

        // Bubbling phase: child listener (runs after)
        child.addEventListener("click", function () {
          console.log("Child (bubbling)");
        });
      </script>
      // Parent (capturing)
      // Child (bubbling)
     ```

    **[⬆ Back to Top](#table-of-contents)**

89. ### What is event bubbling

    Event bubbling is a type of event propagation in which an event first triggers on the innermost target element (the one the user interacted with), and then bubbles up through its ancestors in the DOM hierarchy — eventually reaching the outermost elements, like the document or window.

    By default, event listeners in JavaScript are triggered during the bubbling phase, unless specified otherwise.

    ```javascript
    <div>
      <button class="child">Hello</button>
    </div>

    <script>
      const parent = document.querySelector("div");
      const child = document.querySelector(".child");

      // Bubbling phase (default)
      parent.addEventListener("click", function () {
        console.log("Parent");
      });

      child.addEventListener("click", function () {
        console.log("Child");
      });
    </script>
    //Child
    //Parent
    ```

    Here, at first, the event triggers on the child button. Thereafter it bubbles up and triggers the parent div's event handler.
    
    **[⬆ Back to Top](#table-of-contents)**


90. ### How do you submit a form using JavaScript

    You can submit a form using `document.forms[0].submit()`. All the form input's information is submitted using onsubmit event handler

    ```javascript
    function submit() {
      document.forms[0].submit();
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

91. ### How do you find operating system details

    The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,

    ```javascript
    console.log(navigator.platform);
    ```

    **[⬆ Back to Top](#table-of-contents)**

92. ### What is the difference between document load and DOMContentLoaded events

    The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

    **[⬆ Back to Top](#table-of-contents)**

93. ### What is the difference between native, host and user objects

    `Native objects` are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.
    `Host objects` are objects provided by the browser or runtime environment (Node).

    For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.
    `User objects` are objects defined in the javascript code. For example, User objects created for profile information.

    **[⬆ Back to Top](#table-of-contents)**

94. ### What are the tools or techniques used for debugging JavaScript code

    You can use below tools or techniques for debugging javascript

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

    **[⬆ Back to Top](#table-of-contents)**

95. ### What are the pros and cons of promises over callbacks

    Below are the list of pros and cons of promises over callbacks,

    **Pros:**

    1. It avoids callback hell which is unreadable
    2. Easy to write sequential asynchronous code with .then()
    3. Easy to write parallel asynchronous code with Promise.all()
    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

    **Cons:**

    5. It makes little complex code
    6. You need to load a polyfill if ES6 is not supported

    **[⬆ Back to Top](#table-of-contents)**

96. ### What is the difference between an attribute and a property

    Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes: `type` and `value`,

    ```javascript
    <input type="text" value="Name:">
    ```

    You can retrieve the attribute value as below, for example after typing "Good morning" into the input field:

    ```javascript
    const input = document.querySelector("input");
    console.log(input.getAttribute("value")); // Good morning
    console.log(input.value); // Good morning
    ```

    And after you change the value of the text field to "Good evening", it becomes like

    ```javascript
    console.log(input.getAttribute("value")); // Good evening
    console.log(input.value); // Good evening
    ```

    **[⬆ Back to Top](#table-of-contents)**

97. ### What is same-origin policy

    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

    **[⬆ Back to Top](#table-of-contents)**

98. ### What is the purpose of void 0

    Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an `<a>` element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression.
    For example, the below link notify the message without reloading the page

    ```javascript
    <a href="JavaScript:void(0);" onclick="alert('Well done!')">
      Click Me!
    </a>
    ```

    **[⬆ Back to Top](#table-of-contents)**

99. ### Is JavaScript a compiled or interpreted language

    JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

    **[⬆ Back to Top](#table-of-contents)**

100. ### Is JavaScript a case-sensitive language

    Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

    **[⬆ Back to Top](#table-of-contents)**

101. ### Is there any relation between Java and JavaScript

      No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).

      **[⬆ Back to Top](#table-of-contents)**

102. ### What are events

      Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can `react` on these events. Some of the examples of HTML events are,

      1. Web page has finished loading
      2. Input field was changed
      3. Button was clicked

      Let's describe the behavior of click event for button element,

      ```javascript
      <!doctype html>
      <html>
       <head>
         <script>
           function greeting() {
             alert('Hello! Good morning');
           }
         </script>
       </head>
       <body>
         <button type="button" onclick="greeting()">Click me</button>
       </body>
      </html>
      ```

      **[⬆ Back to Top](#table-of-contents)**

103. ### Who created javascript

      JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.

      **[⬆ Back to Top](#table-of-contents)**

104. ### What is the use of preventDefault method

      The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

      ```javascript
      document
        .getElementById("link")
        .addEventListener("click", function (event) {
          event.preventDefault();
        });
      ```

      **Note:** Remember that not all events are cancelable.

      **[⬆ Back to Top](#table-of-contents)**

105. ### What is the use of stopPropagation method

      The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

      ```javascript
      <p>Click DIV1 Element</p>
      <div onclick="secondFunc()">DIV 2
        <div onclick="firstFunc(event)">DIV 1</div>
      </div>

      <script>
      function firstFunc(event) {
        alert("DIV 1");
        event.stopPropagation();
      }

      function secondFunc() {
        alert("DIV 2");
      }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

106. ### What are the steps involved in return false usage

      The return false statement in event handlers performs the below steps,

      1. First it stops the browser's default action or behaviour.
      2. It prevents the event from propagating the DOM
      3. Stops callback execution and returns immediately when called.

      **[⬆ Back to Top](#table-of-contents)**

107. ### What is BOM

      The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

      ![Screenshot](images/bom.png)

      **[⬆ Back to Top](#table-of-contents)**

108. ### What is the use of setTimeout

      The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

      ```javascript
      setTimeout(function () {
        console.log("Good morning");
      }, 2000);
      ```

      **[⬆ Back to Top](#table-of-contents)**

109. ### What is the use of setInterval

      The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

      ```javascript
      setInterval(function () {
        console.log("Good morning");
      }, 2000);
      ```

      **[⬆ Back to Top](#table-of-contents)**

110. ### Why is JavaScript treated as Single threaded

      JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

      **[⬆ Back to Top](#table-of-contents)**

111. ### What is an event delegation

      Event delegation is a technique where you attach **one event listener to a parent element** instead of adding listeners to each child element. It works because events bubble up from the target element to its parents.

      For example, if you wanted to detect field changes inside a specific form, you can use event delegation technique,

      ```javascript
      var form = document.querySelector("#registration-form");

      // Listen for changes to fields inside the form
      form.addEventListener(
        "input",
        function (event) {
          // Log the field that was changed
          console.log(event.target);
        },
        false
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

112. ### What is ECMAScript

      ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

      **[⬆ Back to Top](#table-of-contents)**

113. ### What is JSON

      JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

      **[⬆ Back to Top](#table-of-contents)**

114. ### What are the syntax rules of JSON

      Below are the list of syntax rules of JSON

      1. The data is in name/value pairs
      2. The data is separated by commas
      3. Curly braces hold objects
      4. Square brackets hold arrays

      **[⬆ Back to Top](#table-of-contents)**

115. ### What is the purpose JSON stringify

      When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

      ```javascript
      var userJSON = { name: "John", age: 31 };
      var userString = JSON.stringify(userJSON);
      console.log(userString); //"{"name":"John","age":31}"
      ```

      **[⬆ Back to Top](#table-of-contents)**

116. ### How do you parse JSON string

      When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

      ```javascript
      var userString = '{"name":"John","age":31}';
      var userJSON = JSON.parse(userString);
      console.log(userJSON); // {name: "John", age: 31}
      ```

      **[⬆ Back to Top](#table-of-contents)**

117. ### Why do you need JSON

      When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

      **[⬆ Back to Top](#table-of-contents)**

118. ### What are PWAs

      Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

      **[⬆ Back to Top](#table-of-contents)**

119. ### What is the purpose of clearTimeout method

      The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

      For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.

      ```javascript
      <script>
           var msg;
           function greeting() {
              alert('Good morning');
           }
           function start() {
             msg =setTimeout(greeting, 3000);

           }

           function stop() {
               clearTimeout(msg);
           }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

120. ### What is the purpose of clearInterval method

      The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.

      For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.

      ```javascript
      <script>
           var msg;
           function greeting() {
              alert('Good morning');
           }
           function start() {
             msg = setInterval(greeting, 3000);

           }

           function stop() {
               clearInterval(msg);
           }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

121. ### How do you redirect new page in javascript

      In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,

      ```javascript
      function redirect() {
        window.location.href = "newPage.html";
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

122. ### How do you check whether a string contains a substring

      There are 3 possible ways to check whether a string contains a substring or not,

      1. **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring

      ```javascript
      var mainString = "hello",
        subString = "hell";
      mainString.includes(subString);
      ```

      2. **Using indexOf:** In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

      ```javascript
      var mainString = "hello",
        subString = "hell";
      mainString.indexOf(subString) !== -1;
      ```

      3. **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions

      ```javascript
      var mainString = "hello",
        regex = /hell/;
      regex.test(mainString);
      ```

      **[⬆ Back to Top](#table-of-contents)**

123. ### How do you validate an email in javascript

      You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

      ```javascript
      function validateEmail(email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

      The above regular expression accepts unicode characters.

124. ### How do you get the current url with javascript

      You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purposes but this solution has issues in FF.

      ```javascript
      console.log("location.href", window.location.href); // Returns full URL
      ```

      **[⬆ Back to Top](#table-of-contents)**

125. ### What are the various url properties of location object

      The below `Location` object properties can be used to access URL components of the page,

      1. href - The entire URL
      2. protocol - The protocol of the URL
      3. host - The hostname and port of the URL
      4. hostname - The hostname of the URL
      5. port - The port number in the URL
      6. pathname - The path name of the URL
      7. search - The query portion of the URL
      8. hash - The anchor portion of the URL

      **[⬆ Back to Top](#table-of-contents)**

126. ### How do you get query string values in javascript

      You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

      ```javascript
      const urlParams = new URLSearchParams(window.location.search);
      const clientCode = urlParams.get("clientCode");
      ```

      **[⬆ Back to Top](#table-of-contents)**

127. ### How do you check if a key exists in an object

      You can check whether a key exists in an object or not using three approaches,

      1. **Using in operator:** You can use the in operator whether a key exists in an object or not

         ```javascript
         "key" in obj;
         ```

         and If you want to check if a key doesn't exist, remember to use parenthesis,

         ```javascript
         !("key" in obj);
         ```

      2. **Using hasOwnProperty method:** You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)

         ```javascript
         obj.hasOwnProperty("key"); // true
         ```

      3. **Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.

         ```javascript
         const user = {
           name: "John",
         };

         console.log(user.name !== undefined); // true
         console.log(user.nickName !== undefined); // false
         ```

      **[⬆ Back to Top](#table-of-contents)**

128. ### How do you loop through or enumerate javascript object

      You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.

      ```javascript
      var object = {
        k1: "value1",
        k2: "value2",
        k3: "value3",
      };

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          console.log(key + " -> " + object[key]); // k1 -> value1 ...
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

129. ### How do you test for an empty object

      There are different solutions based on ECMAScript versions

      1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

      ```javascript
      Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      2. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

      ```javascript
      Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      3. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

      ```javascript
      function isEmpty(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            return false;
          }
        }

        return JSON.stringify(obj) === JSON.stringify({});
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

130. ### What is an arguments object

      The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

      ```javascript
      function sum() {
        var total = 0;
        for (var i = 0, len = arguments.length; i < len; ++i) {
          total += arguments[i];
        }
        return total;
      }

      sum(1, 2, 3); // returns 6
      ```

      **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

      ```javascript
      var argsArray = Array.prototype.slice.call(arguments);
      ```

      **[⬆ Back to Top](#table-of-contents)**

131. ### How do you make first letter of the string in an uppercase

      You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.

      ```javascript
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

132. ### What are the pros and cons of for loops

      The for-loop is a commonly used iteration syntax in javascript. It has both pros and cons

      #### Pros

      1. Works on every environment
      2. You can use break and continue flow control statements

      #### Cons

      3. Too verbose
      4. Imperative
      5. You might face off-by-one errors.

      **[⬆ Back to Top](#table-of-contents)**

133. ### How do you display the current date in javascript

      You can use `new Date()` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

      ```javascript
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      document.write(today);
      ```

      **[⬆ Back to Top](#table-of-contents)**

134. ### How do you compare two date objects

      You need to use date.getTime() method in order to compare unix timestamp values

      ```javascript
      var d1 = new Date();
      var d2 = new Date(d1);
      console.log(d1.getTime() === d2.getTime()); //True
      console.log(d1 === d2); // False
      ```

      **[⬆ Back to Top](#table-of-contents)**

135. ### How do you check if a string starts with another string

      You can use ECMAScript 6's `String.prototype.startsWith()` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,

      ```javascript
      "Good morning".startsWith("Good"); // true
      "Good morning".startsWith("morning"); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

136. ### How do you trim a string in javascript

      JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.

      ```javascript
      "  Hello World   ".trim(); //Hello World
      ```

      If your browser(<IE9) doesn't support this method then you can use below polyfill.

      ```javascript
      if (!String.prototype.trim) {
        (function () {
          // Make sure we trim BOM and NBSP
          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          String.prototype.trim = function () {
            return this.replace(rtrim, "");
          };
        })();
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

137. ### How do you add a key value pair in javascript

      There are two possible solutions to add new properties to an object.

      Let's take a simple object to explain these solutions.

      ```javascript
      var object = {
        key1: value1,
        key2: value2,
      };
      ```

      1. **Using dot notation:** This solution is useful when you know the name of the property

      ```javascript
      object.key3 = "value3";
      ```

      2. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined or the key's name is non-JS like "user-name"

      ```javascript
      obj["key3"] = "value3";
      ```

      **[⬆ Back to Top](#table-of-contents)**

138. ### Is the !-- notation represents a special operator

      No,that's not a special operator. But it is a combination of 2 standard operators one after the other,

      1. A logical not (!)
      2. A prefix decrement (--)

      At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

      **[⬆ Back to Top](#table-of-contents)**

139. ### How do you assign default values to variables

      You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,

      ```javascript
      var a = b || c;
      ```

      As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

      **[⬆ Back to Top](#table-of-contents)**

140. ### How do you define multiline strings

      You can define multiline string literals using the '\n' character followed by line terminator('\').

      ```javascript
      var str = "This is a \n very lengthy \n sentence!";
      console.log(str);
      ```

      But if you have a space after the '\n' character, there will be indentation inconsistencies.

      **[⬆ Back to Top](#table-of-contents)**

141. ### What is an app shell model

      An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

      **[⬆ Back to Top](#table-of-contents)**

142. ### Can we define properties for functions

      Yes, we can define properties for functions because functions are also objects.

      ```javascript
      fn = function (x) {
        //Function code goes here
      };

      fn.name = "John";

      fn.profile = function (y) {
        //Profile code goes here
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

143. ### What is the way to find the number of parameters expected by a function

      You can use `function.length` syntax to find the number of parameters expected by a function. Let's take an example of `sum` function to calculate the sum of numbers,

      ```javascript
      function sum(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4;
      }
      sum.length; // 4 is the number of parameters expected.
      ```

      **[⬆ Back to Top](#table-of-contents)**

144. ### What is a polyfill

      A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

      There are two main polyfill libraries available,

      1. **Core.js**: It is a modular javascript library used for cutting-edge ECMAScript features.
      2. **Polyfill.io:** It provides polyfills that are required for browser needs.

      **[⬆ Back to Top](#table-of-contents)**

145. ### What are break and continue statements

      The break statement is used to "jump out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          break;
        }
        text += "Number: " + i + "<br>";
      }
      ```

      The continue statement is used to "jump over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          continue;
        }
        text += "Number: " + i + "<br>";
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

146. ### What are js labels

      The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

      ```javascript
      var i, j;

      loop1: for (i = 0; i < 3; i++) {
        loop2: for (j = 0; j < 3; j++) {
          if (i === j) {
            continue loop1;
          }
          console.log("i = " + i + ", j = " + j);
        }
      }

      // Output is:
      //   "i = 1, j = 0"
      //   "i = 2, j = 0"
      //   "i = 2, j = 1"
      ```

      **[⬆ Back to Top](#table-of-contents)**

147. ### What are the benefits of keeping declarations at the top

      It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,

      1. Gives cleaner code
      2. It provides a single place to look for local variables
      3. Easy to avoid unwanted global variables
      4. It reduces the possibility of unwanted re-declarations

      **[⬆ Back to Top](#table-of-contents)**

148. ### What are the benefits of initializing variables

      It is recommended to initialize variables because of the below benefits,

      1. It gives cleaner code
      2. It provides a single place to initialize variables
      3. Avoid undefined values in the code

      **[⬆ Back to Top](#table-of-contents)**

149. ### What are the recommendations to create new object

      It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.

      1. Assign {} instead of new Object()
      2. Assign "" instead of new String()
      3. Assign 0 instead of new Number()
      4. Assign false instead of new Boolean()
      5. Assign [] instead of new Array()
      6. Assign /()/ instead of new RegExp()
      7. Assign function (){} instead of new Function()

      You can define them as an example,

      ```javascript
      var v1 = {};
      var v2 = "";
      var v3 = 0;
      var v4 = false;
      var v5 = [];
      var v6 = /()/;
      var v7 = function () {};
      ```

      **[⬆ Back to Top](#table-of-contents)**

150. ### How do you define JSON arrays

      JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

      ```javascript
      "users":[
        {"firstName":"John", "lastName":"Abrahm"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Shane", "lastName":"Warn"}
      ]
      ```

      **[⬆ Back to Top](#table-of-contents)**

151. ### How do you generate random integers

      You can use `Math.random()` with `Math.floor()` to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,

      ```javascript
      Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
      Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
      ```

      **Note:** `Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive)

      **[⬆ Back to Top](#table-of-contents)**

152. ### Can you write a random integers function to print integers within a range

      Yes, you can create a proper random function to return a random number between min and max (both included)

      ```javascript
      function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      randomInteger(1, 100); // returns a random integer from 1 to 100
      randomInteger(1, 1000); // returns a random integer from 1 to 1000
      ```

      **[⬆ Back to Top](#table-of-contents)**

153. ### What is tree shaking

      Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler `rollup`, these days practically all bundlers use this technique.

      **[⬆ Back to Top](#table-of-contents)**

154. ### What is the need of tree shaking

      Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

      **[⬆ Back to Top](#table-of-contents)**

155. ### Is it recommended to use eval

      No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

      **[⬆ Back to Top](#table-of-contents)**

156. ### What is a Regular Expression

      A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,

      ```javascript
      /pattern/modifiers;
      ```

      For example, the regular expression or search pattern with case-insensitive username would be,

      ```javascript
      /John/i;
      ```

      **[⬆ Back to Top](#table-of-contents)**

157. ### What are the string methods that accept Regular expression

      There are six string methods: `search()`, `replace()`, `replaceAll()`, `match()`, `matchAll()`, and `split()`.

      The `search()` method uses an expression to search for a match, and returns the position of the match.

      ```javascript
      var msg = "Hello John";
      var n = msg.search(/John/i); // 6
      ```

      The `replace()` and `replaceAll()` methods are used to return a modified string where the pattern is replaced.

      ```javascript
      var msg = "ball bat";
      var n1 = msg.replace(/b/i, "c"); // call bat
      var n2 = msg.replaceAll(/b/i, "c"); // call cat
      ```

      The `match()` and `matchAll()` methods are used to return the matches when matching a string against a regular expression.

      ```javascript
      var msg = "Hello John";
      var n1 = msg.match(/[A-Z]/g); // ["H", "J"]
      var n2 = msg.matchAll(/[A-Z]/g); // this returns an iterator
      ```

      The `split()` method is used to split a string into an array of substrings, and returns the new array.

      ```javascript
      var msg = "Hello John";
      var n = msg.split(/\s/); // ["Hello", "John"]
      ```

      **[⬆ Back to Top](#table-of-contents)**

158. ### What are modifiers in regular expression

      Modifiers can be used to perform case-insensitive and global searches. Let's list some of the modifiers,

      | Modifier | Description                                             |
      | -------- | ------------------------------------------------------- |
      | i        | Perform case-insensitive matching                       |
      | g        | Perform a global match rather than stops at first match |
      | m        | Perform multiline matching                              |

      Let's take an example of global modifier,

      ```javascript
      var text = "Learn JS one by one";
      var pattern = /one/g;
      var result = text.match(pattern); // one,one
      ```

      **[⬆ Back to Top](#table-of-contents)**

159. ### What are regular expression patterns

      Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

      1. **Brackets:** These are used to find a range of characters.
         For example, below are some use cases,
         1. [abc]: Used to find any of the characters between the brackets(a,b,c)
         2. [0-9]: Used to find any of the digits between the brackets
         3. (a|b): Used to find any of the alternatives separated with |
      2. **Metacharacters:** These are characters with a special meaning.
         For example, below are some use cases,
         1. \\d: Used to find a digit
         2. \\s: Used to find a whitespace character
         3. \\b: Used to find a match at the beginning or ending of a word
      3. **Quantifiers:** These are useful to define quantities.
         For example, below are some use cases,
         1. n+: Used to find matches for any string that contains at least one n
         2. n\*: Used to find matches for any string that contains zero or more occurrences of n
         3. n?: Used to find matches for any string that contains zero or one occurrences of n

      **[⬆ Back to Top](#table-of-contents)**

160. ### What is a RegExp object

      RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

      ```javascript
      var regexp = new RegExp("\\w+");
      console.log(regexp);
      // expected output: /\w+/
      ```

      **[⬆ Back to Top](#table-of-contents)**

161. ### How do you search a string for a pattern

      You can use the `test()` method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

      ```javascript
      var pattern = /you/;
      console.log(pattern.test("How are you?")); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

162. ### What is the purpose of exec method

      The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.

      ```javascript
      var pattern = /you/;
      console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]
      ```

      **[⬆ Back to Top](#table-of-contents)**

163. ### How do you change the style of a HTML element

      You can change inline style or classname of a HTML element using javascript DOM-manipulation

      1. **Using style property:** You can modify inline style using style property

      ```javascript
      document.getElementById("title").style.fontSize = "30px";
      ```

      2. **Using ClassName property:** It is easy to modify element class using className property

      ```javascript
      document.getElementById("title").className = "custom-title";
      ```

      **[⬆ Back to Top](#table-of-contents)**

164. ### What would be the result of 1+2+'3'

      The output is going to be `33`. Since `1` and `2` are numeric values, the result of the first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`. Other operations like `3 * '3'` do yield correct results because the string is coerced into a number.

      **[⬆ Back to Top](#table-of-contents)**

165. ### What is a debugger statement

      The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
      For example, in the below function a debugger statement has been inserted. So
      execution is paused at the debugger statement just like a breakpoint in the script source.

      ```javascript
      function getProfile() {
        // code goes here
        debugger;
        // code goes here
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

166. ### What is the purpose of breakpoints in debugging

      You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

      **[⬆ Back to Top](#table-of-contents)**

167. ### Can I use reserved words as identifiers

      No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example,

      ```javascript
      var else = "hello"; // Uncaught SyntaxError: Unexpected token else
      ```

      **[⬆ Back to Top](#table-of-contents)**

168. ### How do you detect a mobile browser

      You can use regex which returns a true or false value depending on whether or not the user is browsing with a mobile.

      ```javascript
      window.mobilecheck = function () {
        var mobileCheck = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            mobileCheck = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return mobileCheck;
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

169. ### How do you detect a mobile browser without regexp

      You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,

      ```javascript
      function detectmob() {
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          return true;
        } else {
          return false;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

170. ### How do you get the image width and height using JS

      You can programmatically get the image and check the dimensions(width and height) using JavaScript.

      ```javascript
      var img = new Image();
      img.onload = function () {
        console.log(this.width + "x" + this.height);
      };
      img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
      ```

      **[⬆ Back to Top](#table-of-contents)**

171. ### How do you make synchronous HTTP request

      Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript.

      ```javascript
      function httpGet(theUrl) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

172. ### How do you make asynchronous HTTP request

      Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing the 3rd parameter as true.

      ```javascript
      function httpGetAsync(theUrl, callback) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.onreadystatechange = function () {
          if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
        };
        xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
        xmlHttpReq.send(null);
      }
      ```

      Today this is considered deprecated, because an async `fetch` call (in browsers later than 2016) is simpler and more robust.

      **[⬆ Back to Top](#table-of-contents)**

173. ### How do you convert date to another timezone in javascript

      You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,

      ```javascript
      console.log(new Date().toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00
      ```

      **[⬆ Back to Top](#table-of-contents)**

174. ### What are the properties used to get size of window

      You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document element and document body objects to find the size of a window. Let's use a combination of these properties to calculate the size of a window or document,

      ```javascript
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      var height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      ```

      **[⬆ Back to Top](#table-of-contents)**

175. ### What is a conditional operator in javascript

      The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for `if` statements.

      ```javascript
      var isAuthenticated = false;
      console.log(
        isAuthenticated ? "Hello, welcome" : "Sorry, you are not authenticated"
      ); // Sorry, you are not authenticated
      ```

      **[⬆ Back to Top](#table-of-contents)**

176. ### Can you apply chaining on conditional operator

      Yes, you can apply chaining on conditional operators similar to **`if … else if … else if … else`** chain. The syntax is going to be as below,

      ```javascript
      function traceValue(someParam) {
        return condition1
          ? value1
          : condition2
          ? value2
          : condition3
          ? value3
          : value4;
      }

      // The above conditional operator is equivalent to:

      function traceValue(someParam) {
        if (condition1) {
          return value1;
        } else if (condition2) {
          return value2;
        } else if (condition3) {
          return value3;
        } else {
          return value4;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

177. ### What are the ways to execute javascript after a page load

      You can execute javascript after page load in many different ways,

      1. **window.onload:**

      ```javascript
      window.onload = function ...
      ```

      2. **document.onload:**

      ```javascript
      document.onload = function ...
      ```

      3. **body onload:**

      ```javascript
      <body onload="script();">
      ```

      **[⬆ Back to Top](#table-of-contents)**

178. ### What is the difference between proto and prototype

      The `__proto__` object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas `prototype` is the object that is used to build `__proto__` when you create an object with the `new` operator (a special variant of a function call).

      ```javascript
      new Employee().__proto__ === Employee.prototype;
      new Employee().prototype === undefined;
      ```

      There are few more differences,

      | feature    | Prototype                                                    | proto                                                      |
      | ---------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
      | Access     | All function constructors have prototype properties.         | All objects have \_\_proto\_\_ property                    |
      | Purpose    | Used to reduce memory wastage with a single copy of function | Used in lookup chain to resolve methods, constructors etc. |
      | ECMAScript | Introduced in ES6                                            | Introduced in ES5                                          |
      | Usage      | Frequently used                                              | Rarely used                                                |

      **[⬆ Back to Top](#table-of-contents)**

179. ### Can you give an example of when you really need a semicolon

      It is recommended to use semicolons after every statement in JavaScript. For example, in the below case (that is an IIFE = Immediately Invoked Function Expression) it throws an error ".. is not a function" at runtime due to missing semicolon.

      ```javascript
      // define a function
      var fn = (function () {
        //...
      })(
        // semicolon missing at this line

        // then execute some code inside a closure
        function () {
          //...
        }
      )();
      ```

      and it will be interpreted as

      ```javascript
      var fn = (function () {
        //...
      })(function () {
        //...
      })();
      ```

      In this case, we are passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a "... is not a function" error at runtime.

      **[⬆ Back to Top](#table-of-contents)**

180. ### What is the freeze method

      The **`freeze()`** method is used to freeze an object. Freezing an object does not allow adding new properties to an object, prevents removing, and prevents changing the enumerability, configurability, or writability of existing properties. i.e. It returns the passed object and does not create a frozen copy.

      ```javascript
      const obj = {
        prop: 100,
      };

      Object.freeze(obj);
      obj.prop = 200; // Throws an error in strict mode

      console.log(obj.prop); //100
      ```

      Remember freezing is only applied to the top-level properties in objects but not for nested objects.
      For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.

      ```javascript
      const user = {
        name: "John",
        employment: {
          department: "IT",
        },
      };

      Object.freeze(user);
      user.employment.department = "HR";
      ```

      **Note:** It causes a TypeError if the argument passed is not an object.

      **[⬆ Back to Top](#table-of-contents)**

181. ### What is the purpose of the freeze method

      Below are the main benefits of using freeze method,

      1. It is used for freezing objects and arrays.
      2. It is used to make an object immutable.

      **[⬆ Back to Top](#table-of-contents)**

182. ### Why do I need to use the freeze method

      In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the `final` keyword which is used in various languages.

      **[⬆ Back to Top](#table-of-contents)**

183. ### How do you detect a browser language preference

      You can use the navigator object to detect a browser language preference as below,

      ```javascript
      var language =
        (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
        navigator.language || // All browsers
        navigator.userLanguage; // IE <= 10

      console.log(language);
      ```

      **[⬆ Back to Top](#table-of-contents)**

184. ### How to convert a string to title case with javascript

      Title case means that the first letter of each word is capitalized. You can convert a string to title case using the below function,

      ```javascript
      function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });
      }
      toTitleCase("good morning john"); // Good Morning John
      ```

      **[⬆ Back to Top](#table-of-contents)**

185. ### How do you detect if javascript is disabled on the page

      You can use the `<noscript>` tag to detect whether JavaScript is disabled or not. The code block inside `<noscript>` gets executed when JavaScript is disabled, and is typically used to display alternative content when the page is generated in JavaScript.

      ```javascript
      <script type="javascript">
          // JS related code goes here
      </script>
      <noscript>
          <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
      </noscript>
      ```

      **[⬆ Back to Top](#table-of-contents)**

186. ### What are various operators supported by javascript

      An operator is capable of manipulating(mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,

      1. **Arithmetic Operators:** Includes + (Addition), – (Subtraction), \* (Multiplication), / (Division), % (Modulus), ++ (Increment) and – – (Decrement)
      2. **Comparison Operators:** Includes == (Equal), != (Not Equal), === (Equal with type), > (Greater than), >= (Greater than or Equal to), < (Less than), <= (Less than or Equal to)
      3. **Logical Operators:** Includes && (Logical AND), || (Logical OR), ! (Logical NOT)
      4. **Assignment Operators:** Includes = (Assignment Operator), += (Add and Assignment Operator), –= (Subtract and Assignment Operator), \*= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)
      5. **Ternary Operators:** It includes conditional(: ?) Operator
      6. **typeof Operator:** It uses to find type of variable. The syntax looks like `typeof variable`

      **[⬆ Back to Top](#table-of-contents)**

187. ### What is a rest parameter

      Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,

      ```javascript
      function f(a, b, ...theArgs) {
        // ...
      }
      ```

      For example, let's take a sum example to calculate on dynamic number of parameters,

      ```javascript
      function sum(...args) {
        let total = 0;
        for (const i of args) {
          total += i;
        }
        return total;
      }

      console.log(sum(1, 2)); //3
      console.log(sum(1, 2, 3)); //6
      console.log(sum(1, 2, 3, 4)); //10
      console.log(sum(1, 2, 3, 4, 5)); //15
      ```

      **Note:** Rest parameter is added in ES2015 or ES6

      **[⬆ Back to Top](#table-of-contents)**

188. ### What happens if you do not use rest parameter as a last argument

      The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.

      ```javascript
      function someFunc(a,…b,c){
      //You code goes here
      return;
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

189. ### What are the bitwise operators available in javascript

      Below are the list of bitwise logical operators used in JavaScript

      1. Bitwise AND ( & )
      2. Bitwise OR ( | )
      3. Bitwise XOR ( ^ )
      4. Bitwise NOT ( ~ )
      5. Left Shift ( << )
      6. Sign Propagating Right Shift ( >> )
      7. Zero fill Right Shift ( >>> )

      **[⬆ Back to Top](#table-of-contents)**

190. ### What is a spread operator

      Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,

      ```javascript
      function calculateSum(x, y, z) {
        return x + y + z;
      }

      const numbers = [1, 2, 3];

      console.log(calculateSum(...numbers)); // 6
      ```

      **[⬆ Back to Top](#table-of-contents)**

191. ### How do you determine whether object is frozen or not

      `Object.isFrozen()` method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,

      1. If it is not extensible.
      2. If all of its properties are non-configurable.
      3. If all its data properties are non-writable.
         The usage is going to be as follows,

      ```javascript
      const object = {
        property: "Welcome JS world",
      };
      Object.freeze(object);
      console.log(Object.isFrozen(object));
      ```

      **[⬆ Back to Top](#table-of-contents)**

192. ### How do you determine two values same or not using object

      The `Object.is()` method determines whether two values are the same value. For example, the usage with different types of values would be,

      ```javascript
      Object.is("hello", "hello"); // true
      Object.is(window, window); // true
      Object.is([], []); // false
      ```

      Two values are considered identical if one of the following holds:

      1. both undefined
      2. both null
      3. both true or both false
      4. both strings of the same length with the same characters in the same order
      5. both the same object (means both object have same reference)
      6. both numbers and
         both +0
         both -0
         both NaN
         both non-zero and both not NaN and both have the same value.

      **[⬆ Back to Top](#table-of-contents)**

193. ### What is the purpose of using object is method

      Some of the applications of Object's `is` method are follows,

      1. It is used for comparison of two strings.
      2. It is used for comparison of two numbers.
      3. It is used for comparing the polarity of two numbers.
      4. It is used for comparison of two objects.

      **[⬆ Back to Top](#table-of-contents)**

194. ### How do you copy properties from one object to other

      You can use the `Object.assign()` method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,

      ```javascript
      Object.assign(target, ...sources);
      ```

      Let's take example with one source and one target object,

      ```javascript
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };

      const returnedTarget = Object.assign(target, source);

      console.log(target); // { a: 1, b: 3, c: 4 }

      console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
      ```

      As observed in the above code, there is a common property(`b`) from source to target so it's value has been overwritten.

      **[⬆ Back to Top](#table-of-contents)**

195. ### What are the applications of the assign method

      Below are the some of main applications of `Object.assign()` method,

      1. It is used for cloning an object.
      2. It is used to merge objects with the same properties.

      **[⬆ Back to Top](#table-of-contents)**

196. ### What is a proxy object

      The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

      A proxy is created with two parameters: a target object which you want to proxy and a handler object which contains methods to intercept fundamental operations. The syntax would be as follows,

      ```javascript
      var p = new Proxy(target, handler);
      ```

      Let's take a look at below examples of proxy object and how the get method which customize the lookup behavior,

      ```javascript
      //Example1:

      const person = {
        name: "Sudheer Jonna",
        age: 35,
      };

      const handler = {
        get(target, prop) {
          if (prop === "name") {
            return "Mr. " + target[prop];
          }
          return target[prop];
        },
      };

      const proxy = new Proxy(person, handler);

      //Example2:

      var handler1 = {
        get: function (obj, prop) {
          return prop in obj ? obj[prop] : 100;
        },
      };

      var p = new Proxy({}, handler1);
      p.a = 10;
      p.b = null;

      console.log(p.a, p.b); // 10, null
      console.log("c" in p, p.c); // false, 100
      ```

      In the above code, it uses `get` handler which define the behavior of the proxy when an operation is performed on it. These proxies are mainly used for some of the below cross-cutting concerns.

      1. Logging
      2. Authentication or Authorization
      3. Data binding and observables
      4. Function parameter validation

      **Note:** This feature was introduced with ES6.

      **[⬆ Back to Top](#table-of-contents)**

197. ### What is the purpose of the seal method

      The `Object.seal()` method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But **values of present properties can still be changed as long as they are writable**. The next level of immutability would be the [`Object.freeze()`](#what-is-a-freeze-method) method. Let's see the below example to understand more about `seal()` method

      ```javascript
      const object = {
        property: "Welcome JS world",
      };
      Object.seal(object);
      obje