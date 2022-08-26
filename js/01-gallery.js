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
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>
        `;
        })
        .join('');
};

//делегирование
galleryContainer.addEventListener('click', onImgOpenClick);

let modal = null;

//открытие модального окна
function onImgOpenClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains('gallery__link')) {
        return;
    };

    console.log(evt.target);
    
    const imgUrl = evt.target.dataset.source;

    modal = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">`);
    
    modal.show();

    //прослушивание клавиатуры есть пока отркыто модальное окно
    window.addEventListener('keydown', onEscKeyPress);
};

//закрытие модального окна клавишей ESC
function onEscKeyPress(evt) {
    console.log(evt);
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {
        modal.close();  
        window.removeEventListener('keydown', onEscKeyPress);
    }
}


