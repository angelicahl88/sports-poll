const express = require('express');
const router = express.Router();

const Game = require('../models/models').Game;


// CORS handling
router.get('/*', (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   next();
});

// Game parameter handler
router.param('id', (req, res, next, id) => {
  Game.find({ id: id }, function(err, doc) {
    if(err) return next(err);
    if(!doc) {
      err = new Error('There is no event with this ID');
      err.status = 404;
      return next(err);
    }
    req.game = doc;
    return next();
  });
});

//GET /games/:id
// Retrieves a specific game
router.get('/', (req, res, next) => {
  Game.find({}, (err, games) => {
    if(err) return next(err);
    if(!games) {
      err = new Error('There is no game with this ID');
      err.status = 404;
      return next(err);
    }
    res.json(games);
  });
});


//POST /games/:id/vote-home
//POST /games/:id/vote-draw
//POST /games/:id/vote-away
//Vote on an outcome of a specific game
router.post('/:id/vote-:outcome', (req, res, next) => {
  if(req.params.outcome.search(/^(home|draw|away)$/) === -1) {
    const err = new Error('The vote is not a valid outcome');
    err.status = 404;
    next(err);
  } else {
    next();
  }
}, (req, res, next) => {

   req.game[0].update({ outcomeVote: req.params.outcome }, (err, game) => {
      if (err) return next(err);
      res.json(game);
   });
});





module.exports = router;
