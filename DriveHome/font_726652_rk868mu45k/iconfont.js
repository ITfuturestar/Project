(function(window){var svgSprite='<svg><symbol id="icon-xiaoxi" viewBox="0 0 1024 1024"><path d="M832 128 192 128C121.344 128 64 185.344 64 256l0 384c0 70.656 57.344 128 128 128l127.808 0 0 65.408c0 24 13.44 45.568 34.944 56.192 8.896 4.288 18.368 6.464 27.776 6.464 13.504 0 26.88-4.416 38.08-12.992L570.048 768 832 768c70.656 0 128-57.344 128-128L960 256C960 185.344 902.656 128 832 128zM896 640c0 35.392-28.608 64-64 64l-272.576-0.064c-7.04 0-13.888 2.304-19.456 6.592l-156.224 122.944 0-97.536c0-17.664-14.336-31.936-31.936-31.936L192 704c-35.392 0-64-28.608-64-64L128 256c0-35.392 28.608-64 64-64l640 0c35.392 0 64 28.608 64 64L896 640zM320 384C284.608 384 256 412.608 256 448s28.608 64 64 64 64-28.608 64-64S355.392 384 320 384zM512 384C476.608 384 448 412.608 448 448s28.608 64 64 64 64-28.608 64-64S547.392 384 512 384zM704 384c-35.392 0-64 28.608-64 64s28.608 64 64 64 64-28.608 64-64S739.392 384 704 384z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)