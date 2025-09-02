// javascript:(function(){function c(e){const b={bubbles:true,cancelable:true,view:window,ctrlKey:true,metaKey:true,button:0,buttons:1,detail:1};if(window.PointerEvent){e.dispatchEvent(new PointerEvent("pointerdown",{...b,pointerId:1,pointerType:"mouse",isPrimary:true}))}e.dispatchEvent(new MouseEvent("mousedown",b));e.dispatchEvent(new MouseEvent("mouseup",b));e.dispatchEvent(new MouseEvent("click",b))}const msgs=document.querySelectorAll(".message");const excluir=document.querySelector(".delete");msgs.forEach(m=>{m.classList.add("selected");const t=m.querySelector("a,button,[role='button'],[data-click-target],.click-target")||m;c(t)});excluir&&excluir.click();})();


function ctrlMetaClick(el) {
  const base = {
    bubbles: true,
    cancelable: true,
    view: window,
    ctrlKey: true,
    metaKey: true,
    button: 0,
    buttons: 1,
    detail: 1
  };

  if (window.PointerEvent) {
    el.dispatchEvent(new PointerEvent('pointerdown', {
      ...base,
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true
    }));
  }

  el.dispatchEvent(new MouseEvent('mousedown', base));

  el.dispatchEvent(new MouseEvent('mouseup', base));

  el.dispatchEvent(new MouseEvent('click', base));
}

const messages = document.querySelectorAll('.message');
const excluir = document.querySelector('.delete');

messages.forEach(msg => {
  msg.classList.add('selected');

  const target =
    msg.querySelector('a,button,[role="button"],[data-click-target],.click-target') || msg;

  ctrlMetaClick(target);
});

excluir?.click();