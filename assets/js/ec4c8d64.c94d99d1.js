"use strict";(self.webpackChunkwin11react_docs=self.webpackChunkwin11react_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"applications/Terminal",id:"applications/Terminal",title:"Terminal",description:"The given code is a React functional component named WnTerminal, which is responsible for creating a terminal interface for the user to input and execute commands.",source:"@site/docs/applications/Terminal.md",sourceDirName:"applications",slug:"/applications/Terminal",permalink:"/docs/applications/Terminal",editUrl:"https://github.com/win11react/docs/edit/main/docs/applications/Terminal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Edge",permalink:"/docs/applications/Edge"},next:{title:"Store",permalink:"/docs/applications/store"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The given code is a React functional component named WnTerminal, which is responsible for creating a terminal interface for the user to input and execute commands."),(0,a.kt)("p",null,"Imports\nThe function imports some libraries and components at the beginning of the code:"),(0,a.kt)("p",null,"React: A JavaScript library for building user interfaces.\nuseState: A React hook that provides a way to use state variables in functional components.\nuseEffect: A React hook that provides a way to perform side effects in functional components.\nuseSelector: A hook from the react-redux library that allows a component to access the Redux store's state.\nuseDispatch: A hook from the react-redux library that allows a component to dispatch actions to the Redux store.\ni18next: A library that provides internationalization capabilities to web applications.\nlogin: A component that allows the user to log in to the application.\nToolBar: A component that provides a toolbar for the terminal.\nVariable Declarations\nThe function defines and initializes several state variables using the useState hook:"),(0,a.kt)("p",null,"stack: An array that holds the history of commands executed by the user.\npwd: A string that represents the current working directory.\nlastCmd: An integer that represents the index of the last command executed.\nwntitle: A string that represents the title of the terminal window.\nThe function also defines and initializes a dispatch variable using the useDispatch hook, which is used to dispatch actions to the Redux store."),(0,a.kt)("p",null,"Function Declarations\nThe WnTerminal function declares two additional functions: dirFolders and cmdTool."),(0,a.kt)("p",null,'dirFolders function\nThe dirFolders function takes a boolean argument isFile (default value is an empty string), and returns an array of folder names if isFile is an empty string, or an object of file names if isFile is a string. The function uses the dirs variable, which is an object imported from the dir.json file, to retrieve the list of folders or files. It first copies the entire dirs object into a new variable tdir. It then splits the pwd string and removes the "C:" part to get the current directory path as an array of folder names. It uses a for loop to iterate over the folder names and update the tdir variable to the corresponding subdirectory object. Finally, it returns either the keys of the tdir object if isFile is an empty string, or the value of the tdir object corresponding to the isFile key if isFile is a non-empty string.'),(0,a.kt)("p",null,"cmdTool function\nThe cmdTool function takes a string argument cmd, which represents the command entered by the user, and executes the corresponding action. The function first creates a copy of the stack state array using the spread operator. It then appends the entered command to the stack array as a new entry. It splits the command into two parts using the space character as the delimiter: the first part represents the command type, and the second part represents the command arguments. It then converts the command type to lowercase for case-insensitive matching. The function then executes the corresponding action based on the command type:"),(0,a.kt)("p",null,'echo: If the command type is echo, it appends the command arguments to the stack array if it is non-empty, or the string "ECHO is on." if it is empty.\neval: If the command type is eval, it evaluates the command arguments using the eval function and appends the result to the stack'))}h.isMDXComponent=!0}}]);