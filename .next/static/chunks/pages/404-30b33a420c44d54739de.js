_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"8qjm":function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),c=t.n(o);n.default=function(e){return e.statusCode,Object(r.jsx)("div",{className:"ps-page--404",children:Object(r.jsxs)("figure",{className:"ps-block--notfound",children:[Object(r.jsx)("h3",{children:"Ohh! Page not found"}),Object(r.jsxs)("p",{children:["It seems we can't find what you're looking for. ",Object(r.jsx)("br",{})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{className:"mr-2",children:"Return to"}),Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"ps-btn ps-btn--black ps-btn--rounded ps-btn--sm",children:"Dashboard"})})]})]})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),s=t("nOHt"),u=t("vNVm"),i={};function f(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):s||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,b=e.shallow,m=e.scroll,j=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),w=g&&"object"===typeof g&&g.ref,y=(0,u.useIntersection)({rootMargin:"200px"}),_=r(y,2),E=_[0],O=_[1],N=c.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,c.useEffect)((function(){var e=O&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof j?j:t&&t.locale,o=i[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,O,j,n,t]);var x={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,b,m,j)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof j?j:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(g,x)};n.default=l},mCeG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("8qjm")}])},vNVm:function(e,n,t){"use strict";var r=t("zoAU"),o=t("AroE");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,c.useRef)(),i=(0,c.useState)(!1),f=r(i,2),l=f[0],d=f[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){s||l||(0,a.default)((function(){return d(!0)}))}),[l]),[p,l]};var c=t("q1tI"),a=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map}},[["mCeG",0,2,1]]]);