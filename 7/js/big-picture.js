const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const captionElement = bigPictureElement.querySelector('.social__caption');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

const createComment = (commentData) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = commentData.avatar;
  avatar.alt = commentData.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = commentData.message;

  comment.append(avatar);
  comment.append(text);

  return comment;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = '';
  const fragment = document.createDocumentFragment();

  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });

  commentsListElement.append(fragment);
};

const renderPictureDetails = ({ url, likes, description }) => {
  imageElement.src = url;
  imageElement.alt = description;
  likesCountElement.textContent = likes;
  captionElement.textContent = description;
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  commentsCountElement.textContent = data.comments.length;
  renderComments(data.comments);
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };
