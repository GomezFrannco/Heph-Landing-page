// services objects
import { services } from "./data/services.js";

// DOM container
const serviceBox = document.querySelector("#service_list");

// services DOM render
for (let i = 0; i < services.length; i++) { // --> for loop in object array
  let node = document.createElement("div"); // --> creates an element
  node.classList.add("service_card"); // --> adds a class to the element
  node.innerHTML = `<div class="service">
    <div class="service_icon">
      <img src="${services[i].thumbnail}">
      <h3>${services[i].title}</h3>
    </div>
  </div>
  <div class="description">
    <p>${services[i].description}</p>
    <button>View more +</button>
  </div>`;
  serviceBox.appendChild(node); // --> set the objects in a DOM element
};
