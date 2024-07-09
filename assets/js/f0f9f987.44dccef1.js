"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5429:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294);function n(e){let{className:t="adfit",style:a,unit:n,height:r,width:o}=e;return(0,i.useEffect)((()=>{let e=document.createElement("ins"),a=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",a.async="true",a.type="text/javascript",a.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",o.toString()),e.setAttribute("data-ad-height",r.toString()),e.setAttribute("data-ad-unit",n.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(a)}),[]),i.createElement("div",{style:a},i.createElement("div",{className:t}))}},2448:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294),n=a(5429);function r(){return i.createElement(n.Z,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},8026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905)),r=a(2448);const o={title:"Receipts",sidebar_label:"Receipts",sidebar_position:5},p=void 0,l={unversionedId:"guides/receipts",id:"guides/receipts",title:"Receipts",description:"With Google Play",source:"@site/docs/guides/receipts.mdx",sourceDirName:"guides",slug:"/guides/receipts",permalink:"/docs/guides/receipts",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/guides/receipts.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Receipts",sidebar_label:"Receipts",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Purchases",permalink:"/docs/guides/purchases"},next:{title:"Amazon IAP",permalink:"/docs/guides/amazon-iap"}},s={},c=[{value:"With Google Play",id:"with-google-play",level:3},{value:"With App Store",id:"with-app-store",level:3},{value:"Local Validation",id:"local-validation",level:4},{value:"Validating with the App Store",id:"validating-with-the-app-store",level:4},{value:"iOS Purchasing process right way.",id:"ios-purchasing-process-right-way",level:3},{value:"Example backend (Node.js)",id:"example-backend-nodejs",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{mdxType:"AdFitTopFixed"}),(0,n.kt)("h1",{id:"receipts"},"Receipts"),(0,n.kt)("h3",{id:"with-google-play"},"With Google Play"),(0,n.kt)("p",null,"For Android, you need separate json file from the service account to get the\n",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"google-apis"),", therefore it is impossible to implement serverless."),(0,n.kt)("p",null,"You should have your own backend and get ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token"),".\nWith ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," you can simply call ",(0,n.kt)("inlineCode",{parentName:"p"},"validateReceiptAndroid()")," we implemented.\nFurther reading is ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/35127086"},"here")," or refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Bang9/android-get-access-token-example"},"example repo"),"."),(0,n.kt)("h3",{id:"with-app-store"},"With App Store"),(0,n.kt)("h4",{id:"local-validation"},"Local Validation"),(0,n.kt)("p",null,"Local on-device cryptographic validation is not currently supported. More details are here: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appstorereceipts/validating_receipts_on_the_device"},"https://developer.apple.com/documentation/appstorereceipts/validating_receipts_on_the_device")),(0,n.kt)("h4",{id:"validating-with-the-app-store"},"Validating with the App Store"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"WARNING: This method is not recommended for production usage, and Apple explicitly warn against it in their docs: ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store"},"https://developer.apple.com/documentation/storekit/original_api_for_in-app_purchase/validating_receipts_with_the_app_store"))),(0,n.kt)("p",null,"This can be used as a convenience method for developing and testing receipt validation through the development lifecycle."),(0,n.kt)("p",null,"Currently, validating receipts with the App Store is possible locally using ",(0,n.kt)("inlineCode",{parentName:"p"},"validateReceiptIos()"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first parameter, you should pass ",(0,n.kt)("inlineCode",{parentName:"li"},"transactionReceipt")," which returns after ",(0,n.kt)("inlineCode",{parentName:"li"},"buyProduct()"),"."),(0,n.kt)("li",{parentName:"ul"},"The second parameter, you should pass whether this is ",(0,n.kt)("inlineCode",{parentName:"li"},"test")," environment.\nIf ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", it will request to ",(0,n.kt)("inlineCode",{parentName:"li"},"sandbox")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," it will request to ",(0,n.kt)("inlineCode",{parentName:"li"},"production"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const receiptBody = {\n  'receipt-data': purchase.transactionReceipt,\n  password: '******', // app shared secret, can be found in App Store Connect\n};\nconst result = await RNIap.validateReceiptIos(receiptBody, false);\nconsole.log(result);\n")),(0,n.kt)("p",null,"For further information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html"},"guide"),"."),(0,n.kt)("p",null,"Sometimes you will need to get the receipt at times other than after purchase.\nFor example, when a user needs to ask for permission to buy a product (",(0,n.kt)("inlineCode",{parentName:"p"},"Ask to buy"),"\nflow) or unstable internet connections."),(0,n.kt)("p",null,"For these cases we have a convenience method ",(0,n.kt)("inlineCode",{parentName:"p"},"getReceiptIOS()")," which gets\nthe latest receipt for the app at any given time. The response is base64 encoded."),(0,n.kt)("h3",{id:"ios-purchasing-process-right-way"},"iOS Purchasing process right way."),(0,n.kt)("p",null,"Issue regarding ",(0,n.kt)("inlineCode",{parentName:"p"},"valid products")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In iOS, generally you are fetching valid products at App launching process."),(0,n.kt)("p",{parentName:"li"},"If you fetch again, or fetch valid subscription, the products are added to\nthe array object in iOS side (Objective-C ",(0,n.kt)("inlineCode",{parentName:"p"},"NSMutableArray"),")."),(0,n.kt)("p",{parentName:"li"},"This makes unexpected behavior when you fetch with a part of product lists."),(0,n.kt)("p",{parentName:"li"},"For example, if you have products of ",(0,n.kt)("inlineCode",{parentName:"p"},"[A, B, C]"),", and you call fetch function\nwith only ",(0,n.kt)("inlineCode",{parentName:"p"},"[A]"),", this module returns ",(0,n.kt)("inlineCode",{parentName:"p"},"[A, B, C]"),")."),(0,n.kt)("p",{parentName:"li"},"This is weird, but it works.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"But, weird result is weird, so we made a new method which remove all valid products."),(0,n.kt)("p",{parentName:"li"},"If you need to clear all products, subscriptions in that array, just call\n",(0,n.kt)("inlineCode",{parentName:"p"},"clearProductsIOS()"),", and do the fetching job again, and you will receive what\nyou expected."))),(0,n.kt)("h3",{id:"example-backend-nodejs"},"Example backend (Node.js)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mifi/in-app-subscription-example"},"Here")," you can find an example backend for idempotent validating of receipts on both iOS/Android and storing and serving subscription state to the client."))}m.isMDXComponent=!0}}]);