const { parse } = require('dotenv');
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*GET movies page */

router.get('/movies', (req,res, next) => {
    Movie.find({})
    .then((allMovies => 
        res.render('movies' , {movies: allMovies})
        ))
        .catch(err =>console.log(err))

    
});

router.get('/movie/:id', (req,res, next) => {
    Movie.findById(req.params.id)
    .then( movie => 
        res.render('movie', {movie : movie})
    )
    .catch(err => console.log(err))
})

module.exports = router;
