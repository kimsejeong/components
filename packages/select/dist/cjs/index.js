"use strict";function e(e,t,n,o,s,r,i,c,d,a){"boolean"!=typeof i&&(d=c,c=i,i=!1);const l="function"==typeof n?n.options:n;let _;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o),r?(_=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=_):t&&(_=i?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),_)if(l.functional){const e=l.render;l.render=function(t,n){return _.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,_):[_]}return n}const t=e({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ZtqDcSelect",props:{}},void 0,!1,void 0,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)},module.exports=t;