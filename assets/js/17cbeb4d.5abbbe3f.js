"use strict";(self.webpackChunkwin11react_docs=self.webpackChunkwin11react_docs||[]).push([[239],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},p="Add an App",c={unversionedId:"Store/add-app",id:"Store/add-app",title:"Add an App",description:"First, please make sure the site accepts IFrame. You can check this by inserting the sites URL into this: IFrame checker",source:"@site/docs/Store/add-app.md",sourceDirName:"Store",slug:"/Store/add-app",permalink:"/docs/Store/add-app",editUrl:"https://github.com/win11react/docs/edit/main/docs/Store/add-app.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"About",permalink:"/docs/about"}},l={},u=[{value:"Ways to add an app to the store",id:"ways-to-add-an-app-to-the-store",level:2},{value:"Using Github issues",id:"using-github-issues",level:3},{value:"Via Github Pull Request",id:"via-github-pull-request",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-an-app"},"Add an App"),(0,o.kt)("p",null,"First, please make sure the site accepts IFrame. You can check this by inserting the sites URL into this: ",(0,o.kt)("a",{parentName:"p",href:"https://www.tinywebgallery.com/blog/advanced-iframe/free-iframe-checker"},"IFrame checker")),(0,o.kt)("h2",{id:"ways-to-add-an-app-to-the-store"},"Ways to add an app to the store"),(0,o.kt)("h3",{id:"using-github-issues"},"Using Github issues"),(0,o.kt)("p",null,"Create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/win11react/store/issues/new/choose"},"Issue")," and follow the given steps."),(0,o.kt)("h3",{id:"via-github-pull-request"},"Via Github Pull Request"),(0,o.kt)("p",null,"Make a pull request by editing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/win11react/store/blob/main/store/index.json"},"store.json")," file"),(0,o.kt)("p",null,"Read the schema below, ",(0,o.kt)("strong",{parentName:"p"},"BEFORE")," adding any game/app element into the ",(0,o.kt)("inlineCode",{parentName:"p"},"store.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Windows 11", // unique name (check if it has been used already in the file)\n  "icon": "https://example.com/minecraft.png", // logo image, preferrably 1:1 and less than 128px of width\n  "type": "game", // game or app\n  "data": {\n    "type": "IFrame", // type currently supports IFrame only\n    "url": "https://classic.minecraft.net", // url of the app and make sure they accept Iframe\n    "gallery": [\n      // three or more images for gallery view in store app\n      "https://www.minecraft.net/content/dam/games/minecraft/key-art/CavesandCliffsPt1-dotNET-HomepagePromo-600x360.png",\n      "https://variety.com/wp-content/uploads/2019/02/minecraft-best-year-yet.png?w=600",\n      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Always-Something-New.jpg"\n    ],\n    "desc": "Minecraft is a sandbox construction video game ...", // description for store app\n    "feat": "1.1 Combat changes.\\n1.2 Fletching table functionality.", // features for store app\n    "invert": true // when true it forces dark theme for game/app window, default is false.\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"please-remove-the-comments-from-your-json-before-making-a-pull-request"},"PLEASE REMOVE THE COMMENTS FROM YOUR JSON, BEFORE MAKING A PULL REQUEST"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Comments look like this: ",(0,o.kt)("inlineCode",{parentName:"strong"},"// example text"))))),(0,o.kt)("p",null,"Add your game/app in the file (don't beautify the code, just add your game/app element) and make a pull request to get it ",(0,o.kt)("strong",{parentName:"p"},"potentially")," accepted."))}m.isMDXComponent=!0}}]);