const { Movie } = require('../../models');

const routes = {
    movieUpload: async (req, res) => {
        const { title, description, genre, release_year } = req.body;

        try {
            const movie = await Movie.create({
                title,
                description,
                genre,
                release_year,
            });
            res.send({
                message: `Upload complete`,
                result: movie,
            });
        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = routes;
