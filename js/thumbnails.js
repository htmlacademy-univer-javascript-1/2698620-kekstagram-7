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

    picturesFragment.append(pictureElement);
  });

  picturesContainer.append(picturesFragment);
};

export { renderThumbnails };
