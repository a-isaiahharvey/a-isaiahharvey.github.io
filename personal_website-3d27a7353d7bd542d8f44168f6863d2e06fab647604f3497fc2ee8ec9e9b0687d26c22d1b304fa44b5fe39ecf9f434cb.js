let P=0,L=null,M=`undefined`,T=`boolean`,U=`string`,Q=1,W=`Object`,N=`utf-8`,S=`number`,X=4,R=`function`,J=Array,V=Array.isArray,O=Error,Y=Reflect,K=undefined;var D=(async(a,b)=>{if(typeof Response===R&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===R){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==S||b==T||a==L){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==R){const b=a.name;if(typeof b==U&&b.length>P){return `Function(${b})`}else{return `Function`}};if(V(a)){const b=a.length;let c=`[`;if(b>P){c+=u(a[P])};for(let d=Q;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>Q){d=c[Q]}else{return toString.call(a)};if(d==W){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return W}};if(a instanceof O){return `${a.name}: ${a.message}\n${a.stack}`};return d});var F=((a,b)=>{});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8a19ca3324c8f1b3(b,c,k(d))});var k=(a=>{if(d===b.length)b.push(b.length+ Q);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var A=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__heed9b05d0909e3ba(b,c,k(d))});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hc5e85a93105cd0fe(b,c)});function C(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var B=((a,b)=>{if(a===P){return c(b)}else{return j(a,b)}});var z=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h3ad6ea4cbaf3ab11(b,c)});var r=(()=>{if(q===L||q.byteLength===P){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===K||a===L);var c=(a=>b[a]);var I=(async(b)=>{if(a!==K)return a;if(typeof b===M){b=new URL(`personal_website-3d27a7353d7bd542d8f44168f6863d2e06fab647604f3497fc2ee8ec9e9b0687d26c22d1b304fa44b5fe39ecf9f434cb_bg.wasm`,import.meta.url)};const c=E();if(typeof b===U||typeof Request===R&&b instanceof Request||typeof URL===R&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var H=(b=>{if(a!==K)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;s=L;q=L;h=L;a.__wbindgen_start();return a});var t=(()=>{if(s===L||s.byteLength===P){s=new Float64Array(a.memory.buffer)};return s});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new O();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=B(b,c);if(b!==P){a.__wbindgen_free(b,c,Q)};console.error(d)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==Q){b.a=P;return !0};const c=!1;return c});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===T?(b?Q:P):2;return d});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:K;var g=p(f)?P:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ Q]=h;r()[b/X+ P]=g});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===S?d:K;t()[a/8+ Q]=p(e)?P:e;r()[a/X+ P]=!p(e)});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===L;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return p(b)?P:k(b)});b.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_history_80998b7456bf367e=function(){return C((a=>{const b=c(a).history;return k(b)}),arguments)};b.wbg.__wbg_scrollTo_eb21c4452d7b3cd6=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_requestAnimationFrame_74309aadebde12fa=function(){return C(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return p(b)?P:k(b)});b.wbg.__wbg_head_293f85672f328d82=(a=>{const b=c(a).head;return p(b)?P:k(b)});b.wbg.__wbg_createComment_529b047c02bbe600=((a,b,d)=>{var e=B(b,d);const f=c(a).createComment(e);return k(f)});b.wbg.__wbg_createDocumentFragment_1c6d6aeeb8a8eb2e=(a=>{const b=c(a).createDocumentFragment();return k(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return C(((a,b,d)=>{var e=B(b,d);const f=c(a).createElement(e);return k(f)}),arguments)};b.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return C(((a,b,d,e,f)=>{var g=B(b,d);var h=B(e,f);const i=c(a).createElementNS(g,h);return k(i)}),arguments)};b.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,d)=>{var e=B(b,d);const f=c(a).createTextNode(e);return k(f)});b.wbg.__wbg_getElementById_65b9547a428b5eb4=((a,b,d)=>{var e=B(b,d);const f=c(a).getElementById(e);return p(f)?P:k(f)});b.wbg.__wbg_querySelector_c72dce5ac4b6bc3e=function(){return C(((a,b,d)=>{var e=B(b,d);const f=c(a).querySelector(e);return p(f)?P:k(f)}),arguments)};b.wbg.__wbg_classList_82893a9100db6428=(a=>{const b=c(a).classList;return k(b)});b.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,d)=>{var e=B(b,d);c(a).innerHTML=e});b.wbg.__wbg_getAttribute_bff489553dd803cc=((b,d,e,f)=>{var g=B(e,f);const h=c(d).getAttribute(g);var i=p(h)?P:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/X+ Q]=j;r()[b/X+ P]=i});b.wbg.__wbg_hasAttribute_bfb8f7140cf587f1=((a,b,d)=>{var e=B(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return C(((a,b,d)=>{var e=B(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_scrollIntoView_3de22d537ed95550=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return C(((a,b,d,e,f)=>{var g=B(b,d);var h=B(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_74a825a7b3d13d06=function(){return C(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_0d26d36fd4f25c4e=(a=>{c(a).remove()});b.wbg.__wbg_origin_595edc88be6e66b8=function(){return C(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f}),arguments)};b.wbg.__wbg_pathname_1ab7e82aaa4511ff=function(){return C(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f}),arguments)};b.wbg.__wbg_search_9f7ca8896c2d0804=function(){return C(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f}),arguments)};b.wbg.__wbg_hash_be2940ca236b5efc=function(){return C(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_append_962e199b73af5069=function(){return C(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=c(a).target;return p(b)?P:k(b)});b.wbg.__wbg_defaultPrevented_ae7d433108dd159d=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_preventDefault_7f821f72e7c6b5d4=(a=>{c(a).preventDefault()});b.wbg.__wbg_ctrlKey_643b17aaac67db50=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8fb7301f56e7e01c=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_c6c2a7e797d9a669=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_2a8dbd51a3f59e9c=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_cd87b6dabbde9631=(a=>{const b=c(a).button;return b});b.wbg.__wbg_setdata_86ad1e8da020aa68=((a,b,d)=>{var e=B(b,d);c(a).data=e});b.wbg.__wbg_add_e0f3c5b6e421c311=function(){return C(((a,b,d)=>{var e=B(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_c6ba26a0a6906129=function(){return C(((a,b,d)=>{var e=B(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return C(((a,b,d,e)=>{var f=B(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return C(((a,b,d,e,f)=>{var g=B(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_66ee1536a0b32c11=function(){return C(((a,b,d,e)=>{var f=B(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=c(a).parentNode;return p(b)?P:k(b)});b.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=c(a).parentElement;return p(b)?P:k(b)});b.wbg.__wbg_childNodes_a5762b4b3e073cf6=(a=>{const b=c(a).childNodes;return k(b)});b.wbg.__wbg_firstChild_61f00fd7b9d02fb3=(a=>{const b=c(a).firstChild;return p(b)?P:k(b)});b.wbg.__wbg_previousSibling_ef843c512fac0d77=(a=>{const b=c(a).previousSibling;return p(b)?P:k(b)});b.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=c(a).nextSibling;return p(b)?P:k(b)});b.wbg.__wbg_settextContent_3ebccdd9354e1601=((a,b,d)=>{var e=B(b,d);c(a).textContent=e});b.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return C(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_cloneNode_405d5ea3f7e0098a=function(){return C((a=>{const b=c(a).cloneNode();return k(b)}),arguments)};b.wbg.__wbg_insertBefore_726c1640c419e940=function(){return C(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_removeChild_942eb9c02243d84d=function(){return C(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_length_f845c1c304d9837a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_debug_34c9290896ec9856=(a=>{console.debug(c(a))});b.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(c(a))});b.wbg.__wbg_info_d7d58472d0bab115=(a=>{console.info(c(a))});b.wbg.__wbg_log_a4530b4fe289336f=(a=>{console.log(c(a))});b.wbg.__wbg_warn_f260f49434e45e62=(a=>{console.warn(c(a))});b.wbg.__wbg_pushState_e159043fce8f87bc=function(){return C(((a,b,d,e,f,g)=>{var h=B(d,e);var i=B(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_b51dd62c7235b1ac=function(){return C(((a,b,d,e,f,g)=>{var h=B(d,e);var i=B(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_instanceof_HtmlAnchorElement_76fafcefedd51299=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_target_b68f65aba6338cfb=((b,d)=>{const e=c(d).target;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_href_829df0adc5a7228a=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_origin_aab6d2be79bcec84=((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_pathname_aeafa820be91c325=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_search_f6e95882a48d3f69=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_searchParams_00f98167a3c8c4da=(a=>{const b=c(a).searchParams;return k(b)});b.wbg.__wbg_hash_0087751acddc8f2a=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbg_newwithbase_f4989aa5bbd5cc29=function(){return C(((a,b,c,d)=>{var e=B(a,b);var f=B(c,d);const g=new URL(e,f);return k(g)}),arguments)};b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===R;return b});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>P];return k(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{var c=B(a,b);const d=new Function(c);return k(d)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==L;return d});b.wbg.__wbg_next_9b877f231f476d01=(a=>{const b=c(a).next;return k(b)});b.wbg.__wbg_next_6529ee0cca8d57ed=function(){return C((a=>{const b=c(a).next();return k(b)}),arguments)};b.wbg.__wbg_done_5fe336b092d60cf2=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_0c248a78fdc8e19f=(a=>{const b=c(a).value;return k(b)});b.wbg.__wbg_iterator_db7ca081358d4fb2=(()=>{const a=Symbol.iterator;return k(a)});b.wbg.__wbg_get_7b48513de5dc5ea4=function(){return C(((a,b)=>{const d=Y.get(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_call_90c26b09837aba1c=function(){return C(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return C((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return C((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return C((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return C((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_decodeURI_1e508fc8ed99cae7=function(){return C(((a,b)=>{var c=B(a,b);const d=decodeURI(c);return k(d)}),arguments)};b.wbg.__wbg_isArray_74fb723e24f76012=(a=>{const b=V(c(a));return b});b.wbg.__wbg_call_5da1969d7cd31ccd=function(){return C(((a,b,d)=>{const e=c(a).call(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_exec_42513e2d2ddabd95=((a,b,d)=>{var e=B(b,d);const f=c(a).exec(e);return p(f)?P:k(f)});b.wbg.__wbg_new_e145ee1b0ed9b4aa=((a,b,c,d)=>{var e=B(a,b);var f=B(c,d);const g=new RegExp(e,f);return k(g)});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_set_759f75cd92b612d2=function(){return C(((a,b,d)=>{const e=Y.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ Q]=g;r()[b/X+ P]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new O(j(a,b))});b.wbg.__wbindgen_closure_wrapper278=((a,b,c)=>{const d=v(a,b,75,w);return k(d)});b.wbg.__wbindgen_closure_wrapper815=((a,b,c)=>{const d=v(a,b,259,x);return k(d)});b.wbg.__wbindgen_closure_wrapper1069=((a,b,c)=>{const d=v(a,b,360,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1274=((a,b,c)=>{const d=v(a,b,429,z);return k(d)});b.wbg.__wbindgen_closure_wrapper2533=((a,b,c)=>{const d=v(a,b,436,A);return k(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:Q,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=P;try{return e(c,f.b,...b)}finally{if(--f.cnt===P){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===K){const c=m.encode(a);const d=b(c.length,Q)>>>P;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,Q)>>>P;const f=i();let g=P;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==P){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,Q)>>>P;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var i=(()=>{if(h===L||h.byteLength===P){h=new Uint8Array(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>P;return g.decode(i().subarray(a,a+ b))});var w=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h6d9d680f3a9f4c63(b,c,k(d))});let a;const b=new J(128).fill(K);b.push(K,L,!0,!1);let d=b.length;const g=typeof TextDecoder!==M?new TextDecoder(N,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw O(`TextDecoder not available`)}};if(typeof TextDecoder!==M){g.decode()};let h=L;let l=P;const m=typeof TextEncoder!==M?new TextEncoder(N):{encode:()=>{throw O(`TextEncoder not available`)}};const n=typeof m.encodeInto===R?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=L;let s=L;export default I;export{H as initSync}