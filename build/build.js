!function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var p="function"==typeof require&&require;if(!s&&p)return p(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var i=document.createElement("div");return i.className=n,i.classList.add("bespoke-backdrop"),e.parent.appendChild(i),i}}function n(t){if(t){var n=r.indexOf(t),a=e.slide();i(t,"active"),i(t,"inactive"),i(t,"before"),i(t,"after"),n!==a?(o(t,"inactive"),o(t,a>n?"before":"after")):o(t,"active")}}function i(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],2:[function(e,t,n){t.exports=function(e){return function(t){var n,i,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return p(1)?(s(n,i+1),!1):void(o[e]&&s(e,0))},a=function(){var e=n-1;return p(-1)?(s(n,i-1),!1):void(o[e]&&s(e,o[e].length-1))},s=function(e,t){n=e,i=t,o.forEach(function(n,i){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=o?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},p=function(e){return void 0!==o[n][i+e]};t.on("next",r),t.on("prev",a),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t,n){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){(/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)||"true"===e.target.contentEditable)&&e.stopPropagation()})})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],6:[function(e,t,n){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),o="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[o]=100*e.index/(t.slides.length-1)+"%"})}}},{}],7:[function(e,t,n){t.exports=function(){return function(e){var t=function(t,n){var i=n.slide.getAttribute("data-bespoke-state");i&&i.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],8:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self);var r=o;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.greeny=e()}}(function(){return function t(n,i,o){function r(s,p){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!p&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=i[s]={exports:{}};n[s][0].call(l.exports,function(e){var t=n[s][1][e];return r(t?t:e)},l,l.exports,t,n,i,o)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t,n){var i=e("bespoke-classes"),o=e("insert-css");t.exports={theme:function(){var e="*{box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .62s ease-in-out;transition:background .62s ease-in-out;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-slide{-webkit-transition:-webkit-transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;transition:transform .62s ease-in-out,opacity .62s ease-in-out,background .62s ease-in-out;-webkit-transform-origin:50% 50% 0;-ms-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background-color:#2ecc71;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px);transform:translateX(130px)translateX(-320px)rotateY(-120deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px);transform:translateX(-130px)translateX(320px)rotateY(120deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;-ms-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;-ms-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;-ms-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:16px}@media only screen and (max-width:400px){.bespoke-progress-parent{height:8px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#16a085}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .62s ease-in-out;transition:opacity .62s ease-in-out;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#ecf0f1;background:#2ecc71}h1{line-height:82px;letter-spacing:-2px;margin-bottom:16px;font-size:50px;white-space:nowarp}h2{letter-spacing:-1px;margin-bottom:8px;font-size:40px}h3{margin-bottom:24px;color:#ecf0f1;font-size:30px;font-weight:700}h4{margin-bottom:5px}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px;display:block}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}::-moz-selection{color:#2ecc71;background-color:#ecf0f1}::selection{color:#2ecc71;background-color:#ecf0f1}.inverse{background-color:#2ecc71;color:#2c3e50}.stick{border-width:3px 0;border-style:solid;border-color:#ddd}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.src{font-size:8px;margin-bottom:5px}.src::before{content:'Source: '}";return o(e,{prepend:!0}),function(e){i()(e)}},scale:function(){return function(e){var t=e.parent,n=e.slides[0],i=n.offsetHeight,o=n.offsetWidth,r="WebkitAppearance"in document.documentElement.style,a=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},s=r?e.slides:e.slides.map(a),p=function(e){var n="Moz Webkit O ms".split(" ");return n.reduce(function(n,i){return i+e in t.style?i+e:n},e.toLowerCase())}("Transform"),c=r?function(e,t){t.style.zoom=e}:function(e,t){t.style[p]="scale("+e+")"},l=function(){var e=t.offsetWidth/o,n=t.offsetHeight/i;s.forEach(c.bind(null,Math.min(e,n)))};window.addEventListener("resize",l),l()}}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],a=o-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof i?o=i:"undefined"!=typeof self&&(o=self);var r=o;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.nebula=e()}}(function(){return function t(n,i,o){function r(s,p){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!p&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=i[s]={exports:{}};n[s][0].call(l.exports,function(e){var t=n[s][1][e];return r(t?t:e)},l,l.exports,t,n,i,o)}return i[s].exports}for(var a="function"==typeof e&&e,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t,n){var i=e("bespoke-classes"),o=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#ddd;font-family:futura,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;width:940px;height:480px;position:absolute;top:50%;left:50%;margin-left:-470px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.5s;transition-delay:.5s}.bespoke-active[data-bespoke-backdrop]{-webkit-transition-delay:.75s;transition-delay:.75s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#ddd;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}hr{width:50%;margin:1rem auto;height:1px;border:0;background:#ddd}h3,p,li{padding-left:20px;padding-right:20px}h3,h4,p,li,pre{font-weight:200}h1{line-height:1.4em;padding:1em;border:1px solid #ddd;border-left-width:0;border-right-width:0;min-width:8em}h1,h2{letter-spacing:.3em;text-transform:uppercase;font-weight:400;margin:.17em 0;position:relative}h2{line-height:1.1em;padding:0 0 0 .3em}h3{font-family:didot,times new roman,serif;font-style:italic;font-size:1.2em;line-height:1.6em;margin:.5em 0}h4{text-transform:uppercase;font-size:.8em;line-height:1.8em;letter-spacing:.3em;margin:1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{padding-left:.3em;color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.bespoke-backdrop{opacity:0;-webkit-transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0)scale(1.3);transform:translateZ(0)scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0);transform:translateZ(0)}.bespoke-backdrop-before{-webkit-transition-delay:.2s;transition-delay:.2s}.bespoke-backdrop-active{opacity:.5}';return o(e,{prepend:!0}),function(e){i()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],a=o-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){t.exports=function(e){return function(t){var n,i,o="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+o],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+o]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],11:[function(e,t,n){var i=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],r={},a=function(e,t){i[e]&&(d("deactivate",f(o,t)),o=i[e],d("activate",f(o,t)))},s=function(e,t){return arguments.length?void(d("slide",f(i[e],t))&&a(e,t)):i.indexOf(o)},p=function(e,t){var n=i.indexOf(o)+e;d(e>0?"next":"prev",f(o,t))&&a(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),l.bind(null,e,t)},l=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},d=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},u={on:c,off:l,fire:d,slide:s,next:p.bind(null,1),prev:p.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(u)}),a(0),u};t.exports={from:i}},{}],12:[function(e,t,n){var i=e("bespoke"),o=e("bespoke-theme-greeny"),r=e("bespoke-keys"),a=e("bespoke-touch"),s=e("bespoke-bullets"),p=e("bespoke-hash"),c=e("bespoke-progress"),l=e("bespoke-state"),d=e("bespoke-theme-nebula"),f=e("bespoke-forms"),u=e("bespoke-backdrop");i.from("article",[d(),o.scale(),r(),a(),s("li, .bullet"),p(),c(),l(),f(),u()]).on("activate",function(e){1==e.index?document.getElementById("music").play():(document.getElementById("music").pause(),document.getElementById("music").currentTime=0)})},{bespoke:11,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-forms":3,"bespoke-hash":4,"bespoke-keys":5,"bespoke-progress":6,"bespoke-state":7,"bespoke-theme-greeny":8,"bespoke-theme-nebula":9,"bespoke-touch":10}]},{},[12]);