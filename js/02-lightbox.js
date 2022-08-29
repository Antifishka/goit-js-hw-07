import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//создание и рендер разметки
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <li><a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
        </a></li>
        `;
        })
        .join('');
};

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

});
