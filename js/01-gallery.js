import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onOpen);

const markup = galleryItems.reduce((acc, { preview, original, description }) => 
  acc + `<div class='gallery__item'>
  <a class='gallery__link' href=''>
  <img
  class='gallery__image'
  src='${preview}'
  data-source='${original}'
  alt='${description}'
  />
  </a>
  </div>`, '')
  gallery.insertAdjacentHTML('beforeend', markup);

function onOpen(event) {
    event.preventDefault();
   const link = event.target.dataset.source;
    console.dir(link);
    const instance = basicLightbox.create(`
<img src="${link}" width="800" height="600">`)
.show();

// gallery.addEventListener('keydown', (event) => {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// })
}
