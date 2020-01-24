const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

module.exports = {
	index: (req, res) => {
		// sequelize
		// 	.query("SELECT * FROM movies")
		// 	.then(resultados => {
		// 		res.render('movies/index', { peliculas: resultados[0] });
		// 	})
		// 	.catch(error => console.log(error));
		db.Movies.findAll()
			.then(resultados => {
		 		res.render('movies/index', { peliculas: resultados });
		 	})
			.catch(error => console.log(error));
	},
	detail: (req, res) => {
		db.Movies.findByPk(req.params.id)
			.then(resultados => {
				res.render('movies/detail', { pelicula: resultados });
			})
			.catch(error => console.log(error));
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