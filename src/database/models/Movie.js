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
		genre_id: {
			type: dataTypes.INTEGER
		},
	}, {
		// tableName: 'PELICULAS'
		timestamps: false
	});
	
	return Movie;
};
