(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{40038:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community",function(){return t(38709)}])},39425:function(n,e,t){"use strict";var r=t(85893),a=t(9008);e.Z=function(n){var e=n.description,t=void 0===e?"":e,s=n.pageTitle,i=n.ogTitle,o=void 0===i?s:i,c=n.image,l=void 0===c?"graphDefault":c,u=(n.price,n.index,n.path);return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:s}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://nomadcoders.co".concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:"https://d1telmomo28umc.cloudfront.net/media/seo/".concat(l,".jpg")}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:"Nomad Coders"}),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{property:"fb:admins",content:"2366600330252017"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"twitter:title",content:o}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:l}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"202966525a961e258ded0fcc0042857cea6d15f3"})]})}},33306:function(n,e,t){"use strict";t.d(e,{xe:function(){return x},ZS:function(){return j},hq:function(){return w},Gs:function(){return y},yG:function(){return b},_R:function(){return T},Qs:function(){return P},AY:function(){return N},NL:function(){return C},sN:function(){return _},q8:function(){return k}});var r=t(19989);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=a(["\n  fragment CourseCard on CourseType {\n    name\n    progress\n    progressLectures\n    isEnrolled\n    isFree\n    isReward\n    isComingSoon\n    slug\n    thumbnail\n    subtitleOne\n    subtitleTwo\n    promptChallenge\n    challengeInfo\n    level {\n      name\n      color\n    }\n    badges {\n      id\n    }\n  }\n"]);return s=function(){return n},n}function i(){var n=a(["\n  fragment CommentReplyParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    content\n    isOwner\n    created\n  }\n"]);return i=function(){return n},n}function o(){var n=a(["\n  fragment CommentParts on CommentType {\n    id\n    user {\n      username\n      avatar\n      amazing\n      tier\n    }\n    parent {\n      id\n    }\n    isUpvoted\n    upvotes\n    content\n    isOwner\n    created\n    isTestimonial\n    replies {\n      ...CommentReplyParts\n    }\n  }\n  ","\n"]);return o=function(){return n},n}function c(){var n=a(["\n  fragment IssueCommentParts on IssueCommentType {\n    id\n    comment\n    isSolution\n    isOwner\n    created\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n  }\n"]);return c=function(){return n},n}function l(){var n=a(["\n  fragment ChallengeCard on ChallengeType {\n    name\n    slug\n    batch\n    duration\n    inProgress\n    comingSoon\n    finished\n    canEnroll\n    startDate\n    isEnrolled\n    isWaiting\n    isCompleted\n    isOnReview\n    challengersNumber\n    waitingNumber\n    assignmentsNumber\n    currentDay\n    inBufferZone\n    isPremiumChallenge\n    nextStartDate\n    course {\n      name\n      subtitleOne\n      slug\n      thumbnail\n      progressLectures\n      isEnrolled\n      promptChallenge\n    }\n    unlocks {\n      image\n    }\n  }\n"]);return l=function(){return n},n}function u(){var n=a(["\n  fragment ReportParts on ReportType {\n    assignments {\n      number\n    }\n    progressList {\n      user {\n        username\n      }\n      submissions {\n        url\n        quizResponse {\n          totalScore\n        }\n      }\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=a(["\n  fragment CouponParts on CouponType {\n    created\n    discountAmount\n    used\n    id\n    isExpired\n    expirationDate\n  }\n"]);return d=function(){return n},n}function m(){var n=a(["\n  fragment NoteParts on NoteType {\n    id\n    content\n    minutes\n    seconds\n    created\n  }\n"]);return m=function(){return n},n}function p(){var n=a(["\n  fragment CategoryParts on CategoryType {\n    name\n    id\n    slug\n    isPublic\n    tagline\n    totalThreads\n  }\n"]);return p=function(){return n},n}function h(){var n=a(["\n  fragment ThreadParts on ThreadType {\n    id\n    user {\n      username\n      avatar\n      tier\n      amazing\n    }\n    category {\n      name\n    }\n    title\n    isPinned\n    totalVotes\n    totalReplies\n    isOwner\n    isUpvoted\n    created\n    showing\n    preview\n  }\n"]);return h=function(){return n},n}function g(){var n=a(["\n  fragment ReplyParts on ReplyType {\n    id\n    user {\n      username\n      avatar\n      tier\n    }\n    payload\n    isPinned\n    totalVotes\n    isOwner\n    isUpvoted\n    created\n    totalReplies\n    replies {\n      user {\n        username\n        avatar\n      }\n      id\n      created\n      isOwner\n      payload\n    }\n  }\n"]);return g=function(){return n},n}function f(){var n=a(["\n  fragment ThreadPreview on ThreadType {\n    id\n    title\n    views\n    totalReplies\n  }\n"]);return f=function(){return n},n}var x=(0,r.Ps)(s()),v=(0,r.Ps)(i()),j=(0,r.Ps)(o(),v),w=(0,r.Ps)(c()),y=(0,r.Ps)(l()),b=(0,r.Ps)(u()),T=(0,r.Ps)(d()),P=(0,r.Ps)(m()),N=(0,r.Ps)(p()),C=(0,r.Ps)(h()),_=(0,r.Ps)(g()),k=(0,r.Ps)(f())},38709:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return p},default:function(){return h}});var r=t(85893),a=t(33306),s=t(39425),i=t(19989),o=t(71641),c=t(34371),l=t(41664);function u(n){var e=n.fullWidth,t=void 0!==e&&e,a=n.showBadge,s=void 0!==a&&a,i=n.name,o=n.emoji,c=n.threads,u=n.linkTo,d=void 0===u?i.split(" ")[1]:u;return(0,r.jsxs)("div",{className:"".concat(t?"md:col-span-2":""),children:[(0,r.jsx)(l.default,{href:"/community/".concat(d),children:(0,r.jsxs)("a",{className:"pb-1.5 hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transition-colors block mb-3 border-b-2 border-gray-300 dark:border-gray-600",children:[(0,r.jsx)("span",{className:"font-medium mr-2",children:i}),(0,r.jsx)("span",{children:o})]})}),(0,r.jsx)("div",{className:"space-y-1",children:null===c||void 0===c?void 0:c.map((function(n){return n&&(0,r.jsxs)("div",{className:"flex items-center space-x-4 justify-between",children:[(0,r.jsx)(l.default,{href:"/community/thread/".concat(n.id),children:(0,r.jsxs)("a",{className:" text-ellipsis truncate transition-colors text-black dark:text-white dark:hover:text-gray-400 hover:text-gray-600 flex items-center tracking-wider",children:[s?(0,r.jsxs)("span",{className:"text-xs p-1.5 rounded-md mr-2 font-medium bg-gray-500 dark:bg-gray-700 text-white",children:["#",n.category.name]}):null,(0,r.jsx)("span",{className:"w-full text-ellipsis truncate",children:n.title})]})},n.id),(0,r.jsxs)("div",{className:"flex flex-shrink-0 text-sm justify-end items-center text-gray-400 dark:text-gray-400",children:[(0,r.jsxs)("span",{className:"flex items-center w-14 ",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{className:"mx-0.5 text-lg w-4 h-4 ",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"}),(0,r.jsx)("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})}),(0,r.jsx)("span",{className:"",children:n.views.toLocaleString("en-US",{notation:"compact"})})]}),(0,r.jsx)("span",{className:"mx-1.5",children:"\u2022"}),(0,r.jsxs)("span",{className:"flex items-center w-10",children:[(0,r.jsx)("svg",{fill:"currentColor",className:"w-4 h-4 mr-1.5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,r.jsx)("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"})}),n.totalReplies]})]})]},n.id)}))})]})}function d(){var n,e,t=(n=['\n  query threads {\n    announcement: topFiveThreads(category: "announcement") {\n      ...ThreadPreview\n    }\n    side_projects: topFiveThreads(category: "side_projects") {\n      ...ThreadPreview\n    }\n    mobile_app: topFiveThreads(category: "mobile_app", popular: true) {\n      ...ThreadPreview\n    }\n    twitter_clone: topFiveThreads(category: "twitter_clone", popular: true) {\n      ...ThreadPreview\n    }\n    blabla: topFiveThreads(category: "bla-bla") {\n      ...ThreadPreview\n    }\n    tip: topFiveThreads(category: "tips") {\n      ...ThreadPreview\n    }\n    jobs: topFiveThreads(category: "jobs") {\n      ...ThreadPreview\n    }\n    ask: topFiveThreads(category: "ask") {\n      ...ThreadPreview\n    }\n    ssul: topFiveThreads(category: "ssul") {\n      ...ThreadPreview\n    }\n    latestHugis {\n      ...ThreadPreview\n      category {\n        name\n      }\n    }\n    latestProjects {\n      ...ThreadPreview\n      category {\n        name\n      }\n    }\n  }\n  ',"\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return d=function(){return t},t}var m=(0,i.Ps)(d(),a.q8),p=!0,h=function(){var n=(0,o.a)(m).data;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{pageTitle:"Community \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",ogTitle:"Community \u2013 \ub178\ub9c8\ub4dc \ucf54\ub354 Nomad Coders",description:"\uac1c\ubc1c\uc790 99% \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uc218\ub2e4 \ub5a8\uc5b4\uc694!",path:"/community",image:"community"}),(0,r.jsx)(c.CommunityLayout,{children:(0,r.jsx)("div",{className:"grid bg-white dark:bg-gray-800 rounded-md p-4 gap-14 md:grid-cols-2 grid-cols-1",children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{name:"\ud504\ub85c\uc81d\ud2b8 \ucd5c\uc2e0 \uae00",emoji:"\ud83d\udca1",fullWidth:!0,showBadge:!0,linkTo:"side_projects",threads:n.latestProjects}),(0,r.jsx)(u,{name:"\ub178\ub9c8\ub4dc \uac15\uc758 \ucd5c\uc2e0 \uae00",emoji:"\ud83d\udcbb",fullWidth:!0,showBadge:!0,linkTo:"html_css",threads:n.latestHugis}),(0,r.jsx)(u,{name:"# jobs",emoji:"\ud83d\udcb0",threads:n.jobs}),(0,r.jsx)(u,{name:"# ask",emoji:"\ud83d\ude4b\ud83c\udffb",threads:n.ask}),(0,r.jsx)(u,{name:"# ssul",emoji:"\u270d\ud83c\udffb",threads:n.ssul}),(0,r.jsx)(u,{name:"# tips",emoji:"\ud83d\udd25",threads:n.tip}),(0,r.jsx)(u,{name:"# announcement",emoji:"\ud83d\udce2",fullWidth:!0,threads:n.announcement}),(0,r.jsx)(u,{name:"# bla-bla",emoji:"\ud83d\udcac",fullWidth:!0,threads:n.blabla}),(0,r.jsx)(u,{name:"# mobile_app",emoji:"\ud83c\udfc6",threads:n.mobile_app}),(0,r.jsx)(u,{name:"# twitter_clone",emoji:"\ud83c\udfc6",threads:n.twitter_clone})]}):(0,r.jsx)("span",{className:"text-center block w-full col-span-2 font-medium text-gray-600",children:"Loading..."})})})]})}}},function(n){n.O(0,[9019,7718,4371,9774,2888,179],(function(){return e=40038,n(n.s=e);var e}));var e=n.O();_N_E=e}]);