const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

/* Index de Películas. */
router.get('/', controller.index);

/* Detalle de Película. */
router.get('/detail/:id', controller.show);

/* Creación de una película */
router.get('/create', controller.create);
router.post('/create', controller.store);

/* Edición de una película */
router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.update);

/* Eliminación de una película */ 
router.delete('/delete/:id', controller.destroy);

/* Pelicula por título. */
router.get('/find-by-title', controller.find);

module.exports = router;
