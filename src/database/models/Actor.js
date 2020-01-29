module.exports = (sequelize, dataTypes) => {
	const Actor = sequelize.define('Actors', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		first_name: {
			type: dataTypes.STRING
		},
		last_name: {
			type: dataTypes.STRING
		},
	}, {
		timestamps: false // createAt / updateAt
	});

	// Relaciones 
	Actor.associate = function (models) {
		// un actor PERTENECE a muchas películas
		Actor.belongsToMany(models.Movies, {
			as: 'movies',
			through: 'actor_movie', 
			foreignKey: 'actor_id',
			otherKey: 'movie_id',
			timestamps: false
		});
	}

	return Actor;
};
