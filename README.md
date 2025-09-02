
BK
```
javascript:(function(){function c(e){const b={bubbles:true,cancelable:true,view:window,ctrlKey:true,metaKey:true,button:0,buttons:1,detail:1};if(window.PointerEvent){e.dispatchEvent(new PointerEvent("pointerdown",{...b,pointerId:1,pointerType:"mouse",isPrimary:true}))}e.dispatchEvent(new MouseEvent("mousedown",b));e.dispatchEvent(new MouseEvent("mouseup",b));e.dispatchEvent(new MouseEvent("click",b))}const msgs=document.querySelectorAll(".message");const btn=document.querySelector("#messagemenulink");const baixar=document.querySelector(".download");const maildir=document.querySelector(".maildir");msgs.forEach(m=>{m.classList.add("selected");const t=m.querySelector("a,button,[role='button'],[data-click-target],.click-target")||m;c(t)});btn&&btn.click();baixar&&baixar.click();maildir&&maildir.click();})();
```

DELETE
```
javascript:(function(){function c(e){const b={bubbles:true,cancelable:true,view:window,ctrlKey:true,metaKey:true,button:0,buttons:1,detail:1};if(window.PointerEvent){e.dispatchEvent(new PointerEvent("pointerdown",{...b,pointerId:1,pointerType:"mouse",isPrimary:true}))}e.dispatchEvent(new MouseEvent("mousedown",b));e.dispatchEvent(new MouseEvent("mouseup",b));e.dispatchEvent(new MouseEvent("click",b))}const msgs=document.querySelectorAll(".message");const excluir=document.querySelector(".delete");msgs.forEach(m=>{m.classList.add("selected");const t=m.querySelector("a,button,[role='button'],[data-click-target],.click-target")||m;c(t)});excluir&&excluir.click();})();
```