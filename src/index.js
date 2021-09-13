import x from './x.js';
import png from './assets/pkc.png';
console.log(x);
console.log("ha");

const div = document.getElementById("app");

div.innerHTML = `
  <img src="${png}" alt="皮卡丘" title="皮卡丘">
`;

const button = document.createElement("button");
button.innerText = 'lazy load';
button.onclick = ()=>{
    const promise = import("./lazy.js");
    promise.then((module)=>{
        const fn = module.default;
        fn();
    }, ()=>{});
}

div.appendChild(button);