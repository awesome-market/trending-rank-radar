# React Interview Questions & Answers
> Click :star: if you like the project. Pull Requests are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

---



<div>
<p align="center">
  <a href="https://www.greatfrontend.com/questions/react-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-react&fpr=sudheerj&gnrs=sudheerj">
    <img src="./images/collab/greatfrontend-react.gif" alt="GreatFrontEnd React Interview Questions" width="100%">
  </a>
</p>
</div>

> Practice 280+ JavaScript coding interview questions in-browser. Built by ex-FAANG interviewers. No AI-generated fluff. No fake reviews. [Try GreatFrontEnd →](https://www.greatfrontend.com/questions/react-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-react&fpr=sudheerj&gnrs=sudheerj) 💡

<div>
<p align="center">
  <a href="https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions">
    <img src="./images/collab/ztm.gif" alt="ZTM Logo" width="100%">
  </a>
</p>
</div>

> I recommend this [React course](https://zerotomastery.io/courses/learn-react/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions) to become top 10% at React and [this coding interview bootcamp](https://zerotomastery.io/courses/learn-data-structures-and-algorithms/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions) to ace your coding interview and actually get hired.

---

<div>
<p align="center">
  <a href="https://resumeloom.com/?ref=FZ818184">
    <img src="./images/collab/resumeloom1.png" alt="Resume Loom" width="100%" height="">
  </a>
</p>
</div>

---

**Note:** This repository is specific to ReactJS. Please check [JavaScript Interview Questions](https://github.com/sudheerj/javascript-interview-questions) for core JavaScript questions and [Data Structures and Algorithms](https://github.com/sudheerj/datastructures-algorithms) for DSA-related questions or problems.

### Table of Contents

<details open>
<summary>
Hide/Show table of contents
</summary>

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Core React**                                                                                                                                                                                                                   |
| 1   | [What is React?](#what-is-react)                                                                                                                                                                                                 |
| 2   | [What is the history behind React’s evolution?](#what-is-the-history-behind-react-evolution)                                                                                                                                      |
| 3   | [What are the major features of React?](#what-are-the-major-features-of-react)                                                                                                                                                   |
| 4   | [What is JSX?](#what-is-jsx)                                                                                                                                                                                                     |
| 5   | [What is the difference between an Element and a Component?](#what-is-the-difference-between-an-element-and-a-component)                                                                                                              |
| 6   | [How do you create components in React?](#how-to-create-components-in-react)                                                                                                                                                     |
| 7   | [When should you use a Class Component over a Function Component?](#when-to-use-a-class-component-over-a-function-component)                                                                                                    |
| 8   | [What are Pure Components?](#what-are-pure-components)                                                                                                                                                                           |
| 9   | [What is state in React?](#what-is-state-in-react)                                                                                                                                                                               |
| 10  | [What are props in React?](#what-are-props-in-react)                                                                                                                                                                             |
| 11  | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props)                                                                                                                               |
| 12  | [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling)                                                                                                   |
| 13  | [What are synthetic events in React?](#what-are-synthetic-events-in-react)                                                                                                                                                       |
| 14  | [What are inline conditional expressions?](#what-are-inline-conditional-expressions)                                                                                                                                             |
| 15  | [What is the "key" prop and what is its benefit when used in arrays of elements?](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements)                                                                    |
| 16  | [What is the Virtual DOM?](#what-is-virtual-dom)                                                                                                                                                                                 |
| 17  | [How does the Virtual DOM work?](#how-virtual-dom-works)                                                                                                                                                                         |
| 18  | [What is the difference between Shadow DOM and Virtual DOM?](#what-is-the-difference-between-shadow-dom-and-virtual-dom)                                                                                                         |
| 19  | [What is React Fiber?](#what-is-react-fiber)                                                                                                                                                                                     |
| 20  | [What is the main goal of React Fiber?](#what-is-the-main-goal-of-react-fiber)                                                                                                                                                   |
| 21  | [What are controlled components?](#what-are-controlled-components)                                                                                                                                                               |
| 22  | [What are uncontrolled components?](#what-are-uncontrolled-components)                                                                                                                                                           |
| 23  | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement)                                                                                                 |
| 24  | [What is Lifting State Up in React?](#what-is-lifting-state-up-in-react)                                                                                                                                                         |
| 25  | [What are Higher-Order Components?](#what-are-higher-order-components)                                                                                                                                                           |
| 26  | [What is the children prop?](#what-is-children-prop)                                                                                                                                                                             |
| 27  | [How do you write comments in React?](#how-to-write-comments-in-react)                                                                                                                                                           |
| 28  | [What is reconciliation?](#what-is-reconciliation)                                                                                                                                                                               |
| 29  | [Does the lazy function support named exports?](#does-the-lazy-function-support-named-exports)                                                                                                                                   |
| 30  | [Why does React use className instead of the class attribute?](#why-react-uses-classname-over-class-attribute)                                                                                                                   |
| 31  | [What are Fragments?](#what-are-fragments)                                                                                                                                                                                       |
| 32  | [Why are Fragments better than container divs?](#why-fragments-are-better-than-container-divs)                                                                                                                                   |
| 33  | [What are portals in React?](#what-are-portals-in-react)                                                                                                                                                                         |
| 34  | [What are stateless components?](#what-are-stateless-components)                                                                                                                                                                 |
| 35  | [What are stateful components?](#what-are-stateful-components)                                                                                                                                                                   |
| 36  | [How do you apply validation to props in React?](#how-to-apply-validation-on-props-in-react)                                                                                                                                     |
| 37  | [What are the advantages of React?](#what-are-the-advantages-of-react)                                                                                                                                                           |
| 38  | [What are the limitations of React?](#what-are-the-limitations-of-react)                                                                                                                                                         |
| 39  | [What are the recommended ways for static type checking?](#what-are-the-recommended-ways-for-static-type-checking)                                                                                                               |
| 40  | [What is the use of the react-dom package?](#what-is-the-use-of-react-dom-package)                                                                                                                                               |
| 41  | [What is ReactDOMServer?](#what-is-reactdomserver)                                                                                                                                                                               |
| 42  | [How do you use innerHTML in React?](#how-to-use-innerhtml-in-react)                                                                                                                                                             |
| 43  | [How do you apply styles in React?](#how-to-use-styles-in-react)                                                                                                                                                                 |
| 44  | [How are events different in React?](#how-events-are-different-in-react)                                                                                                                                                         |
| 45  | [What is the impact of using indexes as keys?](#what-is-the-impact-of-indexes-as-keys)                                                                                                                                          |
| 46  | [How do you conditionally render components?](#how-do-you-conditionally-render-components)                                                                                                                                       |
| 47  | [Why do we need to be careful when spreading props on DOM elements?](#why-we-need-to-be-careful-when-spreading-props-on-dom-elements)                                                                                             |
| 48  | [How do you memoize a component?](#how-do-you-memoize-a-component)                                                                                                                                                               |
| 49  | [How do you implement Server-Side Rendering (SSR)?](#how-you-implement-server-side-rendering-or-ssr)                                                                                                                              |
| 50  | [How do you enable production mode in React?](#how-to-enable-production-mode-in-react)                                                                                                                                           |
| 51  | [Do Hooks replace render props and higher-order components?](#do-hooks-replace-render-props-and-higher-order-components)                                                                                                         |
| 52  | [What is a switching component?](#what-is-a-switching-component)                                                                                                                                                                 |
| 54  | [What are the pointer events supported in React?](#what-are-the-pointer-events-supported-in-react)                                                                                                                               |
| 55  | [Why should component names start with a capital letter?](#why-should-component-names-start-with-capital-letter)                                                                                                                  |
| 56  | [Are custom DOM attributes supported in React v16?](#are-custom-dom-attributes-supported-in-react-v16)                                                                                                                           |
| 57  | [How do you loop inside JSX?](#how-to-loop-inside-jsx)                                                                                                                                                                           |
| 58  | [How do you access props within attribute quotes?](#how-do-you-access-props-in-attribute-quotes)                                                                                                                                 |
| 59  | [What is a React PropType array with shape?](#what-is-react-proptype-array-with-shape)                                                                                                                                           |
| 60  | [How do you conditionally apply class attributes?](#how-to-conditionally-apply-class-attributes)                                                                                                                                 |
| 61  | [What is the difference between React and ReactDOM?](#what-is-the-difference-between-react-and-reactdom)                                                                                                                         |
| 62  | [Why is ReactDOM separated from React?](#why-reactdom-is-separated-from-react)                                                                                                                                                   |
| 63  | [How do you use the React label element?](#how-to-use-react-label-element)                                                                                                                                                       |
| 64  | [How do you combine multiple inline style objects?](#how-to-combine-multiple-inline-style-objects)                                                                                                                               |
| 65  | [How do you re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized)                                                                                                             |
| 66  | [How do you pretty-print JSON with React?](#how-to-pretty-print-json-with-react)                                                                                                                                                 |
| 67  | [Why can’t you update props in React?](#why-you-cant-update-props-in-react)                                                                                                                                                      |
| 68  | [How do you focus an input element on page load?](#how-to-focus-an-input-element-on-page-load)                                                                                                                                   |
| 69  | [How can you find the version of React at runtime in the browser?](#how-can-we-find-the-version-of-react-at-runtime-in-the-browser)                                                                                              |
| 70  | [How do you add Google Analytics for React Router?](#how-to-add-google-analytics-for-react-router)                                                                                                                               |
| 71  | [How do you apply vendor prefixes to inline styles in React?](#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react)                                                                                                       |
| 72  | [How do you import and export components using React and ES6?](#how-to-import-and-export-components-using-react-and-es6)                                                                                                         |
| 73  | [What are the exceptions to React component naming?](#what-are-the-exceptions-on-react-component-naming)                                                                                                                         |
| 74  | [Is it possible to use async/await in plain React?](#is-it-possible-to-use-asyncawait-in-plain-react)                                                                                                                            |
| 75  | [What are common folder structures for React?](#what-are-the-common-folder-structures-for-react)                                                                                                                                 |
| 76  | [What are popular packages for animation?](#what-are-the-popular-packages-for-animation)                                                                                                                                         |
| 77  | [What are the benefits of style modules?](#what-is-the-benefit-of-styles-modules)                                                                                                                                                |
| 78  | [What are popular React-specific linters?](#what-are-the-popular-react-specific-linters)                                                                                                                                         |
|     | **React Router**                                                                                                                                                                                                                 |
| 79  | [What is React Router?](#what-is-react-router)                                                                                                                                                                                   |
| 80  | [How is React Router different from the history library?](#how-react-router-is-different-from-history-library)                                                                                                                   |
| 81  | [What are the <Router> components of React Router v6?](#what-are-the-router-components-of-react-router-v6)                                                                                                                       |
| 82  | [What is the purpose of the push and replace methods of history?](#what-is-the-purpose-of-push-and-replace-methods-of-history)                                                                                                   |
| 83  | [How do you programmatically navigate using React Router v4?](#how-do-you-programmatically-navigate-using-react-router-v4)                                                                                                       |
| 84  | [How do you get query parameters in React Router v4?](#how-to-get-query-parameters-in-react-router-v4)                                                                                                                           |
| 85  | [Why do you get a "Router may have only one child element" warning?](#why-you-get-router-may-have-only-one-child-element-warning)                                                                                                |
| 86  | [How do you pass params to the history.push method in React Router v4?](#how-to-pass-params-to-historypush-method-in-react-router-v4)                                                                                            |
| 87  | [How do you implement a default or NotFound page?](#how-to-implement-default-or-notfound-page)                                                                                                                                   |
| 88  | [How do you get history in React Router v4?](#how-to-get-history-on-react-router-v4)                                                                                                                                             |
| 89  | [How do you perform an automatic redirect after login?](#how-to-perform-automatic-redirect-after-login) 
|     | **React Internationalization**                                                                                                                                                                                                   |
| 90  | [What is React Intl?](#what-is-react-intl)                                                                                                                                                                                       |
| 91  | [What are the main features of React Intl?](#what-are-the-main-features-of-react-intl)                                                                                                                                           |
| 92  | [What are the two ways of formatting in React Intl?](#what-are-the-two-ways-of-formatting-in-react-intl)                                                                                                                         |
| 93  | [How do you use FormattedMessage as a placeholder with React Intl?](#how-to-use-formattedmessage-as-placeholder-using-react-intl)                                                                                                |
| 94  | [How do you access the current locale with React Intl?](#how-to-access-current-locale-with-react-intl)                                                                                                                           |
| 95  | [How do you format a date using React Intl?](#how-to-format-date-using-react-intl)                                                                                                                                               |
|     | **React Testing**                                                                                                                                                                                                                |
| 96  | [What is the Shallow Renderer in React testing?](#what-is-shallow-renderer-in-react-testing)                                                                                                                                     |
| 97  | [What is the TestRenderer package in React?](#what-is-testrenderer-package-in-react)                                                                                                                                             |
| 98  | [What is the purpose of the ReactTestUtils package?](#what-is-the-purpose-of-reacttestutils-package)                                                                                                                             |
| 99  | [What is Jest?](#what-is-jest)                                                                                                                                                                                                   |
| 100 | [What are the advantages of Jest over Jasmine?](#what-are-the-advantages-of-jest-over-jasmine)                                                                                                                                   |
| 101 | [Can you give a simple example of a Jest test case?](#give-a-simple-example-of-jest-test-case)                                                                                                                                   |
|     | **React Redux**                                                                                                                                                                                                                  |
| 102 | [What is Flux?](#what-is-flux)                                                                                                                                                                                                   |
| 103 | [What is Redux?](#what-is-redux)                                                                                                                                                                                                 |
| 104 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux)                                                                                                                                                 |
| 105 | [What are the downsides of Redux compared to Flux?](#what-are-the-downsides-of-redux-compared-to-flux)                                                                                                                           |
| 106 | [What is the difference between mapStateToProps() and mapDispatchToProps()?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)                                                                             |
| 107 | [Can you dispatch an action in a reducer?](#can-i-dispatch-an-action-in-reducer)                                                                                                                                                 |
| 108 | [How do you access the Redux store outside a component?](#how-to-access-redux-store-outside-a-component)                                                                                                                         |
| 109 | [What are the drawbacks of the MVW pattern?](#what-are-the-drawbacks-of-mvw-pattern)                                                                                                                                            |
| 110 | [Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs)                                                                                                                         |
| 111 | [How do you reset state in Redux?](#how-to-reset-state-in-redux)                                                                                                                                                                 |
| 112 | [What is the difference between React Context and React Redux?](#what-is-the-difference-between-react-context-and-react-redux)                                                                                                   |
| 113 | [Why are Redux state functions called reducers?](#why-are-redux-state-functions-called-reducers)                                                                                                                                 |
| 114 | [How do you make an AJAX request in Redux?](#how-to-make-ajax-request-in-redux)                                                                                                                                                  |
| 115 | [Should you keep all component states in the Redux store?](#should-i-keep-all-components-state-in-redux-store)                                                                                                                   |
| 116 | [What is the proper way to access the Redux store?](#what-is-the-proper-way-to-access-redux-store)                                                                                                                               |
| 117 | [What is the difference between a component and a container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux)                                                                               |
| 118 | [What is the purpose of constants in Redux?](#what-is-the-purpose-of-the-constants-in-redux)                                                                                                                                     |
| 119 | [What are the different ways to write mapDispatchToProps()?](#what-are-the-different-ways-to-write-mapdispatchtoprops)                                                                                                           |
| 120 | [What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?](#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops)                                                 |
| 121 | [How do you structure Redux top-level directories?](#how-to-structure-redux-top-level-directories)                                                                                                                               |
| 122 | [What is Redux Saga?](#what-is-redux-saga)                                                                                                                                                                                       |
| 123 | [What is the mental model of Redux Saga?](#what-is-the-mental-model-of-redux-saga)                                                                                                                                               |
| 124 | [What are the differences between call and put in Redux Saga?](#what-are-the-differences-between-call-and-put-in-redux-saga)                                                                                                     |
| 125 | [What is Redux Thunk?](#what-is-redux-thunk)                                                                                                                                                                                     |
| 126 | [What are the differences between Redux Saga and Redux Thunk?](#what-are-the-differences-between-redux-saga-and-redux-thunk)                                                                                                     |
| 127 | [What is Redux DevTools?](#what-is-redux-devtools)                                                                                                                                                                               |
| 128 | [What are the features of Redux DevTools?](#what-are-the-features-of-redux-devtools)                                                                                                                                             |
| 129 | [What are Redux selectors and why should you use them?](#what-are-redux-selectors-and-why-use-them)                                                                                                                              |
| 130 | [What is Redux Form?](#what-is-redux-form)                                                                                                                                                                                       |
| 131 | [What are the main features of Redux Form?](#what-are-the-main-features-of-redux-form)                                                                                                                                           |
| 132 | [How do you add multiple middlewares to Redux?](#how-to-add-multiple-middlewares-to-redux)                                                                                                                                       |
| 133 | [How do you set the initial state in Redux?](#how-to-set-initial-state-in-redux)                                                                                                                                                 |
| 134 | [How is Relay different from Redux?](#how-relay-is-different-from-redux)                                                                                                                                                         |
| 135 | [What is an action in Redux?](#what-is-an-action-in-redux)                                                                                                                                                                       |
|     | **React Native**                                                                                                                                                                                                                 |
| 136 | [What is the difference between React Native and React?](#what-is-the-difference-between-react-native-and-react)                                                                                                                 |
| 137 | [How do you test React Native apps?](#how-to-test-react-native-apps)                                                                                                                                                             |
| 138 | [How do you log in React Native?](#how-to-do-logging-in-react-native)                                                                                                                                                            |
| 139 | [How do you debug React Native apps?](#how-to-debug-your-react-native)                                                                                                                                                           |
|     | **React Supported Libraries and Integration**                                                                                                                                                                                    |
| 140 | [What is Reselect and how does it work?](#what-is-reselect-and-how-it-works)                                                                                                                                                     |
| 141 | [What is Flow?](#what-is-flow)                                                                                                                                                                                                   |
| 142 | [What is the difference between Flow and PropTypes?](#what-is-the-difference-between-flow-and-proptypes)                                                                                                                         |
| 143 | [How do you use Font Awesome icons in React?](#how-to-use-font-awesome-icons-in-react)                                                                                                                                           |
| 144 | [What is React DevTools?](#what-is-react-dev-tools)                                                                                                                                                                              |
| 145 | [Why does DevTools not load in Chrome for local files?](#why-is-devtools-not-loading-in-chrome-for-local-files)                                                                                                                  |
| 146 | [How do you use Polymer in React?](#how-to-use-polymer-in-react)                                                                                                                                                                 |
| 147 | [What are the advantages of React over Vue.js?](#what-are-the-advantages-of-react-over-vuejs)                                                                                                                                    |
| 148 | [What is the difference between React and Angular?](#what-is-the-difference-between-react-and-angular)                                                                                                                           |
| 149 | [Why is the React tab not showing up in DevTools?](#why-react-tab-is-not-showing-up-in-devtools)                                                                                                                                 |
| 150 | [What are styled-components?](#what-are-styled-components)                                                                                                                                                                       |
| 151 | [Can you give an example of styled-components?](#give-an-example-of-styled-components)                                                                                                                                           |
| 152 | [What is Relay?](#what-is-relay)                                                                                                                                                                                                 |
|     | **Miscellaneous**                                                                                                                                                                                                                |
| 153 | [What are the main features of the Reselect library?](#what-are-the-main-features-of-reselect-library)                                                                                                                           |
| 154 | [Can you give an example of Reselect usage?](#give-an-example-of-reselect-usage)                                                                                                                                                 |
| 155 | [Can Redux only be used with React?](#can-redux-only-be-used-with-react)                                                                                                                                                         |
| 156 | [Do you need a specific build tool to use Redux?](#do-you-need-to-have-a-particular-build-tool-to-use-redux)                                                                                                                     |
| 157 | [How do Redux Form initial values get updated from state?](#how-redux-form-initialvalues-get-updated-from-state)                                                                                                                 |
| 158 | [How do React PropTypes allow different types for one prop?](#how-react-proptypes-allow-different-types-for-one-prop)                                                                                                             |
| 159 | [Can you import an SVG file as a React component?](#can-i-import-an-svg-file-as-react-component)                                                                                                                                  |
| 160 | [What is render hijacking in React?](#what-is-render-hijacking-in-react)                                                                                                                                                         |
| 161 | [How do you pass numbers to a React component?](#how-to-pass-numbers-to-react-component)                                                                                                                                         |
| 162 | [Do you need to keep all state in Redux? Should you ever use React’s internal state?](#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state)                                                          |
| 163 | [What is the purpose of registerServiceWorker in React?](#what-is-the-purpose-of-registerserviceworker-in-react)                                                                                                                 |
| 164 | [What is the React.memo function?](#what-is-react-memo-function)                                                                                                                                                                 |
| 165 | [What is the React.lazy function?](#what-is-react-lazy-function)                                                                                                                                                                 |
| 166 | [How do you prevent unnecessary updates using setState?](#how-to-prevent-unnecessary-updates-using-setstate)                                                                                                                     |
| 167 | [How do you render arrays, strings, and numbers in React v16?](#how-do-you-render-array-strings-and-numbers-in-react-16-version)                                                                                                  |
| 168 | [What are Hooks?](#what-are-hooks)                                                                                                                                                                                               |
| 169 | [What rules must be followed for Hooks?](#what-rules-need-to-be-followed-for-hooks)                                                                                                                                             |
| 170 | [How do you ensure Hooks follow the rules in your project?](#how-to-ensure-hooks-followed-the-rules-in-your-project)                                                                                                             |
| 171 | [What are the differences between Flux and Redux?](#what-are-the-differences-between-flux-and-redux)                                                                                                                             |
| 172 | [What are the benefits of React Router v4?](#what-are-the-benefits-of-react-router-v4)                                                                                                                                           |
| 173 | [Can you describe the componentDidCatch lifecycle method signature?](#can-you-describe-about-componentdidcatch-lifecycle-method-signature)                                                                                       |
| 174 | [In which scenarios do error boundaries not catch errors?](#in-which-scenarios-do-error-boundaries-not-catch-errors)                                                                                                             |
| 175 | [What is the behavior of uncaught errors in React v16?](#what-is-the-behavior-of-uncaught-errors-in-react-16)                                                                                                                    |
| 176 | [What is the proper placement for error boundaries?](#what-is-the-proper-placement-for-error-boundaries)                                                                                                                         |
| 177 | [What is the benefit of a component stack trace from an error boundary?](#what-is-the-benefit-of-component-stack-trace-from-error-boundary)                                                                                       |
| 178 | [What are default props?](#what-are-default-props)                                                                                                                                                                               |
| 179 | [What is the purpose of the displayName class property?](#what-is-the-purpose-of-displayname-class-property)                                                                                                                     |
| 180 | [What is the browser support for React applications?](#what-is-the-browser-support-for-react-applications)                                                                                                                       |
| 181 | [What is code-splitting?](#what-is-code-splitting)                                                                                                                                                                               |
| 182 | [What are keyed Fragments?](#what-are-keyed-fragments)                                                                                                                                                                           |
| 183 | [Does React support all HTML attributes?](#does-react-support-all-html-attributes)                                                                                                                                               |
| 184 | [When do component props default to true?](#when-component-props-defaults-to-true)                                                                                                                                               |
| 185 | [What is Next.js and what are its major features?](#what-is-nextjs-and-major-features-of-it)                                                                                                                                     |
| 186 | [How do you pass an event handler to a component?](#how-do-you-pass-an-event-handler-to-a-component)                                                                                                                             |
| 187 | [How do you prevent a function from being called multiple times?](#how-to-prevent-a-function-from-being-called-multiple-times)                                                                                                   |
| 188 | [How does JSX prevent injection attacks?](#how-jsx-prevents-injection-attacks)                                                                                                                                                   |
| 189 | [How do you update rendered elements?](#how-do-you-update-rendered-elements)                                                                                                                                                     |
| 190 | [How do you indicate that props are read-only?](#how-do-you-say-that-props-are-read-only)                                                                                                                                        |
| 191 | [What are the conditions for safely using an index as a key?](#what-are-the-conditions-to-safely-use-the-index-as-a-key)                                                                                                         |
| 192 | [Do keys need to be globally unique?](#is-it-keys-should-be-globally-unique)                                                                                                                                                     |
| 193 | [What is the popular choice for form handling?](#what-is-the-popular-choice-for-form-handling)                                                                                                                                   |
| 194 | [What are the advantages of Formik over the Redux Form library?](#what-are-the-advantages-of-formik-over-redux-form-library)                                                                                                     |
| 195 | [Why are you not required to use inheritance?](#why-do-you-not-required-to-use-inheritance)                                                                                                                                       |
| 196 | [Can you use web components in a React application?](#can-i-use-web-components-in-react-application)                                                                                                                             |
| 197 | [What is a dynamic import?](#what-is-dynamic-import)                                                                                                                                                                             |
| 198 | [What are loadable components?](#what-are-loadable-components)                                                                                                                                                                   |
| 199 | [What is a Suspense component?](#what-is-suspense-component)                                                                                                                                                                     |
| 200 | [What is route-based code splitting?](#what-is-route-based-code-splitting)                                                                                                                                                       |
| 201 | [What is the purpose of the default value in Context?](#what-is-the-purpose-of-default-value-in-context)                                                                                                                         |
| 202 | [What is the diffing algorithm?](#what-is-diffing-algorithm)                                                                                                                                                                     |
| 203 | [What rules are covered by the diffing algorithm?](#what-are-the-rules-covered-by-diffing-algorithm)                                                                                                                             |
| 204 | [When do you need to use refs?](#when-do-you-need-to-use-refs)                                                                                                                                                                   |
| 205 | [Must a prop be named "render" for render props?](#is-it-prop-must-be-named-as-render-for-render-props)                                                                                                                          |
| 206 | [What are the problems with using render props with Pure Components?](#what-are-the-problems-of-using-render-props-with-pure-components)                                                                                         |
| 207 | [What is the windowing technique?](#what-is-windowing-technique)                                                                                                                                                                 |
| 208 | [How do you print falsy values in JSX?](#how-do-you-print-falsy-values-in-jsx)                                                                                                                                                   |
| 209 | [What is the typical use case for portals?](#what-is-the-typical-use-case-of-portals)                                                                                                                                           |
| 210 | [How do you set a default value for an uncontrolled component?](#how-do-you-set-default-value-for-uncontrolled-component)                                                                                                         |
| 211 | [What is your favorite React stack?](#what-is-your-favorite-react-stack)                                                                                                                                                         |
| 212 | [What is the difference between the real DOM and the Virtual DOM?](#what-is-the-difference-between-real-dom-and-virtual-dom)                                                                                                     |
| 213 | [How do you add Bootstrap to a React application?](#how-to-add-bootstrap-to-a-react-application)                                                                                                                                 |
| 214 | [Can you list the top websites or applications using React as a front-end framework?](#can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework)                                                         |
| 215 | [Is it recommended to use the CSS-in-JS technique in React?](#is-it-recommended-to-use-css-in-js-technique-in-react)                                                                                                             |
| 216 | [Do you need to rewrite all class components with Hooks?](#do-i-need-to-rewrite-all-my-class-components-with-hooks)                                                                                                              |
| 217 | [How do you fetch data with React Hooks?](#how-to-fetch-data-with-react-hooks)                                                                                                                                                   |
| 218 | [Do Hooks cover all use cases for classes?](#is-hooks-cover-all-use-cases-for-classes)                                                                                                                                           |
| 219 | [What is the stable release for Hooks support?](#what-is-the-stable-release-for-hooks-support)                                                                                                                                   |
| 220 | [Why do we use array destructuring (square bracket notation) in useState?](#why-do-we-use-array-destructuring-square-brackets-notation-in-usestate)                                                                               |
| 221 | [What sources were used for introducing Hooks?](#what-are-the-sources-used-for-introducing-hooks)                                                                                                                                |
| 222 | [How do you access the imperative API of web components?](#how-do-you-access-imperative-api-of-web-components)                                                                                                                   |
| 223 | [What is Formik?](#what-is-formik)                                                                                                                                                                                               |
| 224 | [What are typical middleware choices for handling asynchronous calls in Redux?](#what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux)                                                                     |
| 225 | [Do browsers understand JSX code?](#do-browsers-understand-jsx-code)                                                                                                                                                             |
| 226 | [Can you describe data flow in React?](#describe-about-data-flow-in-react)                                                                                                                                                       |
| 227 | [What is MobX?](#what-is-mobx)                                                                                                                                                                                                   |
| 228 | [What are the differences between Redux and MobX?](#what-are-the-differences-between-redux-and-mobx)                                                                                                                             |
| 229 | [Should you learn ES6 before learning ReactJS?](#should-i-learn-es6-before-learning-reactjs)                                                                                                                                     |
| 230 | [Explain concurrent rendering with an example](#explain-concurrent-rendering-with-an-example)                                                                                                                                   |
| 231 | [What is the difference between async mode and concurrent mode?](#what-is-the-difference-between-async-mode-and-concurrent-mode)                                                                                                 |
| 233 | [What is the purpose of the ESLint plugin for Hooks?](#what-is-the-purpose-of-eslint-plugin-for-hooks)                                                                                                                           |
| 234 | [What is the difference between imperative and declarative programming in React?](#what-is-the-difference-between-imperative-and-declarative-in-react)                                                                             |
| 235 | [What are the benefits of using TypeScript with ReactJS?](#what-are-the-benefits-of-using-typescript-with-reactjs)                                                                                                               |
| 236 | [How do you ensure a user remains authenticated on page refresh while using Context API state management?](#how-do-you-make-sure-that-user-remains-authenticated-on-page-refresh-while-using-context-api-state-management)         |
| 237 | [What are the benefits of the new JSX transform?](#what-are-the-benefits-of-new-jsx-transform)                                                                                                                                   |
| 238 | [How is the new JSX transform different from the old transform?](#how-is-the-new-jsx-transform-different-from-old-transform)                                                                                                     |
| 239 | [What are React Server Components?](#what-are-react-server-components)                                                                                                                                                           |
| 240 | [What is prop drilling?](#what-is-prop-drilling)                                                                                                                                                                                 |
| 241 | [What is the difference between the useState and useRef Hooks?](#what-is-the-difference-between-usestate-and-useref-hook)                                                                                                       |
| 242 | [What is a wrapper component?](#what-is-a-wrapper-component)                                                                                                                                                                     |
| 243 | [What are the differences between the useEffect and useLayoutEffect Hooks?](#what-are-the-differences-between-useeffect-and-uselayouteffect-hooks)                                                                               |
| 244 | [What are the differences between functional and class components?](#what-are-the-differences-between-functional-and-class-components)                                                                                           |
| 245 | [What is Strict Mode in React?](#what-is-strict-mode-in-react)                                                                                                                                                                   |
| 246 | [What is the benefit of Strict Mode?](#what-is-the-benefit-of-strict-mode)                                                                                                                                                       |
| 247 | [Why does Strict Mode render twice in React?](#why-does-strict-mode-render-twice-in-react)                                                                                                                                       |
| 248 | [What are the rules of JSX?](#what-are-the-rules-of-jsx)                                                                                                                                                                         |
| 249 | [What is the reason multiple JSX tags must be wrapped?](#what-is-the-reason-behind-multiple-jsx-tags-to-be-wrapped)                                                                                                              |
| 250 | [How do you prevent mutating array variables?](#how-do-you-prevent-mutating-array-variables)                                                                                                                                     |
| 251 | [What are capture phase events?](#what-are-capture-phase-events)                                                                                                                                                                 |
| 252 | [How does React update the screen in an application?](#how-does-react-updates-screen-in-an-application)                                                                                                                          |
| 253 | [How does React batch multiple state updates?](#how-does-react-batch-multiple-state-updates)                                                                                                                                     |
| 254 | [Is it possible to prevent automatic batching?](#is-it-possible-to-prevent-automatic-batching)                                                                                                                                   |
| 255 | [What is React hydration?](#what-is-react-hydration)                                                                                                                                                                             |
| 256 | [How do you update objects inside state?](#how-do-you-update-objects-inside-state)                                                                                                                                               |
| 257 | [How do you update nested objects inside state?](#How-do-you-update-nested-objects-inside-state)                                                                                                                                 |
| 258 | [How do you update arrays inside state?](#how-do-you-update-arrays-inside-state)                                                                                                                                                 |
| 259 | [How do you use the Immer library for state updates?](#how-do-you-use-immer-library-for-state-updates)                                                                                                                           |
| 260 | [What are the benefits of preventing direct state mutations?](#what-are-the-benefits-of-preventing-the-direct-state-mutations)                                                                                                 |
| 261 | [What are the preferred and non-preferred array operations for updating state?](#what-are-the-preferred-and-non-preferred-array-operations-for-updating-the-state)                                                             |
| 262 | [What will happen when defining nested function components?](#what-will-happen-by-defining-nested-function-components)                                                                                                         |
| 263 | [Can I use keys for non-list items?](#can-i-use-keys-for-non-list-items)                                                                                                                                                         |
| 264 | [What are the guidelines to follow for writing reducers?](#what-are-the-guidelines-to-be-followed-for-writing-reducers)                                                                                                       |
|     | **Hooks**                                                                                                                                                                                                                 |
| 265 | [What is useReducer hook? Can you describe its usage?](#what-is-use-reducer-hook-can-you-describe-its-usage)                                                                                                               |
| 266 | [How do you compare useState and useReducer?](#how-do-you-compare-use-state-and-use-reducer)                                                                                                                                     |
| 267 | [How does Context work with the useContext hook?](#how-does-context-works-using-usecontext-hook)                                                                                                                                 |
| 268 | [What are the use cases of the useContext hook?](#what-are-the-use-cases-of-usecontext-hook)                                                                                                                                     |
| 269 | [When should you use client and server components?](#when-to-use-client-and-server-components)                                                                                                                                   |
| 270 | [What are the differences between the Page Router and App Router in Next.js?](#what-are-the-differences-between-page-router-and-app-router-in-nextjs)                                                                            |
| 271 | [Can you describe the useMemo() Hook?](#can-you-describe-the-usememo-hook)                                                                                                                                                       |
| 272 | [Can Hooks be used in class components?](#can-hooks-be-used-in-class-components)                                                                                                                                                 |
| 273 | [What is an updater function? Should an updater function be used in all cases?](#what-is-an-updater-function-should-an-updater-function-be-used-in-all-cases)                                                                    |
| 274 | [Can useState take a function as an initial value?](#can-usestate-take-a-function-as-an-initial-value)                                                                                                                           |
| 275 | [What types of values can useState hold?](#what-types-of-values-can-usestate-hold)                                                                                                                                               |
| 276 | [What happens if you call useState conditionally?](#what-happens-if-you-call-usestate-conditionally)                                                                                                                             |
| 277 | [Is useState Synchronous or Asynchronous?](#is-usestate-synchronous-or-asynchronous)                                                                                                                                             |
| 278 | [Can you explain how useState works internally?](#can-you-explain-how-usestate-works-internally)                                                                                                                                 |
| 279 | [What is useReducer? Why do you use useReducer?](#what-is-usereducer-why-do-you-use-usereducer)                                                                                                                                   |
| 280 | [How does useReducer work? Explain with an example](#how-does-usereducer-works-explain-with-an-example)                                                                                                                          |
| 281 | [Can you combine useReducer with useContext?](#can-you-combine-usereducer-with-usecontext)                                                                                                                                       |
| 282 | [Can you dispatch multiple actions in a row with useReducer?](#can-you-dispatch-multiple-actions-in-a-row-with-usereducer)                                                                                                       |
| 283 | [Is dispatch from useReducer asynchronous and does it update state immediately?](#is-dispatch-from-usereducer-asynchronous-and-does-it-update-state-immediately)                                                                 |
| 284 | [How does useContext work? Explain with an example](#how-does-usecontext-works-explain-with-an-example)                                                                                                                          |
| 285 | [Can you use multiple Contexts in one component?](#can-you-use-multiple-contexts-in-one-component)                                                                                                                               |
| 286 | [What's a common pitfall when using useContext with objects?](#whats-a-common-pitfall-when-using-usecontext-with-objects)                                                                                                        |
| 287 | [What would the context value be for no matching provider?](#what-would-the-context-value-be-for-no-matching-provider)                                                                                                           |
| 288 | [How do reactive dependencies in the useEffect dependency array affect its execution behavior?](#how-do-reactive-dependencies-in-the-useeffect-dependency-array-affect-its-execution-behavior)                                   |
| 289 | [When and how often does React invoke the setup and cleanup functions inside a useEffect hook?](#when-and-how-often-does-react-invoke-the-setup-and-cleanup-functions-inside-a-useeffect-hook)                                   |
| 290 | [What happens if you return a Promise from useEffect?](#what-happens-if-you-return-a-promise-from-useeffect)                                                                                                                     |
| 291 | [Can you have multiple useEffect hooks in a single component?](#can-you-have-multiple-useeffect-hooks-in-a-single-component)                                                                                                     |
| 292 | [How to prevent infinite loops with useEffect?](#how-to-prevent-infinite-loops-with-useeffect)                                                                                                                                   |
| 293 | [What are the use cases of useLayoutEffect?](#what-are-the-usecases-of-uselayouteffect)                                                                                                                                          |
| 294 | [How does useLayoutEffect work during server-side rendering (SSR)?](#how-does-uselayouteffect-work-during-server-side-rendering-ssr)                                                                                             |
| 295 | [What happens if you use useLayoutEffect for non-layout logic?](#what-happens-if-you-use-uselayouteffect-for-non-layout-logic)                                                                                                   |
| 296 | [How does useLayoutEffect cause layout thrashing?](#how-does-uselayouteffect-cause-layout-thrashing)                                                                                                                             |
| 297 | [How do you use useRef to access a DOM element in React? Give an example](#how-do-you-use-useref-to-access-a-dom-element-in-react-give-an-example)                                                                               |
| 298 | [Can you use useRef to persist values across renders?](#can-you-use-useref-to-persist-values-across-renders)                                                                                                                     |
| 299 | [Can useRef be used to store previous values?](#can-useref-be-used-to-store-previous-values)                                                                                                                                     |
| 300 | [Is it possible to access a ref in the render method?](#is-it-possible-to-access-a-ref-in-the-render-method)                                                                                                                     |
| 301 | [What are the common use cases of useRef hook?](#what-are-the-common-usecases-of-useref-hook)                                                                                                                                    |
| 302 | [What is useImperativeHandle Hook? Give an example](#what-is-useimperativehandle-hook-give-an-example)                                                                                                                           |
| 303 | [When should you use useImperativeHandle?](#when-should-you-use-useimperativehandle)                                                                                                                                             |
| 304 | [Is it possible to use useImperativeHandle without forwardRef?](#is-that-possible-to-use-useimperativehandle-without-forwardref)                                                                                                 |
| 305 | [How is useMemo different from useCallback?](#how-is-usememo-different-from-usecallback)                                                                                                                                         |
| 306 | [Does useMemo prevent re-rendering of child components?](#does-usememo-prevent-re-rendering-of-child-components)                                                                                                                 |
| 307 | [What is useCallback and why is it used?](#what-is-usecallback-and-why-is-it-used)                                                                                                                                               |
| 308 | [What are Custom React Hooks, and how can you develop one?](#what-are-custom-react-hooks-and-how-can-you-develop-one)                                                                                                            |
| 309 | [How does React Fiber work? Explain in detail](#how-does-react-fiber-works-explain-in-detail)                                                                                                                                    |
| 310 | [What is the useId hook and when should you use it?](#what-is-the-useid-hook-and-when-should-you-use-it)                                                                                                                         |
| 311 | [What is the useDeferredValue hook?](#what-is-the-usedeferredvalue-hook)                                                                                                                                                         |
| 312 | [What is the useTransition hook and how does it differ from useDeferredValue?](#what-is-the-usetransition-hook-and-how-does-it-differ-from-usedeferredvalue)                                                                     |
| 313 | [What is the useSyncExternalStore hook?](#what-is-the-usesyncexternalstore-hook)                                                                                                                                                 |
| 314 | [What is the useInsertionEffect hook?](#what-is-the-useinsertioneffect-hook)                                                                                                                                                     |
| 315 | [How do you share state logic between components using custom hooks?](#how-do-you-share-state-logic-between-components-using-custom-hooks)                                                                                       |
| 316 | [What is the useDebugValue hook?](#what-is-the-usedebugvalue-hook)                                                                                                                                                               |
| 317 | [How do you handle cleanup in useEffect?](#how-do-you-handle-cleanup-in-useeffect)                                                                                                                                               |
| 318 | [What are the differences between useEffect and useEvent (experimental)?](#what-are-the-differences-between-useeffect-and-useevent-experimental)                                                                                 |
| 319 | [What are the best practices for using React Hooks?](#what-are-the-best-practices-for-using-react-hooks)                                                                                                                         |
|     | **Modern React Features (React 18/19)**                                                                                                                                                                                           |
| 320 | [What are the key features introduced in React 18?](#what-are-the-key-features-introduced-in-react-18)                                                                                                                            |
| 321 | [What are the key features introduced in React 19?](#what-are-the-key-features-introduced-in-react-19)                                                                                                                            |
| 322 | [What is the use() hook in React 19?](#what-is-the-use-hook-in-react-19)                                                                                                                                                         |
| 323 | [What are Server Actions in React 19?](#what-are-server-actions-in-react-19)                                                                                                                                                     |
| 324 | [What are useFormState and useFormStatus hooks?](#what-are-useformstate-and-useformstatus-hooks)                                                                                                                                 |
| 325 | [What is the useOptimistic hook?](#what-is-the-useoptimistic-hook)                                                                                                                                                               |
| 326 | [What is the React Compiler (React Forget)?](#what-is-the-react-compiler-react-forget)                                                                                                                                           |
| 327 | [What is Streaming SSR and how does React 18+ improve it?](#what-is-streaming-ssr-and-how-does-react-18-improve-it)                                                                                                              |
| 328 | [What is `renderToPipeableStream` and how is it different from renderToString?](#what-is-rendertopipeablestream-and-how-is-it-different-from-rendertostring)                                                                     |
| 329 | [What is the difference between HOCs and Hooks?](#what-is-the-difference-between-hocs-and-hooks)                                                                                                                                 |
| 330 | [Does `React.memo` prevent Context consumers from re-rendering?](#does-reactmemo-prevent-context-consumers-from-re-rendering)                                                                                                    |
| 331 | [How would you create a reusable Context?](#how-would-you-create-a-reusable-context)                                                                                                                                             |
| 332 | [Why is Redux Toolkit recommended over Redux?](#why-is-redux-toolkit-recommended-over-redux)                                                                                                                                     |
| 333 | [What is the difference between client state and server state?](#what-is-the-difference-between-client-state-and-server-state)                                                                                                   |
| 334 | [How do you prevent unnecessary Redux re-renders?](#how-do-you-prevent-unnecessary-redux-re-renders)                                                                                                                             |
| 335 | [What is `createSelector`?](#what-is-createselector)                                                                                                                                                                              |
| 336 | [What is normalized Redux state?](#what-is-normalized-redux-state)                                                                                                                                                                 |
| 337 | [Why is normalized state important for performance?](#why-is-normalized-state-important-for-performance)                                                                                                                         |
| 338 | [What is Redux middleware?](#what-is-redux-middleware)                                                                                                                                                                            |
| 339 | [What is the Redux middleware signature?](#what-is-the-redux-middleware-signature)                                                                                                                                                |
| 340 | [What happens when you dispatch an action?](#what-happens-when-you-dispatch-an-action)                                                                                                                                           |
| 341 | [How would you structure Redux in a large application?](#how-would-you-structure-redux-in-a-large-application)                                                                                                                   |
| 342 | [How do you handle cross-slice communication?](#how-do-you-handle-cross-slice-communication)                                                                                                                                     |
| 343 | [What are Redux serializable values?](#what-are-redux-serializable-values)                                                                                                                                                       |
| 344 | [How do you handle race conditions in Redux?](#how-do-you-handle-race-conditions-in-redux)                                                                                                                                       |
| 345 | [How do you persist Redux state?](#how-do-you-persist-redux-state)                                                                                                                                                               |
| 346 | [How do you debug a Redux performance problem?](#how-do-you-debug-a-redux-performance-problem)                                                                                                                                   |
| 347 | [What should be stored in Redux vs derived with selectors?](#what-should-be-stored-in-redux-vs-derived-with-selectors)                                                                                                           |
| 348 | [Would you put all API data into Redux?](#would-you-put-all-api-data-into-redux)                                                                                                                                                 |
| 349 | [What is the difference between BrowserRouter, HashRouter, and MemoryRouter?](#what-is-the-difference-between-browserrouter-hashrouter-and-memoryrouter)                                                                         |
| 350 | [What are dynamic routes and what are route parameters?](#what-are-dynamic-routes-and-what-are-route-parameters)                                                                                                                 |
| 351 | [How do you navigate programmatically in React Router?](#how-do-you-navigate-programmatically-in-react-router)                                                                                                                   |
| 352 | [What is the difference between Link, NavLink, and `<a>`?](#what-is-the-difference-between-link-navlink-and-a)                                                                                                                   |
| 353 | [How do you implement protected/private routes?](#how-do-you-implement-protectedprivate-routes)                                                                                                                                  |
| 354 | [How do you handle 404 / Not Found routes?](#how-do-you-handle-404--not-found-routes)                                                                                                                                             |
| 355 | [What are loaders, actions, and data APIs in modern React Router?](#what-are-loaders-actions-and-data-apis-in-modern-react-router)                                                                                                |
| 356 | [How do query parameters work?](#how-do-query-parameters-work)                                                                                                                                                                    |

</details>

### Table of Contents

<details open>
<summary>
Hide/Show table of contents
</summary>

| No. | Questions                                                                                                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | **Old Q&A**                                                                                                                                                                                |
| 0   | [What is Concurrent Rendering? (Legacy)](#what-is-concurrent-rendering-legacy)                                                                                                           |
| 1   | [Why should we not update the state directly?](#why-should-we-not-update-the-state-directly)                                                                                               |
| 2   | [What is the purpose of callback function as an argument of setState()?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)                                             |
| 3   | [How to bind methods or event handlers in JSX callbacks?](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks)                                                                         |
| 4   | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)                                                                       |
| 5   | [What is the use of refs?](#what-is-the-use-of-refs)                                                                                                                                       |
| 6   | [How to create refs?](#how-to-create-refs)                                                                                                                                                 |
| 7   | [What are forward refs?](#what-are-forward-refs)                                                                                                                                           |
| 8   | [Which is preferred option with in callback refs and findDOMNode()?](#which-is-preferred-option-with-in-callback-refs-and-finddomnode)                                                     |
| 9   | [Why are String Refs legacy?](#why-are-string-refs-legacy)                                                                                                                                 |
| 10  | [What are the different phases of component lifecycle?](#what-are-the-different-phases-of-component-lifecycle)                                                                             |
| 11  | [What are the lifecycle methods of React?](#what-are-the-lifecycle-methods-of-react)                                                                                                       |
| 12  | [How to create props proxy for HOC component?](#how-to-create-props-proxy-for-hoc-component)                                                                                               |
| 13  | [What is context?](#what-is-context)                                                                                                                                                       |
| 14  | [What is the purpose of using super constructor with props argument?](#what-is-the-purpose-of-using-super-constructor-with-props-argument)                                                 |
| 15  | [How to set state with a dynamic key name?](#how-to-set-state-with-a-dynamic-key-name)                                                                                                     |
| 16  | [What would be the common mistake of function being called every time the component renders?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders) |
| 17  | [What are error boundaries in React v16](#what-are-error-boundaries-in-react-v16)                                                                                                          |
| 18  | [How are error boundaries handled in React v15?](#how-are-error-boundaries-handled-in-react-v15)                                                                                           |
| 19  | [What is the purpose of render method of react-dom?](#what-is-the-purpose-of-render-method-of-react-dom)                                                                                   |
| 20  | [What will happen if you use setState in constructor?](#what-will-happen-if-you-use-setstate-in-constructor)                                                                               |
| 21  | [Is it good to use setState() in componentWillMount() method?](#is-it-good-to-use-setstate-in-componentwillmount-method)                                                                   |
| 22  | [What will happen if you use props in initial state?](#what-will-happen-if-you-use-props-in-initial-state)                                                                                 |
| 23  | [How you use decorators in React?](#how-you-use-decorators-in-react)                                                                                                                       |
| 24  | [What is CRA and its benefits?](#what-is-cra-and-its-benefits)                                                                                                                             |
| 25  | [What is the lifecycle methods order in mounting?](#what-is-the-lifecycle-methods-order-in-mounting)                                                                                       |
| 26  | [What are the lifecycle methods going to be deprecated in React v16?](#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16)                                                 |
| 27  | [What is the purpose of getDerivedStateFromProps() lifecycle method?](#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method)                                                   |
| 28  | [What is the purpose of getSnapshotBeforeUpdate() lifecycle method?](#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method)                                                     |
| 29  | [What is the recommended way for naming components?](#what-is-the-recommended-way-for-naming-components)                                                                                   |
| 30  | [What is the recommended ordering of methods in component class?](#what-is-the-recommended-ordering-of-methods-in-component-class)                                                         |
| 31  | [Why we need to pass a function to setState()?](#why-we-need-to-pass-a-function-to-setstate)                                                                                               |
| 32  | [Why is isMounted() an anti-pattern and what is the proper solution?](#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution)                                                   |
| 33  | [What is the difference between constructor and getInitialState?](#what-is-the-difference-between-constructor-and-getinitialstate)                                                         |
| 34  | [Can you force a component to re-render without calling setState?](#can-you-force-a-component-to-re-render-without-calling-setstate)                                                       |
| 35  | [What is the difference between super() and super(props) in React using ES6 classes?](#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes)                     |
| 36  | [What is the difference between setState and replaceState methods?](#what-is-the-difference-between-setstate-and-replacestate-methods)                                                     |
| 37  | [How to listen to state changes?](#how-to-listen-to-state-changes)                                                                                                                         |
| 38  | [What is the recommended approach of removing an array element in react state?](#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state)                             |
| 39  | [Is it possible to use React without rendering HTML?](#is-it-possible-to-use-react-without-rendering-html)                                                                                 |
| 40  | [What are the possible ways of updating objects in state?](#what-are-the-possible-ways-of-updating-objects-in-state)                                                                       |
| 41  | [What are the approaches to include polyfills in your create-react-app?](#what-are-the-approaches-to-include-polyfills-in-your-create-react-app)                                           |
| 42  | [How to use https instead of http in create-react-app?](#how-to-use-https-instead-of-http-in-create-react-app)                                                                             |
| 43  | [How to avoid using relative path imports in create-react-app?](#how-to-avoid-using-relative-path-imports-in-create-react-app)                                                             |
| 44  | [How to update a component every second?](#how-to-update-a-component-every-second)                                                                                                         |
| 45  | [Why is a component constructor called only once?](#why-is-a-component-constructor-called-only-once)                                                                                       |
| 46  | [How to define constants in React?](#how-to-define-constants-in-react)                                                                                                                     |
| 47  | [How to programmatically trigger click event in React?](#how-to-programmatically-trigger-click-event-in-react)                                                                             |
| 48  | [How to make AJAX call and In which component lifecycle methods should I make an AJAX call?](#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call)   |
| 49  | [What are render props?](#what-are-render-props)                                                                                                                                           |
| 50  | [How to dispatch an action on load?](#how-to-dispatch-an-action-on-load)                                                                                                                   |
| 51  | [How to use connect from React Redux?](#how-to-use-connect-from-react-redux)                                                                                                               |
| 52  | [Whats the purpose of at symbol in the redux connect decorator?](#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator)                                                           |
| 53  | [How to use TypeScript in create-react-app application?](#how-to-use-typescript-in-create-react-app-application)                                                                           |
| 54  | [Does the statics object work with ES6 classes in React?](#does-the-statics-object-work-with-es6-classes-in-react)                                                                         |
| 55  | [Why are inline ref callbacks or functions not recommended?](#why-are-inline-ref-callbacks-or-functions-not-recommended)                                                                   |
| 56  | [What are HOC factory implementations?](#what-are-hoc-factory-implementations)                                                                                                             |
| 57  | [How to use class field declarations syntax in React classes?](#how-to-use-class-field-declarations-syntax-in-react-classes)                                                               |
| 58  | [Why do you not need error boundaries for event handlers?](#why-do-you-not-need-error-boundaries-for-event-handlers)                                                                       |
| 59  | [What is the difference between try catch block and error boundaries?](#what-is-the-difference-between-try-catch-block-and-error-boundaries)                                               |
| 60  | [What is the required method to be defined for a class component?](#what-is-the-required-method-to-be-defined-for-a-class-component)                                                       |
| 61  | [What are the possible return types of render method?](#what-are-the-possible-return-types-of-render-method)                                                                               |
| 62  | [What is the main purpose of constructor?](#what-is-the-main-purpose-of-constructor)                                                                                                       |
| 63  | [Is it mandatory to define constructor for React component?](#is-it-mandatory-to-define-constructor-for-react-component)                                                                   |
| 64  | [Why should not call setState in componentWillUnmount?](#why-should-not-call-setstate-in-componentwillunmount)                                                                             |
| 65  | [What is the purpose of getDerivedStateFromError?](#what-is-the-purpose-of-getderivedstatefromerror)                                                                                       |
| 66  | [What is the methods order when component re-rendered?](#what-is-the-methods-order-when-component-re-rendered)                                                                             |
| 67  | [What are the methods invoked during error handling?](#what-are-the-methods-invoked-during-error-handling)                                                                                 |
| 68  | [What is the purpose of unmountComponentAtNode method?](#what-is-the-purpose-of-unmountcomponentatnode-method)                                                                             |
| 69  | [What are the limitations with HOCs?](#what-are-the-limitations-with-hocs)                                                                                                                 |
| 70  | [How to debug forwardRefs in DevTools?](#how-to-debug-forwardrefs-in-devtools)                                                                                                             |
| 71  | [Is it good to use arrow functions in render methods?](#is-it-good-to-use-arrow-functions-in-render-methods)                                                                               |
| 72  | [How do you say that state updates are merged?](#how-do-you-say-that-state-updates-are-merged)                                                                                             |
| 73  | [How do you pass arguments to an event handler?](#how-do-you-pass-arguments-to-an-event-handler)                                                                                           |
| 74  | [How to prevent component from rendering?](#how-to-prevent-component-from-rendering)                                                                                                       |
| 75  | [Give an example on How to use context?](#give-an-example-on-how-to-use-context)                                                                                                           |
| 76  | [How do you use contextType?](#how-do-you-use-contexttype)                                                                                                                                 |
| 77  | [What is a consumer?](#what-is-a-consumer)                                                                                                                                                 |
| 78  | [How do you solve performance corner cases while using context?](#how-do-you-solve-performance-corner-cases-while-using-context)                                                           |
| 79  | [What is the purpose of forward ref in HOCs?](#what-is-the-purpose-of-forward-ref-in-hocs)                                                                                                 |
| 80  | [Is it ref argument available for all functions or class components?](#is-it-ref-argument-available-for-all-functions-or-class-components)                                                 |
| 81  | [Why do you need additional care for component libraries while using forward refs?](#why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs)                     |
| 82  | [How to create react class components without ES6?](#how-to-create-react-class-components-without-es6)                                                                                     |
| 83  | [Is it possible to use react without JSX?](#is-it-possible-to-use-react-without-jsx)                                                                                                       |
| 84  | [How do you create HOC using render props?](#how-do-you-create-hoc-using-render-props)                                                                                                     |
| 85  | [What is react scripts?](#what-is-react-scripts)                                                                                                                                           |
| 86  | [What are the features of create react app?](#what-are-the-features-of-create-react-app)                                                                                                   |
| 87  | [What is the purpose of renderToNodeStream method?](#what-is-the-purpose-of-rendertonodestream-method)                                                                                     |
| 88  | [How do you get redux scaffolding using create-react-app?](#how-do-you-get-redux-scaffolding-using-create-react-app)                                                                       |
| 89  | [What is state mutation and how to prevent it?](#what-is-state-mutation-and-how-to-prevent-it)                                                                                             |
| 90  | [What are React Mixins?](#what-are-react-mixins)                                                                                                                                           |
| 91  | [Can I use javascript urls in react16.9?](#can-i-use-javascript-urls-in-react169)                                                                                                          |

</details>

## Core React

1.  ### What is React?

    React (aka React.js or ReactJS) is an **open-source front-end JavaScript library** for building user interfaces based on components. It's used for handling the view layer in web and mobile applications, and allows developers to create reusable UI components and manage the state of those components efficiently.

    React was created by [Jordan Walke](https://github.com/jordwalke), a software engineer at Facebook (now Meta). It was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. The library was open-sourced in May 2013 and has since become one of the most popular JavaScript libraries for building modern user interfaces.

    **[⬆ Back to Top](#table-of-contents)**

   2.  ### What is the history behind React evolution?
       The history of ReactJS started in 2010 with the creation of **XHP**. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements.

       The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user.

       But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name **FaxJ** by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.

       <details>
           <summary><b>See deep-dive answer</b></summary>
           The evolution of React has a fascinating history that spans over a decade:
    
       **2010-2011: The Origins**
       - The journey began with **XHP**, a PHP extension created at Facebook that allowed HTML components to be used in PHP code
       - XHP improved front-end code readability and helped prevent cross-site scripting (XSS) attacks
       - However, XHP had limitations with dynamic web applications, requiring frequent server roundtrips and complete UI re-renders for small changes

       **2011-2012: Early Development**
       - Jordan Walke created the first prototype called **FaxJS** (later renamed to React), inspired by XHP's component model
       - The key innovation was bringing XHP's component model to JavaScript with performance improvements
       - React introduced the Virtual DOM concept to solve the performance issues of full page re-renders
       - First deployed internally on Facebook's News Feed in 2011 and Instagram in 2012

       **2013: Public Release**
       - React was officially open-sourced at JSConf US in May 2013
       - Initial public reception was mixed, with some developers skeptical about the JSX syntax and the approach of mixing markup with JavaScript

       **2014-2015: Growing Adoption**
       - React Native was announced in 2015, extending React's paradigm to mobile app development
       - The ecosystem began to grow with tools like Redux for state management
       - Companies beyond Facebook began adopting React for production applications

       **2016-2018: Maturation**
       - React 16 ("Fiber") was released in 2017 with a complete rewrite of the core architecture
       - Introduction of new features like Error Boundaries, Portals, and improved server-side rendering
       - React 16.3 introduced the Context API for easier state management

       **2019-Present: Modern React**
       - React Hooks were introduced in React 16.8 (February 2019), revolutionizing state management in functional components
       - React 17 (October 2020) focused on making React upgrades easier
       - React 18 (March 2022) introduced concurrent rendering and automatic batching
       - React continues to evolve with Server Components, the new React compiler (React Forget), and other performance improvements
       </details>

       **Note:** JSX, React's syntax extension, was indeed inspired by XHP's approach of embedding XML-like syntax in code.

       **[⬆ Back to Top](#table-of-contents)**

3.  ### What are the major features of React?

    React offers a powerful set of features that have made it one of the most popular JavaScript libraries for building user interfaces:

    **Core Features:**

    - **Component-Based Architecture**: React applications are built using components - independent, reusable pieces of code that return HTML via a render function. This modular approach enables better code organization, reusability, and maintenance.

    - **Virtual DOM**: React creates an in-memory data structure cache, computes the resulting differences, and efficiently updates only the changed parts in the browser DOM. This approach significantly improves performance compared to direct DOM manipulation.

    - **JSX (JavaScript XML)**: A syntax extension that allows writing HTML-like code in JavaScript. JSX makes the code more readable and expressive while providing the full power of JavaScript.

    - **Unidirectional Data Flow**: React follows a one-way data binding model where data flows from parent to child components. This makes the code more predictable and easier to debug.

    - **Declarative UI**: React allows you to describe what your UI should look like for a given state, and it handles the DOM updates when the underlying data changes.

    **Advanced Features:**

    - **React Hooks**: Introduced in React 16.8, hooks allow using state and other React features in functional components without writing classes.

    - **Context API**: Provides a way to share values between components without explicitly passing props through every level of the component tree.

    - **Error Boundaries**: Components that catch JavaScript errors anywhere in their child component tree and display fallback UI instead of crashing.

    - **Server-Side Rendering (SSR)**: Enables rendering React components on the server before sending HTML to the client, improving performance and SEO.

    - **Concurrent Mode**: A set of new features (in development) that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed.

    - **React Server Components**: A new feature that allows components to be rendered entirely on the server, reducing bundle size and improving performance.

    - **Suspense**: A feature that lets your components "wait" for something before rendering, supporting code-splitting and data fetching with cleaner code.

    These features collectively make React powerful for building everything from small widgets to complex, large-scale web applications.

    **[⬆ Back to Top](#table-of-contents)**

4.  ### What is JSX?

    _JSX_ stands for _JavaScript XML_ and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the `React.createElement(type, props, ...children)` function, giving us expressiveness of JavaScript along with HTML like template syntax.

    In the example below, the text inside `<h1>` tag is returned as JavaScript function to the render function.

    ```jsx harmony
    export default function App() {
      return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
    }
    ```

    If you don't use JSX syntax then the respective JavaScript code should be written as below,

    ```javascript
    import { createElement } from "react";

    export default function App() {
      return createElement(
        "h1",
        { className: "greeting" },
        "Hello, this is a JSX Code!"
      );
    }
    ```

     <details><summary><b>See Class</b></summary>
     <p>

    ```jsx harmony
    class App extends React.Component {
      render() {
        return <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>;
      }
    }
    ```

     </p>
     </details>

    **Note:** JSX is stricter than HTML

    **[⬆ Back to Top](#table-of-contents)**

5.  ### What is the difference between an Element and a Component?

      **Element:**
      - A React **Element** is a plain JavaScript object that describes what you want to see on the UI. It represents a DOM node or a component at a specific point in time. 
      - Elements are immutable: once created, you cannot change their properties. Instead, you create new elements to reflect updates.
      - Elements can be nested within other elements through their `props`.
      - Creating an element is a fast, lightweight operation—it does **not** create any actual DOM nodes or render anything to the screen directly.

        **Example (without JSX):**
        ```js
        const element = React.createElement("button", { id: "login-btn" }, "Login");
        ```

        **Equivalent JSX syntax:**
        ```jsx
        <button id="login-btn">Login</button>
        ```

        **The object returned by `React.createElement`:**
        ```js
        {
          type: 'button',
          props: {
            id: 'login-btn',
            children: 'Login'
          }
        }
        ```
        Elements are then passed to the React DOM renderer (e.g., `ReactDOM.render()`), which translates them to actual DOM nodes.

        ---

      **Component:**
      - A **Component** is a function or class that returns an element (or a tree of elements) to describe part of the UI. Components can accept inputs (called **props**) and manage their own state (in case of class or function components with hooks).
      - Components allow you to split the UI into independent, reusable pieces, each isolated and composable.
      - You can define a component using a function or a class:

        **Example (Function Component with JSX):**
        ```jsx
        const Button = ({ handleLogin }) => (
          <button id="login-btn" onClick={handleLogin}>
            Login
          </button>
        );
        ```

        When JSX is compiled, it's transformed into a tree of `React.createElement` calls:

        ```js
        const Button = ({ handleLogin }) =>
          React.createElement(
            "button",
            { id: "login-btn", onClick: handleLogin },
            "Login"
          );
        ```

        ---

      **In summary:**
      - **Elements** are the smallest building blocks in React—objects that describe what you want to see.
      - **Components** are functions or classes that return elements and encapsulate logic, structure, and behavior for parts of your UI.

       > Think of **elements** as the instructions for creating UI, and **components** as reusable blueprints that combine logic and structure to generate those instructions.

    **[⬆ Back to Top](#table-of-contents)**

6.  ### How to create components in React?

    Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.

    1. **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the one and only one parameter and return React elements to render the output:

       ```jsx harmony
       function Greeting({ message }) {
         return <h1>{`Hello, ${message}`}</h1>;
       }
       ```

    2. **Class Components:** You can also use ES6 class to define a component. The above function component can be written as a class component:

       ```jsx harmony
       class Greeting extends React.Component {
         render() {
           return <h1>{`Hello, ${this.props.message}`}</h1>;
         }
       }
       ```

    **[⬆ Back to Top](#table-of-contents)**

7.  ### When to use a Class Component over a Function Component?

    After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

    But even there are two reasons to use Class components over Function components.

    1. If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
    2. In older versions, If the component needs _state or lifecycle methods_ then you need to use class component.

    So the summary to this question is as follows:

    **Use Function Components:**

    - If you don't need state or lifecycle methods, and your component is purely presentational.
    - For simplicity, readability, and modern code practices, especially with the use of React Hooks for state and side effects.

    **Use Class Components:**

    - If you need to manage state or use lifecycle methods.
    - In scenarios where backward compatibility or integration with older code is necessary.

    **Note:** You can also use reusable [react error boundary](https://github.com/bvaughn/react-error-boundary) third-party component without writing any class. i.e, No need to use class components for Error boundaries.

    The usage of Error boundaries from the above library is quite straight forward.

    > **_Note when using react-error-boundary:_** ErrorBoundary is a client component. You can only pass props to it that are serializable or use it in files that have a `"use client";` directive.

    ```jsx
    "use client";

    import { ErrorBoundary } from "react-error-boundary";

    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ExampleApplication />
    </ErrorBoundary>;
    ```

    **[⬆ Back to Top](#table-of-contents)**

8.  ### What are Pure Components?

    Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized `React.memo()` API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

    But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.

    The syntactic representation of memoized components looks like below,

    ```jsx
    const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
    ```

    Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).

    ```jsx
    import { memo, useState } from "react";

    const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
      return (
        <>
          <p>Name:{name}</p>
          <p>Email: {email}</p>
        </>
      );
    });
    export default function EmployeeRegForm() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      return (
        <>
          <label>
            Name:{" "}
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:{" "}
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <hr />
          <EmployeeProfile name={name} />
        </>
      );
    }
    ```

    In the above code, the email prop has not been passed to child component. So there won't be any re-renders for email prop change.

    In class components, the components extending _`React.PureComponent`_ instead of _`React.Component`_ become the pure components. When props or state changes, _PureComponent_ will do a shallow comparison on both props and state by invoking `shouldComponentUpdate()` lifecycle method.

    **Note:** `React.memo()` is a higher-order component.

    **[⬆ Back to Top](#table-of-contents)**

9.  ### What is state in React?

    _State_ of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

    ![state](images/state.jpg)

    Let's take an example of **User** component with `message` state. Here, **useState** hook has been used to add state to the User component and it returns an array with current state and function to update it.

    ```jsx harmony
    import { useState } from "react";

    function User() {
      const [message, setMessage] = useState("Welcome to React world");

      return (
        <div>
          <h1>{message}</h1>
        </div>
      );
    }
    ```

    Whenever React calls your component or access `useState` hook, it gives you a snapshot of the state for that particular render.

    <details><summary><b>See Class</b></summary>
    <p>

    ```jsx harmony
    import React from "react";
    class User extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          message: "Welcome to React world",
        };
      }

      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        );
      }
    }
    ```

    </p>
    </details>

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are props in React?

    _Props_ are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    1. Pass custom data to your component.
    2. Trigger state changes.
    3. Use via `this.props.reactProp` inside component's `render()` method.

    For example, let us create an element with `reactProp` property:

    ```jsx harmony
    <Element reactProp={"1"} />
    ```

    This `reactProp` (or whatever you came up with) attribute name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

    ```jsx harmony
    props.reactProp;
    ```

    For example, the usage of props in function component looks like below:

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";

    const ChildComponent = (props) => {
      return (
        <div>
          <p>{props.name}</p>
          <p>{props.age}</p>
          <p>{props.gender}</p>
        </div>
      );
    };

    const ParentComponent = () => {
      return (
        <div>
          <ChildComponent name="John" age="30" gender="male" />
          <ChildComponent name="Mary" age="25" geneder="female" />
        </div>
      );
    };
    ```

The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). It is also possible to fallback to default value when the prop value is not specified. The above child component can be simplified like below.

```jsx harmony
const ChildComponent = ({ name, age, gender = "male" }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
    </div>
  );
};
```

**Note:** The default value won't be used if you pass `null` or `0` value. i.e, default value is only used if the prop value is missed or `undefined` value has been passed.

  <details><summary><b>See Class</b></summary>
     The Props accessed in Class Based Component as below

```jsx
import React from "react";
import ReactDOM from "react-dom";

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.gender}</p>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent name="John" age="30" gender="male" />
        <ChildComponent name="Mary" age="25" gender="female" />
      </div>
    );
  }
}
```

  </details>

**[⬆ Back to Top](#table-of-contents)**

11. ### What is the difference between state and props?

    In React, both **state** and **props** are plain JavaScript objects, but they serve different purposes and have distinct behaviors:

    ### State
    - **Definition:**  
      State is a data structure that is managed within a component. It represents information that can change over the lifetime of the component.
    - **Mutability:**  
      State is mutable, meaning it can be changed using the setter function (`setState` in class components or the updater function from `useState` in functional components).
    - **Scope:**  
      State is local to the component where it is defined. Only that component can modify its own state.
    - **Usage:**  
      State is typically used for data that needs to change in response to user actions, network responses, or other dynamic events.
    - **Re-rendering:**  
      Updating the state triggers a re-render of the component and its descendants.

    ### Props
    - **Definition:**  
      Props (short for “properties”) are inputs to a component, provided by its parent component.
    - **Mutability:**  
      Props are read-only. A component cannot modify its own props; they are immutable from the component’s perspective.
    - **Scope:**  
      Props are used to pass data and event handlers down the component tree, enabling parent components to configure or communicate with their children.
    - **Usage:**  
      Props are commonly used to make components reusable and configurable. They allow the same component to be rendered with different data or behavior.
    - **Analogy:**  
      Think of props as arguments to a function, whereas state is like variables declared inside the function.

    ### Summary Table

    | Feature   | State                               | Props                             |
    |-----------|-------------------------------------|-----------------------------------|
    | Managed by| The component itself                | Parent component                  |
    | Mutable   | Yes                                 | No (read-only)                    |
    | Scope     | Local to the component              | Passed from parent to child       |
    | Usage     | Manage dynamic data and UI changes  | Configure and customize component |
    | Update    | Using setState/useState             | Cannot be updated by the component|

    ---

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is the difference between HTML and React event handling?

    Below are some of the main differences between HTML and React event handling,

    1. In HTML, the event name usually represents in _lowercase_ as a convention:

       ```html
       <button onclick="activateLasers()"></button>
       ```

       Whereas in React it follows _camelCase_ convention:

       ```jsx harmony
       <button onClick={activateLasers}>
       ```

    2. In HTML, you can return `false` to prevent default behavior:

       ```html
       <a
         href="#"
         onclick='console.log("The link was clicked."); return false;'
       />
       ```

       Whereas in React you must call `preventDefault()` explicitly:

       ```javascript
       function handleClick(event) {
         event.preventDefault();
         console.log("The link was clicked.");
       }
       ```

    3. In HTML, you need to invoke the function by appending `()`
       Whereas in react you should not append `()` with the function name. (refer "activateLasers" function in the first point for example)

    **[⬆ Back to Top](#table-of-contents)**

13. ### What are synthetic events in React?

    `SyntheticEvent` is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using `nativeEvent` attribute.

    Let's take an example of `BookStore` title search component with the ability to get all native event properties

    ```js
    function BookStore() {
      function handleTitleChange(e) {
        console.log("The new title is:", e.target.value);
        console.log('Synthetic event:', e); // React SyntheticEvent
        console.log('Native event:', e.nativeEvent); // Browser native event
        e.stopPropagation();
        e.preventDefault();
      }

      return <input name="title" onChange={handleTitleChange} />;
    }
    ```
    
    List of common synthetic events are:

    *   `onClick`
    *   `onChange`
    *   `onSubmit`
    *   `onKeyDown`, `onKeyUp`
    *   `onFocus`, `onBlur`
    *   `onMouseEnter`, `onMouseLeave`
    *   `onTouchStart`, `onTouchEnd`

    **[⬆ Back to Top](#table-of-contents)**

14. ### What are inline conditional expressions?

    You can use either _if statements_ or _ternary expressions_ which are available in JS(and JSX in React) to conditionally execute or render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator `&&`. It is helpful to render elements conditionally within a single line and commonly used for concise logic, especially in JSX rendering.

    ```jsx harmony
    <h1>Hello!</h1>;
    {
      messages.length > 0 && !isLogin ? (
        <h2>You have {messages.length} unread messages.</h2>
      ) : (
        <h2>You don't have unread messages.</h2>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is "key" prop and what is the benefit of using it in arrays of elements?

    A `key` is a special attribute you **should** include when mapping over arrays to render data. _Key_ prop helps React identify which items have changed, are added, or are removed.

    Keys should be unique among its siblings. Most often we use ID from our data as _key_:

    ```jsx harmony
    const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
    ```

    When you don't have stable IDs for rendered items, you may use the item _index_ as a _key_ as a last resort:

    ```jsx harmony
    const todoItems = todos.map((todo, index) => (
      <li key={index}>{todo.text}</li>
    ));
    ```
    **Benefits of key:**
      *   Enables React to **efficiently update and re-render** components.
      *   Prevents unnecessary re-renders by **reusing** components when possible.
      *   Helps **maintain internal state** of list items correctly.

    **Note:**

    1. Using _indexes_ for _keys_ is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
    2. If you extract list item as separate component then apply _keys_ on list component instead of `li` tag.
    3. There will be a warning message in the console if the `key` prop is not present on list items.
    4. The key attribute accepts either string or number and internally convert it as string type.
    5. Don't generate the key on the fly something like `key={Math.random()}`. Because the keys will never match up between re-renders and DOM created everytime.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is Virtual DOM?

    The _Virtual DOM_ (VDOM) is a lightweight, in-memory representation of _Real DOM_ used by libraries like React to optimize UI rendering. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called _reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

17. ### How Virtual DOM works?

    The _Virtual DOM_ works in five simple steps.

    **1. Initial Render**  
        When a UI component renders for the first time, it returns JSX. React uses this structure to create a Virtual DOM tree, which is a lightweight copy of the actual DOM. This Virtual DOM is then used to build and render the Real DOM in the browser.

    **2. State or Props Change**  
        When the component's state or props change, React creates a new Virtual DOM reflecting the updated UI. However, it doesn't immediately update the Real DOM; instead, it works in memory to prepare for an efficient update.
               
      ![vdom](images/vdom1.png)

    **3. Diffing Algorithm**  
        React then compares the new Virtual DOM with the previous one using a process called diffing. It determines what has changed between the two versions and identifies the minimal set of updates needed.
       
       ![vdom2](images/vdom2.png)  

    **4. Reconciliation**  
        Based on the diffing results, React decides which parts of the Real DOM should be updated. It avoids re-rendering the entire DOM and instead updates only the elements that actually changed.
        
       ![vdom3](images/vdom3.png)

    **5. Efficient DOM Updates**  
        This entire process—working with the Virtual DOM, diffing, and selective updating—makes the UI rendering much faster and more efficient than manipulating the Real DOM directly.

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the difference between Shadow DOM and Virtual DOM?

    The _Shadow DOM_ is a browser technology designed primarily for scoping variables and CSS in _web components_. The _Virtual DOM_ is a concept implemented by libraries in JavaScript on top of browser APIs.

    The key differences in a table format shown below:

    | Feature | Shadow DOM | Virtual DOM |
    | --- | --- | --- |
    | Purpose | Encapsulation for Web Components | Efficient UI rendering |
    | Managed by | Browser | JS frameworks (e.g., React) |
    | DOM Type | Part of real DOM (scoped) | In-memory representation |
    | Encapsulation | Yes | No |
    | Use Case | Web Components, scoped styling | UI diffing and minimal DOM updates |

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is React Fiber?

    **React Fiber** is the **new reconciliation engine** in React, introduced in React 16. It’s a complete rewrite of React’s core algorithm(old stack-based algorithm) for rendering and updating the UI. Fiber enhances React’s ability to handle **asynchronous rendering**, **prioritized updates**(assign priority to different types of updates), and **interruption**(ability to pause, abort, or reuse work) of rendering work, enabling smoother and more responsive user interfaces.

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the main goal of React Fiber?

    The goal of _React Fiber_ is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

    Its main goals are:

    *   **Incremental Rendering** – Breaks work into chunks for smoother updates.
    *   **Interruptible Rendering** – Pauses and resumes rendering to keep the UI responsive.
    *   **Prioritization** – Handles high-priority updates (e.g. animations) before low-priority ones.
    *   **Concurrency Support** – Enables working on multiple UI versions simultaneously.
    *   **Better Error Handling** – Supports component-level error boundaries.
    *   **Suspense Support** – Allows waiting for async data before rendering.
    *   **Improved DevTools** – Enables better debugging and performance tracking.

    **[⬆ Back to Top](#table-of-contents)**

21. ### What are controlled components?

    A **controlled component** is a React component that **fully manages the form element's state**(e.g, elements like `<input>`, `<textarea>`, or `<select>`))  using React's internal state mechanism. i.e, The component does not manage its own internal state — instead, React acts as the single source of truth for form data.

    The controlled components will be implemented using the below steps,

    1. Initialize the state using `useState` hooks in function components or inside constructor for class components.
    2. Set the value of the form element to the respective state variable.
    3. Create an event handler(`onChange`) to handle the user input changes through `useState`'s updater function or `setState` from class component.
    4. Attach the above event handler to form element's change or click events

    **Note:** React re-renders the component every time the input value changes.

   For example, the name input field updates the username using `handleChange` event handler as below,

   ```javascript
   import React, { useState } from "react";

   function UserProfile() {
     const [username, setUsername] = useState("");

     const handleChange = (e) => {
       setUsername(e.target.value);
     };

     return (
       <form>
         <label>
           Name:
           <input type="text" value={username} onChange={handleChange} />
         </label>
       </form>
     );
   }
   ```
   In these components, DOM does not hold the actual data instead React does.
   
   **Benefits:**

   *   Easy to implement **validation**, **conditional formatting**, or **live feedback**.
   *   Full control over form data.
   *   Easier to test and debug because the data is centralized in the component’s state.

   **[⬆ Back to Top](#table-of-contents)**

22. ### What are uncontrolled components?
    The **Uncontrolled components** are form elements (like `<input>`, `<textarea>`, or `<select>`) that **manage their own state internally** via the **DOM**, rather than through React state.
    You can query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML.

    The uncontrolled components will be implemented using the below steps,

    1. Create a ref using `useRef` react hook in function component or `React.createRef()` in class based component.
    2. Attach this `ref` to the form element.
    3. The form element value can be accessed directly through `ref` in event handlers or `componentDidMount` for class components

    In the below UserProfile component, the `username` input is accessed using ref.

    ```jsx harmony
    import React, { useRef } from "react";

    function UserProfile() {
      const usernameRef = useRef(null);

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("The submitted username is: " + usernameRef.current.value);
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" ref={usernameRef} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }
    ```
    **Note:** Here, DOM is in charge of the value. React only accesses the value when needed (via `ref`).

    **Benefits:**
     *   **Less boilerplate** — no need for `useState` and `onChange`.
     *   Useful for **quick form setups** or when integrating with **non-React code**.
     *   Slightly better **performance** in very large forms (fewer re-renders).

    In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

    <details><summary><b>See Class</b></summary>
    <p>

    ```jsx harmony
    class UserProfile extends React.Component {
      constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }

      handleSubmit(event) {
        alert("A name was submitted: " + this.input.current.value);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              {"Name:"}
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ```

    </p>
    </details>

**[⬆ Back to Top](#table-of-contents)**

23. ### What is the difference between createElement and cloneElement?
    Both `React.createElement` and `React.cloneElement` are used to work with React elements, but they serve different purposes.

    #### **createElement:** 
    Creates a new React element from scratch. JSX elements will be transpiled to `React.createElement()` functions to create React elements which are going to be used for the object representation of UI.
    **Syntax:**
    ```jsx
    React.createElement(type, props, ...children)
    ```
    **Example:**
    ```jsx
    React.createElement('button', { className: 'btn' }, 'Click Me')
    ```
    #### **cloneElement:**
     The `cloneElement` method is used to clone an existing React element and optionally adds or overrides props.

    **Syntax:**
    ```jsx
    React.cloneElement(element, newProps, ...children)
    ```
    **Example:**
    ```jsx
    const button = <button className="btn">Click Me</button>;
    const cloned = React.cloneElement(button, { className: 'btn-primary' });
    // Result: <button className="btn-primary">Click Me</button>
    ```
    **[⬆ Back to Top](#table-of-contents)**

24. ### What is Lifting State Up in React?

    When several components need to share the same changing data then it is recommended to _lift the shared state up_ to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

    **[⬆ Back to Top](#table-of-contents)**

25. ### What are Higher-Order Components?

    A _higher-order component_ (_HOC_) is a function that takes a component and returns a new enhanced component with additional props, behavior, or data. It’s a design pattern based on React’s compositional nature, allowing you to reuse logic across multiple components without modifying their internals.

    We consider HOCs **pure components** because they don’t mutate or copy behavior from the original component—they simply **wrap it**, enhance it, and pass through the necessary props. The wrapped component remains decoupled and reusable.

    ```javascript
    const EnhancedComponent = higherOrderComponent(WrappedComponent);
    ```
    Let's take an example of a `withAuth` higher-order component (HOC) in React. This HOC will check if a user is authenticated and either render the wrapped component if authenticated or redirect (or show a message) if not.

    **withAuth HOC Example:**
    ```jsx
    import React from 'react';
    import { Navigate } from 'react-router-dom'; // For redirection (assuming React Router v6)

    const isAuthenticated = () => {
      // e.g., check for a valid token in localStorage or context
      return !!localStorage.getItem('authToken');
    };

    function withAuth(WrappedComponent) {
      return function AuthenticatedComponent(props) {
        if (!isAuthenticated()) {
          // User is NOT authenticated, redirect to login page
          return <Navigate to="/login" replace />;
        }

        // User is authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
      };
    }

    export default withAuth;
    ```
    **Usage**
    ```jsx
    import React from 'react';
    import withAuth from './withAuth';

    function Dashboard() {
      return <h1>Welcome to the Dashboard!</h1>;
    }

    // Wrap Dashboard with withAuth HOC
    export default withAuth(Dashboard);
    ```

    HOC can be used for many use cases:

    1. Code reuse, logic and bootstrap abstraction (e.g., fetching data, permissions, theming).
    2. Render hijacking (e.g., conditional rendering or layout changes).
    3. State abstraction and manipulation(e.g., handling form logic).
    4. Props manipulation(e.g., injecting additional props or filtering them).
    
    Some of the real-world examples of HOCs in react eco-system:
    1. connect() from react-redux
    2. withRouter() from React Router v5
    3. withTranslation() from react-i18next
    4. withApollo() from Apollo client
    5. withFormik from Formik library
    6. withTheme from styled components

    **[⬆ Back to Top](#table-of-contents)**

26. ### What is children prop?
    The `children` prop is a special prop in React used to pass elements between the opening and closing tags of a component. It is commonly used in layout and wrapper componnents. 

    A simple usage of children prop looks as below,

    ```jsx harmony
    function MyDiv({ children }){
        return (
          <div>
            {children}
          </div>;
        );
    }

    export default function Greeting() {
      return (
        <MyDiv>
          <span>{"Hello"}</span>
          <span>{"World"}</span>
        </MyDiv>
      );
    }
    ```
    Here, everything inside `<MyDiv>...</MyDiv>` is passed as children to the custom div component.

    The children can be text, JSX elements, fragments, arrays and functions(for advance use case like render props).

    <details><summary><b>See Class</b></summary>
    <p>

    ```jsx harmony
    const MyDiv = React.createClass({
      render: function () {
        return <div>{this.props.children}</div>;
      },
    });

    ReactDOM.render(
      <MyDiv>
        <span>{"Hello"}</span>
        <span>{"World"}</span>
      </MyDiv>,
      node
    );
    ```

    </p>
    </details>

    **Note:** There are several methods available in the legacy React API to work with this prop. These include `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only`, `React.Children.toArray`.

    **[⬆ Back to Top](#table-of-contents)**

27. ### How to write comments in React?

    The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.

    **Single-line comments:**

    ```jsx harmony
    <div>
      {/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

    **Multi-line comments:**

    ```jsx harmony
    <div>
      {/* Multi-line comments for more than
       one line */}
      {`Welcome ${user}, let's play React`}
    </div>
    ```

    You can use `//` and `/* */` in JS logic, hooks, and functions.

    **[⬆ Back to Top](#table-of-contents)**

28. ### What is reconciliation?

    `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the `real DOM` and the copy of DOM `(Virtual DOM)` when there's an update of components.
    React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by `Diffing Algorithm`.
    Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called _Reconciliation_.

    **[⬆ Back to Top](#table-of-contents)**

29. ### Does the lazy function support named exports?

    No, currently `React.lazy` function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components.
    Let's take a component file which exports multiple named components,

    ```javascript
    // MoreComponents.js
    export const SomeComponent = /* ... */;
    export const UnusedComponent = /* ... */;
    ```

    and reexport `MoreComponents.js` components in an intermediate file `IntermediateComponent.js`

    ```javascript
    // IntermediateComponent.js
    export { SomeComponent as default } from "./MoreComponents.js";
    ```

    Now you can import the module using lazy function as below,

    ```javascript
    import React, { lazy } from "react";
    const SomeComponent = lazy(() => import("./IntermediateComponent.js"));
    ```

    **[⬆ Back to Top](#table-of-contents)**

30. ### Why React uses `className` over `class` attribute?

    React uses **className** instead of **class** because of a JavaScript naming conflict with the class keyword.

    1. `class` is a reserved keyword in JavaScript
        In JavaScript, class is used to define ES6 classes:
      
        ```js
        class Person {
          constructor(name) {
            this.name = name;
          }
        }
        ```
        If you try to use class as a variable or property name, it will throw a syntax error. Since JSX is just JavaScript with XML-like syntax, using class directly in JSX would break the parser.

    2. JSX Is JavaScript
    
        When you write JSX like this:
        ```jsx
        <div class="btn">Click</div>
        ```
        It will be compiled to:
        ```jsx
        React.createElement('div', { class: 'btn' }, 'Click');
        ```
        But `class` is invalid in this object literal context (since it clashes with the JS keyword), hence React instead uses className.
        ```jsx
        <div className="btn">Click</div>
        ```
        which compiles to:
        ```jsx
        React.createElement('div', { className: 'btn' }, 'Click');
        ```
        React then translates `className` to` class` in the final HTML DOM.

    3. Aligns with DOM APIs
        In vanilla JavaScript, you interact with element classes using:
        ```js
        element.className = 'my-class';
        ```
        React follows this convention, staying consistent with the DOM API's property name rather than HTML’s attribute.

    **[⬆ Back to Top](#table-of-contents)**

31. ### What are fragments?

    It's a common pattern or practice in React for a component to return multiple elements. _Fragments_ let you group a list of children without adding extra nodes to the DOM.
    You need to use either `<Fragment>` or a shorter syntax having empty tag (`<></>`).

    Below is the example of how to use fragment inside _Story_ component.

    ```jsx harmony
    function Story({ title, description, date }) {
      return (
        <Fragment>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
        </Fragment>
      );
    }
    ```

    It is also possible to render list of fragments inside a loop with the mandatory **key** attribute supplied.

    ```jsx harmony
    function StoryBook() {
      return stories.map((story) => (
        <Fragment key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          <p>{story.date}</p>
        </Fragment>
      ));
    }
    ```

    Usually, you don't need to use `<Fragment>` until there is a need of _key_ attribute. The usage of shorter syntax looks like below.

    ```jsx harmony
    function Story({ title, description, date }) {
      return (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

32. ### Why fragments are better than container divs?

    Below are the list of reasons to prefer fragments over container DOM elements,

    1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    2. Some CSS mechanisms like _Flexbox_ and _CSS Grid_ have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    3. The DOM Inspector is less cluttered.

    **[⬆ Back to Top](#table-of-contents)**

33. ### What are portals in React?

    A Portal is a React feature that enables rendering children into a DOM node that exists outside the parent component's DOM hierarchy, while still preserving the React component hierarchy. Portals help avoid CSS stacking issues—for example, elements with position: fixed may not behave as expected inside a parent with transform. Portals solve this by rendering content (like modals or tooltips) outside such constrained DOM contexts.

    ```javascript
    ReactDOM.createPortal(child, container);
    ```
    *   `child`: Any valid React node (e.g., JSX, string, fragment).
    *   `container`: A real DOM node (e.g., `document.getElementById('modal-root')`).

    Even though the content renders elsewhere in the DOM, it still behaves like a normal child in React. It has access to context, state, and event handling.

    **Example:- Modal:**
    ```jsx
    function Modal({ children }) {
      return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.body)
      );
    }
    ```
    The above code will render the modal content into the body element in the HTML, not inside the component's usual location.

    **[⬆ Back to Top](#table-of-contents)**

34. ### What are stateless components?

    If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether.

    **[⬆ Back to Top](#table-of-contents)**

35. ### What are stateful components?

    If the behaviour of a component is dependent on the _state_ of the component then it can be termed as stateful component. These _stateful components_ are either function components with hooks or _class components_.

    Let's take an example of function stateful component which update the state based on click event,

    ```javascript
    import React, {useState} from 'react';

    const App = (props) => {
    const [count, setCount] = useState(0);
    handleIncrement() {
      setCount(count+1);
    }

    return (
      <>
        <button onClick={handleIncrement}>Increment</button>
        <span>Counter: {count}</span>
      </>
      )
    }
    ```

    <details><summary><b>See Class</b></summary>
    <p>
    The equivalent class stateful component with a state that gets initialized in the `constructor`.

    ```jsx harmony
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      handleIncrement() {
        setState({ count: this.state.count + 1 });
      }

      render() {
        <>
          <button onClick={() => this.handleIncrement}>Increment</button>
          <span>Count: {count}</span>
        </>;
      }
    }
    ```

    </p>
    </details>

    **[⬆ Back to Top](#table-of-contents)**

36. ### How to apply validation on props in React?

    When the application is running in _development mode_, React will automatically check all props that we set on components to make sure they have _correct type_. If the type is incorrect, React will generate warning messages in the console. It's disabled in _production mode_ due to performance impact. The mandatory props are defined with `isRequired`.

    The set of predefined prop types:

    1. `PropTypes.number`
    2. `PropTypes.string`
    3. `PropTypes.array`
    4. `PropTypes.object`
    5. `PropTypes.func`
    6. `PropTypes.node`
    7. `PropTypes.element`
    8. `PropTypes.bool`
    9. `PropTypes.symbol`
    10. `PropTypes.any`

    We can define `propTypes` for `User` component as below:

    ```jsx harmony
    import React from "react";
    import PropTypes from "prop-types";

    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      };

      render() {
        return (
          <>
            <h1>{`Welcome, ${this.props.name}`}</h1>
            <h2>{`Age, ${this.props.age}`}</h2>
          </>
        );
      }
    }
    ```

    **Note:** In React v15.5 _PropTypes_ were moved from `React.PropTypes` to `prop-types` library.
    
    **Modern Recommendation:** While PropTypes are still supported, **TypeScript** is now the industry standard for type checking in React applications. Consider using TypeScript for better type safety, IDE support, and compile-time error detection.

    _The Equivalent Functional Component_

    ```jsx harmony
    import React from "react";
    import PropTypes from "prop-types";

    function User({ name, age }) {
      return (
        <>
          <h1>{`Welcome, ${name}`}</h1>
          <h2>{`Age, ${age}`}</h2>
        </>
      );
    }

    User.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    };
    ```
    
    _Modern TypeScript Version_

    ```tsx
    import React from "react";

    interface UserProps {
      name: string;
      age: number;
    }

    function User({ name, age }: UserProps) {
      return (
        <>
          <h1>{`Welcome, ${name}`}</h1>
          <h2>{`Age, ${age}`}</h2>
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

37. ### What are the advantages of React?

    Below are the list of main advantages of React,

    1. Increases the application's performance with _Virtual DOM_.
    2. JSX makes code easy to read and write.
    3. It renders both on client and server side (_SSR_).
    4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    5. Easy to write unit and integration tests with tools such as Jest.

    **[⬆ Back to Top](#table-of-contents)**

38. ### What are the limitations of React?

    Apart from the advantages, there are few limitations of React too,

    1. React is just a view library, not a full framework.
    2. There is a learning curve for beginners who are new to web development.
    3. Integrating React into a traditional MVC framework requires some additional configuration.
    4. The code complexity increases with inline templating and JSX.
    5. Too many smaller components leading to over engineering or boilerplate.

    **[⬆ Back to Top](#table-of-contents)**

39. ### What are the recommended ways for static type checking?

    **Modern Recommendation (2026):** **TypeScript** is the industry standard for type checking in React applications.

    While PropTypes (`React.PropTypes` moved to `prop-types` package since React v15.5) are still available for runtime type checking, they have significant limitations:
    - Only check types at runtime
    - No compile-time errors
    - Limited IDE autocomplete support
    - No inference for complex types

    **TypeScript is now the recommended approach** because it provides:
    - Compile-time type checking
    - Excellent IDE support with IntelliSense
    - Type inference and generic types
    - Better refactoring capabilities
    - Growing ecosystem and community support

    **Note:** Flow (Facebook's type checker) has seen declining adoption and is rarely used in new projects.

    **Example with TypeScript:**
    ```tsx
    interface UserProps {
      name: string;
      age: number;
      isActive?: boolean;
    }

    function User({ name, age, isActive = true }: UserProps) {
      return <div>{name} - {age}</div>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

40. ### What is the use of `react-dom` package?

    The `react-dom` package provides _DOM-specific methods_ that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    1. `render()`
    2. `hydrate()`
    3. `unmountComponentAtNode()`
    4. `findDOMNode()`
    5. `createPortal()`

    **[⬆ Back to Top](#table-of-contents)**

41. ### What is ReactDOMServer?

    The `ReactDOMServer` object enables you to render components to static markup (typically used on node server). This object is mainly used for _server-side rendering_ (SSR). The following methods can be used in both the server and browser environments:

    1. `renderToString()`
    2. `renderToStaticMarkup()`

    For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call `renderToString` to render your root component to a string, which you then send as response.

    ```javascript
    // using Express
    import { renderToString } from "react-dom/server";
    import MyPage from "./MyPage";

    app.get("/", (req, res) => {
      res.write(
        "<!DOCTYPE html><html><head><title>My Page</title></head><body>"
      );
      res.write('<div id="content">');
      res.write(renderToString(<MyPage />));
      res.write("</div></body></html>");
      res.end();
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

42. ### How to use innerHTML in React?

    The `dangerouslySetInnerHTML` attribute is React's replacement for using `innerHTML` in the browser DOM. Just like `innerHTML`, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a `__html` object as key and HTML text as value.

    In this example MyComponent uses `dangerouslySetInnerHTML` attribute for setting HTML markup:

    ```jsx harmony
    function createMarkup() {
      return { __html: "First &middot; Second" };
    }

    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

43. ### How to use styles in React?

    The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

    ```jsx harmony
    const divStyle = {
      color: "blue",
      backgroundImage: "url(" + imgUrl + ")",
    };

    function HelloWorldComponent() {
      return <div style={divStyle}>Hello World!</div>;
    }
    ```

    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. `node.style.backgroundImage`).

    **[⬆ Back to Top](#table-of-contents)**

44. ### How events are different in React?

    Handling events in React elements has some syntactic differences:

    1. React event handlers are named using camelCase, rather than lowercase.
    2. With JSX you pass a function as the event handler, rather than a string.

    **[⬆ Back to Top](#table-of-contents)**

45. ### What is the impact of indexes as keys?

    Keys should be stable, predictable, and unique so that React can keep track of elements.

    In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do and creates confusing bugs in the application.

    ```jsx harmony
    {
      todos.map((todo, index) => <Todo {...todo} key={index} />);
    }
    ```

    If you use element data for unique key, assuming `todo.id` is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

    ```jsx harmony
    {
      todos.map((todo) => <Todo {...todo} key={todo.id} />);
    }
    ```

    **Note:** If you don't specify `key` prop at all, React will use index as a key's value while iterating over an array of data.

    **[⬆ Back to Top](#table-of-contents)**

46. ### How do you conditionally render components?

    In some cases you want to render different components depending on some state. JSX does not render `false` or `undefined`, so you can use conditional _short-circuiting_ to render a given part of your component only if a certain condition is true.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address && <p>{address}</p>}
      </div>
    );
    ```

    If you need an `if-else` condition then use _ternary operator_.

    ```jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address ? <p>{address}</p> : <p>{"Address is not available"}</p>}
      </div>
    );
    ```

    **[⬆ Back to Top](#table-of-contents)**

47. ### Why we need to be careful when spreading props on DOM elements?

    When we _spread props_ we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with `...rest` operator, so it will add only required props.

    For example,

    ```jsx harmony
    const ComponentA = () => (
      <ComponentB isDisplay={true} className={"componentStyle"} />
    );

    const ComponentB = ({ isDisplay, ...domProps }) => (
      <div {...domProps}>{"ComponentB"}</div>
    );
    ```

    **[⬆ Back to Top](#table-of-contents)**

48. ### How do you memoize a component?

    There are memoize libraries available which can be used on function components.

    For example `moize` library can memoize the component in another component.

    ```jsx harmony
    import moize from "moize";
    import Component from "./components/Component"; // this module exports a non-memoized component

    const MemoizedFoo = moize.react(Component);

    const Consumer = () => {
      <div>
        {"I will memoize the following entry:"}
        <MemoizedFoo />
      </div>;
    };
    ```

    **Update:** Since React v16.6.0, we have a `React.memo`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

    ```js
    const MemoComponent = React.memo(function MemoComponent(props) {
      /* render using props */
    });
    OR;
    export default React.memo(MyFunctionComponent);
    ```

    **[⬆ Back to Top](#table-of-contents)**

49. ### How you implement Server Side Rendering or SSR?

    React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

    ```jsx harmony
    import ReactDOMServer from "react-dom/server";
    import App from "./App";

    ReactDOMServer.renderToString(<App />);
    ```

    This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.

    **[⬆ Back to Top](#table-of-contents)**

50. ### How to enable production mode in React?

    You should use Webpack's `DefinePlugin` method to set `NODE_ENV` to `production`, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.

    **[⬆ Back to Top](#table-of-contents)**

51. ### Do Hooks replace render props and higher order components?

    Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.

    **[⬆ Back to Top](#table-of-contents)**

52. ### What is a switching component?

    A _switching component_ is a component that renders one of many components. We need to use object to map prop values to components.

    For example, a switching component to display different pages based on `page` prop:

    ```jsx harmony
    import HomePage from "./HomePage";
    import AboutPage from "./AboutPage";
    import ServicesPage from "./ServicesPage";
    import ContactPage from "./ContactPage";

    const PAGES = {
      home: HomePage,
      about: AboutPage,
      services: ServicesPage,
      contact: ContactPage,
    };

    const Page = (props) => {
      const Handler = PAGES[props.page] || ContactPage;

      return <Handler {...props} />;
    };

    // The keys of the PAGES object can be used in the prop types to catch dev-time errors.
    Page.propTypes = {
      page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

54. ### What are the Pointer Events supported in React?

    _Pointer Events_ provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the _Pointer Events_ specification.

    The following event types are now available in _React DOM_:

    1. `onPointerDown`
    2. `onPointerMove`
    3. `onPointerUp`
    4. `onPointerCancel`
    5. `onGotPointerCapture`
    6. `onLostPointerCapture`
    7. `onPointerEnter`
    8. `onPointerLeave`
    9. `onPointerOver`
    10. `onPointerOut`

    **[⬆ Back to Top](#table-of-contents)**

55. ### Why should component names start with capital letter?

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

    ```jsx harmony
    function SomeComponent {
      // Code goes here
    }
    ```

    You can define function component whose name starts with lowercase letter, but when it's imported it should have a capital letter. Here lowercase is fine:

    ```jsx harmony
    function myComponent {
      render() {
        return <div />;
      }
    }

    export default myComponent;
    ```

    While when imported in another file it should start with capital letter:

    ```jsx harmony
    import MyComponent from "./myComponent";
    ```

    **[⬆ Back to Top](#table-of-contents)**

56. ### Are custom DOM attributes supported in React v16?

    **Note:** This question references React v16, which is outdated. The information below applies to React 16+, including current versions (React 18/19).

    Yes. Starting with React 16, React no longer ignores unknown DOM attributes. If you write JSX with an attribute that React doesn't recognize, React will pass it through to the DOM.

    For example, let's take a look at the below attribute:

    ```jsx harmony
    <div mycustomattribute={"something"} />
    ```

    In React 15 and earlier, this would render an empty div:

    ```html
    <div />
    ```

    In React 16 and later (including React 18/19), any unknown attributes will end up in the DOM:

    ```html
    <div mycustomattribute="something" />
    ```

    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.

    **[⬆ Back to Top](#table-of-contents)**

57. ### How to loop inside JSX?

    You can simply use `Array.prototype.map` with ES6 _arrow function_ syntax.

    For example, the `items` array of objects is mapped into an array of components:

    ```jsx harmony
    <tbody>
      {items.map((item) => (
        <SomeComponent key={item.id} name={item.name} />
      ))}
    </tbody>
    ```

    But you can't iterate using `for` loop:

    ```jsx harmony
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    ```

    This is because JSX tags are transpiled into _function calls_, and you can't use statements inside expressions. This may change thanks to `do` expressions which are _stage 1 proposal_.

    **[⬆ Back to Top](#table-of-contents)**

58. ### How do you access props in attribute quotes?

    React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:

    ```jsx harmony
    <img className="image" src="images/{this.props.image}" />
    ```

    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:

    ```jsx harmony
    <img className="image" src={"images/" + this.props.image} />
    ```

    Using _template strings_ will also work:

    ```jsx harmony
    <img className="image" src={`images/${this.props.image}`} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

59. ### What is React proptype array with shape?

    If you want to pass an array of objects to a component with a particular shape then use `React.PropTypes.shape()` as an argument to `React.PropTypes.arrayOf()`.

    ```javascript
    ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          color: React.PropTypes.string.isRequired,
          fontSize: React.PropTypes.number.isRequired,
        })
      ).isRequired,
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

60. ### How to conditionally apply class attributes?

    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

    ```jsx harmony
    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
    ```

    Instead you need to move curly braces outside (don't forget to include spaces between class names):

    ```jsx harmony
    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
    ```

    _Template strings_ will also work:

    ```jsx harmony
    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>
    ```

    **[⬆ Back to Top](#table-of-contents)**

61. ### What is the difference between React and ReactDOM?

    The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have _server-side rendering_ support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

    **[⬆ Back to Top](#table-of-contents)**

62. ### Why ReactDOM is separated from React?

    The React team worked on extracting all DOM-related features into a separate library called _ReactDOM_. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

    To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native.

    **[⬆ Back to Top](#table-of-contents)**

63. ### How to use React label element?

    If you try to render a `<label>` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.

    ```jsx harmony
    <label for={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

    Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.

    ```jsx harmony
    <label htmlFor={'user'}>{'User'}</label>
    <input type={'text'} id={'user'} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

64. ### How to combine multiple inline style objects?

    You can use _spread operator_ in regular React:

    ```jsx harmony
    <button style={{ ...styles.panel.button, ...styles.panel.submitButton }}>
      {"Submit"}
    </button>
    ```

    If you're using React Native then you can use the array notation:

    ```jsx harmony
    <button style={[styles.panel.button, styles.panel.submitButton]}>
      {"Submit"}
    </button>
    ```

    **[⬆ Back to Top](#table-of-contents)**

65. ### How to re-render the view when the browser is resized?

    You can use the `useState` hook to manage the width and height state variables, and the `useEffect` hook to add and remove the `resize` event listener. The `[]` dependency array passed to useEffect ensures that the effect only runs once (on mount) and not on every re-render.

    ```javascript
    import React, { useState, useEffect } from "react";
    function WindowDimensions() {
      const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      useEffect(() => {
        function handleResize() {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return (
        <span>
          {dimensions.width} x {dimensions.height}
        </span>
      );
    }
    ```

    <details>
    <summary><h4>Using Class Component</h4></summary>

    You can listen to the `resize` event in `componentDidMount()` and then update the dimensions (`width` and `height`). You should remove the listener in `componentWillUnmount()` method.

    ```javascript
    class WindowDimensions extends React.Component {
      constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
      }

      componentWillMount() {
        this.updateDimensions();
      }

      componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
      }

      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
      }

      updateDimensions() {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      render() {
        return (
          <span>
            {this.state.width} x {this.state.height}
          </span>
        );
      }
    }
    ```

    </details>

**[⬆ Back to Top](#table-of-contents)**

66. ### How to pretty print JSON with React?

    We can use `<pre>` tag so that the formatting of the `JSON.stringify()` is retained:

    ```jsx harmony
    const data = { name: "John", age: 42 };

    function User {
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }

    const container = createRoot(document.getElementById("container"));

    container.render(<User />);
    ```

      <details><summary><b>See Class</b></summary>
      <p>

    ```jsx harmony
    const data = { name: "John", age: 42 };

    class User extends React.Component {
      render() {
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
      }
    }

    React.render(<User />, document.getElementById("container"));
    ```

      </p>
      </details>

**[⬆ Back to Top](#table-of-contents)**

67. ### Why can't you update props in React?

    The React philosophy is that props should be _immutable_(read only) and _top-down_. This means that a parent can send any prop values to a child, but the child can't modify received props.

**[⬆ Back to Top](#table-of-contents)**

68. ### How to focus an input element on page load?

    You need to use `useEffect` hook to set focus on input field during page load time for functional component.

    ```jsx harmony
    import React, { useEffect, useRef } from "react";

    const App = () => {
      const inputElRef = useRef(null);

      useEffect(() => {
        inputElRef.current.focus();
      }, []);

      return (
        <div>
          <input defaultValue={"Won't focus"} />
          <input ref={inputElRef} defaultValue={"Will focus"} />
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById("app"));
    ```

      <details><summary><b>See Class</b></summary>
      <p>
      You can do it by creating _ref_ for `input` element and using it in `componentDidMount()`:

    ```jsx harmony
    class App extends React.Component {
      componentDidMount() {
        this.nameInput.focus();
      }

      render() {
        return (
          <div>
            <input defaultValue={"Won't focus"} />
            <input
              ref={(input) => (this.nameInput = input)}
              defaultValue={"Will focus"}
            />
          </div>
        );
      }
    }

    ReactDOM.render(<App />, document.getElementById("app"));
    ```

      </p>
      </details>

**[⬆ Back to Top](#table-of-contents)**

69. ### How can we find the version of React at runtime in the browser?

    You can use `React.version` to get the version.

    ```jsx harmony
    const REACT_VERSION = React.version;

    ReactDOM.render(
      <div>{`React version: ${REACT_VERSION}`}</div>,
      document.getElementById("app")
    );
    ```

**[⬆ Back to Top](#table-of-contents)**

70. ### How to add Google Analytics for React Router?

    Add a listener on the `history` object to record each page view:

    ```javascript
    history.listen(function (location) {
      window.ga("set", "page", location.pathname + location.search);
      window.ga("send", "pageview", location.pathname + location.search);
    });
    ```

**[⬆ Back to Top](#table-of-contents)**

71. ### How do you apply vendor prefixes to inline styles in React?

    React _does not_ apply _vendor prefixes_ automatically. You need to add vendor prefixes manually.

    ```jsx harmony
    <div
      style={{
        transform: "rotate(90deg)",
        WebkitTransform: "rotate(90deg)", // note the capital 'W' here
        msTransform: "rotate(90deg)", // 'ms' is the only lowercase vendor prefix
      }}
    />
    ```

**[⬆ Back to Top](#table-of-contents)**

72. ### How to import and export components using React and ES6?

    You should use default for exporting the components

    ```jsx harmony
    import User from "user";

    export default function MyProfile {
        return <User type="customer">//...</User>;
    }
    ```

    <details><summary><b>See Class</b></summary>
    <p>
     ```jsx harmony
     import React from "react";
     import User from "user";

    export default class MyProfile extends React.Component {
    render() {
    return <User type="customer">//...</User>;
    }
    }

    ```
    </p>
    </details>

    With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.
    ```

**[⬆ Back to Top](#table-of-contents)**

73. ### What are the exceptions on React component naming?

    The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.
    For example, the below tag can be compiled to a valid component,

    ```jsx harmony
         render() {
              return (
                <obj.component/> // `React.createElement(obj.component)`
              )
        }
    ```

    **[⬆ Back to Top](#table-of-contents)**

74. ### Is it possible to use async/await in plain React?

    Yes, you can use `async/await` in plain React, as long as your JavaScript environment supports ES2017+. Nowadays most modern browsers and build tools support ES2017+ version. If you're using **Create React App**, **Next.js**, **Remix**, or any modern React setup, `async/await` is supported out of the box through **Babel**.

    ### Example Usage

    ```jsx
    import { useEffect, useState } from 'react';

    function UserProfile() {
      const [user, setUser] = useState(null);

      useEffect(() => {
        const fetchUser = async () => {
          const response = await fetch('/api/user');
          const data = await response.json();
          setUser(data);
        };

        fetchUser();
      }, []);

      return user ? <div>Hello, {user.name}</div> : <div>Loading...</div>;
    }
    ```
    But If you're not using a bundler like **Webpack or Babel**, you will need _Babel_ and [transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator) plugin. However, React Native ships with Babel and a set of transforms.

**[⬆ Back to Top](#table-of-contents)**

75.  ### What are the common folder structures for React?

     There are two common practices for React project file structure.

     1.  **Grouping by features or routes:**

        One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

        ```
        common/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ APIUtils.js
        └─ APIUtils.test.js
        feed/
        ├─ index.js
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        └─ FeedAPI.js
        profile/
        ├─ index.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        ├─ ProfileHeader.css
        └─ ProfileAPI.js
        ```

     2.  **Grouping by file type:**

        Another popular way to structure projects is to group similar files together.

        ```
        api/
        ├─ APIUtils.js
        ├─ APIUtils.test.js
        ├─ ProfileAPI.js
        └─ UserAPI.js
        components/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        └─ ProfileHeader.css
        ```

**[⬆ Back to Top](#table-of-contents)**

76. ### What are the popular packages for animation?

    _React Transition Group_ and _React Motion_ are popular animation packages in React ecosystem.

**[⬆ Back to Top](#table-of-contents)**

77. ### What is the benefit of styles modules?

    It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

    For example, these styles could be extracted into a separate component:

    ```javascript
    export const colors = {
      white,
      black,
      blue,
    };

    export const space = [0, 8, 16, 32, 64];
    ```

    And then imported individually in other components:

    ```javascript
    import { space, colors } from "./styles";
    ```

**[⬆ Back to Top](#table-of-contents)**

78. ### What are the popular React-specific linters?

    ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called `eslint-plugin-react`. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types.

    Another popular plugin is `eslint-plugin-jsx-a11y`, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with `alt` text and `tabindex`, for example, will not be picked up by regular plugins.

**[⬆ Back to Top](#table-of-contents)**

## React Router

**[⬆ Back to Top](#table-of-contents)**

79. ### What is React Router?

    React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

**[⬆ Back to Top](#table-of-contents)**

80. ### How React Router is different from history library?

    React Router is a wrapper around the `history` library which handles interaction with the browser's `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node.

**[⬆ Back to Top](#table-of-contents)**

81. ### What are the `<Router>` components of React Router v6?

    React Router v6 provides below 4 `<Router>` components:

    1.  `<BrowserRouter>`:Uses the HTML5 history API for standard web apps.
    2.  `<HashRouter>`:Uses hash-based routing for static servers.
    3.  `<MemoryRouter>`:Uses in-memory routing for testing and non-browser environments.
    4.  `<StaticRouter>`:Provides static routing for server-side rendering (SSR).

    The above components will create _browser_, _hash_, _memory_ and _static_ history instances. React Router v6 makes the properties and methods of the `history` instance associated with your router available through the context in the `router` object.

**[⬆ Back to Top](#table-of-contents)**

82. ### What is the purpose of `push()` and `replace()` methods of `history`?

    A history instance has two methods for navigation purpose.

    1.  `push()`
    2.  `replace()`

    If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one.

**[⬆ Back to Top](#table-of-contents)**

83. ### How do you programmatically navigate using React Router v4?

    There are three different ways to achieve programmatic routing/navigation within components.

    1.  **Using the `withRouter()` higher-order function:**

        The `withRouter()` higher-order function will inject the history object as a prop of the component. This object provides `push()` and `replace()` methods to avoid the usage of context.

        ```jsx harmony
        import { withRouter } from "react-router-dom"; // this also works with 'react-router-native'

        const Button = withRouter(({ history }) => (
          <button
            type="button"
            onClick={() => {
              history.push("/new-location");
            }}
          >
            {"Click Me!"}
          </button>
        ));
        ```

    2.  **Using `<Route>` component and render props pattern:**

        The `<Route>` component passes the same props as `withRouter()`, so you will be able to access the history methods through the history prop.

        ```jsx harmony
        import { Route } from "react-router-dom";

        const Button = () => (
          <Route
            render={({ history }) => (
              <button
                type="button"
                onClick={() => {
                  history.push("/new-location");
                }}
              >
                {"Click Me!"}
              </button>
            )}
          />
        );
        ```

    3.  **Using context:**

        This option is not recommended and treated as unstable API.

        ```jsx harmony
        const Button = (props, context) => (
          <button
            type="button"
            onClick={() => {
              context.history.push("/new-location");
            }}
          >
            {"Click Me!"}
          </button>
        );

        Button.contextTypes = {
          history: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired,
          }),
        };
        ```

**[⬆ Back to Top](#table-of-contents)**

84. ### How to get query parameters in React Router v4?

    The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

    ```javascript
    const queryString = require("query-string");
    const parsed = queryString.parse(props.location.search);
    ```

    You can also use `URLSearchParams` if you want something native:

    ```javascript
    const params = new URLSearchParams(props.location.search);
    const foo = params.get("name");
    ```

    You should use a _polyfill_ for IE11.

**[⬆ Back to Top](#table-of-contents)**

85. ### Why you get "Router may have only one child element" warning?

    You have to wrap your Route's in a `<Switch>` block because `<Switch>` is unique in that it renders a route exclusively.

    At first you need to add `Switch` to your imports:

    ```javascript
    import { Switch, Router, Route } from "react-router";
    ```

    Then define the routes within `<Switch>` block:

    ```jsx harmony
    <Router>
      <Switch>
        <Route {/* ... */} />
        <Route {/* ... */} />
      </Switch>
    </Router>
    ```

**[⬆ Back to Top](#table-of-contents)**

86. ### How to pass params to `history.push` method in React Router v4?

    While navigating you can pass props to the `history` object:

    ```javascript
    this.props.history.push({
      pathname: "/template",
      search: "?name=sudheer",
      state: { detail: response.data },
    });
    ```

    The `search` property is used to pass query params in `push()` method.

**[⬆ Back to Top](#table-of-contents)**

87. ### How to implement _default_ or _NotFound_ page?

    A `<Switch>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below

    ```jsx harmony
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route component={NotFound} />
    </Switch>
    ```

**[⬆ Back to Top](#table-of-contents)**

88. ### How to get history on React Router v4?

    Below are the list of steps to get history object on React Router v4,

    1.  Create a module that exports a `history` object and import this module across the project.

        For example, create `history.js` file:

        ```javascript
        import { createBrowserHistory } from "history";

        export default createBrowserHistory({
          /* pass a configuration object here if needed */
        });
        ```

    2.  You should use the `<Router>` component instead of built-in routers. Import the above `history.js` inside `index.js` file:

        ```jsx harmony
        import { Router } from "react-router-dom";
        import history from "./history";
        import App from "./App";

        ReactDOM.render(
          <Router history={history}>
            <App />
          </Router>,
          holder
        );
        ```

    3.  You can also use push method of `history` object similar to built-in history object:

        ```javascript
        // some-other-file.js
        import history from "./history";

        history.push("/go-here");
        ```

**[⬆ Back to Top](#table-of-contents)**

89. ### How to perform automatic redirect after login?

    The `react-router` package provides `<Redirect>` component in React Router. Rendering a `<Redirect>` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

    ```javascript
    import { Redirect } from "react-router";

    export default function Login {
        if (this.state.isLoggedIn === true) {
          return <Redirect to="/your/redirect/page" />;
        } else {
          return <div>{"Login Please"}</div>;
        }
    }
    ```

      <details><summary><b>See Class</b></summary>
      <p>

    ```jsx
    import React, { Component } from "react";
    import { Redirect } from "react-router";

    export default class LoginComponent extends Component {
      render() {
        if (this.state.isLoggedIn === true) {
          return <Redirect to="/your/redirect/page" />;
        } else {
          return <div>{"Login Please"}</div>;
        }
      }
    }
    ```

       </p>
       </details>

**[⬆ Back to Top](#table-of-contents)**

## React Internationalization

90. ### What is React Intl?

    The _React Intl_ library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of _FormatJS_ which provides bindings to React via its components and API.

**[⬆ Back to Top](#table-of-contents)**

91. ### What are the main features of React Intl?

    Below are the main features of React Intl,

    1.  Display numbers with separators.
    2.  Display dates and times correctly.
    3.  Display dates relative to "now".
    4.  Pluralize labels in strings.
    5.  Support for 150+ languages.
    6.  Runs in the browser and Node.
    7.  Built on standards.

**[⬆ Back to Top](#table-of-contents)**

92. ### What are the two ways of formatting in React Intl?

    The library provides two ways to format strings, numbers, and dates:

    1.  **Using react components:**

        ```jsx harmony
        <FormattedMessage
          id={"account"}
          defaultMessage={"The amount is less than minimum ba