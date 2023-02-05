import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const itemClasses = {
  a: "gallery__item",
  img: "gallery__image",
};

const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `
    <a class="${itemClasses.a}" href="${original}">
    <img class="${itemClasses.img}" src="${preview}" alt="${description}"/></a>
    `;
  })
  .join("");

gallery.innerHTML = galleryMarkup;

let galleryLibrery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
