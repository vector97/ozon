(()=>{"use strict";const e=e=>{const t=document.querySelector(".cart-wrapper");t.innerHTML="",0===e.length?t.insertAdjacentHTML("beforeend",'\n      <div id="cart-empty">\n        Ваша корзина пока пуста\n      </div>\n    '):e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n        <div class="card" data-key="${e.id}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top"\n              style="background-image: url('${e.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${e.price} ₽</div>\n            <h5 class="card-title">${e.title}</h5>\n            <button class="btn btn-primary">Удалить</button>\n          </div>\n        </div>\n      `)}))},t=e=>fetch("https://test-55330-default-rtdb.firebaseio.com/goods.json").then((e=>e.json())),c=e=>{const t=document.querySelector(".goods");localStorage.setItem("goods",JSON.stringify(e)),t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n      <div class="col-12 col-md-6 col-lg-4 col-xl-3">\n        <div class="card" data-key="${e.id}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top"\n              style="background-image: url('${e.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${e.price} ₽</div>\n            <h5 class="card-title">${e.title}</h5>\n            <button class="btn btn-primary">В корзину</button>\n          </div>\n        </div>\n      </div>\n    `)}))},a=(e,t,c)=>e.filter((e=>""===t&&""===c?e:""!==t&&""!==c?e.price>+t&&e.price<+c:""!==t&&""===c?e.price>+t:""===t&&""!==c?e.price<+c:void 0)),n=(e,t)=>e.filter((e=>t?!0===e.sale:e));(()=>{const t=document.getElementById("cart"),c=document.querySelector(".cart"),a=c.querySelector(".cart-close"),n=c.querySelector(".cart-total > span"),r=c.querySelector(".cart-confirm"),o=document.querySelector(".goods"),s=document.querySelector(".cart-wrapper");let l=t.querySelector(".counter");const d=()=>{const e=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];l.textContent=e.length};d(),t.addEventListener("click",(()=>{const t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];c.style.display="flex",e(t),n.textContent=t.reduce(((e,t)=>e+t.price),0)})),a.addEventListener("click",(()=>{c.style.display="none"})),o.addEventListener("click",(e=>{if(e.target.classList.contains("btn-primary")){const t=e.target.closest(".card").dataset.key,c=JSON.parse(localStorage.getItem("goods")),a=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],n=c.find((e=>e.id===+t));a.push(n),localStorage.setItem("cart",JSON.stringify(a)),d()}})),s.addEventListener("click",(t=>{if(t.target.classList.contains("btn-primary")){const c=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],a=t.target.closest(".card").dataset.key,r=c.findIndex((e=>e.id===+a));c.splice(r,1),localStorage.setItem("cart",JSON.stringify(c)),e(c),n.textContent=c.reduce(((e,t)=>e+t.price),0),d()}})),r.addEventListener("click",(()=>{(e=>fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())))(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]).then((()=>{localStorage.removeItem("cart"),e([]),n.textContent=0,d()}))}))})(),t().then((e=>{c(e)})),document.querySelector(".search-wrapper_input").addEventListener("input",(e=>{const a=e.target.value;t().then((e=>{c(((e,t)=>e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))))(e,a))}))})),(()=>{const e=document.querySelector(".catalog-button > button"),a=document.querySelector(".catalog"),n=document.querySelectorAll(".catalog li");let r=!1;const o=()=>{r=!r,a.style.display=r?"block":""};e.addEventListener("click",o),n.forEach((e=>{e.addEventListener("click",(()=>{const a=e.textContent;t().then((e=>{var t;c((t=a,e.filter((e=>e.category===t))))})),o()}))}))})(),(()=>{const e=document.getElementById("min"),r=document.getElementById("max"),o=document.getElementById("discount-checkbox"),s=document.querySelector(".filter-check_checkmark");e.addEventListener("input",(()=>{t().then((t=>{c(a(n(t,o.checked),e.value,r.value))}))})),r.addEventListener("input",(()=>{t().then((t=>{c(a(n(t,o.checked),e.value,r.value))}))})),o.addEventListener("change",(()=>{o.checked?s.classList.add("checked"):s.classList.remove("checked"),t().then((t=>{c(a(n(t,o.checked),e.value,r.value))}))}))})()})();