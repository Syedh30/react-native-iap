"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(N,d(d({ref:t},s),{},{components:n})):a.createElement(N,d({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var o=2;o<i;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={},d=void 0,l={unversionedId:"api/modules/IapAndroid",id:"api/modules/IapAndroid",title:"IapAndroid",description:"react-native-iap / Exports / IapAndroid",source:"@site/docs/api/modules/IapAndroid.md",sourceDirName:"api/modules",slug:"/api/modules/IapAndroid",permalink:"/docs/api/modules/IapAndroid",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/api/modules/IapAndroid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IapAmazon",permalink:"/docs/api/modules/IapAmazon"},next:{title:"IapIos",permalink:"/docs/api/modules/IapIos"}},p={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"BuyItemByType",id:"buyitembytype",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables-1",level:2},{value:"AndroidModule",id:"androidmodule",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"acknowledgePurchaseAndroid",id:"acknowledgepurchaseandroid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"deepLinkToSubscriptionsAndroid",id:"deeplinktosubscriptionsandroid",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getInstallSourceAndroid",id:"getinstallsourceandroid",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isFeatureSupported",id:"isfeaturesupported",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"validateReceiptAndroid",id:"validatereceiptandroid",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:o},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / IapAndroid"),(0,r.kt)("h1",{id:"namespace-iapandroid"},"Namespace: IapAndroid"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapAndroid.AndroidModuleProps"},"AndroidModuleProps"))),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#buyitembytype"},"BuyItemByType"))),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#androidmodule"},"AndroidModule"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#acknowledgepurchaseandroid"},"acknowledgePurchaseAndroid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#deeplinktosubscriptionsandroid"},"deepLinkToSubscriptionsAndroid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#getinstallsourceandroid"},"getInstallSourceAndroid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#isfeaturesupported"},"isFeatureSupported")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapAndroid#validatereceiptandroid"},"validateReceiptAndroid"))),(0,r.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,r.kt)("h3",{id:"buyitembytype"},"BuyItemByType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"BuyItemByType"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"skus"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"purchaseToken"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"externalTransactionIdAndroid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replacementModeAndroid"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/enums/ReplacementModesAndroid"},(0,r.kt)("inlineCode",{parentName:"a"},"ReplacementModesAndroid"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"obfuscatedAccountId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"obfuscatedProfileId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptionOffers"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[], ",(0,r.kt)("inlineCode",{parentName:"p"},"isOfferPersonalized"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"skus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"purchaseToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"externalTransactionIdAndroid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replacementModeAndroid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"obfuscatedAccountId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"obfuscatedProfileId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptionOffers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isOfferPersonalized"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"skus")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"purchaseToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"externalTransactionIdAndroid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"replacementModeAndroid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/enums/ReplacementModesAndroid"},(0,r.kt)("inlineCode",{parentName:"a"},"ReplacementModesAndroid"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"obfuscatedAccountId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"obfuscatedProfileId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionOffers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isOfferPersonalized")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L38"},"modules/android.ts:38")),(0,r.kt)("h2",{id:"variables-1"},"Variables"),(0,r.kt)("h3",{id:"androidmodule"},"AndroidModule"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"AndroidModule"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/IapAndroid.AndroidModuleProps"},(0,r.kt)("inlineCode",{parentName:"a"},"AndroidModuleProps"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L77"},"modules/android.ts:77")),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"acknowledgepurchaseandroid"},"acknowledgePurchaseAndroid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"acknowledgePurchaseAndroid"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"token"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PurchaseResult"},(0,r.kt)("inlineCode",{parentName:"a"},"PurchaseResult")),">"),(0,r.kt)("p",null,"Acknowledge a product (on Android.) No-op on iOS."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The product's token (on Android)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token.developerPayload?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token.token")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PurchaseResult"},(0,r.kt)("inlineCode",{parentName:"a"},"PurchaseResult")),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L154"},"modules/android.ts:154")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deeplinktosubscriptionsandroid"},"deepLinkToSubscriptionsAndroid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deepLinkToSubscriptionsAndroid"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Deep link to subscriptions screen on Android."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The product's SKU (on Android)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku.sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L90"},"modules/android.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getinstallsourceandroid"},"getInstallSourceAndroid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getInstallSourceAndroid"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/enums/InstallSourceAndroid"},(0,r.kt)("inlineCode",{parentName:"a"},"InstallSourceAndroid"))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/enums/InstallSourceAndroid"},(0,r.kt)("inlineCode",{parentName:"a"},"InstallSourceAndroid"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L79"},"modules/android.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isfeaturesupported"},"isFeatureSupported"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isFeatureSupported"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Acknowledge a product (on Android.) No-op on iOS."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feature")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"to be checked")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L169"},"modules/android.ts:169")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatereceiptandroid"},"validateReceiptAndroid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"validateReceiptAndroid"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptType"),">"),(0,r.kt)("p",null,"Validate receipt for Android. NOTE: This method is here for debugging purposes only. Including\nyour access token in the binary you ship to users is potentially dangerous.\nUse server side validation instead for your production builds"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"accessToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"isSub?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"packageName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"productId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"productToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptType"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Syedh30/react-native-iap/blob/b2f2b73/src/modules/android.ts#L113"},"modules/android.ts:113")))}k.isMDXComponent=!0}}]);