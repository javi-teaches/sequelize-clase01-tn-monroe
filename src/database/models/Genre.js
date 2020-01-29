module.exports = (sequelize, dataTypes) => {
	const Genre = sequelize.define('Genres', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING
		},
		ranking: {
			type: dataTypes.INTEGER
		},
		active: {
			type: dataTypes.INTEGER
		},
	}, {
		timestamps: false // createAt / updateAt
	});

	// Relaciones 
	Genre.associate = function (models) {
		// un género TIENE MUCHAS películas
		Genre.hasMany(models.Movies, {
			as: 'movies',
			foreignKey: 'genre_id',
		});
	}

	return Genre;
};
