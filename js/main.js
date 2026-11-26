import { generatePhotos } from './data.js';
import { renderThumbnails } from './thumbnails.js';
import { initUploadForm } from './form.js';

const photos = generatePhotos();
renderThumbnails(photos);
initUploadForm();
