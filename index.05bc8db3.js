const e=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds?api_key=live_V8EsmExld6Okd0OBf9udUFyWl6QlLsJfvhJC0xkT660gyUXaFgqE0hV0EpcgEXTt").then((e=>e.json())).then((t=>function(t){const n=t.map((({id:e,name:t})=>'<option value="${id}">${name}</option>')).join("");e.innerHTML=n}(t)));
//# sourceMappingURL=index.05bc8db3.js.map
