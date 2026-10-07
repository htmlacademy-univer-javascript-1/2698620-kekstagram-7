const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Анна',
  'Алексей',
  'Виктория',
  'Дмитрий',
  'Ольга'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мой лучший день',
  'Отличный вид',
  'Наконец-то отдых!',
  'Зацените фотку',
  'Просто оставлю это здесь'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let commentIdCounter = 1;

const generateCommentId = () => {
  const currentId = commentIdCounter;
  commentIdCounter += 1;
  return currentId;
};

const createMessage = () => {
  const sentenceCount = getRandomInteger(1, 2);
  let message = getRandomArrayElement(MESSAGES);

  if (sentenceCount === 2) {
    message += ` ${getRandomArrayElement(MESSAGES)}`;
  }

  return message;
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = (index) => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: comments
  };
};

const generatePhotos = () => {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

generatePhotos();
