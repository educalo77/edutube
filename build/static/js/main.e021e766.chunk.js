(this.webpackJsonpedutube=this.webpackJsonpedutube||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),i=c(37),r=c.n(i),o=(c(61),c(62),c(16)),j=(c(63),c(38)),d=c.n(j),l=c(39),b=c.n(l),h=c(40),u=c.n(h),p=c(41),O=c.n(p),m=c(42),x=c.n(m),v=c(107),f=c(14);var g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header_left",children:[Object(s.jsx)(d.a,{}),Object(s.jsx)(f.b,{to:"/",children:Object(s.jsx)("img",{className:"header_logo",src:"https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png",alt:""})})]}),Object(s.jsxs)("div",{className:"header_input",children:[Object(s.jsx)("input",{onChange:function(e){return n(e.target.value)},value:c,placeholder:"Search",type:"text"}),Object(s.jsx)(f.b,{to:"/search/:".concat(c),children:Object(s.jsx)(b.a,{className:"header_inputButton"})})]}),Object(s.jsxs)("div",{className:"header_icons",children:[Object(s.jsx)(u.a,{className:"header_icon"}),Object(s.jsx)(O.a,{className:"header_icon"}),Object(s.jsx)(x.a,{className:"header_icon"}),Object(s.jsx)(v.a,{})]})]})};c(70),c(71);var w=function(e){var t=e.selected,c=e.Icon,a=e.title;return Object(s.jsxs)("div",{className:"sidebarRow ".concat(t&&"selected"),children:[Object(s.jsx)(c,{className:"sidebarRow_icon"}),Object(s.jsx)("h2",{className:"sidebarRow_title",children:a})]})},N=c(43),_=c.n(N),I=c(44),y=c.n(I),R=c(45),S=c.n(R),T=c(46),k=c.n(T),C=c(47),L=c.n(C),F=c(48),V=c.n(F),M=c(49),P=c.n(M),A=c(50),B=c.n(A),E=c(51),H=c.n(E);var Y=function(){return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)(w,{selected:!0,Icon:_.a,title:"Home"}),Object(s.jsx)(w,{Icon:y.a,title:"Trending"}),Object(s.jsx)(w,{Icon:S.a,title:"Subscription"}),Object(s.jsx)("hr",{}),Object(s.jsx)(w,{Icon:k.a,title:"Library"}),Object(s.jsx)(w,{Icon:L.a,title:"History"}),Object(s.jsx)(w,{Icon:V.a,title:"Your Videos"}),Object(s.jsx)(w,{Icon:P.a,title:"Watch Later"}),Object(s.jsx)(w,{Icon:B.a,title:"Liked Videos"}),Object(s.jsx)(w,{Icon:H.a,title:"Show More"}),Object(s.jsx)("hr",{})]})},q=c(17),J=c.n(q),z=c(20),D=(c(73),c(52)),G=c.n(D).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:50,key:"AIzaSyB5TSLM8fSFv5GH0bscaTl6Tv9d9Oms_y4"}});c(91);var U=function(e){var t=e.image,c=e.title,a=e.channel,n=e.views,i=e.timestamp,r=e.channelImage;return Object(s.jsxs)("div",{className:"videoCard",children:[Object(s.jsx)("img",{className:"videoCard_thumbnail",src:t,alt:""}),Object(s.jsxs)("div",{className:"videoCard_info",children:[Object(s.jsx)(v.a,{className:"videoCard_avatar",alt:a,scr:r}),Object(s.jsxs)("div",{className:"videoCard_text",children:[Object(s.jsx)("h4",{children:c}),Object(s.jsx)("p",{children:a}),Object(s.jsxs)("p",{children:[n," | ",i]})]})]})]})};var W=function(){var e=Object(a.useState)({videos:[],selectedVideo:null}),t=Object(o.a)(e,2),c=t[0],n=t[1],i=function(){var e=Object(z.a)(J.a.mark((function e(t){var c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/search",{params:{q:t}});case 2:c=e.sent,n({videos:c.data.items});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i("slayer")}),[]),Object(s.jsxs)("div",{className:"recomendedVideos",children:[Object(s.jsx)("h2",{children:"Recommended"}),Object(s.jsx)("div",{className:"recomendedVideos_videos",children:c.videos.map((function(e){return Object(s.jsx)(f.b,{to:"/video/".concat(e.id.videoId),children:Object(s.jsx)(U,{views:"2.3M views",channelImage:"https://upload.wikimedia.org/wikipedia/commons/a/af/Youtube.png",image:"".concat(e.snippet.thumbnails.high.url),channel:"".concat(e.snippet.channelTitle),timestamp:"".concat(e.snippet.publishedAt),subs:"659",title:"".concat(e.snippet.title),description:"".concat(e.snippet.description)})})}))})]})},K=c(3),Q=(c(92),c(54)),X=c.n(Q);c(93),c(53);c(94);var Z=function(e){var t=e.view,c=e.title,a=e.timestamp,n=e.channel,i=e.subs,r=e.description,o=e.image;return Object(s.jsxs)("div",{className:"videoRow",children:[Object(s.jsx)("img",{src:o,alt:""}),Object(s.jsxs)("div",{className:"videoRow_text",children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("p",{className:"videoRow_headline",children:[n," | ",Object(s.jsxs)("span",{className:"videoRow_subs",children:[Object(s.jsx)("span",{className:"videoRow_subsno",children:i})," subscribers"]})," ","| ",t," views | ",a]}),Object(s.jsx)("p",{className:"videoRow_description",children:r})]})]})};var $=function(){var e=Object(K.f)(),t=Object(a.useState)({videos:[],selectedVideo:null}),c=Object(o.a)(t,2),n=c[0],i=c[1],r=function(){var e=Object(z.a)(J.a.mark((function e(t){var c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/search",{params:{q:t}});case 2:c=e.sent,i({videos:c.data.items}),console.log(c.data.items);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r(e.searchTerm)}),[e.searchTerm]),Object(s.jsxs)("div",{className:"searchPage",children:[Object(s.jsxs)("div",{className:"searchPage_filter",children:[Object(s.jsx)(X.a,{}),Object(s.jsx)("h2",{children:"FILTER"})]}),Object(s.jsx)("hr",{}),n.videos&&n.videos.map((function(e){return Object(s.jsx)(f.b,{to:"/video/".concat(e.id.videoId),children:Object(s.jsx)(Z,{image:"".concat(e.snippet.thumbnails.high.url),channel:"".concat(e.snippet.channelTitle),timestamp:"".concat(e.snippet.publishedAt),subs:"659",title:"".concat(e.snippet.title),view:"1M",description:"".concat(e.snippet.description)})})})),Object(s.jsx)("hr",{})]})};var ee=function(){var e=Object(K.f)();console.log(e.videoId);var t="https://www.youtube.com/embed/".concat(e.videoId);return console.log(t),Object(s.jsx)("div",{children:Object(s.jsx)("iframe",{src:t,allowFullScreen:!0,title:"Video Player",frameborder:"0",allow:"autoplay; encrypted-media"})})};var te=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(f.a,{children:[Object(s.jsx)(g,{}),Object(s.jsxs)(K.c,{children:[Object(s.jsx)(K.a,{path:"/video/:videoId",children:Object(s.jsxs)("div",{className:"app_page",children:[Object(s.jsx)(Y,{}),Object(s.jsx)(ee,{})]})}),Object(s.jsx)(K.a,{path:"/search/:searchTerm",children:Object(s.jsxs)("div",{className:"app_page",children:[Object(s.jsx)(Y,{}),Object(s.jsx)($,{})]})}),Object(s.jsx)(K.a,{path:"/",children:Object(s.jsxs)("div",{className:"app_page",children:[Object(s.jsx)(Y,{}),Object(s.jsx)(W,{})]})})]})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(te,{})}),document.getElementById("root")),ce()}},[[95,1,2]]]);
//# sourceMappingURL=main.e021e766.chunk.js.map