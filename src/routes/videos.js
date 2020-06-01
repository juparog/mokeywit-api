const { Router } = require('express');

const videosController = require('../controllers/videosController');

const router = new Router();

router.get('/:maxResults?', (req, res) => videosController.getVideos(req, res));
router.get('/id/:videoId', (req, res) => videosController.getVideoById(req, res));

module.exports = router;
