function e(e,t,n,o,r,s,i,d,c,a){"boolean"!=typeof i&&(c=d,d=i,i=!1);const l="function"==typeof n?n.options:n;let f;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),o&&(l._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=f):t&&(f=i?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),f)if(l.functional){const e=l.render;l.render=function(t,n){return f.call(n),e(t,n)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,f):[f]}return n}const t=e({render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},void 0,{name:"ZtqDcSelect",props:{}},void 0,!1,void 0,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)};export{t as default};