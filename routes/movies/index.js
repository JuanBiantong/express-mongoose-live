const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getMovieByName,
    movieUpload,
    movieUpdate,
    movieDelete,
} = require('./controller');


router.get('/allmovies', getAllMovies);
router.get('/:title', getMovieByName)
router.post('/upload', movieUpload);
router.put('/:id', movieUpdate);
router.delete('/:id', movieDelete);

module.exports = router;
