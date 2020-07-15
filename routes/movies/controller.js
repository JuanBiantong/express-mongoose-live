const { Movie } = require('../../models');

const routes = {

    getAllMovies: async (req, res) => {
        try {
            const result = await Movie.find();
            res.send({
                message: `All Movies`,
                result,
            });
        } catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    getMovieByName: async (req, res) => {
        const {
            title
        } = req.params
        try {
            const result = await Movie.find({
                title: {
                    $regex: title,
                    $options: 'i'
                }
            })
            res.send({
                message: `Filter by title ${title}`,
                result
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    movieUpload: async (req, res) => {
        const { title, description, genre, release_year } = req.body;
        try {
            const result = await Movie.create({
                title,
                description,
                genre,
                release_year,
            });
            res.send({
                message: `Upload complete`,
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    movieUpdate: async (req, res) => {
        const {id} = req.params
        const {title, description, genre, release_year} = req.body
        try {
            const result = await Movie.findByIdAndUpdate(id,{
                ...req.body
            })
            res.send({
                message:'Update success',
                result,
            })
        } catch (error) {
            res.send(error);
        }
    },
    movieDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Movie.findByIdAndDelete(id,{
                ...req.body
            });

            res.send({
                message: `Delete success`,
                result,
            });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
};

module.exports = routes;
