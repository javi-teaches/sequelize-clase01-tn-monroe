const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

module.exports = {
	index: (req, res) => {
		db.Movies
			.findAll()
			.then(movies => {
				return res.render('movies/index', { movies });
		 	})
			.catch(error => console.log(error));
	},
	show: (req, res) => {
		db.Movies
			.findByPk(
				req.params.id,
				{
					include: ['genre', 'actors']
				}
			)
			.then(movie => {
				return res.render('movies/detail', { movie, title: movie.title  });
			})
			.catch(error => console.log(error));
	},
	create: (req, res) => {
		sequelize
			.query('SELECT * FROM genres')
			.then(genresInDB => {
				return res.render('movies/create', { genres: genresInDB[0] });
			})
			.catch(error => console.log(error))
	},
	store: (req, res) => {
		db.Movies.create(req.body);
		return res.redirect('/movies');
	},
	destroy: (req, res) => {
		db.Movies
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('/movies'));
	},
	edit: (req, res) => {
		db.Movies
			.findByPk(req.params.id)
			.then(movie => {
				// Antes de enviar al peli a al formulario, vamos a traer los géneros
				sequelize
					.query('SELECT * FROM genres')
					.then(genresInDB => {
						return res.render('movies/edit', { movie, genres: genresInDB[0] });
					})
			})
			.catch(error => console.log(error));
	},
	update: (req, res) => {
		db.Movies
			.update(
				req.body,
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then(() => res.redirect('/movies'));
	},
	find: (req, res) => {
		db.Movies.findAll({
			where: {
				title: { [Op.like]: `%${req.query.title}%` },
			}
		})
			.then(resultados => {
				if (resultados.length > 0) {
					return res.send(resultados);
				} else {
					return res.send('No hay resultados');
				}

			})
			.catch(error => console.log(error));
	}
}