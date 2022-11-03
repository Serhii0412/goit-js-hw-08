// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const newGallery = createElements(galleryItems);
gallery.innerHTML = newGallery;
gallery.addEventListener('click', clickOnImage);

function createElements() {
  return galleryItems
    .map(item => {
      return `<li class ="gallery__item">
              <a class="gallery__item" href=${item.original}>
                <img class="gallery__image" 
                  src=${item.preview} 
                  alt=${item.description} />
              </a>;
              </li>`;
    })
    .join('');
}

function clickOnImage(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionSelector: 'img',
  captionDelay: 250,
  captionPosition: 'bottom',
});
console.log(galleryItems);
