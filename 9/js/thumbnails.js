import { openBigPicture } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const picturesFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const imageElement = pictureElement.querySelector('.picture__img');

    imageElement.src = url;
    imageElement.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture({ url, description, likes, comments });
    });

    picturesFragment.append(pictureElement);
  });

  picturesContainer.append(picturesFragment);
};

export { renderThumbnails };
