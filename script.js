import { pi, circum, area, vol } from "./util.js";

console.log(pi);
console.log(area(2));
let div = document.querySelector(".contain");
div.innerHTML = `${area(2)} sqcm`;