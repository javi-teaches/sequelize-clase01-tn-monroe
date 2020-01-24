const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

/* Index de Películas. */
router.get('/', controller.index);

/* Detalle de Película. */
router.get('/detail/:id', controller.detail);

/* Pelicula por título. */
router.get('/find-by-title', controller.find);

module.exports = router;
