!function(){var t={body:document.body,btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},o=null;t.btnStart.addEventListener("click",(function(){o=setInterval((function(){color=color="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.body.style.backgroundColor=color}),1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){clearInterval(o),t.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.862fcc59.js.map