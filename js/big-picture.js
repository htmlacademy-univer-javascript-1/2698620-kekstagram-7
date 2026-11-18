const COMMENTS_PER_PORTION = 5;

const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const captionElement = bigPictureElement.querySelector('.social__caption');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

let commentsShown = 0;
let comments = [];

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

const renderComments = () => {
  let commentsToRender = commentsShown + COMMENTS_PER_PORTION;

  if (commentsToRender >= comments.length) {
    commentsToRender = comments.length;
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = commentsShown; i < commentsToRender; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentsListElement.append(fragment);
  commentsShown = commentsToRender;

  commentCountElement.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const onCommentsLoaderClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

const renderPictureDetails = (photo) => {
  imageElement.src = photo.url;
  imageElement.alt = photo.description;
  likesCountElement.textContent = photo.likes;
  captionElement.textContent = photo.description;
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
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);

  comments = data.comments;
  commentsListElement.innerHTML = '';
  commentsShown = 0;
  renderComments();

  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
  commentsShown = 0;
}

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };
