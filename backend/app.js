const express = require('express');
const jsonParser = require('body-parser').json;
const morgan = require('morgan');

const router = require('./routes/router');

const app = express();


app.use(morgan('dev'));
app.use(jsonParser());

require('./models/database');

app.use('/', express.static('public'));
app.use('/games', router);


app.use((req, res, next) => {
   const err = new Error('The page you are looking for was not found');
   err.status = 404;
   next(err);
});

app.use((err, req, res, next) => {
   res.status(err.status || 500);
   res.json({
      error: {
         message: err.message
      }
   });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on port ${port}`));
