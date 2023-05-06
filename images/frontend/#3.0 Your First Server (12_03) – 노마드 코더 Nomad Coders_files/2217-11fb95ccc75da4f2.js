"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2217,3761],{51609:function(n,e,t){var r=t(85893);e.Z=function(n){var e=n.badges,t=n.size,a=void 0===t?"base":t,o=n.gridCols,i=void 0===o?"grid-cols-5":o;return(0,r.jsx)("div",{className:"grid ".concat(i," gap-2 "),children:e.map((function(n,e){return(0,r.jsxs)("div",{className:"flex flex-col items-center relative",children:[(0,r.jsx)("img",{src:n.image||"",className:"".concat("base"===a?"w-16 h-16":""," ").concat("lg"===a?"w-20 h-20":""," border-4 border-white dark:border-gray-500 rounded-full shadow-md ").concat(n.isUnlocked?"opacity-100":"opacity-50")}),!n.isUnlocked&&(0,r.jsx)("div",{className:"bg-gray-800 shadow-sm p-1 absolute z-10 rounded-full bottom-4",children:(0,r.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",className:"w-3 h-3 text-white",children:(0,r.jsx)("path",{d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd",fillRule:"evenodd"})})}),(0,r.jsx)("span",{className:" bg-gray-100 dark:bg-gray-500 dark:text-gray-300 text-gray-500 mt-1 shadow text-sm font-medium px-2 py-x rounded-md",children:n.name})]},e)}))})}},22989:function(n,e,t){var r=t(85893),a=t(25675),o=t(41664),i=t(11163),s=t(87379),l=t(22184);function c(){var n,e,t=(n=["\n  ",";\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return t},t}var d=s.ZP.div.withConfig({componentId:"sc-7257b669-0"})(c(),(function(n){return n.clickeable?"\n    cursor:pointer;\n    &:hover {\n    .bg {\n      transform: translateY(-5px);\n    }\n    .info {\n      transform: translateY(-10px);\n    }\n    .xx img {\n      transform: scale(1.1);\n    }\n    \n  }\n  .xx img {\n     transition: transform 0.2s ease-in-out;\n    }\n  ":""}));e.Z=function(n){var e=n.course,t=n.clickeable,s=void 0===t||t;return(0,r.jsxs)(d,{onClick:function(){if(s&&!(null===e||void 0===e?void 0:e.isComingSoon)){(null===e||void 0===e?void 0:e.isEnrolled)?i.default.push("/[course]/lobby","/".concat(null===e||void 0===e?void 0:e.slug,"/lobby")):i.default.push("/".concat(null===e||void 0===e?void 0:e.slug));window.scrollTo(0,0)}},className:"flex flex-col relative rounded-lg items-center",clickeable:s&&!(null===e||void 0===e?void 0:e.isComingSoon),children:[(null===e||void 0===e?void 0:e.level)&&(0,r.jsx)("span",{style:{position:"absolute",top:10,left:10},className:"inline-flex  items-center px-3 py-0.5 z-10 rounded-full text-sm font-medium leading-5 ".concat("\uace0\uae09"===e.level.name?"bg-purple-100 text-purple-500":""," ").concat("\uc911\uae09"===e.level.name?"bg-green-100 text-green-500":"","\n            ").concat("\ucd08\uae09"===e.level.name?"bg-yellow-100 text-yellow-600":""," shadow"),children:null===e||void 0===e?void 0:e.level.name}),e?(0,r.jsx)("div",{style:{transition:"transform 0.2s ease-in-out"},className:"overflow-hidden xx relative aspect-w-16 aspect-h-9 h-auto rounded-lg dark:shadow-gray-800 w-full shadow-lg",children:(0,r.jsx)(a.default,{src:null===e||void 0===e?void 0:e.thumbnail,layout:"fill",className:"rounded-lg"})}):null,(0,r.jsx)("div",{className:"text-center info shadow-xl dark:shadow-gray-800 flex flex-col w-11/12 justify-center relative bg-white dark:bg-gray-700 dark:text-white -top-14 rounded-lg z-0 py-5 px-2",style:{transition:"transform 0.2s ease-in-out",textOverflow:"ellipsis",maxHeight:106},children:(null===e||void 0===e?void 0:e.isComingSoon)?(0,r.jsxs)("div",{className:"px-4",children:[(0,r.jsx)("h3",{className:"text-xl overflow-hidden",children:e?e.name:"Loading..."}),(0,r.jsx)("h4",{className:"mt-2 mb-1",children:"Coming Soon"})]}):(null===e||void 0===e?void 0:e.isEnrolled)?s?(0,r.jsx)(o.default,{href:"/[course]/lobby",as:"/".concat(null===e||void 0===e?void 0:e.slug,"/lobby"),children:(0,r.jsxs)("a",{className:"px-4",children:[(0,r.jsx)("h3",{className:"text-xl overflow-hidden mb-5 w-full",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:null===e||void 0===e?void 0:e.name}),(0,r.jsx)(l.Z,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0})]})}):(0,r.jsxs)("div",{className:"px-4",children:[(0,r.jsx)("h3",{className:"text-xl overflow-hidden mb-5",style:{textOverflow:"ellipsis",whiteSpace:"nowrap"},children:null===e||void 0===e?void 0:e.name}),(0,r.jsx)(l.Z,{progress:(null===e||void 0===e?void 0:e.progress)||0,progressLectures:(null===e||void 0===e?void 0:e.progressLectures)||0})]}):s?(0,r.jsx)(o.default,{href:"/".concat(null===e||void 0===e?void 0:e.slug),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("h3",{className:"text-xl overflow-hidden",children:e?e.name:"Loading..."}),(null===e||void 0===e?void 0:e.subtitleOne)&&(0,r.jsx)("h4",{className:"mt-2 mb-1 whitespace-nowrap",children:null===e||void 0===e?void 0:e.subtitleOne}),(null===e||void 0===e?void 0:e.subtitleTwo)&&(0,r.jsx)("h4",{className:"text-sm",children:null===e||void 0===e?void 0:e.subtitleTwo})]})}):(0,r.jsxs)("span",{children:[(0,r.jsx)("h3",{className:"text-xl overflow-hidden ",children:e?e.name:"Loading..."}),(null===e||void 0===e?void 0:e.subtitleOne)&&(0,r.jsx)("h4",{className:"mt-2 mb-1",children:null===e||void 0===e?void 0:e.subtitleOne}),(null===e||void 0===e?void 0:e.subtitleTwo)&&(0,r.jsx)("h4",{className:"text-sm",children:null===e||void 0===e?void 0:e.subtitleTwo})]})})]})}},3761:function(n,e,t){t.r(e);var r=t(85893);e.default=function(n){var e=n.children;return(0,r.jsx)("div",{className:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",children:e})}},95717:function(n,e,t){t.r(e);var r=t(85893),a=t(65988),o=t(5152),i=(0,o.default)((function(){return Promise.all([t.e(9019),t.e(9834),t.e(9539),t.e(6461)]).then(t.bind(t,16461))}),{loadableGenerated:{webpack:function(){return[16461]}}}),s=(0,o.default)((function(){return Promise.all([t.e(7112),t.e(2814),t.e(5295)]).then(t.bind(t,15295))}),{loadableGenerated:{webpack:function(){return[15295]}}});e.default=function(n){var e=n.children,t=n.showLinks,o=void 0===t||t,l=n.onlyLogo,c=void 0!==l&&l,d=n.showFooter,u=void 0===d||d,m=n.fixed,f=void 0===m||m;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{fixed:f,showLinks:o,onlyLogo:c}),e,u&&(0,r.jsx)(s,{}),(0,r.jsx)(a.default,{id:"5bfb2d1f17f541a8",children:"body{padding-top:64px}"})]})}},22184:function(n,e,t){var r=t(85893);e.Z=function(n){var e=n.progress,t=n.progressLectures,a=function(){if(0!==e&&0!==t){var n=Math.floor(e/t*100);return n>100?100:n}return 0};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"h-3 w-full bg-blue-200 dark:bg-white rounded-full relative",children:(0,r.jsx)("div",{className:"h-3 bg-blue-700 dark:bg-blue-500 rounded-full",style:{width:"".concat(a(),"%")}})}),(0,r.jsxs)("span",{className:"mt-3 text-md font-medium block",children:[a(),"% complete"]})]})}},39425:function(n,e,t){var r=t(85893),a=t(9008);e.Z=function(n){var e=n.description,t=void 0===e?"":e,o=n.pageTitle,i=n.ogTitle,s=void 0===i?o:i,l=n.image,c=void 0===l?"graphDefault":l,d=(n.price,n.index,n.path);return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://nomadcoders.co".concat(d)}),(0,r.jsx)("meta",{property:"og:image",content:"https://d1telmomo28umc.cloudfront.net/media/seo/".concat(c,".jpg")}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:"Nomad Coders"}),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{property:"fb:admins",content:"2366600330252017"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"twitter:title",content:s}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:c}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"})]})}},33306:function(n,e,t){t.d(e,{xe:function(){return h},ZS:function(){return w},hq:function(){return b},Gs:function(){return j},yG:function(){return y},_R:function(){return N},Qs:function(){return C},AY:function(){return P},NL:function(){return k},sN:function(){return S},q8:function(){return O}});var r=t(19989);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function o(){var n=a(["\n  fragment CourseCard on CourseType {\n    name\n    progress\n    progressLectures\n    isEnrolled\n    isFree\n    isReward\n    isComingSoon\n    slug\n    thumbnail\n    subtitleOne\n    subtitleTwo\n    promptChallenge\n    challengeInfo\n    level {\n      name\n      color\n    }\n    badges {\n      id\n    }\n  }\n"]);return o=function(){return n},n}function i(){var n=a(["\n  fragment CommentReplyParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    content\n    isOwner\n    created\n  }\n"]);return i=function(){return n},n}function s(){var n=a(["\n  fragment CommentParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    parent {\n      id\n    }\n    isUpvoted\n    upvotes\n    content\n    isOwner\n    created\n    isTestimonial\n    replies {\n      ...CommentReplyParts\n    }\n  }\n  ","\n"]);return s=function(){return n},n}function l(){var n=a(["\n  fragment IssueCommentParts on IssueCommentType {\n    id\n    comment\n    isSolution\n    isOwner\n    created\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=a(["\n  fragment ChallengeCard on ChallengeType {\n    name\n    slug\n    batch\n    duration\n    inProgress\n    comingSoon\n    finished\n    canEnroll\n    startDate\n    isEnrolled\n    isWaiting\n    isCompleted\n    isOnReview\n    challengersNumber\n    waitingNumber\n    assignmentsNumber\n    currentDay\n    inBufferZone\n    isPremiumChallenge\n    nextStartDate\n    course {\n      name\n      subtitleOne\n      slug\n      thumbnail\n      progressLectures\n      isEnrolled\n      promptChallenge\n    }\n    unlocks {\n      image\n    }\n  }\n"]);return c=function(){return n},n}function d(){var n=a(["\n  fragment ReportParts on ReportType {\n    assignments {\n      number\n    }\n    progressList {\n      user {\n        username\n      }\n      submissions {\n        url\n        quizResponse {\n          totalScore\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}function u(){var n=a(["\n  fragment CouponParts on CouponType {\n    created\n    discountAmount\n    used\n    id\n    isExpired\n    expirationDate\n  }\n"]);return u=function(){return n},n}function m(){var n=a(["\n  fragment NoteParts on NoteType {\n    id\n    content\n    minutes\n    seconds\n    created\n  }\n"]);return m=function(){return n},n}function f(){var n=a(["\n  fragment CategoryParts on CategoryType {\n    name\n    id\n    slug\n    isPublic\n    tagline\n    totalThreads\n  }\n"]);return f=function(){return n},n}function v(){var n=a(["\n  fragment ThreadParts on ThreadType {\n    id\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n    category {\n      name\n    }\n    title\n    isPinned\n    totalVotes\n    totalReplies\n    isOwner\n    isUpvoted\n    created\n    showing\n    preview\n  }\n"]);return v=function(){return n},n}function p(){var n=a(["\n  fragment ReplyParts on ReplyType {\n    id\n    user {\n      username\n      avatar\n      tier\n    }\n    payload\n    isPinned\n    totalVotes\n    isOwner\n    isUpvoted\n    created\n    totalReplies\n    replies {\n      user {\n        username\n        avatar\n      }\n      id\n      created\n      isOwner\n      payload\n    }\n  }\n"]);return p=function(){return n},n}function g(){var n=a(["\n  fragment ThreadPreview on ThreadType {\n    id\n    title\n    views\n    totalReplies\n  }\n"]);return g=function(){return n},n}var h=(0,r.Ps)(o()),x=(0,r.Ps)(i()),w=(0,r.Ps)(s(),x),b=(0,r.Ps)(l()),j=(0,r.Ps)(c()),y=(0,r.Ps)(d()),N=(0,r.Ps)(u()),C=(0,r.Ps)(m()),P=(0,r.Ps)(f()),k=(0,r.Ps)(v()),S=(0,r.Ps)(p()),O=(0,r.Ps)(g())},28879:function(n,e,t){var r=t(67294),a=t(49384),o=t(62286);e.Z=function(){var n=(0,r.useState)(a.YN in(0,o.parseCookies)()),e=n[0];n[1];return e}},19733:function(n,e,t){var r=t(19989),a=t(71641),o=t(67294),i=t(50542),s=t(28879);function l(){var n,e,t=(n=["\n  query me {\n    me {\n      name\n      avatar\n      username\n      email\n      isSuperuser\n      tier\n      accountLanguage\n      dateJoined\n      githubUsername\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return t},t}var c=(0,r.Ps)(l());e.Z=function(){var n=(0,s.Z)(),e=(0,a.a)(c,{skip:!n});return(0,o.useEffect)((function(){try{var n,t;if(null===(n=e.data)||void 0===n||null===(t=n.me)||void 0===t?void 0:t.dateJoined)if(window.gtag("set","user_data",{email:e.data.me.email}),!localStorage.getItem("loveyou"))new Date(1e3*e.data.me.dateJoined).toLocaleDateString()===(new Date).toLocaleDateString()&&(localStorage.setItem("loveyou","1"),i.ZP.event({category:"Users",action:"Created Account"}),window.gtag("event","conversion",{send_to:"AW-604270696/lIj9CJu_7_UBEOjgkaAC",ec_email:e.data.me.email,email:e.data.me.email}),window.dataLayer&&(window.dataLayer.push({event:"create_account",ec_email:e.data.me.email,email:e.data.me.email}),window.dataLayer.push({event:"create_an_account",ec_email:e.data.me.email,email:e.data.me.email})))}catch(r){}}),[e]),e}},49384:function(n,e,t){t.d(e,{HN:function(){return r},YN:function(){return a},D:function(){return o},L8:function(){return i},XB:function(){return s}});var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a="sessionid",o=function(n){var e,t,r,a;return a=Math.floor(n/1e3),r=Math.floor(a/60),a=String(a%60),t=Math.floor(r/60),r=String(r%60),e=String(Math.floor(t/24)),t=String(t%24),"\n      ".concat(e.padStart(2,"0"),"d ").concat(t.padStart(2,"0"),"h ").concat(r.padStart(2,"0"),"m ").concat(a.padStart(2,"0"),"s")},i=function(n){return" ".concat(n.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=n,t=Date.now()/1e3,r=Math.ceil((e-t)/86400);return r<0?e:r}}}]);