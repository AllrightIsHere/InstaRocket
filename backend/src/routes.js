const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostControler');
const LikeController = require('./controllers/LikeControler');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get ('/posts', PostController.index);
routes.post('/posts', upload.single('image'),PostController.store);

routes.post('/posts/:id/like', LikeController.store);
module.exports = routes;