module.exports = (sequelize, dataTypes) => {
	const Movie = sequelize.define('Movies', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		title: {
			type: dataTypes.STRING
		},
		rating: {
			type: dataTypes.DECIMAL
		},
		awards: {
			type: dataTypes.INTEGER
		},
		release_date: {
			type: dataTypes.DATE
		},
		length: {
			type: dataTypes.INTEGER
		},
		genre_id: {
			type: dataTypes.INTEGER
		},
	}, {
		// tableName: 'PELICULAS'
		timestamps: false
	});

	// Relaciones
	Movie.associate = function (models) {
		// una película PERTENECE a un género
		Movie.belongsTo(models.Genres, {
			as: 'genre',
			foreignKey: 'genre_id',
		});
		// una película PERTENECE a muchos actores
		Movie.belongsToMany(models.Actors, {
			as: 'actors',
			through: 'actor_movie',
			foreignKey: 'movie_id',
			otherKey: 'actor_id',
			timestamps: false
		});
	}
	
	return Movie;
};
