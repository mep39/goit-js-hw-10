const e={headers:{"x-api-key":"live_V8EsmExld6Okd0OBf9udUFyWl6QlLsJfvhJC0xkT660gyUXaFgqE0hV0EpcgEXTt"}};const s=document.querySelector(".breed-select"),t=document.querySelector(".loader"),i=document.querySelector(".error"),n=document.querySelector(".cat-info");function d(e){const{description:s,name:t,temperament:i}=e[0].breeds[0],d=`<img scr="${e[0].url}" alt="${t}" width="300"/>\n    <div class="wrap"><h1>${t}</h1><p>${s}</p><p><b>Temperament: </b>${i}</p></div>`;n.innerHTML=d}s.addEventListener("change",(function(s){n.innerHTML="",t.classList.remove("is-hidden"),(a=s.target.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${a}`,e).then((e=>e.json()))).then(d).catch((()=>i.classList.remove("is-hidden"))).finally((()=>t.classList.add("is-hidden")));var a})),s.classList.add("is-hidden"),i.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_V8EsmExld6Okd0OBf9udUFyWl6QlLsJfvhJC0xkT660gyUXaFgqE0hV0EpcgEXTt",e).then((e=>e.json())).then((e=>{!function(e){const t=e.map((({id:e,name:s})=>`<option value="${e}">${s}</option>`)).join("");s.innerHTML=t}(e),s.classList.remove("is-hidden")})).catch((()=>i.classList.remove("is-hidden"))).finally((()=>t.classList.add("is-hidden")));
//# sourceMappingURL=index.96144d42.js.map
