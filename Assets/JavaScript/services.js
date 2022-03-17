import { services } from "./data/services.js";

const serviceBox = document.querySelector("#service_list")


for (let i = 0; i < services.length; i++) {
  let node = document.createElement('div')
  node.classList.add('service_card')
  node.innerHTML = `
  <div class="service">
    <div class="service_icon">
      <img src="${services[i].thumbnail}">
      <h3>${services[i].title}</h3>
    </div>
  </div>
  <div class="description">
    <p>${services[i].description}</p>
    <button>View more +</button>
  </div>  
  `
  serviceBox.appendChild(node)
}

