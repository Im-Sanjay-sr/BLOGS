const express = require('express');
const route = express.Router();
const blogController = require('../controller/controller');

route.post('/addpost',blogController.add);
route.get('/getallposts',blogController.getAll);

module.exports = route