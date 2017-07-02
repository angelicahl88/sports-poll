const mongoose = require('mongoose');

const gameData = require('../data/test-data.json');

const Schema = mongoose.Schema;


const GameSchema = new Schema({
   awayName:     String,
   createdAt:    String,
   group:        String,
   homeName:     String,
   id:           Number,
   name:         String,
   objectId:     String,
   sport:        String,
   country:      String,
   state:        String,
   outcomeVote:  {type: String, default: null}
});

const Game = mongoose.model('Game', GameSchema);

Game.remove({}, err => {
   if (err) console.log('Failed to Remove', err);

   Game.create(gameData, (err, games) => {
      if (err) console.log('Failed to Save', err);

      games.forEach(game => {
         console.log(game);
      });
   });
});


module.exports.Game = Game;
