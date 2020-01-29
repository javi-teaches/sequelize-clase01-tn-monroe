const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

module.exports = {
	index: (req, res) => {
		db.Genres
			.findAll({
					include: ['movies'] // Acá va lo que se puso en 'as' de associate
			})
			.then(genres => {
				return res.render('genres/index', { genres });
			})
			.catch(error => console.log(error));
	},
}