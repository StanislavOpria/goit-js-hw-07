import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemClasses = {
  div: "gallery__item",
  a: "gallery__link",
  img: "gallery__image",
};
let instanceShowImage = "";

const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="${itemClasses.div}">
    <a class="${itemClasses.a}" href="${original}">
    <img class="${itemClasses.img}" src="${preview}" data-source="${original}" alt="${description}"/></a>
    </div>`;
  })
  .join("");

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", (event) => {
  if (event.target.getAttribute("data-source")) {
    event.preventDefault();
    const originalImageLink = event.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="400" height="300" alt="${event.target.alt}">
`);
    instanceShowImage = instance;
    instance.show();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    instanceShowImage.close();
  }
});
