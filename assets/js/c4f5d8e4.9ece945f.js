"use strict";(self.webpackChunkdoesitmeta=self.webpackChunkdoesitmeta||[]).push([[195],{3739:function(e,t,c){c.r(t),c.d(t,{default:function(){return k}});var n=c(7294),r=(c(8746),c(6832)),l=c(3342),a=c(7462),i=c(6010),o="features_t9lD",s="featureSvg_GfXr",m=(c(2251),[{Svg:c(8745).Z,link:"/docs/meta"},{Svg:c(5798).Z,link:"treasure_hunt"},{Svg:c(1071).Z,link:"https://doesitmeta.github.io/marketplace/",newtab_target:"_blank",newtab_rel:"noreferrer noopener"}]);function u(e){var t=e.Svg,c=e.link,r=e.newtab_target,l=e.newtab_rel;return n.createElement("div",{className:(0,i.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("a",{href:c,target:r,rel:l},n.createElement(t,{className:s,role:"img"}))))}function f(){return n.createElement("section",{className:o},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},m.map((function(e,t){return n.createElement(u,(0,a.Z)({key:t},e))})))))}var v={bigLogo:"bigLogo_Q65R",bigLogoSvg:"bigLogoSvg_pyAX"},p=[{Svg:c(8898).Z}];function z(e){var t=e.Svg;return n.createElement("div",{className:(0,i.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("a",null,n.createElement(t,{className:v.bigLogoSvg,role:"img"}))))}function g(){return n.createElement("section",{className:v.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},p.map((function(e,t){return n.createElement(z,(0,a.Z)({key:t},e))})))))}var d=c(4165),h=c(5861),b="instagramItems_DRav",E="instagramItem_iOSG",M="instagramImg_iueE",y="instagramIcon_nz1q",w=function(e){var t=e.token,c=e.counter,r=(0,n.useRef)(),l=(0,n.useState)([]),a=l[0],i=l[1],o=(0,n.useState)(!1),s=o[0],m=o[1],u=(0,n.useState)(!1),f=u[0],v=u[1],p=(0,n.useState)(!1),z=p[0],g=p[1],w="https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token="+t;return(0,n.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),fetch(w).then((function(e){return e.json()})).then((function(e){i(e.data),console.log("JavaScript version is here https://codecanyon.net/item/instaget-javascript-library-for-instagram/26300578")})).catch((function(e){return v(!0)})),m(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&g(!0)}))}),{threshold:1});return t.observe(r.current),function(){return t.disconnect()}}),[w]),n.createElement("div",null,s?n.createElement("div",null," Loading... "):f?n.createElement("div",null,n.createElement("p",{className:"errorMessage"}," the access token is not valid")):n.createElement("div",{className:b,ref:r},z&&a.slice(0,c).map((function(e,t){return n.createElement("div",{key:t,className:E},n.createElement("a",{key:t,href:e.permalink,className:"ig-instagram-link",target:"_blank",rel:"noreferrer"},"IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type?n.createElement("img",{className:M,key:t,src:e.media_url,alt:"description"}):n.createElement("video",{className:M,key:t,src:e.media_url,alt:e.caption,type:"video/mp4"}),n.createElement("div",{className:y},n.createElement("div",{className:"instagram-count-item"},n.createElement("span",{className:"icon"},n.createElement("svg",{height:"18",viewBox:"0 0 512 512",width:"18"},n.createElement("path",{fill:"currentColor",d:"m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"})))))))}))))},O=(c(5064),c(2004));function k(){(0,r.Z)().siteConfig;return n.createElement(l.Z,{title:"Hello from TU Berlin",description:"Description will go into a meta tag in <head />"},n.createElement(g,null),n.createElement(f,null),n.createElement("div",{className:"app"},n.createElement("section",{className:"section"},n.createElement("div",{className:"player-wrapper"},n.createElement(O.Z,{className:"react-player",width:"100%",height:"300px",url:"https://www.youtube.com/embed/wobZgKRkE18"})))),n.createElement(w,{token:"IGQVJVQXVpLW9BSTZA6NnJmSllZAZAGphRkViVS1LQXZArcTh4RGh4MDlqV0ZADMUREWG1SUV8tUmh3OTNpR0x3cC1XMldPTXFZATkFqNUlsQTNKQWdhYXVZAX2JfSTJ3UDZAZAQTM5ODZAXRlMzRDM1SFZAFdExLQgZDZD",counter:"6"}))}},8898:function(e,t,c){var n,r,l=c(7294),a=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}t.Z=function(e){var t=e.title,c=e.titleId,s=o(e,a);return l.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:3184,height:2224,viewBox:"0 0 2388 1668","aria-labelledby":c},s),t?l.createElement("title",{id:c},t):null,n||(n=l.createElement("path",{d:"M446 2.7c0 5.5-2.9 35.9-3.9 40.8-3.2 16.6-4 123.9-1.2 159.5 5.3 64.8 25.5 155.6 45.6 205.2 9.5 23.1 16.1 34.2 31.3 52.4l10.1 12.1-1.6 70.7c-1.8 78.6-2 75.7 4.7 79.1 2.4 1.3 209.7 34.2 228.1 36.2 2.8.3 5.6 0 7-.7 1.3-.7 13.1-8.2 26.2-16.7 13.1-8.4 24.2-15.3 24.5-15.3.4 0 .6 8.7.4 19.4-.4 21.8.2 24.4 6.1 27.2 1.8.9 21.4 4.3 43.5 7.7 22.8 3.5 40.2 6.7 40 7.2-.2 1-68.6 43.1-72.3 44.5-1.1.4-3.1 2-4.5 3.4-2.2 2.4-2.5 3.9-3.1 14.4-.4 6.4-.8 21-.8 32.4-.1 19.3-.2 20.8-1.9 20.8-1 0-8.5-1.6-16.7-3.5-14.8-3.4-42.9-8.4-59.5-10.4-33.8-4.1-86.7-4.9-116-1.8-28.7 3.1-51.7 7.5-75.5 14.4-18.5 5.3-29.5 9.7-48 18.9-27.8 13.8-43.8 26.6-60.1 48.2-15.4 20.6-24.4 41.2-30.3 69.7-7.8 38-3.5 77.7 11.9 109.9 11 23.1 27.3 41.2 51.4 57 8.2 5.4 18.6 11.9 23.3 14.4l8.6 4.7-.7 16.5c-.3 9.1-.9 31.6-1.2 50-.7 37.2-.6 38.3 5.6 41.5 2.5 1.3 210.2 34.2 228.2 36.2 4.4.5 5.5.2 14-5 5.1-3.1 15.2-9.4 22.3-14.1 18.3-11.9 30.4-19.6 30.9-19.6.2 0 .2 11.1-.1 24.8-.7 27.5-.3 29.6 5.7 32.7 2.4 1.3 210.2 34.2 228.2 36.2 3.9.5 5.5.1 9.5-2.2 4.8-2.8 30.8-19.4 45.8-29.2l8-5.3.5 22.4c.5 22.1.5 22.5 2.9 25 1.4 1.5 4.1 3 6 3.5 2 .6 33.3 5.5 69.6 11.1s84.7 13.1 107.5 16.7c56.6 8.9 51.3 8.4 56.9 5.5 3.5-1.9 35.5-22.3 57.4-36.6l2.4-1.6-.5 23.3c-.5 25.9-.1 28.1 5.8 31.2 2.4 1.3 210.1 34.2 228.1 36.2 2.7.3 5.6 0 6.9-.7 1.2-.6 16.5-10.3 33.9-21.4 27.8-17.8 61.3-38.8 99.1-61.9 14.9-9.2 19-12.4 20.6-16.3l1.4-3.3 7.7 3.6c19.9 9.4 37.9 20 45.1 26.7 9.4 8.6 24.2 17.7 44.5 27.3 18 8.5 28.7 12.9 60.2 25 12 4.6 32.9 10.6 44 12.7l23.5 4.7c26.1 5.2 37.8 6.1 80 6.2 30.8.1 44.5-.3 68.5-2.1 51.3-3.8 113.8-3.5 163.5.7 13.5 1.2 28.7 2.5 33.8 2.9l9.2.7v-73.2l-10.7-.7c-57-3.5-128.3-4.9-217.3-4.4-106 .7-120.1 0-148.9-7.3-31.7-8.1-43.3-13.1-74.4-32.1-33.9-20.8-36.2-22.1-41.6-24.5-3-1.4-7.3-3.7-9.5-5.3-17.8-12.3-49.4-29.2-68.1-36.4-5.5-2.2-10.3-4.2-10.8-4.6-.4-.3-.1-2.2.7-4.1 1.2-2.8 1.3-13.7 1.1-65.4l-.3-62-2.5-5.6c-4.2-9.6-2.2-8.9-61-19-74.1-12.6-162.5-27.6-167.3-28.4-5-.8-8.8 1.2-41.4 20.9l-22.5 13.6-.2-3.3c-1.4-17.2-3.7-36.8-4.8-39.4-2.3-5.5-4.5-6.2-32.2-9.9-29.8-4-57.4-8.4-58.6-9.4-1.1-.9 6.2-5.5 51.6-32.8 20.8-12.5 39.9-24.6 42.5-26.8l4.7-4.2.3-8.9.4-9 25.6-.6c36.6-.9 65.3-4.2 96.4-11.1 6.2-1.4 17.6-3.7 25.3-5.1 47.8-8.9 99.5-27.1 144-50.8 44.6-23.7 74.3-46.6 95.6-73.7 19.9-25.4 32-49.6 35-70 4.3-29.7-1-58.3-14.6-79.2-6.1-9.2-23.8-26.9-33.2-33.1-18.9-12.5-44-22.2-66.4-25.7l-7.7-1.2-.7-31.2c-.4-17.1-.5-42.8-.4-57.1l.4-26-2.6-5.6c-4.5-9.6-2.5-9-61.2-19-43.5-7.4-156-26.5-167.5-28.4-4.5-.8-7.9.9-38.6 19.3-14.7 8.9-27.1 16.2-27.5 16.2-.3 0-.6-5.7-.6-12.7 0-11.7-.2-13.3-2.6-18.4-4.5-9.6-2.5-9-61.2-19-28.7-4.9-77.4-13.2-108.2-18.5-30.8-5.3-58.3-9.7-61-9.7-5.7-.1-2.4-1.8-41.5 21.1-15.1 8.8-28.2 16.3-29 16.6-1.3.5-1.5-1.8-1.5-17.6-.1-20.8-.5-22.2-7.8-26-3.6-1.8-102.7-19.4-205.4-36.4l-21.3-3.5-4.2 1.9c-2.4 1-14.4 8-26.8 15.4s-23.4 14-24.6 14.6c-2 1.1-2.1 1-2-13.6.1-13.9 0-15-2.5-20.3-4.5-9.6-2.5-9-61.2-19-43.5-7.4-156-26.5-167.5-28.4-2-.4-4.7.1-7.5 1.3-2.3 1-33.2 19.3-68.6 40.5-35.4 21.3-64.7 38.7-65.1 38.7-.4 0-2.4-3.7-4.5-8.2-12.2-26.9-26.2-88.4-31-136.8-3.8-38.8-4-68-.9-108.5.8-10.5 2.1-27.3 2.9-37.5.8-10.2 2.1-22.8 3-28 .8-5.2 1.7-13.1 2-17.5.3-4.4 1.4-14 2.3-21.3L524.6 0H446v2.7zm205.5 412.9c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.4.3-195.9-29.5-196.3-30-.2-.2 4.3-199.9 4.5-200.5.2-.4 1.7-.2 98.6 13.4zm292 50c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.8.8-195.1-29.7-196.1-30.8-.3-.3 4-198.7 4.3-199.7.2-.4 1.7-.2 98.6 13.4zm305 45c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.4.3-195.9-29.5-196.3-30-.2-.2 4.3-199.9 4.5-200.5.2-.4 1.7-.2 98.6 13.4zm298 43c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.2.2-44.3-6.4-97.9-14.7-53.6-8.2-97.8-15-98.3-15-.4 0-.4-1.9 0-4.3.4-2.3.7-8.7.5-14.1-.3-12.5 2.9-165.6 3.6-175.4.3-3.9.9-7.2 1.2-7.2.4 0 44.4 6.1 97.7 13.6zm286.5 116c17.2 5.4 23 10.3 27.8 23.2 3.3 9 4.1 23.1 1.8 32.2-3.6 13.9-11.1 26.1-25.5 41.2-26.2 27.5-58.2 46.3-125.6 73.6-42.7 17.2-54.1 21.1-80.3 27.1-30.6 7.1-60.3 10.9-91.2 11.8l-21.6.6.4-33.4c.3-33.5 1.5-68.6 2.3-69.3.2-.2 29 4.1 63.9 9.6 75 11.7 73 11.4 75.9 9.8 1.3-.6 16.6-10.3 34-21.4 17.4-11.2 39.3-25 48.6-30.8 53-32.8 64.8-40.2 67.5-42.4 4.1-3.5 5-7.8 5-23.2v-13.4l3.3.8c1.7.3 7.9 2.2 13.7 4zm-710-1.6c0 .5-.7 1-1.6 1-.8 0-1.2-.5-.9-1 .3-.6 1-1 1.6-1 .5 0 .9.4.9 1zm-219 96c107.5 15.8 142.3 21 142.8 21.5.8.7-4.1 202.3-4.8 203.6-.5.6-10.9-.9-30.6-4.5-29.7-5.5-98.2-18-141.4-25.8-12.4-2.2-22.8-4.3-23.2-4.7-.5-.4 2.6-193.4 3.2-198 0-.2 1.5-.1 3.3.3 1.7.3 24.6 3.7 50.7 7.6zm304 48c107.5 15.8 142.3 21 142.8 21.5.8.7-4.1 202.3-4.8 203.5-.4.7-26.9-3.7-72.1-12-39.3-7.2-82.9-15.1-96.9-17.6-14-2.6-25.8-4.9-26.2-5.3-.5-.4 2.6-193.4 3.2-198 0-.2 1.5-.1 3.3.3 1.7.3 24.6 3.7 50.7 7.6zm-476.5 46c27 2 70.7 8.8 88.8 14l3.8 1.1-.3 25.4c-.2 13.9-.6 25.6-1 26-.6.7-14.3-1.6-114.3-18.7l-35-5.9-4.5 1.9c-7.2 3-143.1 85-146.8 88.5-6.4 6-6.5 6.8-7 33.9-.3 13.7-.8 24.8-1.2 24.8-.4 0-4.4-3.8-8.7-8.4-19.7-20.8-25.9-48.1-18.8-82.6 1.5-7.4 3.8-16.6 5.2-20.5 3.8-10.7 11.6-24.4 17.7-31.1 25.1-27.8 76.1-45.1 142.1-48.3 24.9-1.2 63.9-1.2 80-.1zm-32.2 70.5c11.1 1.9 32.1 5.4 46.7 7.9 14.6 2.5 37.1 6.4 50 8.6 12.9 2.2 24 4 24.7 4 .7 0 1.2 3.3 1.5 9.9.3 8.9.6 10.2 2.7 12.5 1.4 1.4 2.1 2.9 1.7 3.3-.4.5-17.6 10.3-38.2 21.8l-37.4 21.1-50.3-7.2c-27.6-3.9-69.2-9.7-92.4-13-23.3-3.2-42.3-6.1-42.3-6.4 0-1.1 109.4-66 111.3-66 1 0 11 1.6 22 3.5zm427.5 52c-.2.2-3.2-.2-6.7-.8l-6.5-1.2 6.5-4.2 6.4-4.3.3 5.1c.2 2.8.2 5.3 0 5.4zm-486.3 45.6c51.7 7.2 94.3 13.4 94.6 13.8.6.6-3.8 202.1-4.4 202.8-.3.3-196-29.6-196.3-30-.2-.2 4.4-199.8 4.5-200.6.1-.2 1.8-.1 3.9.2 2 .3 46 6.5 97.7 13.8zm298 54.5c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.4.3-195.9-29.5-196.3-30-.2-.2 4.3-199.9 4.5-200.5.2-.4 1.7-.2 98.6 13.4zm300 49.5c51.7 7.3 94.4 13.6 95 14.1.6.5.1 36.7-1.3 101.5-1.3 55.4-2.4 100.8-2.5 101-.2.1-168.5-25.6-188.2-28.9l-8-1.3.3-12c.1-6.6.9-45.3 1.7-86 .8-40.7 1.8-80.5 2.1-88.3l.6-14.4 3.2.6c1.7.3 45.4 6.4 97.1 13.7zm300 50.5c53.4 7.5 97.3 13.9 97.6 14.3.7.6-3.7 202.1-4.4 202.8-.4.3-195.9-29.5-196.3-30-.2-.2 4.3-199.9 4.5-200.5.2-.4 1.7-.2 98.6 13.4z"})),r||(r=l.createElement("path",{d:"M600.3 471c-4.6 1.9-5 3.7-7.9 45.2-2.6 37.2-2.6 39.8-1 42.2 2.7 4.2 6.7 5.5 24.7 8.1 35.3 5.1 52.8 2.2 64.4-10.8 6.3-6.9 8.7-13.9 9.3-26.4.3-8.4.1-11.4-1.7-17.1-4.8-15.8-18.5-27.6-39.6-34.1-7.3-2.3-39.1-8.1-43.5-8-1.4 0-3.5.4-4.7.9zm34.2 22.6c9.9 2 16.1 5.1 20.7 10.2 4.6 5.1 6.2 10 6.2 19.2 0 15.8-6.6 25-19 26.6-4.6.5-22.2-1.1-23.3-2.1-.4-.5 2.8-53.2 3.4-55.2.2-.6 1.2-1 2.2-.8 1 .2 5.4 1.1 9.8 2.1zM919.8 520.5c-16.2 4-26.4 17-29.1 36.8-2.5 19.2 4.8 38.8 18.5 50 17.8 14.5 47.9 18.9 64.2 9.3 5.2-3 11.8-10 14.5-15.5 7.1-13.8 6.6-36.7-1.1-52.1-10.9-21.7-41.4-34.7-67-28.5zm27.6 19.2c5.9 2.2 13 9.6 14.8 15.6.8 2.4 1.3 9.4 1.3 16.2 0 11.2-.2 12.4-2.8 17.8-3.9 7.9-8.7 11-16.7 11-16.7-.2-26.5-12.3-26.3-32.8.1-23.4 11.7-34.2 29.7-27.8zM1202.3 562.5c-1.7.7-3.6 2.2-4.1 3.2-.5 1-1.3 19.4-1.7 41.3l-.7 39.6 2.6 3.1c1.4 1.7 3.8 3.5 5.3 4.2 3.9 1.5 66.4 12.1 71.7 12.1 11.1 0 13.5-11.6 3.4-16.2-1.8-.9-13.4-3.2-25.8-5.3-12.4-2-23.3-3.9-24.2-4.1-1.6-.5-1.8-1.8-1.8-9.5v-9.1l2.8.6c13.7 2.7 36.8 5.7 39.7 5.2 3.8-.8 7.5-4.7 7.5-8.1 0-3-3.2-6.9-7.2-8.8-1.8-.8-11.2-2.7-20.8-4.2-9.6-1.4-18.3-2.9-19.4-3.2-1.7-.5-1.8-1.4-1.4-8.9.2-4.6.8-8.7 1.1-9.1.4-.4 10.9.8 23.3 2.6 24.2 3.6 29.2 3.6 33 0 4.5-4.2 2.2-11.9-4.5-15.4-2.2-1.1-70.8-11.6-74.7-11.5-.5.1-2.3.7-4.1 1.5zM1515.4 606c-18.4 3.9-25.4 17.1-18.2 34.3 3.9 9.1 13.5 15.6 34.3 23.3 17 6.2 21 8.7 22 13.5 1.5 6.9-3.3 10.5-12.7 9.5-8.7-.9-14.8-3.9-21.3-10.7-6.3-6.5-11-8.6-16.9-7.5-4 .8-7.6 4.7-7.6 8.3 0 4.3 3 9.1 8.4 13.2 19.4 15 54.8 20.3 69.8 10.5 9.2-5.9 12-19.4 6.4-30.7-4.7-9.7-13-15.2-35.9-23.8-7.3-2.8-14.3-5.7-15.7-6.6-6.1-3.8-7.7-9.6-3.9-13.4 1.9-1.9 3-2.1 9.3-1.7 8.8.6 14 3.1 18.9 9.1 4.1 5 11 8.3 15.1 7.3 5.5-1.4 8-5.2 7.7-11.5-.2-3.6-9.3-12-17.1-15.8-12.2-5.9-32.5-9.4-42.6-7.3zM935.5 821.9c-5.8 3.6-6.7 5.4-7.5 15.3-.5 5.1-1.4 24.4-2 43-1.3 32.6-1.2 33.7.6 37 5.2 8.9 20.2 9.1 26.1.2 1.5-2.4 1.9-8 3.4-44.8.9-23.1 1.3-42.9.9-44.1-1.1-2.9-4.8-6.5-7.7-7.6-4-1.5-10.6-1-13.8 1zM1206.5 873.2c-5.2 3-6.1 9.7-2 14.7 2.7 3.2 6.8 4.4 19.3 5.7 3.4.4 6.5 1 6.8 1.5.2.4-.3 16.6-1.2 35.8-1.6 34.3-1.6 35 .3 38.3 1 1.8 3.5 4.3 5.4 5.6 4.7 3.3 13.2 2.7 16.4-1 2.8-3.2 3.1-6.1 4.6-43.5.7-16.1 1.6-29.8 2-30.5.6-.9 2.7-.9 9.7 0 12.7 1.7 14.6 1.6 18.1-1.4 2.5-2.1 3.1-3.4 3.1-6.4 0-4.1-3.5-9.4-6.8-10.4-2-.6-69.8-9.6-72.1-9.6-.9 0-2.5.6-3.6 1.2zM584 1079.3c-8.1 4.2-8.2 4.8-9.3 46.2-1 35-1 36.3.9 39.5 1 1.8 3 4.1 4.4 5.2 5.4 4 14.6 3.2 17.3-1.6.8-1.4 1.5-11.5 2.2-29.1l1-27 9.4 27.5c10.5 30.8 11.7 33.7 16.1 37.3 5.4 4.6 14.7 4.8 18.7.4 1.9-2 16.6-34.6 20.8-46.2 1-2.8 2.2-5.4 2.7-6 .4-.5.8 11.6.8 26.8v27.7l3.6 4c4.4 4.9 9.6 6.6 15.4 5 7.4-2 7.3-1.5 7.8-43.4l.4-37.1-2.9-5.5c-4.9-9.2-17.1-14.9-26.3-12.1-7 2.1-8.9 5.1-19.7 30.1-5.5 12.9-10.5 24.8-11.1 26.5l-.9 3-1.2-4.5c-2.8-10.6-18.8-54.7-21.1-58.2-6.5-9.7-19.6-13.5-29-8.5zM893.3 1135.5c-1.7.7-3.6 2.2-4.1 3.2-.5 1-1.3 19.4-1.7 41.3l-.7 39.6 2.6 3.1c1.4 1.7 3.8 3.5 5.3 4.2 3.9 1.5 66.4 12.1 71.7 12.1 11.1 0 13.5-11.6 3.4-16.2-1.8-.9-13.4-3.2-25.8-5.3-12.4-2-23.3-3.9-24.2-4.1-1.6-.5-1.8-1.8-1.8-9.5v-9.1l2.8.6c13.7 2.7 36.8 5.7 39.7 5.2 3.8-.8 7.5-4.7 7.5-8.1 0-3-3.2-6.9-7.2-8.8-1.8-.8-11.2-2.7-20.8-4.2-9.6-1.4-18.3-2.9-19.4-3.2-1.7-.5-1.8-1.4-1.4-8.9.2-4.6.8-8.7 1.1-9.1.4-.4 10.9.8 23.3 2.6 24.2 3.6 29.2 3.6 33 0 4.5-4.2 2.2-11.9-4.5-15.4-2.2-1.1-70.8-11.6-74.7-11.5-.5.1-2.3.7-4.1 1.5zM1194.5 1184.2c-5.2 3-6.1 9.7-2 14.7 2.7 3.2 6.8 4.4 19.3 5.7 3.4.4 6.5 1 6.8 1.5.2.4-.3 16.6-1.2 35.8-1.6 34.3-1.6 35 .3 38.3 1 1.8 3.5 4.3 5.4 5.6 4.7 3.3 13.2 2.7 16.4-1 2.8-3.2 3.1-6.1 4.6-43.5.7-16.1 1.6-29.8 2-30.5.6-.9 2.7-.9 9.7 0 12.7 1.7 14.6 1.6 18.1-1.4 2.5-2.1 3.1-3.4 3.1-6.4 0-4.1-3.5-9.4-6.8-10.4-2-.6-69.8-9.6-72.1-9.6-.9 0-2.5.6-3.6 1.2zM1521 1238.6c-4.5 1.9-7.7 5-10 9.4-1 1.9-8.1 18.3-15.9 36.3-13.5 31.2-14.2 33-13.1 36.2 1.8 5.4 7.5 9.5 13.1 9.5 6.3 0 9.1-2.5 12.5-11 1.5-3.9 3.2-7 3.8-7 3.2-.1 37.3 5.5 38.2 6.2.6.5 1.9 3.6 2.9 7.1 2.3 8.3 3.9 11.1 7.6 13.7 8.8 6.3 20.9 2.8 20.9-6.1 0-4.1-26.7-80.7-29.5-84.9-6.3-9.1-20.9-13.6-30.5-9.4zm12.9 26.2c.5 2.6 2.8 10.5 5 17.7 2.3 7.1 4.1 13.5 4.1 14.1 0 .8-3.6.5-12.2-.8-6.7-1-12.4-2-12.5-2.2-.2-.2 1.8-5.9 4.5-12.7 2.7-6.8 5.5-14.2 6.2-16.4 2.2-7.1 3.3-7 4.9.3z"})))}},8745:function(e,t,c){var n,r=c(7294),l=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}t.Z=function(e){var t=e.title,c=e.titleId,o=i(e,l);return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:285.333,height:366.667,viewBox:"0 0 214 275","aria-labelledby":c},o),t?r.createElement("title",{id:c},t):null,n||(n=r.createElement("path",{d:"M95.4 11.9C90.8 14.7 89 17.8 89 23c0 4.9 1.3 7 4.2 7 2.1 0 4-3.2 3.2-5.3-.8-2.2 1.4-5.7 3.6-5.7 2 0 7 5.7 7 8.1 0 .7-2.6 3.9-5.7 7.1-5.3 5.4-5.7 6-5.7 10.7-.2 9.2 6.5 11.4 7.2 2.3.3-3.5 1.1-4.8 6-9.3 5.4-4.9 5.7-5.5 5.7-10 0-5.5-3.8-11.9-9.4-15.6-4.1-2.8-5.7-2.8-9.7-.4zM98.2 62.2c-2.8 2.8-.1 7.5 3.8 6.3 1.4-.4 2-1.5 2-3.5 0-3.6-3.3-5.3-5.8-2.8zM152 73.7c-4.8.8-12.6 3.6-23 8.3-5.8 2.6-12.3 5.5-14.6 6.4-3.9 1.7-15.4 13.2-15.4 15.5 0 .6-.4 1.1-1 1.1-.5 0-1-.8-1-1.8s-.7-4.3-1.6-7.3c-2-6.9-9.8-14.7-18.7-19-5.3-2.5-7.4-2.9-14.3-2.9-4.5 0-9.4.4-11 1-1.6.5-4.8 1.4-7.1 2C40 78.1 29 86.2 29 88.3c0 .9 3.2 1.2 11.2 1.2 8.1 0 13 .5 17.4 1.8 5.7 1.8 6.2 2.2 7.3 5.7 1.3 4.4 8.5 12.8 14.6 17 5 3.5 4.7 1.6 7 40.2 1.6 26.4 1.8 82.8.3 84.3-1.6 1.7-30.1-16.1-39.7-24.8-3.6-3.3-8.2-7.1-10.2-8.4-3.3-2.2-3.7-2.9-5.2-11.1-1.4-7.2-1.7-16.2-1.9-51.7l-.2-43-.7 31.5c-.8 39.6-.9 41.7-2 32.5-.4-3.9-.8-21.6-.8-39.4 0-17.8-.2-32.5-.4-32.8-.3-.2-.8 7.6-1.2 17.4-.9 21.6 0 52.4 2 65.3.8 5.2 1.5 14.1 1.5 19.6 0 9.9.1 10.2 2.4 10.8 1.9.5 2.5 1.5 3 4.8.8 5.1 2.6 8.6 2.6 5.1 0-1.2-.4-3.3-1-4.7-.5-1.4-.6-2.6-.2-2.6 1.3 0 5.6 3.2 11.3 8.6 7.1 6.6 21.2 15.8 33.9 22.1 6.1 3 10.2 5.7 10.9 7.1 1.3 2.7 8.3 6.1 12.4 6.2 5 0 9.6-3.5 9.7-7.5 0-1.6-.4-1.3-1.9 1.2-2.3 3.7-6.3 4.9-12 3.3-4.2-1.1-8.1-5-8.1-8.2 0-1.1-.3-1.7-.7-1.5-.5.3-.8-15.5-.9-35.1 0-24.6-.6-43.1-1.8-59.5-1-13.1-1.6-24-1.3-24.3.2-.3 2 .4 3.8 1.5 1.9 1.2 5.1 2.1 7.4 2.1 4.2 0 10.2-2.9 11.1-5.5 1.6-4.1 2.2.4 2.8 22.2.4 13.1 1.1 26.7 1.6 30.3.5 3.6 1.3 21.4 1.6 39.6.6 30.3.8 33.1 2.3 32.7 1-.3 2.2-2.3 2.9-5 1.9-6.9 6.2-10.6 16.1-13.7 9.4-3 28-6.2 41.7-7.2l9.1-.6.8 3.3.9 3.4.3-3.3c.5-3.5 2.6-4.2 6.4-2.2 1 .6 1.9.7 1.9.2 0-1.7-2.5-3.2-5.2-3.2-1.6 0-3.1-.6-3.3-1.3-2.1-6.2-4.8-77.8-3.7-98.2l.8-14-4.5-7c-10.9-17.3-17.4-21.8-29.1-19.8zm13.1 3.9c5.3 2.7 18.7 20.4 15.4 20.4-.8 0-3-1.8-5-3.9-2-2.1-6.4-5.4-9.8-7.2-5.9-3.2-6.6-3.4-17.2-3.4-6 0-13 .3-15.5.7l-4.5.8 3.5-2c4.1-2.3 17.2-6.7 21.5-7.3 3.9-.5 8.3.2 11.6 1.9zm-93-.4c4.7 1.6 13 6.9 17.2 11.1 3.9 3.9 5.9 10.8 7.2 24.4.7 7 .6 7.3-1.4 7.3-1.5 0-2.1-.6-2.1-2.3 0-7.9-6-18.8-15.9-29-7-7.3-10.3-9.3-17.7-11.1l-5.9-1.4 7.6-.1c4.2-.1 9.1.4 11 1.1zm-6.3 4.7c5.1 2.6 12.6 9.9 18.5 18.1 4.6 6.2 5.7 8.5 3.8 7.8-.5-.2-6.2-5.4-12.7-11.7L63.6 84.6 52 84c-8.3-.5-11.9-.4-13 .5-2.2 1.7-5 2.6-5 1.5 0-.5 2.6-2.3 5.8-4 5.3-2.9 6.2-3 13.9-2.6 5.5.3 9.5 1.2 12.1 2.5zm96.1 5.2c3.1 1.2 12.1 7.1 12.1 8.1 0 1.3-8.7-.4-14.5-3-8.5-3.6-19.6-4.2-25.2-1.3-4.9 2.4-15 11.6-18.4 16.6-1.3 1.9-3 3.5-3.6 3.5-.7 0-1.8.9-2.5 2-2.3 3.7-2.9 2.1-2.6-7.2l.3-9.3 6.8-4.1c6.8-4.2 10.7-5.2 27.2-6.8 5.5-.5 17.2.3 20.4 1.5zm-102.4-.2c1.8.4 3.1 1.4 3.3 2.5.3 1.2 0 1.6-.8 1.1-.6-.4-5-1.5-9.8-2.5l-8.7-1.9 6.5.1c3.6 0 7.8.3 9.5.7zm10 6.1c.4.6-.5.5-1.9-.2-1.4-.6-2.6-1.5-2.6-2 0-1 3.6.7 4.5 2.2zm89.1 1.4c3.2 1.6 8 3 10.7 3.2 6 .4 8.5 1.8 9.3 4.9.3 1.4 1 2.5 1.5 2.5s.7-1.1.3-2.5c-.5-2-.3-2.4.9-2 1.2.5 1.5 6.6 2 40.3.5 35 1.3 51.5 3.2 68.4l.6 4.8h-4.9c-12.1 0-39.1 4.5-49.1 8.2-7.8 2.9-10.6 5.1-13.3 10.6l-2.3 4.7-.7-25c-.3-13.8-1.3-32.9-2.2-42.5-2.1-22.2-3.2-55-2-55.8.5-.4 2.8-3.2 5.1-6.2 4.7-6.1 11.7-12.3 17.2-15.2 5.3-2.7 15.8-2 23.7 1.6zm-86.3 3.7C77.1 101.3 83 109 83 112.2c0 1.9-.1 1.9-2.7-.1-5.3-3.8-8.1-6.6-11.2-11-4.9-7-4.1-7.8 3.2-3zm33.7 10.2c0 10.2-.7 11.7-5.2 11.7-2.3 0-2.8-.4-2.8-2.5 0-1.4.4-2.5.9-2.5s.8-2.2.8-4.8c-.1-4.8 3-11.2 5.4-11.2.5 0 .9 4.2.9 9.3zm-20.6.2c.3.8.1 1.5-.3 1.5-.5 0-1.1-.7-1.5-1.5-.3-.8-.1-1.5.3-1.5.5 0 1.1.7 1.5 1.5zm5 5.8c1.2 1.9.3 3.2-1.9 2.4-1.7-.7-2.1-5.1-.3-4.5.6.2 1.6 1.2 2.2 2.1z"})))}},1071:function(e,t,c){var n,r,l,a=c(7294),i=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}t.Z=function(e){var t=e.title,c=e.titleId,m=s(e,i);return a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:553.333,height:677.333,viewBox:"0 0 415 508","aria-labelledby":c},m),t?a.createElement("title",{id:c},t):null,n||(n=a.createElement("path",{d:"M171.6 7.1c-1.4 1.1-3.8 4-5.2 6.5C165 16 163.5 18 163 18c-.4 0-1.5-1.1-2.4-2.5-4.3-6.6-9.7-8.4-13.6-4.5-2.9 2.9-3.6 5.2-5.5 17.6-2.7 18.3-2.6 18.1-6.9 9.9-3-5.8-5.4-7.3-10.1-6.1-3.8 1-5.3 4.8-4.4 11.4.4 3 .5 6.9.2 8.6-.9 4.8-4.1 10.4-6.9 12.2-1.4.9-3.2 3-4 4.5-1.4 2.8-1.8 2.9-8.2 2.9-14.5 0-35.7 2.1-39.2 3.8-4.1 2-5.3 5.6-3.4 10 1 2.6 2.2 3.4 7 4.8l5.8 1.6-4 2C61.7 97 54.3 104.6 51 111.4c-3.6 7-3.7 10.4-.9 14 1.2 1.5 2.3 4.3 2.4 6.2.1 2.6 1.3 4.6 4.4 7.8l4.3 4.3-3 2.2c-4.3 3-5.7 7.9-3.8 12.5 1.4 3.4 2.3 3.9 7.9 4.8 1.4.2.2 1.5-4.1 4.5-7.9 5.5-13.8 11.8-18.3 19.3-6.1 10-6.1 17.3.1 20.8 1.6.9 3 2.4 3 3.3 0 2.1 3.7 5.9 5.8 6 5 .4 7.4-1.5 9.1-7.1 1.8-6.2 5.2-7.5 19.1-7.5 9.9 0 12.6.4 19.2 2.8 10.8 3.8 14.9 4.3 18.9 2.3 3.9-1.9 3.9-1.9 3.9-.3 0 2.7 7 15.6 11.5 21.2 14 17.3 26.5 24.6 34.5 20 3.6-2.1 3.9-1.9 3.3 2.3-.6 4.5 1.6 9.5 5 11.4 2 1.2 1.8 1.3-3.3 1.8-4 .4-5.5.9-5.5 2 0 1.3 4.8 1.5 38.5 1.2 21.2-.2 39.3-.6 40.3-.8 2.9-.9 2-3.4-1.2-3.4h-2.9l2.1-5 2.1-4.9 3.9 3.5c4.8 4.4 10.1 6.7 13 5.8 1.2-.3 3.5-1.8 5-3.3 5.3-4.9 15.8-22.8 21.3-36.1l2.2-5.5h13c14.7 0 17.8-1.2 19.6-7.3.9-2.8 1.6-3.3 6.4-4.4 3-.6 7.2-2.4 9.3-4 3.5-2.5 3.9-3.3 3.9-7.1 0-2.4-.5-4.8-1-5.3-.7-.7.3-2.1 3.1-4.4 5.5-4.4 7.4-8.9 5.6-13.3-1.5-3.4-3.6-4.9-10.2-6.9-3.3-1.1-4-1.8-4-3.8 0-2.4.4-2.5 7-3.2 26.5-2.8 29.5-3.6 31.4-8.8 2.7-7.7-2.7-11.2-18.2-11.8-15.3-.6-22.8.4-27.4 3.5-4 2.8-13.5 4.4-14.7 2.5-.3-.5.8-2.7 2.5-4.8 8.2-10.2 13.2-20.7 15.8-33.2 3.1-15.2-1-23.4-11.1-21.8l-3.8.6v-4.5c0-5.5-2.1-11-4.8-12.4-1.2-.6-3.7-1.1-5.7-1.1-2.2 0-4.7-.8-6.2-2-1.4-1.1-3.1-2-3.8-2-.7 0-1.8-1.4-2.4-3.1-1.4-4.2-3.8-5.8-8.3-5.9-3.3 0-14.8 3.6-18.1 5.7-.7.4-3.5.8-6.4.8-4.4 0-6 .6-11.3 4.3-3.4 2.4-6.4 4.1-6.7 3.9-.3-.3 1.3-8.4 3.6-18s4.1-19.1 4.1-21c0-5.1-3.6-9.1-8.4-9.1-4.5 0-8.1 2.6-12.5 9-1.8 2.7-3.8 4.8-4.5 4.7-.6-.1-3.1-.7-5.6-1.3-2.5-.6-8.2-1.6-12.8-2.2l-8.2-1.2-3.6-7.2C189.8 12 182.6 5 177.7 5c-2 0-4.6.9-6.1 2.1zM180 26c.9 1.6.8 2.2-.5 2.6-2.1.9-3.7-.8-2.9-2.9.8-2.3 2.1-2.1 3.4.3zm-18.9 22.1c3.8 7.1 8.1 11.6 12 12.4 1.7.4 4.2 1.3 5.6 2 1.5.8 5.9 1.3 10.7 1.3 9.1.1 8.9.2 20.1-8.6 5.7-4.3 7.5-5.2 10.9-5.2 2.8 0 5 .7 6.8 2.3l2.7 2.2-5.4 21c-3 11.5-5.5 22-5.5 23.3 0 3.2-1.6 3.5-10 1.7-15.7-3.4-40.1-2.9-58.9 1.2-8.8 1.9-12.5 4.8-16.6 13-2.5 5.1-2.9 7-3.1 16.3-.2 11.6-.9 15.4-5.9 31.5-3.9 13-5.5 20.2-5.5 25.5 0 6.6-.7 7.3-4.5 4.5-5.4-4.2-33.6-13.5-40.7-13.5-4.9 0-3.8-1.7 3.6-5.5 6-3 9.2-3.9 17.5-4.9 11.8-1.5 14.5-3.1 14.5-9 0-4.1-2.3-7-7.6-9.7-2.8-1.4-3.8-2.6-3.8-4.3 0-4.2-3-6.6-10-8.1-3.6-.7-8.3-2.1-10.4-3l-3.9-1.6 3.2-2c4-2.4 5.4-5.8 3.9-10-1.2-3.6-5.7-5.9-11.5-5.9l-3.8-.1 3.7-3.4c3.3-3.1 4.4-3.5 9-3.5 4.2 0 7 .8 13.3 4.1 4.4 2.2 9.9 4.3 12.2 4.6 3.7.5 4.6.2 7.3-2.5 3.3-3.4 3.7-5.9 1.6-10-1.4-2.7-7.2-8.5-13.3-13.4-1.8-1.4-2.9-2.9-2.6-3.2 1.4-1.4 16-.6 19.3 1 4.8 2.4 16.7 3.3 31.4 2.3 14.5-.9 18.9-2 22.9-5.7 3.6-3.5 3.8-9.2.2-12.7-2.3-2.3-3.1-2.5-13.1-2.5-10.1 0-10.6-.1-9.2-1.8 2.1-2.3 3.5-7.1 4.8-16.7.6-4.4 1.4-9.1 1.6-10.5.6-2.5.6-2.5 2-.5.9 1.1 2.9 4.5 4.5 7.6zm17.6-3.5c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm8.3.4c0 .5-.4 1-.9 1-.6 0-1.3-.5-1.6-1-.3-.6.1-1 .9-1 .9 0 1.6.4 1.6 1zm-51.5 22.5c1.4 1.4 2.5 2.8 2.5 3 0 .3-2 .5-4.5.5-5 0-4.9.1-3.3-3.5 1.4-3.1 2.1-3.1 5.3 0zm140 6.7c-2.4 7.8-1.7 11.1 2.5 13.3 3.5 1.8 5.6 1.1 9.8-3.5 2.5-2.7 3.1-2.8 8-2.3l5.4.6-.7 4.8c-1.4 9.8 3.1 15.4 11.8 14.7 4-.3 4.2-.2 3.9 2.2-.5 4-3.9 12.6-6.8 17.2-4.2 6.7-14.7 19-15.4 18.1-.4-.4-1.7-3.5-2.9-6.8-3.1-8.4-8.6-16.1-13.7-19.1-4.1-2.4-5.4-2.6-19.6-2.9-13.8-.3-21.9-1.3-23.5-2.9-1.5-1.5 8-16.5 16-25.2 4.8-5.3 5.3-5.6 8.9-5 3.1.5 4.8.1 9.1-2.4 6.4-3.7 8.2-3.8 7.2-.8zm-71.8 29.3c11.9 1.9 14.3 2.9 14.3 5.7 0 3 3.8 6.8 6.9 6.8 1.3 0 3.5-1 4.7-2.1 2.3-2.1 2.3-2.1 11.5-.4 5.6 1 13.3 1.6 19.4 1.5 13.4-.3 12.6-.5 17.5 3.7 2.9 2.5 5.4 6 7.6 10.8 4.6 10 5.5 14 3.8 16.2-2.1 2.9-1.7 7.1 1.1 9.9 2.4 2.4 2.5 3.1 2.5 13.7 0 13.5-2.3 28.7-5.2 34.2-1.1 2.2-2 5.5-2 7.3.2 6-7.5 23.2-17.4 38.4-7.6 11.8-11.1 12.2-20.4 2.7-3.1-3.3-6.1-5.9-6.7-5.9-.5 0-1.6 2.8-2.4 6.2-2.4 10.3-2.2 10.2-32.2 10.3-26.5 0-27.3-.1-32.4-4.8-1.9-1.7-2.3-3.1-2.3-7.8 0-6.9-1.5-7.9-7.9-5.3-7.4 2.9-13.7-.1-25-12.1-11.4-12.2-17.1-23.3-17.1-33.2 0-9.5 2.3-23 5.7-34.3 5.1-16.5 6.2-22.4 6.3-32.2 0-11 2.5-18.2 7.9-23.1 3.4-3 5.1-3.7 13.2-5.1 16.8-2.9 35-3.3 48.6-1.1zM71 159.5c-3.3 1.9-4.6 1.9-3 0 .7-.8 2.2-1.5 3.4-1.5 2 .1 2 .2-.4 1.5zm248.1-.6c.4.1.7 2.4.8 5.3.1 5 2 9.5 4.8 11.1 2 1.2 1.6 2.1-1.6 3.5-3.4 1.5-5.1 5.2-4.8 10.2l.2 3.5-7.3 1c-5.8.8-7.8 1.5-9.3 3.4-1 1.3-1.9 2.9-1.9 3.7 0 .8-.6 1.5-1.2 1.5-1.6.2-5.2-.2-5.6-.5-.1-.2.5-3.6 1.4-7.7.8-4.1 1.8-13.3 2.1-20.4.2-7.2.6-13.5.7-14 .3-.8 17.4-1.2 21.7-.6z"})),r||(r=a.createElement("path",{d:"M174.5 124c-11 1.7-12.9 3.8-15.1 16-.7 4.5-1.6 8.6-2 9.1-.8 1.3-.8 8.2.1 10.7 1 3.5 3.7 2.8 3.3-.8-.2-1.9.3-3.4 1.2-4 .9-.6 1.3-2.3 1.1-5.2-.3-5.2 2.3-8.3 9.3-11.6 9.8-4.7 17.4-3.4 19.6 3.2.6 2 1.8 3.6 2.6 3.6 1.1 0 1.4-1.8 1.4-8.1 0-4.4-.5-8.9-1-9.9-1.9-3.5-9.7-4.6-20.5-3zm16.5 5c2.6 2.6 2.7 5.5.3 4.5-7.8-3.2-14.1-2.5-23 2.6-2.9 1.6-5.3 2.7-5.3 2.4 0-.2.7-2.3 1.6-4.5 1.7-4.1 4.1-5.4 11.9-6.3 8.5-1.1 12.5-.7 14.5 1.3zM245.6 129.1c-6.2 2.5-12.2 6.7-16.4 11.4-5.2 5.7-4.1 6.4 7.1 4.7 12.1-1.8 16.1-1.2 18.7 3.1 1.1 1.8 2 4.9 2 7 0 4.7 2.3 9.3 5.1 10.2 3 1 5-1.2 2.6-2.9-1.5-1.2-1.6-1.4-.2-2 1.2-.4 1.5-2.3 1.5-8.8 0-9.2-1.9-17.9-4.8-21.8-2.5-3.3-8.8-3.7-15.6-.9zm14 5.5c2.1 5.1 3.9 18.3 2.9 21.9-.8 2.9-.8 2.9-1.6-1.6-.8-5.4-2.8-9.6-5.9-12.4-1.9-1.7-3.4-2-11.9-1.8l-9.6.2 2.5-2c4.5-3.6 14.4-7.9 18.3-7.9 3.4 0 4 .4 5.3 3.6zM200.2 162.2c-5.9 1.3-12.6 7.8-14.2 13.7-3.3 12.3 6.1 24.1 19.2 24.1 7.1-.1 13-2.9 16.7-8 10.8-14.9-3.1-34-21.7-29.8zM159.4 197.2c-.5.7 2.5 4.1 7.7 9 7.7 7.1 11.4 9.1 11.4 6.1 0-1.3-16.2-16.3-17.6-16.3-.4 0-1.1.5-1.5 1.2zM250.5 219c-2.8 3.1-8 4.2-17.8 3.9-7.6-.3-9.2-.1-9.2 1.1 0 .8 1.1 1.7 2.5 2.1 4 1.1 16.1 1 20.4-.2 4.2-1.2 8.6-4.9 8.6-7.4 0-2.1-2.3-1.9-4.5.5zM186.1 220.1c-3.8 1.5-1.1 3.1 5.7 3.4 3.9.2 8 1.2 12 3 3.7 1.7 6.8 2.5 7.9 2 1.7-.6 1.6-.8-.5-2.5-5.4-4.4-20.3-7.9-25.1-5.9zM245.5 269c-.3.5-.3 1.5.1 2.1.5.9-9.6 1.1-40.2.8-35.9-.4-40.9-.2-40.9 1.1 0 2 13.3 2.7 55.6 2.9 34.3.1 36.9-.2 35.3-4.3-1.1-2.9-8.5-4.9-9.9-2.6zM171.9 279.9l-7.7.6-5.1 7.7c-6.8 10.1-12.8 15.4-19.2 16.7-16.8 3.6-76.3 8.4-88 7.1-4.6-.5-8.7-.6-9.1-.2-.5.5-.7 27.6-.6 60.3l.3 59.4 18 .6c10.5.4 21.1 1.3 25.3 2.3 28.4 6.2 74.5 29.4 104.5 52.4l5.9 4.5 10.1-3.3c22.5-7.2 31.3-12.5 49.2-30 8.6-8.4 15.7-14.5 18.5-15.8 8.6-4 34.5-10.3 61.5-14.9 3.5-.6 5.1-1.3 5.3-2.6.5-2.3-.8-2.2-17.5.8-20.9 3.8-42 9.3-50.2 13.1-6.4 2.9-9 5.1-19.5 15.8-13 13.3-17.2 16.5-29.3 22.5-6.2 3.1-22.6 9.1-24.9 9.1-.2 0-.4-26-.4-57.9v-57.8l5.3-.7c7.7-1 11.6-2.5 17.3-6.7 15-11 42.7-26 57.3-30.9 3.6-1.2 12.6-3.2 20-4.5 7.5-1.3 16.3-3.3 19.6-4.5 13.1-4.5 31.5-15.3 31.5-18.5 0-2.4-1.8-1.8-9.1 3-13.2 8.9-27.4 14.1-44.4 16.5-20.6 2.9-42.6 12.7-71.7 32.1-16.6 10.9-24.1 12.1-39.8 6.2-8.5-3.2-13.7-6.3-20.7-12.4-11.2-9.8-38.3-20.8-73.3-29.7-17.9-4.6-18.5-4.3 10.5-6.7 24.5-2.1 39-4.2 44.2-6.5 5-2.2 11-8.2 16.6-16.7l4.1-6.3h7.7c8.8 0 21.7 2.1 30.4 4.9l6 1.9-13.5.2c-20.6.4-28.5 1.2-28.5 3 0 1.3 3.5 1.5 26.5 1.1l26.5-.3 7.5 3c20.8 8.3 42.2 11.3 78.4 11.1 21.7-.1 29.1-.9 29.1-2.9 0-1.3-3-1.5-22.5-1.2-22.2.4-44.8-.8-56.5-2.9-3.3-.6-8.7-2.4-12-4-3.3-1.5-9.1-3.6-13-4.5-3.8-.9-10-2.7-13.7-4.1-3.6-1.3-9.5-3.2-12.9-4.2l-6.4-1.8 9.4-.6c11.4-.8 24.8-.8 31.6.1l5 .7-.3 4.3c-.2 3.7 0 4.3 1.5 4 2-.4 3.5-5.2 2.6-8.6-.3-1.3-1.7-2.8-3-3.3-2.6-.9-61.3-.9-74.4 0zM82 322c44.2 11 66.5 19.7 80.6 31.5 8.5 7.2 18.9 12.7 27.2 14.6l5.2 1.2v115.8l-7.2-5.2c-32.2-22.8-74.9-43.7-101-49.4-4.1-.9-14.8-1.9-24.6-2.2-14.5-.5-17.2-.8-16.8-2 .4-.8.6-25.5.6-54.8 0-49.9.1-53.4 1.8-53.9 4.4-1.3 18.7.5 34.2 4.4z"})),l||(l=a.createElement("path",{d:"M171 298.8c-2.9.5-4.6 1.3-4.8 2.2-.2 1.4 1.7 1.6 14 1.6 13.6-.1 14.7.1 23.3 3.2 11.6 4.1 24.1 6.2 37.6 6.2 10 0 10.9-.2 10.9-1.9s-1.2-1.9-14.7-2.4c-15-.6-23.3-2.1-35.3-6.5-6-2.2-23.1-3.5-31-2.4zM166 309.5c0 1.7 13.7 6.3 28.1 9.4 14.4 3.1 36 4.6 44.7 3.1 7.7-1.3 11.4-3.2 9.6-5-.7-.7-2.8-.6-7.4.6-11.4 2.9-38.3.1-60.3-6.2-13.3-3.8-14.7-4-14.7-1.9zM342 314.2c-.4 9.8.2 113.9.7 115.6.3 1.3 1 2.1 1.7 1.9 2.5-.8 1.4-117.6-1.1-118.5-.7-.2-1.3.2-1.3 1z"})))}},5798:function(e,t,c){var n,r,l=c(7294),a=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}t.Z=function(e){var t=e.title,c=e.titleId,s=o(e,a);return l.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:553.333,height:561.333,viewBox:"0 0 415 421","aria-labelledby":c},s),t?l.createElement("title",{id:c},t):null,n||(n=l.createElement("path",{d:"M204.3 26.2c-1.1.7-22.1 11.4-46.5 23.7-24.3 12.3-44.7 22.7-45.3 23.2-.5.6-.5 1.3.2 2 .8.8 13.5-5.2 45.2-21 24.2-12.2 44.1-21.8 44.2-21.4.4 3.5-.4 71.7-2.7 235.6-.6 42.5-.5 47.7.8 47.7 1.4 0 1.7-3.2 2.2-22.3.6-21.3 3.6-236.9 3.6-255 0-6.6.3-8.9 1.4-9.3 4.1-1.6 24.3 9.7 38.2 21.2 9.1 7.6 15.1 10.4 25.4 11.9 5 .8 13 4.4 17.3 7.9 2.6 2.1 2.7 2.6 1.6 4.4-1.7 2.7-.2 7.5 2.5 8 1.6.4 1.8 0 1.2-3.3-.7-3.6-.7-3.7 2.1-3.1 2.2.5 3.4.2 4.8-1.4 1.9-2.1 5-2.6 7.4-1.1 1.1.7.7 3.1-2.2 13.7-4.5 15.9-8.1 34-11 54.9-2.1 15.6-2.2 18.4-2.2 112.3 0 52.9-.1 96.2-.2 96.2s-3-1.6-6.4-3.7C262.2 333.5 222 319 207 319c-4.2 0-4.8.4-8.9 5.1-5.4 6.3-12.9 11.2-20.2 13.3-3.1.9-8.3 3.4-11.6 5.5-8.3 5.6-21.8 18.5-29.3 28-3.5 4.5-6.4 8.1-6.5 8.1-.1 0-1.5-1.9-3.2-4.2l-3.1-4.3 1-35c1.1-37.9.4-123.6-1.2-159-1.7-38.5-5.5-86.4-7.6-95.3-.7-3.5-2.9-2-2.7 1.9.8 18.5 1.1 22.8 1.5 23.5 1.6 2.7 4.4 43.4 5.9 84.4 1.2 34.2 1 172.3-.3 173.5-.4.4-3.9-2.1-7.7-5.7C96.3 343.3 71.5 331 56.8 331c-3.5 0-4.8.4-4.8 1.4 0 1 1.6 1.7 4.8 2.1 9.1 1.1 17.5 3.8 26.9 8.6 12.5 6.4 21.3 12.7 30.1 21.7l7.3 7.5-.3 6c-.3 5.2 0 6.2 1.4 6.5 1.4.3 1.8-.3 1.8-2.7 0-4.3 1.4-3.9 4.5 1.5 2.9 5 5.1 5.3 4.7.8-.2-2.4 1.4-4.8 8.2-13.1 14.2-17 26.3-26.2 41.9-31.8 5.9-2.1 13.8-7.9 17.9-13.3 3.7-4.9 3.6-4.9 22.8-.2 17.7 4.2 49 17.4 64.3 27l4.7 3v6.9c0 8.7.9 13.1 2.6 13.1 1.1 0 1.4-1.9 1.4-8.2 0-9.8 1.2-9.4 3.4 1 2.6 12.4 5.8 16.5 9.7 12.5 2.7-2.6 2.1-6.6-2-14.7l-2.8-5.6 3.1-.4c1.7-.3 5.9-.8 9.3-1.1 17-1.6 31.7-8.6 57.8-27.2 1.7-1.2 4-2.4 5.3-2.8 2-.6 2.2-.3 2.2 2.9 0 5.4 2.8 4.8 3.2-.6.3-4.1.4-4.3 5.1-5.6 3-.9 4.7-1.9 4.7-2.9 0-1.3-.8-1.5-4.5-1l-4.5.7V175.6c0-81-.3-147.5-.6-147.9-.3-.3-3.5 1.4-7 3.8-10.2 7-18.8 10.6-27.2 11.6-15.2 1.7-30 8.7-45.7 21.4-7.5 6.1-10.4 6.5-16.9 2.2-8-5.3-12.6-7.4-18.1-8-8.3-.9-14.7-3.6-20.5-8.6-9.1-7.9-20.5-15.7-29.3-19.9-9.5-4.7-14.3-5.8-17.4-4zm179.4 59c-.4 28.1-.7 93.5-.7 145.3v94.1l-3.4 1.2c-1.8.7-7.3 4.1-12.2 7.6-19.1 13.7-33.7 20.3-49.7 22.5-10 1.4-15 1.4-18 0-2.3-1-2.5-1.8-3.1-11.3-1.2-17.6-.8-176 .4-189.1 2-22.4 7.1-49.1 13.6-72.3 2.5-8.9 2.6-9.4.9-11.2-1-1.1-2.4-2-3.2-2-.7 0-1.3-.3-1.3-.6 0-1.8 15.9-12.5 24.4-16.5 7.1-3.3 20.3-6.9 25.6-6.9 3.5 0 15.8-5.4 22.5-9.9 1.7-1.1 3.4-2 3.9-2 .6-.1.7 20.4.3 51.1zm-76.8 287.9c1.3 3.9 1.4 4.9.2 4.9-.5 0-1.3-1.8-1.9-4-1.2-4.7.1-5.4 1.7-.9z"})),r||(r=l.createElement("path",{d:"M340 122c-1.2 1.2-2 3.3-2 5.3 0 7.6 9.8 9.8 12.9 3 1.6-3.4 1.4-4.7-1-7.7-2.5-3.2-7-3.5-9.9-.6zM354.4 137.4c-.6 1.4 2.2 6.6 3.5 6.6 1.7 0 1.9-1.4.6-4.1-1.9-3.5-3.4-4.5-4.1-2.5zM352 163.4c-3.3 4.9-3.7 6.6-1.6 6.6 1.2 0 7.6-8.7 7.6-10.3 0-2.2-3.3-.1-6 3.7zM332 185c-3.8 3.2-4.2 4-2.7 4.5 1.9.8 9.5-5 9.6-7.3.2-2.2-2.3-1.2-6.9 2.8zM311 200.7c-1.9 1.3-4.2 2.8-5 3.3-1.1.7-1.2 1.2-.4 2 .9.9 1.9.7 4-.6 6.3-3.9 7.4-5.1 6.1-6.2-.8-.7-2.2-.3-4.7 1.5zM46.5 29c-1.1 1.8.4 2.7 8.7 5.5 17 5.5 39.6 17.8 54.6 29.7 4.1 3.3 6.8 4.8 7.9 4.4 5.9-2.3-29-25.1-52.5-34.4-14.5-5.7-17.8-6.6-18.7-5.2zM39 184.1c0 147.1.1 155 1.8 154.7 1.6-.3 1.7-8.6 2-155.1C43 29.5 43 29 41 29s-2 .6-2 155.1zM131 155.4c0 1.2 3.9 2.3 10.4 2.9 3.6.4 2.7-2-1.2-3.1-5.3-1.6-9.2-1.5-9.2.2zM106 170.7c-3.3 5.1-3.5 5.9-2 6.8 1.1.7 8.1-9.4 7.4-10.7-1.1-1.7-2.5-.7-5.4 3.9zM154.4 169.3c-.2.7.6 3.6 1.8 6.5 1.6 3.6 2.7 4.9 3.6 4.3 1-.6.9-1.9-.8-6.4-2.1-5.6-3.6-7-4.6-4.4zM91.5 196c-2.9 5.8-3 6-1 6 .8 0 2.6-2.2 4-5 2.9-5.8 3-6 1-6-.8 0-2.6 2.2-4 5zM161 202.5c0 5.1.3 6.5 1.5 6.5s1.5-1.4 1.5-6.5-.3-6.5-1.5-6.5-1.5 1.4-1.5 6.5zM278.5 208.7c-4.7 1.2-6.8 2.4-5.9 3.3 1.5 1.5 12.4-.9 12.4-2.6 0-1.4-2.6-1.6-6.5-.7zM81.5 218.2c-2.5 7-3.4 10.2-3.1 10.6 1.3 1.2 3.3-1 4.5-4.8.7-2.3 1.5-4.8 1.8-5.6.3-.8-.1-1.4-1.1-1.4-.9 0-1.9.6-2.1 1.2zM256 226.7c-3.4 5.4-3.5 5.9-1.5 6.6.9.4 2.3-1.1 4.3-4.8 1.6-3 2.7-5.7 2.4-6-1.2-1.2-2.4-.3-5.2 4.2zM162 231.5c0 5.1.3 6.5 1.5 6.5s1.5-1.4 1.5-6.5-.3-6.5-1.5-6.5-1.5 1.4-1.5 6.5zM73.5 250.5c-.7 6.2-.1 8.2 2.1 6.4 1.9-1.6 2-11.9 0-11.9-.9 0-1.6 1.8-2.1 5.5zM245.6 252.7c-2 5.7-2 8.3-.3 8.3 1.4 0 5-10.8 4.1-12.2-1.1-1.8-2.3-.6-3.8 3.9zM163.1 258.7c.1 5.9 1 8.5 2.6 7.5 1.7-1.1.5-12.2-1.3-12.2-1 0-1.4 1.4-1.3 4.7zM73 260.7c-5.1 1.9-6.8 8.5-3 12.3 6.1 6.1 15.9-3.2 10.3-9.8-2-2.3-5-3.3-7.3-2.5zM235.2 280.3c-2 3.4-2.7 5.5-2 6.2 1.1 1.1 2.9-.9 5.8-6.7 1.6-3 1.7-3.7.5-4.1-.9-.4-2.4 1.2-4.3 4.6zM168.6 282.9c-.6 1 5.2 10.1 6.4 10.1 2.1 0 1.9-2.1-.5-5.6-1.4-2-2.5-4.1-2.5-4.5 0-1.2-2.7-1.2-3.4 0zM216.5 297c-1.1.5-3.2.9-4.7.9-4.3.1-3.7 3.1.6 3.1 4.9 0 9.6-1.9 8.9-3.6-.6-1.6-1.8-1.7-4.8-.4zM190.6 299.5c-.4 1 .1 1.5 1.4 1.5 1.1 0 2.3.1 2.7.2.4.2.9-.5 1.1-1.5.4-2.2-4.3-2.4-5.2-.2z"})))}}}]);