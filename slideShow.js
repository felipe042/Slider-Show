"use strict";

const images = [
    { id: "1", url: "./img/bike-3073082_1280.jpg" },
    { id: "2", url: "./img/biker-2572590_1280.jpg" },
    { id: "3", url: "./img/bmw-1313343_1280.jpg" },
    { id: "4", url: "./img/ducati-407111_1280.jpg" },
    { id: "5", url: "./img/moto-bike-3868626_1280.jpg" },
    { id: "6", url: "./img/motorbike-3051288_1280.png" },
    { id: "7", url: "./img/motorcycle-1283299_1280.jpg" },
    { id: "8", url: "./img/motorcycle-2077914_1280.jpg" },
    { id: "9", url: "./img/motorcycle-2186589_1280.jpg" },
    { id: "10", url: "./img/motorcycle-4044961_1280.jpg" },
];

const containerItems = document.querySelector("#container-items");

function loadImages(images, container) {
    images.forEach((image) => {
        container.innerHTML += `
        <div class="item">
          <img src= "${image.url}"
          </div>
        `;
    });
}

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
};

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
